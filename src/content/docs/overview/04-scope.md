---
title: Scope & Limitations
description: Defining what's included and excluded from the CleanTee Online Booking System
---

# Scope & Limitations

## System Scope

### Core Functionality (Included)

#### 1. Customer Booking Management

**Service Selection & Booking**

- Browse 8 cleaning service types
- 3-step booking wizard
- Service customization options
- Add-on item selection (shampooing)
- Area size input and cleaner calculation

**Booking Lifecycle Management**

- Create new bookings
- View booking history
- Track booking status in real-time
- Request booking reschedule
- Cancel bookings (within policy)

**Payment Processing**

- GCash payment integration
- Cash on service option
- Digital receipt generation
- Payment history tracking

**Loyalty Rewards**

- Points earning (1 point per ₱100 spent)
- Points redemption system
- Points balance tracking
- Points expiration management (1-year validity)

**Feedback & Ratings**

- 5-star rating system
- Written review submission
- Anonymous feedback option
- View own feedback history

#### 2. Staff Management

**Digital Attendance System**

- Clock in/out functionality
- Automated hours calculation
- Attendance history
- Break time tracking
- Attendance reports

**Assignment Management**

- View assigned bookings
- Access customer information
- View service locations
- Update booking status
- Report issues

**Performance Visibility**

- View received feedback
- Track personal ratings
- Performance metrics
- Service completion history

#### 3. Administrative Functions

**Booking Operations**

- View all bookings
- Approve pending bookings
- Assign staff to bookings
- Monitor booking progress
- Handle cancellations
- Process refunds

**Staff Oversight**

- Monitor staff availability
- View real-time attendance
- Track performance metrics
- Generate staff reports
- Manage staff assignments

**Reschedule Management**

- Review reschedule requests
- Approve or reject requests
- Communicate decisions
- Track reschedule patterns

**Reporting & Analytics**

- Booking statistics
- Revenue reports
- Staff performance reports
- Customer satisfaction metrics
- Service trend analysis

#### 4. System Features

**Authentication & Authorization**

- User registration
- Secure login/logout
- Password reset
- Email verification
- Role-based access control (RBAC)

**User Profile Management**

- Personal information editing
- Contact details management
- Address management
- Profile photo upload

**Notification System**

- Booking confirmations
- Status updates
- Assignment notifications
- Payment confirmations
- Reschedule approvals

**Activity Logging**

- User action tracking
- System event logging
- Audit trail maintenance
- Security monitoring

## Service Coverage

### Geographic Scope

**Service Area: Metro Manila Only**

The system is designed specifically for CleanTee's service area in Metro Manila, Philippines.

**Covered Cities (17):**

1. Manila
2. Quezon City
3. Caloocan
4. Las Piñas
5. Makati
6. Malabon
7. Mandaluyong
8. Marikina
9. Muntinlupa
10. Navotas
11. Parañaque
12. Pasay
13. Pasig
14. Pateros
15. San Juan
16. Taguig
17. Valenzuela

**Implementation:**

- City dropdown validation in booking forms
- Service area restrictions enforced
- No bookings accepted outside Metro Manila

## System Limitations

### 1. Payment Gateway Restrictions

**Current Implementation:**

- GCash payment integration only
- Cash on service option

**Future Enhancements:**

- Credit/Debit cards
- PayPal
- Bank transfers
- Other e-wallets (PayMaya, GrabPay, etc.)

**Rationale:** Focus on most popular payment method in the Philippines; other gateways require additional integration complexity and fees.

### 2. Financial Management

**Not Included:**

- Full payroll system
- Salary calculations
- Tax computations
- Benefits management
- Accounting modules
- Financial statements
- Expense tracking

**What's Included:**

- Attendance tracking (hours worked)
- Service completion records
- Payment tracking for bookings

**Rationale:** Complex payroll and accounting functions are outside project scope; these should be handled by dedicated accounting software.

### 3. Inventory Management

**Not Included:**

- Cleaning supplies inventory
- Equipment tracking
- Supply ordering system
- Stock level monitoring
- Vendor management

**Rationale:** Focus is on service booking and workforce management, not supply chain management.

### 4. Marketing & CRM

**Limited Implementation:**

- Basic loyalty program
- Customer feedback collection

**Not Included:**

- Email marketing campaigns
- SMS marketing
- Customer segmentation
- Marketing automation
- Lead management
- Campaign tracking

**Rationale:** Marketing tools require separate specialized platforms for optimal functionality.

### 5. Advanced Features

**Not in Current Scope:**

**Messaging System**

- In-app chat between customers and staff
- Real-time messaging
- File sharing in chat

**Video Calls**

- Video consultations
- Virtual service estimates

**IoT Integration**

- Smart device connections
- Equipment monitoring sensors

**Mobile Applications**

- Native iOS app
- Native Android app
- Responsive web design (works on mobile browsers)

**Multi-Language Support**

- Language selection
- Multiple language interfaces
- English interface only

**Rationale:** These features add significant complexity and are not essential for MVP launch.

### 6. Geographic Expansion

**Current Limitation:**

- Metro Manila service area only
- Provincial coverage
- Multi-branch management
- Franchise support

**Future Scalability:**
The architecture supports future expansion, but initial deployment is Metro Manila only.

### 7. Service Types

**Included Services:**

