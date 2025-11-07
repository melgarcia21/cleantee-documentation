---
title: System Requirements
description: Hardware, software, and technical requirements for CleanTee Online Booking System
---

# System Requirements

This page outlines all requirements for running the CleanTee Online Booking System in development and production environments.

## Development Environment Requirements

### Hardware Requirements

#### Minimum Specifications
- **Processor:** Dual-core CPU (2 GHz or higher)
- **RAM:** 4 GB
- **Storage:** 5 GB free disk space
- **Network:** Internet connection for package downloads

#### Recommended Specifications
- **Processor:** Quad-core CPU (2.5 GHz or higher)
- **RAM:** 8 GB or more
- **Storage:** 10 GB free SSD storage
- **Network:** Broadband internet connection

### Software Requirements

#### Operating System

**Supported:**
- ✅ Windows 10/11 (64-bit)
- ✅ macOS 10.15 (Catalina) or later
- ✅ Ubuntu 20.04 LTS or later
- ✅ Other Linux distributions (with compatible packages)

**Note:** Instructions in this documentation focus on Windows, but the system works on all platforms.

#### Required Software

**1. PHP 8.2 or Higher**
- **Version:** PHP 8.2, 8.3 recommended
- **Architecture:** 64-bit recommended
- **Download:** https://windows.php.net/download/

**Required PHP Extensions:**
```
- openssl
- pdo_mysql
- mbstring
- tokenizer
- xml
- ctype
- json
- bcmath
- fileinfo
- gd (for image processing)
- zip
- curl
```

**Check PHP Version:**
```bash
php -v
# Should output: PHP 8.2.x or higher
```

**Check PHP Extensions:**
```bash
php -m
# Should list all required extensions
```

**2. Composer 2.x**
- **Version:** Composer 2.5 or higher
- **Purpose:** PHP dependency management
- **Download:** https://getcomposer.org/download/

**Check Composer Version:**
```bash
composer --version
# Should output: Composer version 2.x.x
```

**3. Node.js & NPM**
- **Node.js Version:** 18.x LTS or 20.x LTS
- **NPM Version:** 9.x or higher (comes with Node.js)
- **Purpose:** JavaScript dependency management and build tools
- **Download:** https://nodejs.org/

**Check Versions:**
```bash
node --version
# Should output: v18.x.x or v20.x.x

npm --version
# Should output: 9.x.x or higher
```

**4. MySQL 8.0 or Higher**
- **Version:** MySQL 8.0, 8.1, or 8.2
- **Purpose:** Database server
- **Alternatives:** MariaDB 10.6+ also supported
- **Download:** https://dev.mysql.com/downloads/installer/

**Check MySQL Version:**
```bash
mysql --version
# Should output: mysql Ver 8.0.x or higher
```

**MySQL Configuration:**
- Default port: 3306
- Character set: utf8mb4
- Collation: utf8mb4_unicode_ci
- Storage engine: InnoDB

**5. Git (Recommended)**
- **Version:** Latest stable version
- **Purpose:** Version control
- **Download:** https://git-scm.com/downloads

**Check Git Version:**
```bash
git --version
# Should output: git version 2.x.x
```

#### Optional but Recommended

**1. Database Management Tools**
- phpMyAdmin (web-based)
- MySQL Workbench (desktop)
- HeidiSQL (Windows)
- TablePlus (macOS)
- DBeaver (cross-platform)

**2. Code Editors/IDEs**
- Visual Studio Code (recommended)
- PHPStorm
- Sublime Text
- Atom

**3. API Testing Tools**
- Postman
- Insomnia
- Thunder Client (VS Code extension)

**4. Browser Developer Tools**
- Chrome DevTools
- Firefox Developer Tools
- React Developer Tools extension

### Development Tools & Extensions

#### VS Code Extensions (Recommended)
```
- PHP Intelephense
- Laravel Blade Snippets
- Laravel Extra Intellisense
- Laravel goto view
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens
- Auto Rename Tag
- Path Intellisense
```

#### Browser Extensions
```
- React Developer Tools (Chrome/Firefox)
- Vue.js devtools (for Inertia.js)
- JSON Viewer
- Wappalyzer (technology detection)
```

## Production Environment Requirements

### Server Requirements

