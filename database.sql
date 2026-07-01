-- ==========================================================================
-- Skrip Pangkalan Data MySQL: Pasar Kraftangan Sabah
-- ==========================================================================

-- 1. Cipta Pangkalan Data
CREATE DATABASE IF NOT EXISTS `pasar_kraftangan_sabah` 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `pasar_kraftangan_sabah`;

-- 2. Cipta Jadual: Produk
CREATE TABLE IF NOT EXISTS `products` (
    `id` VARCHAR(50) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `category` ENUM('gelang', 'rantai', 'cincin') NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `image` VARCHAR(255) NOT NULL DEFAULT 'assets/placeholder.png',
    `rating` INT NOT NULL DEFAULT 5,
    `description` TEXT NULL,
    PRIMARY KEY (`id`),
    INDEX `idx_category` (`category`)
) ENGINE=InnoDB;

-- 3. Cipta Jadual: Spesifikasi Produk (Relasi One-to-Many)
CREATE TABLE IF NOT EXISTS `product_specs` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `product_id` VARCHAR(50) NOT NULL,
    `spec_key` VARCHAR(100) NOT NULL,
    `spec_val` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4. Cipta Jadual: Ulasan Produk (Relasi One-to-Many)
CREATE TABLE IF NOT EXISTS `product_reviews` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `product_id` VARCHAR(50) NOT NULL,
    `reviewer_name` VARCHAR(100) NOT NULL,
    `rating` INT NOT NULL DEFAULT 5,
    `review_text` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4.b Cipta Jadual: Pengguna (Google Authenticated Users)
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `google_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(255) NULL,
    `role` ENUM('pembeli', 'penjual', 'admin') NOT NULL DEFAULT 'pembeli',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uid_google_id` (`google_id`),
    UNIQUE KEY `uid_email` (`email`)
) ENGINE=InnoDB;

