-- =============================================
-- PERFUME DATABASE SCHEMA (Fixed & Improved)
-- =============================================

CREATE DATABASE IF NOT EXISTS perfume_db
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

USE perfume_db;

-- =============================================
-- TABLES
-- =============================================

-- 1. Categories
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Subcategories
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 3. Products (renamed from `perfumes` for better structure)
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fragrance_type VARCHAR(255),
    tagline TEXT,
    top_notes TEXT,
    heart_notes TEXT,
    base_notes TEXT,
    price DECIMAL(10,2) NOT NULL,
    size VARCHAR(50) DEFAULT '100ml',
    image_url VARCHAR(255),
    sample_available TINYINT(1) DEFAULT 1,
    
    -- New useful fields for better organization
    category_id INT,
    subcategory_id INT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    FOREIGN KEY (subcategory_id) REFERENCES subcategories(id) ON DELETE SET NULL
);

-- 4. Users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================

INSERT INTO categories (name, slug) VALUES
('Women Perfumes', 'women-perfumes'),
('Men Perfumes', 'men-perfumes'),
('Unisex Perfumes', 'unisex-perfumes'),
('Body Fragrances', 'body-fragrances'),
('Home Fragrances', 'home-fragrances'),
('Gift Sets', 'gift-sets'),
('Travel & Mini Sizes', 'travel-mini-sizes')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================

INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Women's Perfumes (category_id = 1)
(1, 'Eau de Parfum (EDP)', 'edp', NULL),
(1, 'Eau de Toilette (EDT)', 'edt', NULL),
(1, 'Parfum / Extrait', 'extrait', NULL),
(1, 'Floral', 'floral', NULL),
(1, 'Fruity', 'fruity', NULL),
(1, 'Woody', 'woody', NULL),
(1, 'Oriental', 'oriental', NULL),

-- Men's Perfumes (category_id = 2)
(2, 'Eau de Parfum (EDP)', 'edp', NULL),
(2, 'Eau de Toilette (EDT)', 'edt', NULL),
(2, 'Woody', 'woody', NULL),
(2, 'Fresh', 'fresh', NULL),
(2, 'Citrus', 'citrus', NULL),
(2, 'Spicy', 'spicy', NULL),
(2, 'Aquatic', 'aquatic', NULL),

-- Unisex Perfumes (category_id = 3)
(3, 'Fresh', 'fresh', NULL),
(3, 'Woody', 'woody', NULL),
(3, 'Citrus', 'citrus', NULL),
(3, 'Amber', 'amber', NULL),
(3, 'Musk', 'musk', NULL),

-- Body Fragrances (category_id = 4)
(4, 'Body Mists', 'body-mists', NULL),
(4, 'Deodorants', 'deodorants', NULL),
(4, 'Body Sprays', 'body-sprays', NULL),
(4, 'Perfume Oils', 'perfume-oils', NULL),

-- Home Fragrances (category_id = 5)
(5, 'Scented Candles', 'scented-candles', NULL),
(5, 'Reed Diffusers', 'reed-diffusers', NULL),
(5, 'Room Sprays', 'room-sprays', NULL),
(5, 'Wax Melts', 'wax-melts', NULL),

-- Gift Sets (category_id = 6)
(6, 'Womens Gift Sets', 'womens-gift-sets', NULL),
(6, 'Mens Gift Sets', 'mens-gift-sets', NULL),
(6, 'Unisex Gift Sets', 'unisex-gift-sets', NULL),
(6, 'Travel Gift Sets', 'travel-gift-sets', NULL),

-- Travel & Mini Sizes (category_id = 7)
(7, 'Mini Bottles', 'mini-bottles', NULL),
(7, 'Rollerball Perfumes', 'rollerball', NULL),
(7, 'Travel Sprays', 'travel-sprays', NULL)
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);

-- =============================================
-- FINAL CHECK
-- =============================================
SELECT '✅ Database schema created successfully!' AS message;