#### Minimum Server Specifications
- **Processor:** 2 CPU cores
- **RAM:** 2 GB
- **Storage:** 10 GB SSD
- **Bandwidth:** 1 TB/month
- **Concurrent Users:** Up to 50

#### Recommended Server Specifications
- **Processor:** 4 CPU cores
- **RAM:** 4 GB or more
- **Storage:** 20 GB SSD
- **Bandwidth:** Unmetered
- **Concurrent Users:** 100+

### Server Software

**Web Server (Choose one):**
- ✅ Apache 2.4+ with mod_rewrite
- ✅ Nginx 1.18+
- ✅ LiteSpeed

**PHP Configuration:**
```ini
PHP >= 8.2
memory_limit = 256M
max_execution_time = 300
post_max_size = 20M
upload_max_filesize = 20M
```

**MySQL Configuration:**
```ini
MySQL >= 8.0
max_connections = 150
innodb_buffer_pool_size = 256M
query_cache_size = 64M
```

**SSL/TLS:**
- Valid SSL certificate (Let's Encrypt recommended)
- HTTPS enforced
- TLS 1.2 or higher

### Hosting Platforms

#### Supported Hosting Types

**Shared Hosting**
- ⚠️ Must support PHP 8.2+, MySQL 8.0+, and SSH access
- ⚠️ Limited performance for high traffic
- ✅ Cost-effective for small deployments

**VPS (Virtual Private Server)**
- ✅ Full control over environment
- ✅ Scalable resources
- ✅ Better performance
- Examples: DigitalOcean, Linode, Vultr

**Cloud Platforms**
- ✅ Auto-scaling capabilities
- ✅ High availability
- ✅ Managed services
- Examples: AWS, Google Cloud, Azure

**Platform as a Service (PaaS)**
- ✅ Easy deployment
- ✅ Automated management
- ✅ Built-in scaling
- Examples: Laravel Forge, Ploi, Heroku

#### Recommended Hosting Providers

**For Development/Staging:**
- DigitalOcean (Droplet: $6/month)
- Vultr (Cloud Compute: $6/month)
- AWS Lightsail (from $5/month)

**For Production:**
- Laravel Forge + DigitalOcean
- AWS EC2 + RDS
- Google Cloud Compute Engine
- Azure Virtual Machines

### Domain & DNS

**Domain Requirements:**
- Custom domain name
- SSL certificate
- DNS management access

**DNS Records Needed:**
```
A Record: yourdomain.com → Server IP
CNAME: www.yourdomain.com → yourdomain.com
```

## Client Requirements (End Users)

### Browser Requirements

#### Supported Browsers

**Desktop:**
- ✅ Chrome 100+ (recommended)
- ✅ Firefox 100+
- ✅ Safari 15+
- ✅ Edge 100+
- ❌ Internet Explorer (not supported)

**Mobile:**
- ✅ Chrome for Android (latest)
- ✅ Safari for iOS (iOS 15+)
- ✅ Samsung Internet (latest)
- ✅ Firefox for Android (latest)

#### Browser Features Required
- JavaScript enabled
- Cookies enabled
- Local Storage enabled
- WebSocket support
- CSS3 support
- HTML5 support

### Device Requirements

#### Desktop/Laptop
- **Screen Resolution:** 1366x768 minimum, 1920x1080 recommended
- **RAM:** 2 GB minimum, 4 GB recommended
- **Internet Speed:** 1 Mbps minimum, 5 Mbps recommended

#### Tablet
- **Screen Size:** 7" minimum, 10" recommended
- **RAM:** 2 GB minimum, 3 GB recommended
- **Internet Speed:** 1 Mbps minimum, 5 Mbps recommended

#### Mobile Phone
- **Screen Size:** 4.7" minimum, 5.5" recommended
- **RAM:** 2 GB minimum, 4 GB recommended
- **Internet Speed:** 512 Kbps minimum, 3 Mbps recommended

### Internet Connection

**Minimum:**
- Download: 512 Kbps
- Upload: 256 Kbps
- Latency: <200ms

**Recommended:**
- Download: 5 Mbps
- Upload: 1 Mbps
- Latency: <50ms

**Data Usage:**
- Average page load: 500 KB - 2 MB
- Typical session: 5-10 MB
- Monthly usage (active user): 100-500 MB

## Third-Party Services

### Required Services

**1. GCash Payment Gateway**
- Merchant account required
- API credentials needed
- Test/Sandbox mode available
- Production approval process

**Contact:** https://www.gcash.com/business/

**2. Google Maps API** (Optional but recommended)
- Google Cloud account
- Maps JavaScript API enabled
- Places API enabled
- Geocoding API enabled

**Pricing:** Free tier available (up to $200/month credit)

### Optional Services

**Email Service Providers:**
- SendGrid (12,000 emails/month free)
- Mailgun (5,000 emails/month free)
- Amazon SES (pay as you go)
- Postmark (100 emails/month free)

**SMS Service Providers:**
- Twilio
- Semaphore (Philippines)
- Vonage (formerly Nexmo)

**Monitoring & Analytics:**
- Google Analytics (free)
- Sentry (error tracking)
- New Relic (performance monitoring)
- LogRocket (session replay)

## Security Requirements

### SSL/TLS Certificate
- Required for production
- Free option: Let's Encrypt
- Commercial options: Sectigo, DigiCert

### Firewall Rules
```
Allow: HTTP (80) - Redirect to HTTPS
Allow: HTTPS (443)
Allow: SSH (22) - IP restricted
Block: All other ports
```

### Backup Requirements
- Daily automated backups
- Database backup retention: 30 days
- File backup retention: 7 days
- Off-site backup storage recommended

### Security Software
- Fail2ban (intrusion prevention)
- ModSecurity (web application firewall)
- rkhunter (rootkit detection)
- ClamAV (antivirus)

## Performance Requirements

### Application Performance
- Page load time: <3 seconds
- Time to First Byte (TTFB): <500ms
- First Contentful Paint (FCP): <1.5 seconds
- Time to Interactive (TTI): <3.5 seconds

### Database Performance
- Query execution time: <100ms average
- Connection pool: 10-50 connections
- Cache hit ratio: >90%

### Server Uptime
- Target: 99.9% uptime
- Maximum downtime: 8.76 hours/year
- Planned maintenance windows allowed

## Scalability Considerations

### Current Capacity
- 50 concurrent users
- 1,000 bookings/month
- 50 staff members
- 10,000 customers

### Growth Support
- Horizontal scaling capability
- Load balancer support
- Database replication
- CDN integration
- Caching layer (Redis/Memcached)

## Compliance & Legal

### Data Protection
- GDPR compliance capability
- Data Privacy Act of 2012 (Philippines)
- User data encryption
- Privacy policy implementation
- Terms of service

### Accessibility
- WCAG 2.1 Level AA target
- Screen reader compatible
- Keyboard navigation support
- High contrast mode

## Summary Checklist

### Development Setup Checklist
- [ ] PHP 8.2+ installed and configured
- [ ] Composer 2.x installed
- [ ] Node.js 18+ and NPM installed
- [ ] MySQL 8.0+ installed and running
- [ ] Git installed (optional)
- [ ] Code editor installed
- [ ] All PHP extensions enabled
- [ ] MySQL credentials ready
- [ ] Internet connection active

### Production Deployment Checklist
- [ ] Server meets minimum specifications
- [ ] Web server configured (Apache/Nginx)
- [ ] PHP 8.2+ installed on server
- [ ] MySQL 8.0+ installed on server
- [ ] SSL certificate installed
- [ ] Domain name configured
- [ ] DNS records set up
- [ ] Firewall rules configured
- [ ] Backup system in place
- [ ] Monitoring tools installed
- [ ] GCash account approved (if needed)

## Next Steps

With requirements verified:
1. Proceed to [Installation Guide](/getting-started/installation)
2. Follow [Quick Start Guide](/getting-started/quick-start) for rapid setup
3. Review [Configuration Guide](/getting-started/configuration) for customization

## Need Help?

**System doesn't meet requirements?**
- Check for alternative software versions
- Consider using XAMPP/WAMP/Laragon bundles
- Use Docker for isolated environment
- Try cloud development environments (GitHub Codespaces, Gitpod)

**Hardware limitations?**
- Use lighter code editor (Sublime, Vim)
- Close unnecessary applications
- Increase virtual memory/swap
- Consider cloud development server