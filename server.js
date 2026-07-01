/* ==========================================================================
   Pasar Kraftangan Sabah - Express Backend API Server
   ========================================================================== */

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Hidupkan servis fail statik (frontend)

// Google OAuth Client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Konfigurasi MySQL Connection Pool
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'pasar_kraftangan_sabah',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

let pool;
try {
    pool = mysql.createPool(dbConfig);
    console.log('Sambungan MySQL Pool berjaya ditubuhkan.');
} catch (error) {
    console.error('Gagal menyambung ke MySQL:', error.message);
}

// --------------------------------------------------------------------------
// 1. API Endpoint: Mengambil Senarai Produk Dinamik dari MySQL
// --------------------------------------------------------------------------
app.get('/api/products', async (req, res) => {
    try {
        // Ambil maklumat asas produk
        const [products] = await pool.query('SELECT * FROM products');
        
        // Ambil spesifikasi dan ulasan bagi setiap produk secara selari (nested)
        for (let product of products) {
            // Ambil spesifikasi
            const [specs] = await pool.query(
                'SELECT spec_key, spec_val FROM product_specs WHERE product_id = ?', 
                [product.id]
            );
            product.specs = {};
            specs.forEach(s => {
                product.specs[s.spec_key] = s.spec_val;
            });

            // Ambil ulasan
            const [reviews] = await pool.query(
                'SELECT reviewer_name AS user, rating, review_text AS text FROM product_reviews WHERE product_id = ?', 
                [product.id]
            );
            product.reviews = reviews;
        }

        res.json(products);
    } catch (error) {
        console.error('Ralat mengekstrak produk:', error.message);
        res.status(500).json({ error: 'Ralat pelayan dalaman semasa memuatkan produk.' });
    }
});

// --------------------------------------------------------------------------
// 2. API Endpoint: Autentikasi Token Google Login & Simpan Pengguna ke MySQL
// --------------------------------------------------------------------------
app.post('/api/auth/google', async (req, res) => {
    const { credential, role } = req.body;

    if (!credential) {
        return res.status(400).json({ error: 'Token Google (credential) diperlukan.' });
    }

    try {
        // Sahkan token Google JWT
        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        
        const payload = ticket.getPayload();
        const googleId = payload['sub'];
        const name = payload['name'];
        const email = payload['email'];
        const picture = payload['picture'];

        // Semak sama ada pengguna sudah berdaftar di MySQL
        const [users] = await pool.query('SELECT * FROM users WHERE google_id = ?', [googleId]);
        
        let dbUserId;
        let dbUserRole = role || 'pembeli';

        if (users.length > 0) {
            // Pengguna Wujud: Kemas kini nama, gambar, dan peranan jika bertukar
            dbUserId = users[0].id;
            // Jika role ditukar semasa login, kemas kini role dalam DB
            if (role) {
                dbUserRole = role;
            } else {
                dbUserRole = users[0].role;
            }
            await pool.query(
                'UPDATE users SET name = ?, picture = ?, role = ? WHERE id = ?', 
                [name, picture, dbUserRole, dbUserId]
            );
        } else {
            // Pengguna Baru: Masukkan ke dalam jadual `users` MySQL
            const [result] = await pool.query(
                'INSERT INTO users (google_id, name, email, picture, role) VALUES (?, ?, ?, ?, ?)',
                [googleId, name, email, picture, dbUserRole]
            );
            dbUserId = result.insertId;
        }

        // Kembalikan maklumat profil beserta ID pangkalan data tempatan dan peranannya
        res.json({
            id: dbUserId,
            googleId,
            name,
            email,
            picture,
            role: dbUserRole
        });

    } catch (error) {
        console.error('Gagal mengesahkan token Google:', error.message);
        res.status(401).json({ error: 'Token Google tidak sah atau telah tamat tempoh.' });
    }
});

// --------------------------------------------------------------------------
// 2b. API Endpoint: Mengambil Senarai Pesanan (Bagi Penjual & Admin)
// --------------------------------------------------------------------------
app.get('/api/orders', async (req, res) => {
    try {
        const [orders] = await pool.query('SELECT * FROM orders ORDER BY order_date DESC');
        res.json(orders);
    } catch (error) {
        console.error('Gagal mengambil senarai pesanan:', error.message);
        res.status(500).json({ error: 'Ralat pangkalan data semasa memuatkan pesanan.' });
    }
});