-- 5. Cipta Jadual: Pesanan (Orders)
CREATE TABLE IF NOT EXISTS `orders` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `user_id` INT NULL,
    `customer_name` VARCHAR(150) NOT NULL,
    `shipping_address` TEXT NOT NULL,
    `special_notes` TEXT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `order_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB;

-- 6. Cipta Jadual: Butiran Item Pesanan (Order Items - Relasi Many-to-Many antara Orders & Products)
CREATE TABLE IF NOT EXISTS `order_items` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `order_id` INT NOT NULL,
    `product_id` VARCHAR(50) NOT NULL,
    `size` VARCHAR(50) NOT NULL,
    `pearl_type` VARCHAR(150) NOT NULL,
    `quantity` INT NOT NULL DEFAULT 1,
    `subtotal` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB;


-- ==========================================================================
-- Memasukkan Data Permulaan (Seed Data)
-- ==========================================================================

-- Data Permulaan: Produk
INSERT INTO `products` (`id`, `name`, `category`, `price`, `image`, `rating`, `description`) VALUES
('gelang-01', 'Gelang Mutiara Emas Borneo', 'gelang', 120.00, 'assets/gelang.png', 5, 'Gelang mutiara eksklusif buatan tangan artisan Kota Kinabalu. Menggunakan gabungan mutiara air tawar putih Sabah yang berkilau tinggi dengan manik bersalut emas 24k untuk kelihatan mewah dan anggun.'),
('gelang-02', 'Gelang Manik Pinakol Sabah', 'gelang', 45.00, 'assets/gelang.png', 5, 'Reka bentuk gelang tradisional bermotifkan corak etnik suku kaum Rungus di Sabah. Dianyam rapi menggunakan manik kaca berkualiti tinggi yang sangat tahan lasak.'),
('gelang-03', 'Gelang Mutiara Baroque Peacock', 'gelang', 160.00, 'assets/gelang.png', 4, 'Gelang mutiara asli yang mempunyai bentuk unik Baroque dan kilauan warna gelap kebiruan (peacock) yang langka. Menawarkan gaya berani dan kontemporari.'),
('rantai-01', 'Rantai Mutiara Kasih Klasik', 'rantai', 250.00, 'assets/rantai.png', 5, 'Rantai leher mutiara air tawar asli Sabah berukuran 45cm. Setiap butir mutiara dipilih dengan teliti untuk memastikan keseragaman saiz dan kilauan yang tinggi. Dilengkapi cangkuk emas 916.'),
('rantai-02', 'Rantai Choker Manik Kadazan', 'rantai', 75.00, 'assets/rantai.png', 4, 'Rantai leher jenis choker yang diilhamkan daripada manik hiasan pakaian tradisi suku kaum Kadazan-Dusun. Sesuai digayakan untuk acara keramaian atau kasual.'),
('rantai-03', 'Rantai Labuh Mutiara Gradasi', 'rantai', 290.00, 'assets/rantai.png', 5, 'Rantai mutiara yang diatur indah secara bergradasi daripada saiz kecil di bahagian belakang sehingga mutiara bersaiz besar (10mm) di bahagian tengah hadapan. Menyerlahkan keanggunan wanita.'),
('cincin-01', 'Cincin Perak Mutiara South Sea', 'cincin', 350.00, 'assets/cincin.png', 5, 'Cincin perak sterling 925 eksklusif buatan tangan tempatan dengan mahkota mutiara air masin South Sea (Mutiara Laut Sabah) bersaiz 11mm. Kilauan tinggi yang bertaraf premium.'),
('cincin-02', 'Cincin Mutiara Solitaire Minimalis', 'cincin', 95.00, 'assets/cincin.png', 4, 'Sesuai untuk pemakaian harian. Cincin perak nipis yang dihiasi sebiji mutiara air tawar bulat putih asli bersaiz 6mm yang ringkas namun menawan.'),
('cincin-03', 'Cincin Ukiran Etnik Mutiara Pink', 'cincin', 140.00, 'assets/cincin.png', 5, 'Cincin perak tebal dengan seni ukiran filigree tradisional suku Borneo, bertatahkan mutiara asli berwarna pink merah jambu semula jadi.');

-- Data Permulaan: Spesifikasi Produk
INSERT INTO `product_specs` (`product_id`, `spec_key`, `spec_val`) VALUES
('gelang-01', 'Bahan', 'Mutiara Air Tawar Asli & Manik Emas 24k (Plated)'),
('gelang-01', 'Saiz Mutiara', '8.0 mm - 8.5 mm'),
('gelang-01', 'Jenis Dianyam', 'Tali Elastik Nylon Gred Tinggi'),
('gelang-01', 'Sesuai Untuk', 'Majlis Rasmi & Hiasan Harian'),
('gelang-01', 'Asal Artisan', 'Kota Kinabalu, Sabah'),

('gelang-02', 'Bahan', 'Manik Kaca Gred A (Import)'),
('gelang-02', 'Ukuran Lebar', '2.5 cm (Corak Lebar)'),
('gelang-02', 'Motif Etnik', 'Pinakol Rungus Tradisional'),
('gelang-02', 'Ketahanan', 'Sangat Lasak & Kalis Air'),
('gelang-02', 'Asal Artisan', 'Kudat, Sabah'),

('gelang-03', 'Bahan', 'Mutiara Air Tawar Baroque Gred AA+'),
('gelang-03', 'Saiz Mutiara', '9.0 mm - 10.0 mm'),
('gelang-03', 'Bentuk', 'Baroque (Unik & Semulajadi)'),
('gelang-03', 'Warna Kilauan', 'Peacock Green & Dark Blue'),
('gelang-03', 'Asal Artisan', 'Semporna, Sabah'),

('rantai-01', 'Bahan', 'Mutiara Air Tawar Asli Gred AAA'),
('rantai-01', 'Panjang Rantai', '45 cm (Standard Leher)'),
('rantai-01', 'Keseragaman', '95% Bulat Sempurna'),
('rantai-01', 'Jenis Cangkuk', 'Emas 916 (Bersijil)'),
('rantai-01', 'Asal Mutiara', 'Pulau Selakan, Sabah'),

('rantai-02', 'Bahan', 'Manik Halus & Benang Kait Gred Premium'),
('rantai-02', 'Gaya Rekaan', 'Choker Tradisi Borneo'),
('rantai-02', 'Lebar', '1.8 cm'),
('rantai-02', 'Cangkuk', 'Lobster Claw (Logam Anti-Karat)'),
('rantai-02', 'Asal Artisan', 'Penampang, Sabah'),

('rantai-03', 'Bahan', 'Mutiara Air Tawar Asli Gred AA'),
('rantai-03', 'Panjang Rantai', '65 cm (Labuh Bawah Dada)'),
('rantai-03', 'Saiz Gradasi', '5.0 mm (Hujung) hingga 10.5 mm (Tengah)'),
('rantai-03', 'Cangkuk', 'Perak 925 Bersalut Emas'),
('rantai-03', 'Asal Mutiara', 'Sandakan, Sabah'),

('cincin-01', 'Bahan', 'Perak Sterling 925 Tulen & Mutiara Air Masin'),
('cincin-01', 'Saiz Mutiara', '11.0 mm (Besar & Mewah)'),
('cincin-01', 'Jenis Mutiara', 'Mutiara Air Masin (South Sea Pearl)'),
('cincin-01', 'Saduran Cincin', 'Rhodium (Anti-Kusam / Anti-Alergi)'),
('cincin-01', 'Asal Mutiara', 'Laut Semporna, Sabah'),

('cincin-02', 'Bahan', 'Perak Sterling 925'),
('cincin-02', 'Saiz Mutiara', '6.0 mm (Sederhana)'),
('cincin-02', 'Gaya Rekaan', 'Solitaire (Minimalis)'),
('cincin-02', 'Kesesuaian', 'Selesa untuk Dipakai Harian'),
('cincin-02', 'Asal Artisan', 'Kota Kinabalu, Sabah'),

('cincin-03', 'Bahan', 'Perak Sterling 925 Tulen Ukir'),
('cincin-03', 'Saiz Mutiara', '8.5 mm'),
('cincin-03', 'Warna Mutiara', 'Pink / Lavender Semulajadi'),
('cincin-03', 'Jenis Ukiran', 'Filigree Borneo Tradisional'),
('cincin-03', 'Asal Artisan', 'Kota Kinabalu, Sabah');

-- Data Permulaan: Ulasan Produk
INSERT INTO `product_reviews` (`product_id`, `reviewer_name`, `rating`, `review_text`) VALUES
('gelang-01', 'Fatimah H.', 5, 'Sangat berpuas hati! Mutiara putih bersih dan berkilat. Penghantaran cepat.'),
('gelang-01', 'Brandon L.', 5, 'Bought this for my mother, she absolutely loves the gold accents!'),
('gelang-01', 'Siti Aminah', 4, 'Gelang sangat cantik tapi agak longgar sikit dekat tangan saya yang kecil.'),
('gelang-02', 'Devesh S.', 5, 'Very authentic. The beads are tightly woven together.'),
('gelang-02', 'Salmah Kassim', 5, 'Teringat kampung halaman di Kudat. Design manik yang sangat tulen.'),
('gelang-03', 'Sherry A.', 4, 'Mutiara bentuk baroque sangat eksklusif. Setiap biji tidak sama bentuk! Sangat berseni.'),
('rantai-01', 'Mariam J.', 5, 'Cangkuk emas betul dan mutiaranya bulat sekata. Memang berbaloi dengan harganya.'),
('rantai-01', 'Hajah Rosnah', 5, 'Kilauan mutiara sangat menyerlah. Dipakai semasa majlis kahwin anak saya.'),
('rantai-02', 'Grace T.', 4, 'Cantik dipakai dengan baju moden. Sangat ranggi dan menonjolkan identiti Borneo.'),
('rantai-03', 'Dayangku N.', 5, 'Labuh dan elegan. Sesuai pakai untuk dinner atau digabungkan dengan kebaya.'),
('cincin-01', 'Zulkhairi M.', 5, 'Mutiara air masin memang lain kilauannya! Sangat premium, mahkota cincin juga kukuh.'),
('cincin-01', 'Anita R.', 5, 'Cincin perak yang sangat berkualiti. Rekaan klasik yang tak lapuk dek zaman.'),
('cincin-02', 'Chloe Y.', 5, 'Simple and elegant. I wear it everyday and the pearl still shines nicely!'),
('cincin-03', 'Zaleha K.', 5, 'Mutiara pink semula jadi sangat manis warnanya. Ukiran perak sangat halus.');
