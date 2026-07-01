/* ==========================================================================
   Pasar Kraftangan Sabah - Application Logic
   ========================================================================== */

// 1. Database Produk (Gelang, Rantai, Cincin)
let products = [
    {
        id: "gelang-01",
        name: "Gelang Mutiara Emas Borneo",
        category: "gelang",
        price: 120.00,
        image: "assets/gelang.png",
        rating: 5,
        desc: "Gelang mutiara eksklusif buatan tangan artisan Kota Kinabalu. Menggunakan gabungan mutiara air tawar putih Sabah yang berkilau tinggi dengan manik bersalut emas 24k untuk kelihatan mewah dan anggun.",
        specs: {
            "Bahan": "Mutiara Air Tawar Asli & Manik Emas 24k (Plated)",
            "Saiz Mutiara": "8.0 mm - 8.5 mm",
            "Jenis Dianyam": "Tali Elastik Nylon Gred Tinggi",
            "Sesuai Untuk": "Majlis Rasmi & Hiasan Harian",
            "Asal Artisan": "Kota Kinabalu, Sabah"
        },
        reviews: [
            { user: "Fatimah H.", rating: 5, text: "Sangat berpuas hati! Mutiara putih bersih dan berkilat. Penghantaran cepat." },
            { user: "Brandon L.", rating: 5, text: "Bought this for my mother, she absolutely loves the gold accents!" },
            { user: "Siti Aminah", rating: 4, text: "Gelang sangat cantik tapi agak longgar sikit dekat tangan saya yang kecil." }
        ]
    },
    {
        id: "gelang-02",
        name: "Gelang Manik Pinakol Sabah",
        category: "gelang",
        price: 45.00,
        image: "assets/gelang.png",
        rating: 5,
        desc: "Reka bentuk gelang tradisional bermotifkan corak etnik suku kaum Rungus di Sabah. Dianyam rapi menggunakan manik kaca berkualiti tinggi yang sangat tahan lasak.",
        specs: {
            "Bahan": "Manik Kaca Gred A (Rimport)",
            "Ukuran Lebar": "2.5 cm (Corak Lebar)",
            "Motif Etnik": "Pinakol Rungus Tradisional",
            "Ketahanan": "Sangat Lasak & Kalis Air",
            "Asal Artisan": "Kudat, Sabah"
        },
        reviews: [
            { user: "Devesh S.", rating: 5, text: "Very authentic. The beads are tightly woven together." },
            { user: "Salmah Kassim", rating: 5, text: "Teringat kampung halaman di Kudat. Design manik yang sangat tulen." }
        ]
    },
    {
        id: "gelang-03",
        name: "Gelang Mutiara Baroque Peacock",
        category: "gelang",
        price: 160.00,
        image: "assets/gelang.png",
        rating: 4,
        desc: "Gelang mutiara asli yang mempunyai bentuk unik Baroque dan kilauan warna gelap kebiruan (peacock) yang langka. Menawarkan gaya berani dan kontemporari.",
        specs: {
            "Bahan": "Mutiara Air Tawar Baroque Gred AA+",
            "Saiz Mutiara": "9.0 mm - 10.0 mm",
            "Bentuk": "Baroque (Unik & Semulajadi)",
            "Warna Kilauan": "Peacock Green & Dark Blue",
            "Asal Artisan": "Semporna, Sabah"
        },
        reviews: [
            { user: "Sherry A.", rating: 4, text: "Mutiara bentuk baroque sangat eksklusif. Setiap biji tidak sama bentuk! Sangat berseni." }
        ]
    },
    {
        id: "rantai-01",
        name: "Rantai Mutiara Kasih Klasik",
        category: "rantai",
        price: 250.00,
        image: "assets/rantai.png",
        rating: 5,
        desc: "Rantai leher mutiara air tawar asli Sabah berukuran 45cm. Setiap butir mutiara dipilih dengan teliti untuk memastikan keseragaman saiz dan kilauan yang tinggi. Dilengkapi cangkuk emas 916.",
        specs: {
            "Bahan": "Mutiara Air Tawar Asli Gred AAA",
            "Panjang Rantai": "45 cm (Standard Leher)",
            "Keseragaman": "95% Bulat Sempurna",
            "Jenis Cangkuk": "Emas 916 (Bersijil)",
            "Asal Mutiara": "Pulau Selakan, Sabah"
        },
        reviews: [
            { user: "Mariam J.", rating: 5, text: "Cangkuk emas betul dan mutiaranya bulat sekata. Memang berbaloi dengan harganya." },
            { user: "Hajah Rosnah", rating: 5, text: "Kilauan mutiara sangat menyerlah. Dipakai semasa majlis kahwin anak saya." }
        ]
    },
    {
        id: "rantai-02",
        name: "Rantai Choker Manik Kadazan",
        category: "rantai",
        price: 75.00,
        image: "assets/rantai.png",
        rating: 4,
        desc: "Rantai leher jenis choker yang diilhamkan daripada manik hiasan pakaian tradisi suku kaum Kadazan-Dusun. Sesuai digayakan untuk acara keramaian atau kasual.",
        specs: {
            "Bahan": "Manik Halus & Benang Kait Gred Premium",
            "Gaya Rekaan": "Choker Tradisi Borneo",
            "Lebar": "1.8 cm",
            "Cangkuk": "Lobster Claw (Logam Anti-Karat)",
            "Asal Artisan": "Penampang, Sabah"
        },
        reviews: [
            { user: "Grace T.", rating: 4, text: "Cantik dipakai dengan baju moden. Sangat ranggi dan menonjolkan identiti Borneo." }
        ]
    },
    {
        id: "rantai-03",
        name: "Rantai Labuh Mutiara Gradasi",
        category: "rantai",
        price: 290.00,
        image: "assets/rantai.png",
        rating: 5,
        desc: "Rantai mutiara yang diatur indah secara bergradasi daripada saiz kecil di bahagian belakang sehingga mutiara bersaiz besar (10mm) di bahagian tengah hadapan. Menyerlahkan keanggunan wanita.",
        specs: {
            "Bahan": "Mutiara Air Tawar Asli Gred AA",
            "Panjang Rantai": "65 cm (Labuh Bawah Dada)",
            "Saiz Gradasi": "5.0 mm (Hujung) hingga 10.5 mm (Tengah)",
            "Cangkuk": "Perak 925 Bersalut Emas",
            "Asal Mutiara": "Sandakan, Sabah"
        },
        reviews: [
            { user: "Dayangku N.", rating: 5, text: "Labuh dan elegan. Sesuai pakai untuk makan malam atau digabungkan dengan kebaya." }
        ]
    },
    {
        id: "cincin-01",
        name: "Cincin Perak Mutiara South Sea",
        category: "cincin",
        price: 350.00,
        image: "assets/cincin.png",
        rating: 5,
        desc: "Cincin perak sterling 925 eksklusif buatan tangan tempatan dengan mahkota mutiara air masin South Sea (Mutiara Laut Sabah) bersaiz 11mm. Kilauan tinggi yang bertaraf premium.",
        specs: {
            "Bahan": "Perak Sterling 925 Tulen & Mutiara Air Masin",
            "Saiz Mutiara": "11.0 mm (Besar & Mewah)",
            "Jenis Mutiara": "Mutiara Air Masin (South Sea Pearl)",
            "Saduran Cincin": "Rhodium (Anti-Kusam / Anti-Alergi)",
            "Asal Mutiara": "Laut Semporna, Sabah"
        },
        reviews: [
            { user: "Zulkhairi M.", rating: 5, text: "Mutiara air masin memang lain kilauannya! Sangat premium, mahkota cincin juga kukuh." },
            { user: "Anita R.", rating: 5, text: "Cincin perak yang sangat berkualiti. Rekaan klasik yang tak lapuk dek zaman." }
        ]
    },
    {
        id: "cincin-02",
        name: "Cincin Mutiara Solitaire Minimalis",
        category: "cincin",
        price: 95.00,
        image: "assets/cincin.png",
        rating: 4,
        desc: "Sesuai untuk pemakaian harian. Cincin perak nipis yang dihiasi sebiji mutiara air tawar bulat putih asli bersaiz 6mm yang ringkas namun menawan.",
        specs: {
            "Bahan": "Perak Sterling 925",
            "Saiz Mutiara": "6.0 mm (Sederhana)",
            "Gaya Rekaan": "Solitaire (Minimalis)",
            "Kesesuaian": "Selesa untuk Dipakai Harian",
            "Asal Artisan": "Kota Kinabalu, Sabah"
        },
        reviews: [
            { user: "Chloe Y.", rating: 5, text: "Simple and elegant. I wear it everyday and the pearl still shines nicely!" }
        ]
    },
    {
        id: "cincin-03",
        name: "Cincin Ukiran Etnik Mutiara Pink",
        category: "cincin",
        price: 140.00,
        image: "assets/cincin.png",
        rating: 5,
        desc: "Cincin perak tebal dengan seni ukiran filigree tradisional suku Borneo, bertatahkan mutiara asli berwarna pink merah jambu semula jadi.",
        specs: {
            "Bahan": "Perak Sterling 925 Tulen Ukir",
            "Saiz Mutiara": "8.5 mm",
            "Warna Mutiara": "Pink / Lavender Semulajadi",
            "Jenis Ukiran": "Filigree Borneo Tradisional",
            "Asal Artisan": "Kota Kinabalu, Sabah"
        },
        reviews: [
            { user: "Zaleha K.", rating: 5, text: "Mutiara pink semula jadi sangat manis warnanya. Ukiran perak sangat halus." }
        ]
    }
];