1. Standard Cleaning
2. Deep Cleaning
3. Post-Construction Cleaning
4. Move In/Out Cleaning
5. Office Cleaning
6. Carpet Cleaning
7. Window Cleaning
8. Upholstery Cleaning

**Add-on Services:**

- Shampooing (carpets, upholstery, mattress)

**Not Included:**

- Specialized services (pest control, disinfection)
- Maintenance contracts
- Emergency services
- Industrial cleaning

**Rationale:** Focus on core residential and commercial cleaning services.

### 8. Booking Constraints

**Time Restrictions:**

- **Minimum advance booking:** 24 hours
- **Service hours:** 7:00 AM - 6:00 PM only
- **No same-day bookings**
- **No overnight services**

**Service Duration:**

- **Minimum:** 3 hours
- **Maximum additional hours:** 5 hours
- **No multi-day bookings** (each day requires separate booking)

**Reschedule Policy:**

- **Must request at least 24 hours before service**
- **Subject to admin approval**
- **Limited to reasonable requests**

**Cancellation Policy:**

- **Free cancellation:** 24+ hours before service
- **Late cancellation:** May incur fees (policy TBD)

### 9. User Role Limitations

**Customer Limitations:**

- Cannot view other customers' bookings
- Cannot directly message staff
- Cannot override admin decisions
- Cannot modify staff assignments

**Staff Limitations:**

- Cannot modify booking details
- Cannot assign themselves to bookings
- Cannot approve reschedule requests
- Cannot access admin reports

**Admin Limitations:**

- One admin account per organization (in MVP)
- Cannot delegate admin privileges (in MVP)

### 10. Data & Reporting

**Current Capabilities:**

- Basic booking reports
- Staff attendance reports
- Performance summaries

**Advanced Analytics (Not Included):**

- Predictive analytics
- Machine learning insights
- Advanced data visualization
- Custom report builder
- Real-time dashboards with complex metrics

**Rationale:** Focus on essential reporting for launch; advanced analytics require significant additional development.

### 11. Integration Limitations

**Current Integrations:**

- GCash payment gateway
- Google Maps (for locations)

**Not Integrated:**

- Accounting software (QuickBooks, Xero)
- CRM systems
- Calendar apps (Google Calendar, Outlook)
- Social media platforms
- Third-party marketing tools

### 12. Performance Considerations

**Designed For:**

- 50 concurrent users
- ~1,000 bookings per month
- Up to 50 staff members
- Metro Manila geographic area

**May Require Optimization For:**

- 100+ concurrent users
- 5,000+ bookings per month
- 100+ staff members
- National coverage

## Technical Constraints

### 1. Browser Support

**Supported:**

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

**Not Guaranteed:**

- Internet Explorer
- Older browser versions

### 2. Device Support

**Optimized For:**

- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667 and up)

**Limited Support:**

- Very small screens (<375px)
- Very large screens (>2560px)

### 3. System Requirements

**Minimum:**

- Stable internet connection
- Modern web browser
- JavaScript enabled
- Cookies enabled

## Security Scope

### Included Security Measures

- Password hashing (bcrypt)
- CSRF protection
- SQL injection prevention
- XSS attack prevention
- Input validation
- Role-based access control
- Session management
- Activity logging

### Not Included (Production Deployment Needed)

- SSL/HTTPS certificate
- Rate limiting
- DDoS protection
- Intrusion detection
- Security audits
- Penetration testing

## Future Enhancements

These features are explicitly out of current scope but may be considered for future versions:

### Phase 2 Enhancements

- Mobile native apps (iOS/Android)
- Additional payment gateways
- In-app messaging
- Multi-language support
- Advanced analytics dashboard
- Franchise/multi-branch support

### Phase 3 Enhancements

- AI-powered scheduling optimization
- Predictive maintenance
- Customer segmentation & marketing automation
- Integration marketplace
- Open API for third-party integrations

## Development Methodology Scope

**Approach:** Agile/Scrum

**Included:**

- Iterative development
- Sprint planning
- Regular testing
- User feedback incorporation

**Not Included:**

- Formal CMMI compliance
- ISO certification process
- Enterprise-grade documentation
- Extensive user training program

## Support & Maintenance Scope

**Included in Project:**

- Initial deployment
- System documentation
- Basic user guides
- Developer documentation
- Bug fixes during development

**Post-Launch Support (Separate):**

- Ongoing maintenance contracts
- Feature enhancements
- Technical support
- User training sessions
- System upgrades

## Summary

### What This System DOES

- Manages cleaning service bookings end-to-end
- Tracks staff attendance and performance
- Processes payments via GCash
- Implements loyalty rewards program
- Provides administrative oversight tools
- Generates essential business reports

### What This System DOES NOT

- Replace accounting software
- Provide native mobile apps
- Support multiple payment gateways initially
- Offer advanced CRM features
- Include inventory management
- Cover areas outside Metro Manila

## Rationale for Limitations

The defined scope and limitations ensure:

1. **Focus:** Deliver core features excellently rather than many features poorly
2. **Timeline:** Complete project within academic constraints
3. **Resources:** Work within available development resources
4. **Complexity:** Maintain manageable system complexity
5. **Scalability:** Allow future expansion without re-architecture
6. **Usability:** Keep system intuitive and user-friendly
