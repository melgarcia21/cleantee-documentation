---
title: Configuration Guide
description: Configure CleanTee Online Booking System for your environment
---

# Configuration Guide

This guide covers all configuration options for the CleanTee Online Booking System, from basic setup to advanced customization.

## Environment Configuration

### Basic Settings

Edit your `.env` file to configure basic application settings:
```env
APP_NAME="CleanTee Online Booking"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
APP_TIMEZONE=Asia/Manila
APP_LOCALE=en
```

#### Environment Types

**Local Development (`APP_ENV=local`)**
- Full error reporting
- Debug mode enabled
- Detailed error pages
- No caching

**Staging (`APP_ENV=staging`)**
- Limited error reporting
- Debug mode enabled for testing
- SSL recommended
- Testing with production-like data

**Production (`APP_ENV=production`)**
- Minimal error reporting
- Debug mode disabled
- SSL required
- Performance optimizations enabled

### Debug Mode
```env
# Development
APP_DEBUG=true

# Production (MUST be false)
APP_DEBUG=false
```

> ⚠️ **Security Warning:** Never enable debug mode in production! It exposes sensitive information.

## Database Configuration

### MySQL Connection
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cleantee_db
DB_USERNAME=root
DB_PASSWORD=your_secure_password
```

### Database Options

**Character Set and Collation:**
```env
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci
```

**Connection Options:**
```env
DB_STRICT_MODE=true
DB_ENGINE=InnoDB
```

### Multiple Database Connections

If you need separate databases for different purposes:
```env
# Primary database
DB_CONNECTION=mysql
DB_DATABASE=cleantee_db

# Analytics database
DB_CONNECTION_ANALYTICS=mysql
DB_HOST_ANALYTICS=127.0.0.1
DB_DATABASE_ANALYTICS=cleantee_analytics
```

## Email Configuration

### SMTP Configuration

#### Using Mailtrap (Development)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@cleantee.local
MAIL_FROM_NAME="${APP_NAME}"
```

**Get Mailtrap credentials:**
1. Sign up at https://mailtrap.io
2. Create inbox
3. Copy SMTP credentials

#### Using Gmail (Development/Testing)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@cleantee.com
MAIL_FROM_NAME="${APP_NAME}"
```

**Enable Gmail SMTP:**
1. Enable 2-Factor Authentication
2. Generate App Password
3. Use App Password in `.env`

#### Using SendGrid (Production)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587
MAIL_USERNAME=apikey
MAIL_PASSWORD=your_sendgrid_api_key
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@cleantee.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Email Templates

Email templates are located in `resources/views/emails/`.

**Customize email templates:**
```bash
# Publish Laravel's default email templates
php artisan vendor:publish --tag=laravel-mail
```

## Payment Gateway Configuration

### GCash Integration
```env
GCASH_MERCHANT_ID=your_merchant_id
GCASH_MERCHANT_KEY=your_merchant_key
GCASH_API_URL=https://api.gcash.com/v1
GCASH_ENVIRONMENT=sandbox  # or 'production'
```

#### Getting GCash Credentials

**For Testing (Sandbox):**
1. Sign up for GCash Merchant account
2. Access Developer Portal
3. Create test application
4. Get sandbox credentials

**For Production:**
1. Complete merchant verification
2. Submit business documents
3. Wait for approval
4. Get production credentials

#### GCash Configuration File

Edit `config/payment.php`:
```php
'gcash' => [
    'merchant_id' => env('GCASH_MERCHANT_ID'),
    'merchant_key' => env('GCASH_MERCHANT_KEY'),
    'api_url' => env('GCASH_API_URL'),
    'environment' => env('GCASH_ENVIRONMENT', 'sandbox'),
    'timeout' => 30,
    'verify_ssl' => env('APP_ENV') === 'production',
],
```

## Business Settings

### Service Configuration

Edit `config/booking.php`:
```php
return [
    // Service hours
    'service_hours' => [
        'start' => '07:00',
        'end' => '18:00',
    ],
    
    // Booking constraints
    'minimum_advance_hours' => 24,
    'minimum_service_hours' => 3,
    'maximum_additional_hours' => 5,
    
    // Cleaner calculation
    'cleaner_per_sqm' => 50,
    'multi_floor_adjustment' => 1,
    
    // Service area
    'service_cities' => [
        'Manila',
        'Quezon City',
        'Caloocan',
        'Las Piñas',
        'Makati',
        'Malabon',
        'Mandaluyong',
        'Marikina',
        'Muntinlupa',
        'Navotas',
        'Parañaque',
        'Pasay',
        'Pasig',
        'Pateros',
        'San Juan',
        'Taguig',
        'Valenzuela',
    ],
];
```

### Loyalty Points Configuration
```php
// config/loyalty.php
return [
    'points_per_peso' => 0.01, // 1 point per ₱100
    'peso_per_point' => 1.00,  // 1 point = ₱1
    'expiration_months' => 12,  // Points expire after 1 year
    'minimum_redeem' => 10,     // Minimum points to redeem
];
```

### Pricing Configuration
```php
// config/pricing.php
return [
    'tax_rate' => 0.12, // 12% VAT
    'service_fee' => 0,  // No additional service fee
    
    // Discount rules
    'bulk_discount' => [
        'threshold' => 5000,     // ₱5000
        'percentage' => 0.05,    // 5% discount
    ],
];
```

## File Storage Configuration

### Local Storage
```env
FILESYSTEM_DISK=local
```

### Cloud Storage (AWS S3)
```env
FILESYSTEM_DISK=s3

AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DEFAULT_REGION=ap-southeast-1
AWS_BUCKET=cleantee-uploads
AWS_USE_PATH_STYLE_ENDPOINT=false
```

### File Upload Limits

Edit `config/filesystems.php`:
```php
'max_upload_size' => 5120, // 5MB in KB

'allowed_extensions' => [
    'documents' => ['pdf', 'doc', 'docx'],
    'images' => ['jpg', 'jpeg', 'png', 'gif'],
],
```

## Cache Configuration

### Cache Drivers

**File Cache (Development):**
```env
CACHE_DRIVER=file
```

**Redis Cache (Production):**
```env
CACHE_DRIVER=redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

**Memcached:**
```env
CACHE_DRIVER=memcached
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211
```

### Cache Configuration
```bash
# Cache configuration for production
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## Session Configuration
```env
SESSION_DRIVER=file
SESSION_LIFETIME=120  # Minutes
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null
SESSION_SECURE_COOKIE=false  # Set true for HTTPS
SESSION_SAME_SITE=lax
```

## Queue Configuration

### Queue Drivers

**Sync (Development):**
```env
QUEUE_CONNECTION=sync
```

**Database Queue:**
```env
QUEUE_CONNECTION=database
```

**Redis Queue (Production):**
```env
QUEUE_CONNECTION=redis
```

### Running Queue Workers
```bash
# Start queue worker
php artisan queue:work

# Start with supervisor (production)
php artisan queue:work --daemon --tries=3
```

## Logging Configuration
```env
LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug  # debug, info, notice, warning, error, critical, alert, emergency
```

### Log Channels

Edit `config/logging.php`:
```php
'channels' => [
    'stack' => [
        'driver' => 'stack',
        'channels' => ['single', 'slack'],
        'ignore_exceptions' => false,
    ],
    
    'single' => [
        'driver' => 'single',
        'path' => storage_path('logs/laravel.log'),
        'level' => env('LOG_LEVEL', 'debug'),
    ],
    
    'daily' => [
        'driver' => 'daily',
        'path' => storage_path('logs/laravel.log'),
        'level' => env('LOG_LEVEL', 'debug'),
        'days' => 14,
    ],
],
```

## Security Configuration

### Application Security
```env
# Generate new key
APP_KEY=  # Run: php artisan key:generate
```

### CORS Configuration

Edit `config/cors.php`:
```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

### HTTPS/SSL (Production)
```env
APP_URL=https://yourdomain.com
SESSION_SECURE_COOKIE=true
```