// 2. State Pengurusan Aplikasi
let cart = JSON.parse(localStorage.getItem('pasar_kraftangan_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'default';
let currentProductInModal = null;
let currentModalQty = 1;

// Seed local fallback users and orders if they don't exist in localStorage
let fallbackUsers = JSON.parse(localStorage.getItem('pasar_kraftangan_fallback_users')) || [
    { id: 1, name: "Siti Aminah", email: "siti.aminah@gmail.com", role: "pembeli", created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 2, name: "Brandon L.", email: "brandon.l@yahoo.com", role: "pembeli", created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 3, name: "Artisan Sabah Gerai 12", email: "artisan.gerai12@kraftangan.my", role: "penjual", created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 4, name: "Super Admin", email: "admin@kraftangansabah.com", role: "admin", created_at: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString() }
];

let fallbackOrders = JSON.parse(localStorage.getItem('pasar_kraftangan_fallback_orders')) || [
    {
        id: 1001,
        user_id: 1,
        customer_name: "Siti Aminah",
        shipping_address: "Putatan, Kota Kinabalu, Sabah",
        special_notes: "Sila bungkus elok-elok",
        total_price: 165.00,
        order_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 1002,
        user_id: 2,
        customer_name: "Brandon L.",
        shipping_address: "Luyang, Kota Kinabalu, Sabah",
        special_notes: "",
        total_price: 120.00,
        order_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    }
];

if (!localStorage.getItem('pasar_kraftangan_fallback_users')) {
    localStorage.setItem('pasar_kraftangan_fallback_users', JSON.stringify(fallbackUsers));
}
if (!localStorage.getItem('pasar_kraftangan_fallback_orders')) {
    localStorage.setItem('pasar_kraftangan_fallback_orders', JSON.stringify(fallbackOrders));
}

// Nombor WhatsApp Penjual (Contoh: +60 12-345 6789)
const WHATSAPP_NUMBER = "60123456789"; 
const BACKEND_URL = "http://localhost:5000"; 

// Dom Elements
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartFooter = document.getElementById('cart-footer');
const cartTotalQty = document.getElementById('cart-total-qty');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartBadge = document.getElementById('cart-badge');
const checkoutForm = document.getElementById('checkout-form');
const startShoppingBtn = document.getElementById('start-shopping-btn');

const productModal = document.getElementById('product-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductBadge = document.getElementById('modal-product-badge');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalSizeSelect = document.getElementById('modal-size-select');
const modalPearlSelect = document.getElementById('modal-pearl-select');
const sizeOptionGroup = document.getElementById('size-option-group');
const pearlOptionGroup = document.getElementById('pearl-option-group');
const qtyMinusBtn = document.getElementById('qty-minus-btn');
const qtyPlusBtn = document.getElementById('qty-plus-btn');
const modalQtyInput = document.getElementById('modal-qty-input');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const modalBookingForm = document.getElementById('modal-booking-form');

const userProfileContainer = document.getElementById('user-profile-container');
const toastContainer = document.getElementById('toast-container');
const accordionItems = document.querySelectorAll('.accordion-item');

// DOM Elements for Modal Tabs
const modalProductSpecs = document.getElementById('modal-product-specs');
const modalProductReviews = document.getElementById('modal-product-reviews');
const tabButtons = document.querySelectorAll('.modal-tabs .tab-btn');
const tabPanels = document.querySelectorAll('.tab-content .tab-panel');

// 3. Pemuatan Permulaan (Initialization)
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartUI();
    initTheme();
    initGoogleSignIn();
    setupEventListeners();
});

// 4. Pengurusan Tema (Dark/Light)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
        showToast('Mod Gelap diaktifkan', 'info');
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
        showToast('Mod Cerah diaktifkan', 'info');
    }
    // Re-render Google Sign-in button to match active theme
    renderUserAuthUI();
}