// --------------------------------------------------------------------------
// 2c. API Endpoint: Mengambil Senarai Pengguna (Bagi Admin sahaja)
// --------------------------------------------------------------------------
app.get('/api/users', async (req, res) => {
    try {
        const [users] = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
        res.json(users);
    } catch (error) {
        console.error('Gagal mengambil senarai pengguna:', error.message);
        res.status(500).json({ error: 'Ralat pangkalan data semasa memuatkan pengguna.' });
    }
});

// --------------------------------------------------------------------------
// 2d. API Endpoint: Memadam Pengguna (Bagi Admin sahaja)
// --------------------------------------------------------------------------
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ success: true, message: 'Pengguna berjaya dipadam.' });
    } catch (error) {
        console.error('Gagal memadam pengguna:', error.message);
        res.status(500).json({ error: 'Ralat pangkalan data semasa memadam pengguna.' });
    }
});

// --------------------------------------------------------------------------
// 2e. API Endpoint: Tambah Produk Baru (Bagi Penjual & Admin)
// --------------------------------------------------------------------------
app.post('/api/products', async (req, res) => {
    const { id, name, category, price, description, specs } = req.body;

    if (!id || !name || !category || !price) {
        return res.status(400).json({ error: 'Medan id, name, category, dan price adalah wajib.' });
    }

    try {
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        try {
            // Masukkan produk ke dalam jadual `products`
            await connection.query(
                'INSERT INTO products (id, name, category, price, description) VALUES (?, ?, ?, ?, ?)',
                [id, name, category, price, description || '']
            );

            // Masukkan spesifikasi produk jika ada
            if (specs) {
                for (let [key, val] of Object.entries(specs)) {
                    if (val) {
                        await connection.query(
                            'INSERT INTO product_specs (product_id, spec_key, spec_val) VALUES (?, ?, ?)',
                            [id, key, val]
                        );
                    }
                }
            }

            await connection.commit();
            res.status(201).json({ success: true, message: 'Produk berjaya ditambah.' });

        } catch (err) {
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }

    } catch (error) {
        console.error('Gagal menambah produk baru:', error.message);
        res.status(500).json({ error: 'Ralat pangkalan data semasa menyimpan produk.' });
    }
});

// --------------------------------------------------------------------------
// 3. API Endpoint: Simpan Tempahan Pesanan Baru ke MySQL
// --------------------------------------------------------------------------
app.post('/api/orders', async (req, res) => {
    const { userId, customerName, shippingAddress, specialNotes, totalPrice, items } = req.body;

    if (!customerName || !shippingAddress || !items || items.length === 0) {
        return res.status(400).json({ error: 'Butiran pesanan tidak lengkap.' });
    }

    try {
        // Mulakan transaksi MySQL
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        try {
            // 1. Masukkan data ke jadual `orders`
            const [orderResult] = await connection.query(
                'INSERT INTO orders (user_id, customer_name, shipping_address, special_notes, total_price) VALUES (?, ?, ?, ?, ?)',
                [userId || null, customerName, shippingAddress, specialNotes || '', totalPrice]
            );
            const orderId = orderResult.insertId;

            // 2. Masukkan setiap barangan ke jadual `order_items`
            for (let item of items) {
                const subtotal = item.price * item.qty;
                await connection.query(
                    'INSERT INTO order_items (order_id, product_id, size, pearl_type, quantity, subtotal) VALUES (?, ?, ?, ?, ?, ?)',
                    [orderId, item.id, item.size, item.pearlType, item.qty, subtotal]
                );
            }

            // Komit transaksi
            await connection.commit();
            res.status(201).json({ success: true, orderId });

        } catch (err) {
            // Rollback jika terdapat ralat
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }

    } catch (error) {
        console.error('Gagal menyimpan pesanan:', error.message);
        res.status(500).json({ error: 'Ralat pangkalan data semasa memproses pesanan.' });
    }
});

// Jalankan Pelayan
app.listen(PORT, () => {
    console.log(`Pelayan Express berjalan di port http://localhost:${PORT}`);
});
