---
title: Quick Start Guide
description: Get CleanTee up and running in 15 minutes
---

# Quick Start Guide

Get the CleanTee Online Booking System running on your local machine in **under 15 minutes**. This guide assumes you have basic familiarity with web development and command line tools.

## Prerequisites Check

Before starting, ensure you have:

- ✅ PHP 8.2 or higher
- ✅ Composer
- ✅ Node.js 18+ and npm
- ✅ MySQL 8.0 or higher
- ✅ Git (optional but recommended)

**Don't have these installed?** See the [System Requirements](/getting-started/requirements) page.

## Installation Steps

### Step 1: Get the Code (1 minute)

**Option A: Clone from Git**
```bash
git clone [repository-url] cleantee
cd cleantee
```

**Option B: Download ZIP**
- Download and extract the project
- Open terminal in the project folder

### Step 2: Install Dependencies (3-5 minutes)

**Install PHP packages:**
```bash
composer install
```

**Install JavaScript packages:**
```bash
npm install
```

### Step 3: Configure Environment (2 minutes)

**Copy environment file:**
```bash
cp .env.example .env
```

**Generate application key:**
```bash
php artisan key:generate
```

**Edit `.env` file** with your database credentials:
```env
DB_DATABASE=cleantee_db
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
```

### Step 4: Create Database (1 minute)

**Using MySQL command line:**
```bash
mysql -u root -p
```
```sql
CREATE DATABASE cleantee_db;
EXIT;
```

**Or use phpMyAdmin:**
- Open phpMyAdmin
- Click "New"
- Database name: `cleantee_db`
- Click "Create"

### Step 5: Run Migrations & Seed Data (2 minutes)

**Create tables and sample data:**
```bash
php artisan migrate --seed
```

This creates:
- All 14 database tables
- 8 cleaning service types
- Sample user accounts
- Test bookings (optional)

### Step 6: Link Storage (30 seconds)
```bash
php artisan storage:link
```

### Step 7: Start Development Servers (1 minute)

**Terminal 1 - Backend:**
```bash
php artisan serve
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 8: Access the Application (30 seconds)

Open your browser and visit:
```
http://localhost:8000
```

## Test Accounts

Use these credentials to explore different user roles:

### Administrator
```
Email: admin@cleantee.com
Password: password123
```

### Staff Member
```
Email: staff@cleantee.com
Password: password123
```

### Customer
```
Email: customer@cleantee.com
Password: password123
```

> ⚠️ **Important:** Change these passwords before deploying to production!

## First Steps After Installation

### As Administrator

1. **Login** at `http://localhost:8000/login`
2. **View Dashboard** - See system overview
3. **Check Pending Bookings** - Review any test bookings
4. **Explore Staff List** - View available staff members
5. **Try Assigning a Booking** - Practice staff assignment

### As Customer

1. **Login** with customer credentials
2. **Browse Services** - View available cleaning services
3. **Create a Booking** - Try the 3-step booking wizard
4. **Check Loyalty Points** - View your points balance
5. **View My Bookings** - See booking history

### As Staff

1. **Login** with staff credentials
2. **View Dashboard** - See assigned bookings
3. **Try Clock In** - Test attendance system
4. **View Schedule** - Check today's assignments
5. **Check Feedback** - View performance ratings

## Verify Installation

### Check Database

Confirm tables were created:
```bash
php artisan tinker
```
```php
DB::select('SHOW TABLES');
// Should show 14 tables

App\Models\Service::count();
// Should return 8

App\Models\User::count();
// Should return 3 or more
```

### Check File Permissions

Ensure these directories are writable:
```bash
chmod -R 775 storage bootstrap/cache
```

### Test Routes

Visit these URLs to verify setup:
- `http://localhost:8000` - Landing page
- `http://localhost:8000/login` - Login page
- `http://localhost:8000/register` - Registration page

## Common Issues

### Issue: "Database connection refused"

**Solution:**
1. Verify MySQL is running
2. Check credentials in `.env`
3. Confirm database exists:
```bash
mysql -u root -p -e "SHOW DATABASES;"
```