// 4b. Pengurusan Log Masuk Google (Google Sign-In) & Peranan Pengguna
let currentUser = JSON.parse(localStorage.getItem('pasar_kraftangan_user')) || null;
let selectedRole = 'pembeli';

const loginWall = document.getElementById('login-wall');
const sellerDashboard = document.getElementById('seller-dashboard');
const adminPanel = document.getElementById('admin-panel');

function initGoogleSignIn() {
    const isLocal = window.location.protocol === 'file:' || 
                    window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';

    // 1. Semak jika SDK Google sedia ada. Jika belum, tunggu 100ms dan cuba lagi.
    if (typeof google === 'undefined' || !google.accounts) {
        console.warn("Google SDK belum siap. Menunggu...");
        setTimeout(initGoogleSignIn, 100);
        
        // Paparkan butang ujian tempatan (bypass) jika dibuka secara tempatan
        if (isLocal) {
            showMockLoginBypass();
        }
        return;
    }

    // Paparkan butang ujian tempatan jika dibuka secara tempatan
    if (isLocal) {
        showMockLoginBypass();
    }

    try {
        // Inisialisasi Google Identity Services
        google.accounts.id.initialize({
            client_id: "729104085819-kcraft99example.apps.googleusercontent.com", // Client ID Demo untuk Tempatan
            callback: handleCredentialResponse,
            auto_select: false
        });
    } catch (e) {
        console.error("Gagal initialize Google Auth:", e);
    }

    // Pasang listener pada suis peranan di Login Wall
    const roleBtns = document.querySelectorAll('.role-btn');
    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRole = btn.getAttribute('data-role');
            if (typeof google !== 'undefined' && google.accounts) {
                renderGoogleLoginButton();
            }
        });
    });

    renderUserAuthUI();
}

function showMockLoginBypass() {
    const mockContainer = document.getElementById('mock-login-container');
    if (mockContainer) {
        mockContainer.classList.remove('hidden');
    }
    
    // Sambung event listener ke butang mock login bypass
    const mockLoginBtn = document.getElementById('mock-login-btn');
    if (mockLoginBtn) {
        // Buang listener lama jika ada dan tambah baharu
        mockLoginBtn.replaceWith(mockLoginBtn.cloneNode(true));
        const newMockLoginBtn = document.getElementById('mock-login-btn');
        newMockLoginBtn.addEventListener('click', handleMockLogin);
    }
}

function handleMockLogin() {
    currentUser = {
        id: 999, // ID mock pangkalan data
        name: `Ujian ${selectedRole.toUpperCase()}`,
        email: `${selectedRole}-test@pasar-kraftangan.my`,
        picture: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        role: selectedRole
    };

    // Simpan ke fallbackUsers jika offline / tempatan
    let existingUser = fallbackUsers.find(u => u.email === currentUser.email);
    if (existingUser) {
        currentUser.id = existingUser.id;
        existingUser.role = currentUser.role;
    } else {
        const nextId = fallbackUsers.length > 0 ? Math.max(...fallbackUsers.map(u => u.id)) + 1 : 1;
        currentUser.id = nextId;
        fallbackUsers.push({
            id: nextId,
            name: currentUser.name,
            email: currentUser.email,
            role: currentUser.role,
            created_at: new Date().toISOString()
        });
    }
    localStorage.setItem('pasar_kraftangan_fallback_users', JSON.stringify(fallbackUsers));

    localStorage.setItem('pasar_kraftangan_user', JSON.stringify(currentUser));
    renderUserAuthUI();
    showToast(`Log masuk Ujian sebagai ${currentUser.role.toUpperCase()} (Bypass) berjaya! 👋`);
}

function renderGoogleLoginButton() {
    const wallBtnContainer = document.getElementById("google-login-wall-btn");
    if (wallBtnContainer) {
        wallBtnContainer.innerHTML = '';
        google.accounts.id.renderButton(
            wallBtnContainer,
            { 
                type: "standard", 
                shape: "pill", 
                theme: document.body.classList.contains('dark-theme') ? "filled_black" : "outline",
                size: "large",
                text: "signin_with"
            }
        );
    }
}

function renderUserAuthUI() {
    const mainContent = document.querySelector('main');
    
    if (currentUser) {
        // Log Masuk Berjaya: Sembunyikan Dinding Login
        loginWall.classList.add('hidden');
        
        // Paparkan profil user di navbar
        userProfileContainer.innerHTML = `
            <div class="user-avatar-wrapper" id="user-avatar-wrapper">
                <img src="${currentUser.picture}" alt="${currentUser.name}" class="user-avatar" referrerpolicy="no-referrer">
                <div class="user-dropdown">
                    <p class="user-name">${currentUser.name}</p>
                    <p class="user-email">${currentUser.email}</p>
                    <div style="margin-top:-6px; margin-bottom:12px;">
                        <span class="badge badge-${currentUser.role === 'pembeli' ? 'buyer' : currentUser.role}">${currentUser.role.toUpperCase()}</span>
                    </div>
                    <button id="google-logout-btn" class="btn btn-sm btn-outline btn-block">
                        <i class="fa-solid fa-right-from-bracket"></i> Log Keluar
                    </button>
                </div>
            </div>
        `;

        document.getElementById('google-logout-btn').addEventListener('click', handleGoogleLogout);

        // Paparkan antaramuka bersyarat mengikut Peranan Pengguna
        if (currentUser.role === 'penjual') {
            mainContent.classList.add('hidden');
            adminPanel.classList.add('hidden');
            sellerDashboard.classList.remove('hidden');
            loadSellerDashboard();
        } else if (currentUser.role === 'admin') {
            mainContent.classList.add('hidden');
            sellerDashboard.classList.add('hidden');
            adminPanel.classList.remove('hidden');
            loadAdminDashboard();
        } else {
            // Pembeli
            sellerDashboard.classList.add('hidden');
            adminPanel.classList.add('hidden');
            mainContent.classList.remove('hidden');
            autofillCheckoutForms();
        }
    } else {
        // Log Keluar: Paparkan semula Dinding Login & Sembunyikan kandungan utama
        loginWall.classList.remove('hidden');
        mainContent.classList.add('hidden');
        sellerDashboard.classList.add('hidden');
        adminPanel.classList.add('hidden');
        userProfileContainer.innerHTML = '';
        renderGoogleLoginButton();
    }
}

