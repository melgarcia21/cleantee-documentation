---
title: Installation Guide
description: Complete step-by-step guide to install CleanTee Online Booking System
---

# Installation Guide

This guide will walk you through setting up CleanTee Online Booking System on your local development environment (Windows).

## Prerequisites

Before you begin, ensure you have the following installed:

### 1. PHP 8.2 or Higher

**Download & Install:**
1. Visit [PHP for Windows](https://windows.php.net/download/)
2. Download PHP 8.2+ (Non-Thread Safe recommended)
3. Extract to `C:\php`
4. Add to System PATH:
   - Right-click "This PC" → Properties
   - Advanced System Settings → Environment Variables
   - Edit "Path" variable, add `C:\php`
5. Verify installation:
```bash
php -v
```

**Required Extensions:**
Enable these in `php.ini`:
```ini
extension=openssl
extension=pdo_mysql
extension=mbstring
extension=xml
extension=curl
extension=fileinfo
extension=gd
extension=zip
```

### 2. Composer

**Download & Install:**
1. Visit [getcomposer.org](https://getcomposer.org/)
2. Download and run `Composer-Setup.exe`
3. Follow installation wizard
4. Verify installation:
```bash
composer --version
```

### 3. Node.js & NPM

**Download & Install:**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download LTS version (v18.x or v20.x)
3. Run installer with default settings
4. Verify installation:
```bash
node --version
npm --version
```

### 4. MySQL 8.0 or Higher

**Option A: Standalone MySQL**
1. Visit [MySQL Downloads](https://dev.mysql.com/downloads/installer/)
2. Download MySQL Installer
3. Install MySQL Server 8.0+
4. Set root password during installation
5. Start MySQL service

**Option B: XAMPP/WAMP/Laragon** 
- Includes PHP, MySQL, and Apache
- Easier for beginners
- Download from official websites

**Verify MySQL:**
```bash
mysql --version
```

### 5. Git (Optional but Recommended)

1. Visit [git-scm.com](https://git-scm.com/)
2. Download and install
3. Verify:
```bash
git --version
```

## Installation Steps

### Step 1: Clone or Download Project

**Option A: Using Git**
```bash
git clone [repository-url] cleantee
cd cleantee
```

**Option B: Download ZIP**
1. Download project ZIP file
2. Extract to desired folder
3. Open terminal in project folder

### Step 2: Install PHP Dependencies
```bash
composer install
```

This will install Laravel and all required PHP packages.

**If you encounter errors:**
```bash
# Clear composer cache
composer clear-cache

# Try again
composer install --no-cache
```

### Step 3: Install JavaScript Dependencies
```bash
npm install
```

This will install React, Vite, and all frontend dependencies.

**If you encounter errors:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Step 4: Environment Configuration

**1. Create Environment File**
```bash
# Copy the example file
cp .env.example .env
```

**2. Edit `.env` File**

Open `.env` in a text editor and configure:
```env
# Application
APP_NAME="CleanTee Online Booking"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cleantee_db
DB_USERNAME=root
DB_PASSWORD=your_mysql_password

# Mail (for email notifications)
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="noreply@cleantee.com"
MAIL_FROM_NAME="${APP_NAME}"

# GCash Payment Gateway (add later)
GCASH_MERCHANT_ID=
GCASH_MERCHANT_KEY=
GCASH_API_URL=

# Session & Cache
SESSION_DRIVER=file
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
```

### Step 5: Generate Application Key
```bash
php artisan key:generate
```

This creates a unique encryption key for your application.

### Step 6: Create Database

**Using MySQL Command Line:**
```bash
mysql -u root -p
```
```sql
CREATE DATABASE cleantee_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

**Using phpMyAdmin:**
1. Open phpMyAdmin
2. Click "New" to create database
3. Name: `cleantee_db`
4. Collation: `utf8mb4_unicode_ci`
5. Click "Create"

### Step 7: Run Database Migrations
```bash
php artisan migrate
```

This creates all database tables.

**Expected output:**
```
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (XX.XXms)
Migrating: 2024_01_01_000001_create_services_table
Migrated:  2024_01_01_000001_create_services_table (XX.XXms)
...
```

### Step 8: Seed Database with Sample Data
```bash
php artisan db:seed
```

This will create:
- Sample services (8 cleaning types)
- Sample shampooing items
- Admin user account
- Sample staff accounts  
- Sample customer accounts
- Sample bookings (optional)

**Default Admin Credentials:**
```
Email: admin@cleantee.com
Password: password123
```

**Default Staff Credentials:**
```
Email: staff@cleantee.com
Password: password123
```

**Default Customer Credentials:**
```
Email: customer@cleantee.com
Password: password123
```

> ⚠️ **Important:** Change these passwords before deploying to production!

### Step 9: Create Storage Link
```bash
php artisan storage:link
```

This creates a symbolic link from `public/storage` to `storage/app/public` for file uploads.

### Step 10: Compile Frontend Assets
```bash
npm run dev
```

This starts the Vite development server. Keep this running in a separate terminal.

**For production build:**
```bash
npm run build
```

### Step 11: Start Laravel Development Server

Open a **new terminal** (keep Vite running) and run:
```bash
php artisan serve
```

The application will be available at: **http://localhost:8000**

## Verify Installation

### 1. Access the Application

Open your browser and navigate to:
```
http://localhost:8000
```

You should see the CleanTee welcome page.

### 2. Test Login

**Admin Login:**
```
URL: http://localhost:8000/login
Email: admin@cleantee.com
Password: password123
```

After login, you should be redirected to the admin dashboard.

**Staff Login:**
```
Email: staff@cleantee.com
Password: password123
```

**Customer Login:**
```
Email: customer@cleantee.com
Password: password123
```

### 3. Check Database

Open phpMyAdmin or MySQL command line:
```sql
USE cleantee_db;
SHOW TABLES;

-- Should display 14 tables
SELECT COUNT(*) FROM services;  -- Should return 8
SELECT COUNT(*) FROM users;     -- Should return 3+
```

## Common Issues & Solutions

### Issue 1: "PDOException: could not find driver"

**Solution:** Enable PDO MySQL extension in `php.ini`
```ini
extension=pdo_mysql
```
Restart your computer or PHP service.

### Issue 2: "Permission denied" errors

**Solution (Windows):**
```bash
# Run as Administrator
php artisan cache:clear
php artisan config:clear
```

### Issue 3: "npm ERR! code ELIFECYCLE"

**Solution:**
```bash
# Delete node_modules
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

### Issue 4: "Access denied for user 'root'@'localhost'"

**Solution:**
- Check MySQL is running
- Verify password in `.env` matches MySQL root password
- Try creating a new MySQL user:
```sql
CREATE USER 'cleantee'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON cleantee_db.* TO 'cleantee'@'localhost';
FLUSH PRIVILEGES;
```

Then update `.env`:
```env
DB_USERNAME=cleantee
DB_PASSWORD=password123
```

### Issue 5: Vite fails to start

**Solution:**
```bash
# Check port 5173 is not in use
netstat -ano | findstr :5173

# If in use, kill the process or change Vite port in vite.config.js
```

### Issue 6: 404 errors after deployment

**Solution:**
```bash
# Clear and rebuild everything
php artisan route:clear
php artisan config:clear
php artisan cache:clear
php artisan view:clear
composer dump-autoload
```

## Development Tools (Optional)

### 1. Laravel Telescope (Debugging)
```bash
composer require laravel/telescope --dev
php artisan telescope:install
php artisan migrate
```

Access at: `http://localhost:8000/telescope`

### 2. Laravel Debugbar
```bash
composer require barryvdh/laravel-debugbar --dev
```

Automatically shows debug information at bottom of pages.

### 3. IDE Helper for Better Autocomplete
```bash
composer require --dev barryvdh/laravel-ide-helper
php artisan ide-helper:generate
```

## Next Steps

After successful installation:

1. **Explore the Application**
   - Test all three user roles
   - Try creating a booking
   - Check admin features

2. **Review Documentation**
   - [System Architecture](/architecture/overview)
   - [Database Schema](/database/schema)
   - [User Guides](/user-guides/customer/getting-started)

3. **Start Development**
   - [Developer Guide](/developer/setup)
   - [Code Standards](/developer/standards)
   - [Technical Docs](/technical/backend/structure)

4. **Configure Payment Gateway**
   - Set up GCash credentials
   - Test payment flow
   - Configure webhooks

## Deployment Checklist

Before deploying to production:

- [ ] Change all default passwords
- [ ] Set `APP_ENV=production`
- [ ] Set `APP_DEBUG=false`
- [ ] Configure real mail server
- [ ] Set up GCash production credentials
- [ ] Enable HTTPS/SSL
- [ ] Set up automated backups
- [ ] Configure proper file permissions
- [ ] Enable Laravel optimizations:
```bash
  php artisan config:cache
  php artisan route:cache
  php artisan view:cache
```

See [Deployment Guide](/deployment/steps) for detailed instructions.

## Getting Help

If you encounter issues:

1. Check this troubleshooting section
2. Review Laravel documentation
3. Search GitHub issues
4. Ask in project discussions

## Quick Reference

### Start Development Servers
```bash
# Terminal 1: Frontend (Vite)
npm run dev

# Terminal 2: Backend (Laravel)
php artisan serve
```

### Stop Servers
- Press `Ctrl+C` in each terminal

### Database Commands
```bash
# Fresh migration
php artisan migrate:fresh

# Fresh migration with seeding
php artisan migrate:fresh --seed

# Rollback last migration
php artisan migrate:rollback
```

### Clear Cache
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

---

Congratulations! You've successfully installed CleanTee Online Booking System. 🎉