### Issue: "npm ERR! code ELIFECYCLE"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: "Class not found"

**Solution:**
```bash
composer dump-autoload
php artisan config:clear
php artisan cache:clear
```

### Issue: Vite not connecting

**Solution:**
1. Check port 5173 is not in use
2. Restart Vite dev server:
```bash
npm run dev
```

## Next Steps

Now that your installation is working:

### Learn the System
- Read [System Overview](/overview/background)
- Understand [Key Features](/overview/features)
- Review [User Roles](/overview/users)

### Explore Features
- Try creating a complete booking
- Test the payment flow (test mode)
- Experiment with staff assignment
- Generate a sample report

### Configure for Your Needs
- Set up [GCash payment gateway](/getting-started/configuration#payment-gateway)
- Configure [email settings](/getting-started/configuration#email-configuration)
- Customize [business settings](/getting-started/configuration#business-settings)

### Development
- Read [Technical Documentation](/technical/backend/structure)
- Review [Code Standards](/developer/standards)
- Explore [Database Schema](/database/schema)
- Check [API Endpoints](/api/authentication)

## Development Workflow

### Daily Development

**Start servers:**
```bash
# Terminal 1
php artisan serve

# Terminal 2
npm run dev
```

**Stop servers:**
Press `Ctrl+C` in each terminal

### Making Changes

**After modifying models or database:**
```bash
php artisan migrate:fresh --seed
```

**After modifying frontend code:**
Vite will auto-reload (already running with `npm run dev`)

**Clear caches if needed:**
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## Quick Reference Commands

### Laravel Commands
```bash
php artisan serve              # Start Laravel dev server
php artisan migrate            # Run migrations
php artisan migrate:fresh      # Drop all tables and re-migrate
php artisan db:seed            # Run seeders
php artisan tinker             # Interactive PHP console
php artisan route:list         # List all routes
php artisan make:model Post    # Create model
php artisan make:controller    # Create controller
```

### NPM Commands
```bash
npm run dev         # Start Vite dev server
npm run build       # Build for production
npm run preview     # Preview production build
```

### Database Commands
```bash
mysql -u root -p                    # Login to MySQL
mysql -u root -p cleantee_db        # Login to specific database
mysqldump -u root -p cleantee_db > backup.sql  # Backup database
```

## Tips for Success

### Development Best Practices

1. **Keep Servers Running** - Leave both terminals open while developing
2. **Watch for Errors** - Check both terminal windows for error messages
3. **Clear Caches** - When things don't work, try clearing caches
4. **Use Git** - Commit changes frequently
5. **Test Regularly** - Verify changes in browser immediately

### Learning Path

**Week 1: Get Familiar**
- Install and explore the system
- Test all three user roles
- Create sample bookings
- Try all major features

**Week 2: Understand Architecture**
- Read technical documentation
- Review database schema
- Explore code structure
- Understand business logic

**Week 3: Make Changes**
- Modify existing features
- Add new functionality
- Customize UI/UX
- Write tests

**Week 4: Deploy**
- Prepare for production
- Configure server
- Set up domain
- Deploy application

## Getting Help

### Documentation
- [Full Installation Guide](/getting-started/installation) - Detailed setup steps
- [Configuration Guide](/getting-started/configuration) - System configuration
- [Troubleshooting](/maintenance/troubleshooting) - Common problems and solutions

### Resources
- **GitHub Repository** - Source code and issues
- **Laravel Docs** - https://laravel.com/docs
- **React Docs** - https://react.dev
- **Inertia.js Docs** - https://inertiajs.com

### Support
- Create a GitHub issue for bugs
- Check existing issues for solutions
- Contact project maintainers

## Summary

You should now have:
- ✅ CleanTee running locally
- ✅ Database with sample data
- ✅ Test accounts to explore features
- ✅ Both frontend and backend servers running
- ✅ Understanding of basic commands

**Total Time:** ~15 minutes

Ready to dive deeper? Continue with:
- [System Architecture](/architecture/overview)
- [Database Design](/database/schema)
- [User Guides](/user-guides/customer/getting-started)
- [Developer Guide](/developer/setup)

Happy coding! 🚀