async function handleCredentialResponse(response) {
    // 1. Cuba hantar token ke API Backend MySQL untuk verifikasi & pendaftaran
    try {
        const apiResponse = await fetch(`${BACKEND_URL}/api/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                credential: response.credential,
                role: selectedRole
            })
        });
        
        if (apiResponse.ok) {
            const data = await apiResponse.json();
            currentUser = {
                id: data.id, 
                name: data.name,
                email: data.email,
                picture: data.picture,
                role: data.role // Guna peranan yang disahkan oleh DB
            };
            localStorage.setItem('pasar_kraftangan_user', JSON.stringify(currentUser));
            renderUserAuthUI();
            showToast(`Log masuk sebagai ${currentUser.role.toUpperCase()} berjaya (MySQL)! 👋`);
            return;
        }
    } catch (error) {
        console.warn("Gagal menyambung ke API backend. Menggunakan pengesahan klien (fallback).", error.message);
    }

    // 2. Fallback: Verifikasi secara klien sahaja sekiranya backend offline
    const userPayload = decodeJwt(response.credential);
    if (!userPayload) return;

    currentUser = {
        id: null,
        name: userPayload.name,
        email: userPayload.email,
        picture: userPayload.picture,
        role: selectedRole
    };

    // Simpan ke fallbackUsers jika offline / tempatan
    let existingUser = fallbackUsers.find(u => u.email === currentUser.email);
    if (existingUser) {
        currentUser.id = existingUser.id;
        existingUser.role = currentUser.role;
    } else {
        const nextId = fallbackUsers.length > 0 ? Math.max(...fallbackUsers.map(u => u.id)) + 1 : 1;
        currentUser.id = nextId;
        fallbackUsers.push({
            id: nextId,
            name: currentUser.name,
            email: currentUser.email,
            role: currentUser.role,
            created_at: new Date().toISOString()
        });
    }
    localStorage.setItem('pasar_kraftangan_fallback_users', JSON.stringify(fallbackUsers));

    localStorage.setItem('pasar_kraftangan_user', JSON.stringify(currentUser));
    renderUserAuthUI();
    showToast(`Log masuk tempatan sebagai ${currentUser.role.toUpperCase()} berjaya! 👋`);
}

function handleGoogleLogout() {
    currentUser = null;
    localStorage.removeItem('pasar_kraftangan_user');
    
    // Reset inputs
    const nameField1 = document.getElementById('checkout-name');
    const nameField2 = document.getElementById('modal-checkout-name');
    if (nameField1) nameField1.value = '';
    if (nameField2) nameField2.value = '';

    renderUserAuthUI();
    showToast('Anda telah log keluar.', 'info');
}

// Fungsi pembantu untuk menyimpan pesanan secara tempatan (fallback)
function saveFallbackOrder(customerName, customerAddress, customerNotes, totalPrice, items) {
    const nextId = fallbackOrders.length > 0 ? Math.max(...fallbackOrders.map(o => o.id)) + 1 : 1001;
    const newOrder = {
        id: nextId,
        user_id: currentUser ? currentUser.id : null,
        customer_name: customerName,
        shipping_address: customerAddress,
        special_notes: customerNotes,
        total_price: totalPrice,
        order_date: new Date().toISOString()
    };
    fallbackOrders.push(newOrder);
    localStorage.setItem('pasar_kraftangan_fallback_orders', JSON.stringify(fallbackOrders));
    console.log("Pesanan disimpan secara tempatan (fallback):", newOrder);
}

// 4c. Pemuatan Data Dashboard Dinamik (Penjual & Admin)
async function loadSellerDashboard() {
    const tableBody = document.querySelector('#seller-orders-table tbody');
    if (!tableBody) return;
    
    // Kemas kini jumlah produk dari array
    document.getElementById('seller-total-products').textContent = products.length;

    try {
        const res = await fetch(`${BACKEND_URL}/api/orders`);
        if (res.ok) {
            const orders = await res.json();
            
            // Kira jumlah jualan kasar
            let totalSales = 0;
            orders.forEach(o => totalSales += parseFloat(o.total_price));

            document.getElementById('seller-total-orders').textContent = orders.length;
            document.getElementById('seller-total-sales').textContent = `RM ${totalSales.toFixed(2)}`;

            if (orders.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px;">Tiada pesanan pelanggan masuk dikesan di MySQL.</td></tr>`;
            } else {
                tableBody.innerHTML = orders.map(o => `
                    <tr>
                        <td><strong>#ORD-${o.id}</strong></td>
                        <td>${o.customer_name}</td>
                        <td>${o.shipping_address}</td>
                        <td>${new Date(o.order_date).toLocaleDateString('ms-MY')}</td>
                        <td><strong>RM ${parseFloat(o.total_price).toFixed(2)}</strong></td>
                        <td><span class="badge-status success"><i class="fa-solid fa-circle-check"></i> Direkodkan</span></td>
                    </tr>
                `).join('');
            }
        } else {
            throw new Error("Respon tidak OK");
        }
    } catch (err) {
        console.warn("Gagal menyambung ke API. Menggunakan pesanan tempatan (fallback).", err.message);
        // Kira jumlah jualan kasar daripada fallbackOrders
        let totalSales = 0;
        fallbackOrders.forEach(o => totalSales += parseFloat(o.total_price));

        document.getElementById('seller-total-orders').textContent = fallbackOrders.length;
        document.getElementById('seller-total-sales').textContent = `RM ${totalSales.toFixed(2)}`;

        if (fallbackOrders.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px;">Tiada pesanan pelanggan masuk dikesan.</td></tr>`;
        } else {
            tableBody.innerHTML = fallbackOrders.map(o => `
                <tr>
                    <td><strong>#ORD-${o.id}</strong></td>
                    <td>${o.customer_name}</td>
                    <td>${o.shipping_address}</td>
                    <td>${new Date(o.order_date).toLocaleDateString('ms-MY')}</td>
                    <td><strong>RM ${parseFloat(o.total_price).toFixed(2)}</strong></td>
                    <td><span class="badge-status success"><i class="fa-solid fa-circle-check"></i> Direkodkan</span></td>
                </tr>
            `).join('');
        }
    }
}