Force HTTPS in `app/Providers/AppServiceProvider.php`:
```php
public function boot()
{
    if ($this->app->environment('production')) {
        URL::forceScheme('https');
    }
}
```

## Performance Optimization

### Production Optimizations
```bash
# Cache everything
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Optimize autoloader
composer install --optimize-autoloader --no-dev

# Build frontend assets
npm run build
```

### Database Optimizations
```php
// config/database.php
'mysql' => [
    'options' => [
        PDO::ATTR_PERSISTENT => true,
        PDO::ATTR_EMULATE_PREPARES => true,
    ],
],
```

## Backup Configuration

### Database Backups

Install backup package:
```bash
composer require spatie/laravel-backup
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
```

Configure `config/backup.php`:
```php
'backup' => [
    'name' => 'cleantee_backup',
    'source' => [
        'files' => [
            'include' => [
                base_path(),
            ],
            'exclude' => [
                base_path('vendor'),
                base_path('node_modules'),
            ],
        ],
        'databases' => [
            'mysql',
        ],
    ],
    'destination' => [
        'disks' => [
            'local',
        ],
    ],
],
```

### Automated Backups

Add to `app/Console/Kernel.php`:
```php
protected function schedule(Schedule $schedule)
{
    $schedule->command('backup:run')->daily()->at('02:00');
}
```

## Monitoring Configuration

### Error Tracking (Sentry)
```env
SENTRY_LARAVEL_DSN=your_sentry_dsn
SENTRY_TRACES_SAMPLE_RATE=0.1
```

### Application Monitoring
```bash
# Install Laravel Telescope
composer require laravel/telescope
php artisan telescope:install
php artisan migrate
```

## Google Maps Configuration
```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Enable required APIs:
- Maps JavaScript API
- Places API
- Geocoding API

## Timezone Configuration
```env
APP_TIMEZONE=Asia/Manila
```

Supported timezones: https://www.php.net/manual/en/timezones.php

## Multi-Environment Setup

### Development Environment
```env
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
```

### Staging Environment
```env
APP_ENV=staging
APP_DEBUG=true
APP_URL=https://staging.cleantee.com
```

### Production Environment
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://cleantee.com
```

## Configuration Best Practices

### Security
- ✅ Never commit `.env` to version control
- ✅ Use strong passwords and keys
- ✅ Disable debug mode in production
- ✅ Enable HTTPS for production
- ✅ Regularly rotate credentials

### Performance
- ✅ Cache configuration in production
- ✅ Use Redis for caching and sessions
- ✅ Enable OPcache for PHP
- ✅ Optimize database queries
- ✅ Use CDN for static assets

### Maintenance
- ✅ Document custom configurations
- ✅ Keep backup of `.env` file
- ✅ Test configuration changes in staging
- ✅ Monitor logs regularly
- ✅ Update dependencies regularly

## Verification

### Test Configuration
```bash
# Check current configuration
php artisan config:show

# Test database connection
php artisan tinker
>>> DB::connection()->getPdo();

# Test email
php artisan tinker
>>> Mail::raw('Test email', function($msg) {
>>>     $msg->to('test@example.com')->subject('Test');
>>> });

# Check routes
php artisan route:list

# Verify environment
php artisan env
```

## Troubleshooting

### Configuration Not Loading
```bash
# Clear config cache
php artisan config:clear

# Rebuild config cache
php artisan config:cache
```

### Environment Variables Not Working

- Check `.env` file syntax (no spaces around `=`)
- Restart web server after changes
- Clear config cache
- Check file permissions

### Database Connection Issues

- Verify MySQL is running
- Check credentials in `.env`
- Test connection manually
- Check firewall rules

## Next Steps

With configuration complete:
1. Test all system features
2. Set up [deployment](/deployment/steps) process
3. Configure [monitoring](/maintenance/monitoring)
4. Review [security best practices](/deployment/checklist)

## Additional Resources

- [Laravel Configuration Docs](https://laravel.com/docs/configuration)
- [Environment Variables](https://laravel.com/docs/configuration#environment-configuration)
- [Security Best Practices](https://laravel.com/docs/security)