async function loadAdminDashboard() {
    const usersTableBody = document.querySelector('#admin-users-table tbody');
    if (!usersTableBody) return;

    let usersData = [];
    let ordersData = [];

    try {
        // Ambil senarai pengguna Google dari MySQL
        const usersRes = await fetch(`${BACKEND_URL}/api/users`);
        if (usersRes.ok) {
            usersData = await usersRes.json();
        } else {
            throw new Error("Respon tidak OK");
        }
    } catch (err) {
        console.warn("Gagal memuatkan pengguna dari API. Menggunakan data pengguna tempatan (fallback).", err.message);
        usersData = fallbackUsers;
    }

    document.getElementById('admin-total-users').textContent = usersData.length;

    usersTableBody.innerHTML = usersData.map(u => `
        <tr>
            <td><strong>#USR-${u.id}</strong></td>
            <td><strong>${u.name}</strong></td>
            <td>${u.email}</td>
            <td><span class="badge badge-${u.role === 'pembeli' ? 'buyer' : u.role}">${u.role.toUpperCase()}</span></td>
            <td>${new Date(u.created_at).toLocaleDateString('ms-MY')}</td>
            <td>
                <button onclick="deleteUser(${u.id})" class="btn btn-sm btn-outline" style="border-color:#dc5050; color:#dc5050; padding:4px 8px; font-size:0.75rem;">
                    <i class="fa-regular fa-trash-can"></i> Padam
                </button>
            </td>
        </tr>
    `).join('');

    try {
        // Ambil senarai pesanan untuk mengira statistik kutipan keseluruhan
        const ordersRes = await fetch(`${BACKEND_URL}/api/orders`);
        if (ordersRes.ok) {
            ordersData = await ordersRes.json();
        } else {
            throw new Error("Respon tidak OK");
        }
    } catch (err) {
        console.warn("Gagal memuatkan pesanan dari API. Menggunakan data pesanan tempatan (fallback).", err.message);
        ordersData = fallbackOrders;
    }

    let totalRevenue = 0;
    ordersData.forEach(o => totalRevenue += parseFloat(o.total_price));

    document.getElementById('admin-total-orders').textContent = ordersData.length;
    document.getElementById('admin-total-revenue').textContent = `RM ${totalRevenue.toFixed(2)}`;
}

// Fungsi memadam pengguna (dipanggil secara global dari butang HTML jadual)
async function deleteUser(userId) {
    if (!confirm('Adakah anda pasti mahu memadam pengguna ini?')) return;
    try {
        const res = await fetch(`${BACKEND_URL}/api/users/${userId}`, { method: 'DELETE' });
        if (res.ok) {
            showToast('Pengguna berjaya dipadam!', 'success');
            loadAdminDashboard();
        } else {
            showToast('Gagal memadam pengguna.', 'warning');
        }
    } catch (err) {
        console.warn("Gagal menyambung ke API. Memadam secara tempatan (fallback).", err.message);
        fallbackUsers = fallbackUsers.filter(u => u.id !== userId);
        localStorage.setItem('pasar_kraftangan_fallback_users', JSON.stringify(fallbackUsers));
        showToast('Pengguna berjaya dipadam dari data tempatan!', 'success');
        loadAdminDashboard();
    }
}

// Jadikan deleteUser boleh diakses secara global oleh elemen onclick
window.deleteUser = deleteUser;

function autofillCheckoutForms() {
    if (!currentUser) return;
    
    const nameField1 = document.getElementById('checkout-name');
    const nameField2 = document.getElementById('modal-checkout-name');
    
    if (nameField1 && !nameField1.value) {
        nameField1.value = currentUser.name;
    }
    if (nameField2 && !nameField2.value) {
        nameField2.value = currentUser.name;
    }
}

// Fungsi pembantu untuk decode JWT Token Google secara client-side
function decodeJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Gagal mendecod JWT Google:", e);
        return null;
    }
}

// 5. Toast Notification System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-circle-check';
    if (type === 'info') iconClass = 'fa-circle-info';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    
    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 3s
    setTimeout(() => {
        toast.style.animation = 'slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 5b. Memuatkan Produk dari API Backend MySQL
async function loadProducts() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/products`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                products = data;
                console.log("Produk berjaya dimuatkan dari API MySQL.");
            }
        }
    } catch (error) {
        console.warn("Gagal menyambung ke API pelayan. Menggunakan data tempatan (fallback).", error.message);
    }
    renderProducts();
}

// 6. Rendering Produk Katalog
function renderProducts() {
    // Tunjukkan Spinner
    productsGrid.innerHTML = `
        <div class="loading-state">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <p>Menapis koleksi produk...</p>
        </div>
    `;

    setTimeout(() => {
        // Tapis mengikut kategori
        let filtered = products.filter(product => {
            const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 product.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Isih harga
        if (currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        }

        // Tunjukkan hasil
        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fa-regular fa-folder-open"></i>
                    <h3>Tiada Produk Dijumpai</h3>
                    <p>Cuba gunakan kata kunci carian yang lain atau tukar penapis kategori.</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = filtered.map(product => {
            // Jana Bintang
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    starsHTML += '<i class="fa-solid fa-star"></i>';
                } else {
                    starsHTML += '<i class="fa-regular fa-star"></i>';
                }
            }

            return `
                <article class="product-card" data-id="${product.id}">
                    <div class="product-img-wrapper" onclick="openProductDetail('${product.id}')">
                        <span class="product-badge">${product.category}</span>
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title" onclick="openProductDetail('${product.id}')">${product.name}</h3>
                        <div class="product-rating">
                            ${starsHTML}
                            <span>(${product.rating}.0)</span>
                        </div>
                        <div class="product-price">RM ${product.price.toFixed(2)}</div>
                        <div class="product-card-actions">
                            <button onclick="openProductDetail('${product.id}')" class="btn btn-outline btn-block">
                                <i class="fa-solid fa-eye"></i> Detail
                            </button>
                            <button onclick="quickAddToCart('${product.id}')" class="btn btn-primary" aria-label="Tambah terus ke troli">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }, 250); // Delay simulasi rendering agar kelihatan lancar dan dinamik
}

// 7. Mod Detail Produk (Modal)
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductInModal = product;
    currentModalQty = 1;
    modalQtyInput.value = currentModalQty;

    // Load content
    modalProductImg.src = product.image;
    modalProductImg.alt = product.name;
    modalProductBadge.textContent = product.category;
    modalProductTitle.textContent = product.name;
    modalProductPrice.textContent = `RM ${product.price.toFixed(2)}`;
    modalProductDesc.textContent = product.desc;

    // Customize options by category
    sizeOptionGroup.classList.remove('hidden');
    pearlOptionGroup.classList.remove('hidden');
    modalSizeSelect.innerHTML = '';
    modalPearlSelect.selectedIndex = 0;

    if (product.category === 'gelang') {
        modalSizeSelect.innerHTML = `
            <option value="S (16cm)">S (Kecil - ~16cm)</option>
            <option value="M (17.5cm)" selected>M (Sederhana - ~17.5cm)</option>
            <option value="L (19cm)">L (Besar - ~19cm)</option>
        `;
    } else if (product.category === 'rantai') {
        modalSizeSelect.innerHTML = `
            <option value="40cm">40cm (Choker)</option>
            <option value="45cm" selected>45cm (Standard Pendek)</option>
            <option value="50cm">50cm (Standard Sederhana)</option>
            <option value="60cm">60cm (Labuh)</option>
        `;
    } else if (product.category === 'cincin') {
        modalSizeSelect.innerHTML = `
            <option value="Saiz US 5">Saiz US 5 (~15.7mm)</option>
            <option value="Saiz US 6">Saiz US 6 (~16.5mm)</option>
            <option value="Saiz US 7" selected>Saiz US 7 (~17.3mm)</option>
            <option value="Saiz US 8">Saiz US 8 (~18.2mm)</option>
            <option value="Saiz US 9">Saiz US 9 (~19.0mm)</option>
        `;
    } else {
        sizeOptionGroup.classList.add('hidden');
    }

    // Gred mutiara pilihan (Air Masin menambah harga)
    modalPearlSelect.innerHTML = `
        <option value="Mutiara Air Tawar Sabah" data-add="0">Mutiara Air Tawar Asli (Harga Asal)</option>
        <option value="Mutiara Air Masin Laut Dalam Sabah" data-add="180">Mutiara Air Masin South Sea (+RM180.00)</option>
    `;

    // Recalculate price when pearl type changes
    modalPearlSelect.onchange = () => {
        const selectedOption = modalPearlSelect.options[modalPearlSelect.selectedIndex];
        const additionalPrice = parseFloat(selectedOption.getAttribute('data-add') || 0);
        const finalPrice = product.price + additionalPrice;
        modalProductPrice.textContent = `RM ${finalPrice.toFixed(2)}`;
    };

    // Render Specifications
    modalProductSpecs.innerHTML = Object.entries(product.specs).map(([key, val]) => {
        return `<li><span>${key}</span><span>${val}</span></li>`;
    }).join('');

    // Update Reviews Tab Count & Render Reviews List
    const reviewTabBtn = document.querySelector('.tab-btn[data-tab="tab-reviews"]');
    if (reviewTabBtn) {
        reviewTabBtn.textContent = `Ulasan (${product.reviews.length})`;
    }

    modalProductReviews.innerHTML = product.reviews.map(rev => {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rev.rating) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }
        return `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-user">${rev.user}</span>
                    <span class="review-stars">${starsHTML}</span>
                </div>
                <p class="review-text">"${rev.text}"</p>
            </div>
        `;
    }).join('');

    // Reset Tabs state to default (Deskripsi active)
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    const defaultTabBtn = document.querySelector('.tab-btn[data-tab="tab-desc"]');
    const defaultTabPanel = document.getElementById('tab-desc');
    if (defaultTabBtn) defaultTabBtn.classList.add('active');
    if (defaultTabPanel) defaultTabPanel.classList.add('active');

    // Autofill Name Fields if Google account is logged in
    autofillCheckoutForms();

    // Open Modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scroll
    currentProductInModal = null;
}

// 8. Logik Troli (Shopping Cart)
function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Default size and pearl options for quick add
    let defaultSize = 'M (17.5cm)';
    if (product.category === 'rantai') defaultSize = '45cm';
    if (product.category === 'cincin') defaultSize = 'Saiz US 7';
    
    addToCart(product, 1, defaultSize, "Mutiara Air Tawar Sabah", 0);
}

function handleModalAddToCart() {
    if (!currentProductInModal) return;

    const size = modalSizeSelect.value;
    const pearlOption = modalPearlSelect.options[modalPearlSelect.selectedIndex];
    const pearlType = pearlOption.value;
    const priceAdjustment = parseFloat(pearlOption.getAttribute('data-add') || 0);

    addToCart(currentProductInModal, currentModalQty, size, pearlType, priceAdjustment);
    closeProductModal();
    openCart();
}

function addToCart(product, qty, size, pearlType, priceAdjustment) {
    // Generate unique ID in cart based on product and options chosen
    const cartItemId = `${product.id}-${size.replace(/\s+/g, '')}-${pearlType.replace(/\s+/g, '')}`;
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    const finalUnitPrice = product.price + priceAdjustment;

    if (existingIndex > -1) {
        // Update quantity
        cart[existingIndex].qty += qty;
    } else {
        // Add new item
        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            image: product.image,
            price: finalUnitPrice,
            qty: qty,
            size: size,
            pearlType: pearlType,
            category: product.category
        });
    }

    updateCartUI();
    showToast(`Berjaya menambah ${qty}x ${product.name} ke dalam troli!`);
}

function updateCartQty(cartItemId, delta) {
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += delta;

    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
        showToast('Barangan dikeluarkan dari troli', 'warning');
    }

    updateCartUI();
}

function removeCartItem(cartItemId) {
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    cart.splice(itemIndex, 1);
    updateCartUI();
    showToast('Barangan dikeluarkan dari troli', 'warning');
}

function updateCartUI() {
    // Save state
    localStorage.setItem('pasar_kraftangan_cart', JSON.stringify(cart));

    // Calculate totals
    let totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Troli anda masih kosong.</p>
                <a href="#katalog" id="start-shopping-btn" class="btn btn-primary btn-sm">Mula Membeli-belah</a>
            </div>
        `;
        cartFooter.classList.add('hidden');
        
        // Re-attach event listener for the dynamically created start shopping button
        const shoppingBtn = document.getElementById('start-shopping-btn');
        if (shoppingBtn) {
            shoppingBtn.addEventListener('click', closeCart);
        }
    } else {
        cartFooter.classList.remove('hidden');
        cartItemsContainer.innerHTML = cart.map(item => {
            totalItems += item.qty;
            totalPrice += item.price * item.qty;

            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-meta">
                            <span>Saiz: <strong>${item.size}</strong></span>
                            <span>Bahan: <strong>${item.pearlType}</strong></span>
                        </div>
                        <div class="cart-item-footer">
                            <div class="cart-item-price">RM ${(item.price * item.qty).toFixed(2)}</div>
                            <div class="qty-controls">
                                <button onclick="updateCartQty('${item.cartItemId}', -1)" class="qty-control-btn" aria-label="Kurangkan Kuantiti"><i class="fa-solid fa-minus"></i></button>
                                <span class="cart-item-qty">${item.qty}</span>
                                <button onclick="updateCartQty('${item.cartItemId}', 1)" class="qty-control-btn" aria-label="Tambah Kuantiti"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <button onclick="removeCartItem('${item.cartItemId}')" class="remove-item-btn" aria-label="Buang"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update Header Badge and Sidebar Totals
    cartBadge.textContent = totalItems;
    cartTotalQty.textContent = totalItems;
    cartTotalPrice.textContent = `RM ${totalPrice.toFixed(2)}`;

    // Add bump animation to cart icon badge if items > 0
    if (totalItems > 0) {
        cartBadge.classList.add('active');
    } else {
        cartBadge.classList.remove('active');
    }
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 9. Sistem Checkout (Simpan ke MySQL/Fallback)
function handleCheckout(e) {
    e.preventDefault();

    if (cart.length === 0) {
        showToast('Troli anda kosong!', 'warning');
        return;
    }

    const customerName = document.getElementById('checkout-name').value.trim();
    const customerAddress = document.getElementById('checkout-address').value.trim();
    const customerNotes = document.getElementById('checkout-notes').value.trim();

    if (!customerName || !customerAddress) {
        showToast('Sila lengkapkan nama dan alamat anda!', 'warning');
        return;
    }

    let totalQty = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQty += item.qty;
        totalPrice += item.price * item.qty;
    });

    const orderData = {
        userId: currentUser ? currentUser.id : null,
        customerName: customerName,
        shippingAddress: customerAddress,
        specialNotes: customerNotes,
        totalPrice: totalPrice,
        items: cart
    };

    showToast('Memproses pesanan anda...', 'info');

    fetch(`${BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(res => {
        if (!res.ok) throw new Error("Gagal menyimpan di pelayan");
        return res.json();
    })
    .then(data => {
        console.log("Pesanan disimpan di MySQL:", data);
        showToast('Pesanan anda berjaya direkodkan!', 'success');
    })
    .catch(err => {
        console.error("Gagal menyimpan pesanan di MySQL:", err);
        saveFallbackOrder(customerName, customerAddress, customerNotes, totalPrice, cart);
        showToast('Pesanan direkodkan secara tempatan (API luar talian).', 'info');
    })
    .finally(() => {
        // Kosongkan troli dan set semula borang
        cart = [];
        updateCartUI();
        checkoutForm.reset();
        closeCart();
    });
}

// 9b. Sistem Tempahan Segera Terus dari Modal
function handleModalCheckout(e) {
    e.preventDefault();

    if (!currentProductInModal) return;

    const customerName = document.getElementById('modal-checkout-name').value.trim();
    const customerAddress = document.getElementById('modal-checkout-address').value.trim();
    const customerNotes = document.getElementById('modal-checkout-notes').value.trim();

    if (!customerName || !customerAddress) {
        showToast('Sila lengkapkan nama dan alamat anda!', 'warning');
        return;
    }

    const size = modalSizeSelect.value;
    const pearlOption = modalPearlSelect.options[modalPearlSelect.selectedIndex];
    const pearlType = pearlOption.value;
    const priceAdjustment = parseFloat(pearlOption.getAttribute('data-add') || 0);
    const finalUnitPrice = currentProductInModal.price + priceAdjustment;
    const totalPrice = finalUnitPrice * currentModalQty;

    const orderItems = [{
        id: currentProductInModal.id,
        size: size,
        pearlType: pearlType,
        qty: currentModalQty,
        price: finalUnitPrice
    }];

    const orderData = {
        userId: currentUser ? currentUser.id : null,
        customerName: customerName,
        shippingAddress: customerAddress,
        specialNotes: customerNotes,
        totalPrice: totalPrice,
        items: orderItems
    };

    showToast('Memproses tempahan anda...', 'info');

    fetch(`${BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(res => {
        if (!res.ok) throw new Error("Gagal menyimpan di pelayan");
        return res.json();
    })
    .then(data => {
        console.log("Pesanan segera disimpan di MySQL:", data);
        showToast('Tempahan segera berjaya direkodkan!', 'success');
    })
    .catch(err => {
        console.error("Gagal menyimpan pesanan segera di MySQL:", err);
        saveFallbackOrder(customerName, customerAddress, customerNotes, totalPrice, orderItems);
        showToast('Tempahan direkodkan secara tempatan (API luar talian).', 'info');
    })
    .finally(() => {
        modalBookingForm.reset();
        closeProductModal();
    });
}

// 10. Konfigurasi Event Listeners
function setupEventListeners() {
    // Theme Switch
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Cart Toggles
    cartToggleBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close mobile menu when links clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
            
            // Highlight active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Search bar event
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Category selection event
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderProducts();
        });
    });

    // Sort selection event
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Modal Events
    modalCloseBtn.addEventListener('click', closeProductModal);
    
    // Close modal when clicking outside content
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // Quantity selectors in Modal
    qtyMinusBtn.addEventListener('click', () => {
        if (currentModalQty > 1) {
            currentModalQty--;
            modalQtyInput.value = currentModalQty;
        }
    });

    qtyPlusBtn.addEventListener('click', () => {
        currentModalQty++;
        modalQtyInput.value = currentModalQty;
    });

    modalAddToCartBtn.addEventListener('click', handleModalAddToCart);

    // Details Modal Tabs Click Event
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active classes
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // Checkout Submit
    checkoutForm.addEventListener('submit', handleCheckout);

    // Modal Checkout Submit
    modalBookingForm.addEventListener('submit', handleModalCheckout);

    // Modal Urus Produk (Penjual/Admin)
    const addProductBtn = document.getElementById('add-product-btn');
    const addProductCloseBtn = document.getElementById('add-product-close-btn');
    const addProductModal = document.getElementById('add-product-modal');
    const newProductForm = document.getElementById('new-product-form');

    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            addProductModal.classList.add('active');
        });
    }

    if (addProductCloseBtn) {
        addProductCloseBtn.addEventListener('click', () => {
            addProductModal.classList.remove('active');
        });
    }

    if (newProductForm) {
        newProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const newProduct = {
                id: document.getElementById('prod-id').value.trim(),
                name: document.getElementById('prod-name').value.trim(),
                category: document.getElementById('prod-category').value,
                price: parseFloat(document.getElementById('prod-price').value),
                description: document.getElementById('prod-desc').value.trim(),
                specs: {
                    "Bahan": document.getElementById('spec-material').value.trim(),
                    "Saiz Mutiara": document.getElementById('spec-size').value.trim(),
                    "Asal Artisan": document.getElementById('spec-origin').value.trim(),
                    "Pembuat": document.getElementById('spec-craft').value.trim()
                }
            };

            try {
                const res = await fetch(`${BACKEND_URL}/api/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProduct)
                });

                if (res.ok) {
                    showToast('Produk berjaya ditambah ke database MySQL!', 'success');
                    newProductForm.reset();
                    addProductModal.classList.remove('active');
                    
                    // Muat semula data katalog dan dashboard
                    await loadProducts();
                    if (currentUser && currentUser.role === 'penjual') {
                        loadSellerDashboard();
                    }
                } else {
                    const err = await res.json();
                    showToast(`Gagal: ${err.error}`, 'warning');
                }
            } catch (error) {
                // Fallback tempaatan jika backend offline
                products.push({
                    id: newProduct.id,
                    name: newProduct.name,
                    category: newProduct.category,
                    price: newProduct.price,
                    image: "assets/gelang.png",
                    rating: 5,
                    desc: newProduct.description,
                    specs: newProduct.specs,
                    reviews: []
                });
                showToast('API offline. Produk ditambah secara tempatan!', 'info');
                newProductForm.reset();
                addProductModal.classList.remove('active');
                
                await loadProducts();
                if (currentUser && currentUser.role === 'penjual') {
                    loadSellerDashboard();
                }
            }
        });
    }

    // Educational Accordion Logic
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it was closed
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Footer Links Navigation to Category
    document.querySelectorAll('[data-filter-link]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-filter-link');
            const targetBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
            if (targetBtn) {
                targetBtn.click();
                // Smooth scroll to catalog
                document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Google Maps Location Pinning Events
    const pinLocationBtn = document.getElementById('pin-location-btn');
    const modalPinLocationBtn = document.getElementById('modal-pin-location-btn');

    if (pinLocationBtn) {
        pinLocationBtn.addEventListener('click', () => getCurrentLocation(document.getElementById('checkout-address')));
    }
    if (modalPinLocationBtn) {
        modalPinLocationBtn.addEventListener('click', () => getCurrentLocation(document.getElementById('modal-checkout-address')));
    }

    // Direct Buy Now (Beli Sekarang) button in modal
    const modalBuyNowBtn = document.getElementById('modal-buy-now-btn');
    if (modalBuyNowBtn) {
        modalBuyNowBtn.addEventListener('click', handleModalBuyNow);
    }
}

// 11. Fungsi Geolocation untuk Pin Alamat ke Google Maps
function getCurrentLocation(targetTextarea) {
    if (!navigator.geolocation) {
        showToast('Kamera/Lokasi GPS tidak disokong oleh pelayar web anda.', 'warning');
        return;
    }

    showToast('Mendapatkan kedudukan GPS semasa anda...', 'info');

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

            let currentVal = targetTextarea.value.trim();
            if (currentVal) {
                currentVal += `\n📍 Google Maps Pin: ${mapsUrl}`;
            } else {
                currentVal = `📍 Google Maps Pin: ${mapsUrl}`;
            }
            targetTextarea.value = currentVal;
            showToast('Lokasi GPS anda berjaya dipautkan ke Google Maps! 📍', 'success');
        },
        (error) => {
            console.error("Gagal mendapatkan lokasi GPS:", error);
            let errorMsg = 'Gagal mengakses GPS.';
            if (error.code === error.PERMISSION_DENIED) {
                errorMsg = 'Sila benarkan akses lokasi (GPS) pada pelayar anda.';
            }
            showToast(errorMsg, 'warning');
        },
        { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 }
    );
}

// 12. Fungsi Beli Sekarang Terus ke Database (Bypass Borang Butiran)
function handleModalBuyNow() {
    if (!currentProductInModal) return;

    const size = modalSizeSelect.value;
    const pearlOption = modalPearlSelect.options[modalPearlSelect.selectedIndex];
    const pearlType = pearlOption.value;
    const priceAdjustment = parseFloat(pearlOption.getAttribute('data-add') || 0);
    const finalUnitPrice = currentProductInModal.price + priceAdjustment;
    const totalPrice = finalUnitPrice * currentModalQty;

    const orderItems = [{
        id: currentProductInModal.id,
        size: size,
        pearlType: pearlType,
        qty: currentModalQty,
        price: finalUnitPrice
    }];

    const orderData = {
        userId: currentUser ? currentUser.id : null,
        customerName: currentUser ? currentUser.name : "Pembeli Tanpa Nama (Bypass)",
        shippingAddress: "Beli Segera (Bypass Borang Web)",
        specialNotes: "Tempahan Segera via Direct Buy Button",
        totalPrice: totalPrice,
        items: orderItems
    };

    showToast('Memproses tempahan langsung...', 'info');

    fetch(`${BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(res => {
        if (!res.ok) throw new Error("Gagal menyimpan di pelayan");
        return res.json();
    })
    .then(data => {
        console.log("Pesanan Beli Sekarang disimpan di MySQL:", data);
        showToast('Tempahan langsung berjaya direkodkan!', 'success');
    })
    .catch(err => {
        console.error("Gagal menyimpan pesanan Beli Sekarang di MySQL:", err);
        saveFallbackOrder(orderData.customerName, orderData.shippingAddress, orderData.specialNotes, totalPrice, orderItems);
        showToast('Tempahan direkodkan secara tempatan (API luar talian).', 'info');
    })
    .finally(() => {
        closeProductModal();
    });
}
