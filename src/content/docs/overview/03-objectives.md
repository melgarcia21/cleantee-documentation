---
title: Project Objectives
description: Goals and objectives for the CleanTee Online Booking System
---

# Project Objectives

## Primary Objective

**To design, develop, and implement a comprehensive web-based application for CleanTee Services that streamlines operations, enhances customer satisfaction, and supports sustainable business growth.**

## Specific Objectives

### 1. Develop a Multi-Role Web Application

**Objective:** Create a web-based system with three distinct modules to manage access privileges and functions based on user roles: Customer, Staff, and Administrator.

#### Implementation Requirements

- Secure authentication system
- Role-based access control (RBAC)
- Distinct user interfaces for each role
- Role-specific permissions and features
- Seamless role switching for administrators

#### Success Criteria

- Each role can only access authorized features
- Clear separation of concerns between roles
- Intuitive navigation for all user types
- Secure session management

### 2. Develop a Customer Booking Module

**Objective:** Enable customers to efficiently schedule, manage, and track cleaning services through an intuitive digital interface.

#### Core Features

**A. Service Scheduling**

- Browse available cleaning services
- Select service type and customize options
- Choose preferred date and time slots
- Specify service location details
- Add special instructions

**B. Automated Cleaner Calculation**

- Input service area size (square meters)
- Automatic calculation of required cleaners
- Based on standard: 1 cleaner per 50 sqm
- Adjustment for multiple floors
- Display estimated service duration

**C. Booking Management**

- View all bookings (upcoming, in-progress, completed, cancelled)
- Track real-time booking status
- Access detailed booking information
- Download booking receipts
- View booking history

**D. Reschedule Requests**

- Submit reschedule requests for approved bookings
- Provide reason for rescheduling
- Upload supporting documents
- Track request status
- Receive approval/rejection notifications

**E. Service Feedback & Ratings**

- Rate completed services (1-5 stars)
- Write detailed reviews
- Option for anonymous feedback
- View own feedback history
- Contribute to service quality improvement

**F. Payment Processing**

- Integrate with GCash payment gateway
- Secure payment transactions
- Generate digital receipts
- View payment history
- Multiple payment options (GCash, Cash on Service)

**G. Loyalty Rewards Program**

- Earn points for completed bookings (1 point per ₱100)
- View points balance and history
- Redeem points for discounts
- Track points expiration
- Access exclusive rewards

#### Success Criteria

- Complete booking in 3 steps or less
- Cleaner calculation accuracy: 100%
- Real-time status updates
- Payment success rate: >95%
- Customer satisfaction: >4.0/5.0 stars

### 3. Design an Employee Module

**Objective:** Provide staff members with tools to manage their schedules, track attendance, and view performance feedback.

#### Core Features

**A. Digital Attendance System**

- Clock in at shift start
- Clock out at shift end
- Automatic hour calculation
- Break time tracking
- Attendance history view
- Export attendance reports

**B. Assigned Bookings Management**

- View all assigned bookings
- See detailed booking information:
  - Customer name and contact
  - Service address with map integration
  - Service type and specifications
  - Special instructions
  - Estimated duration
- Mark service as started
- Mark service as completed
- Report issues or concerns

**C. Customer Location & Navigation**

- View customer addresses
- Integration with Google Maps
- Get directions to service location
- View location notes and landmarks
- Contact customer directly

**D. Feedback & Ratings Visibility**

- View feedback received
- See individual service ratings
- Track performance trends
- Identify areas for improvement
- View positive feedback highlights

#### Success Criteria

- 100% attendance tracking accuracy
- Real-time booking assignment notifications
- Easy access to customer information
- Improved staff accountability
- Reduced scheduling conflicts

### 4. Create an Administrative Module

**Objective:** Enable managers to effectively oversee operations, monitor staff performance, and make data-driven decisions.

#### Core Features

**A. Real-Time Staff Monitoring**

- View all staff availability status
- Monitor current attendance
- Track staff locations (with consent)
- View performance metrics
- Identify scheduling gaps

**B. Booking Management Dashboard**

- View all customer bookings
- Filter by status, date, service type
- Approve pending bookings
- Assign staff to bookings
- Monitor booking progress
- Handle cancellations and refunds

**C. Staff Assignment System**

- View available staff for specific dates
- Match staff skills to service requirements
- Distribute workload equitably
- Handle staff unavailability
- Reassign bookings when needed

**D. Reschedule Request Approval**

- Review reschedule requests
- View request details and reasons
- Approve or reject requests
- Communicate decisions to customers
- Track reschedule patterns

**E. Attendance Monitoring**

- View daily, weekly, monthly attendance
- Generate attendance reports
- Identify attendance issues
- Track punctuality metrics
- Export attendance data

**F. Performance Analytics**

- Generate comprehensive reports:
  - Booking statistics
  - Revenue analysis
  - Staff performance
  - Customer satisfaction
  - Service trends
- Export reports in multiple formats
- Schedule automated reports
- Data visualization dashboards

#### Success Criteria

- Real-time operational visibility
- Booking assignment time: <2 minutes
- Report generation time: <30 seconds
- 100% reschedule request tracking
- Data-driven decision making enabled

## Supporting Objectives

### 5. Ensure System Security

**Objectives:**

- Implement robust authentication and authorization
- Protect sensitive customer and business data
- Prevent unauthorized access
- Secure payment transactions
- Maintain audit trails

**Security Measures:**

- Password hashing (bcrypt)
- Role-based access control
- CSRF protection
- Input validation and sanitization
- SQL injection prevention
- XSS attack prevention
- Secure session management
- Activity logging
- HTTPS/SSL (production)
- Rate limiting (production)

### 6. Optimize User Experience

**Objectives:**

- Create intuitive, user-friendly interfaces
- Ensure fast page load times (<3 seconds)
- Provide responsive design for all devices
- Minimize user training requirements
- Offer clear navigation and guidance

**UX Principles:**

- Clean, modern design
- Consistent visual language
- Clear call-to-action buttons
- Helpful error messages
- Progress indicators
- Mobile-first approach

### 7. Enable Business Scalability

**Objectives:**

- Design for growth (users, bookings, data)
- Ensure system performance under load
- Maintain code maintainability
- Support feature extensions
- Enable multi-location expansion (future)

**Technical Approach:**

- Modular architecture
- Efficient database design
- Optimized queries
- Caching strategies
- Service-oriented design

### 8. Facilitate System Maintenance

**Objectives:**

- Provide comprehensive documentation
- Implement clear code standards
- Enable easy troubleshooting
- Support version control
- Ensure smooth updates

**Maintenance Support:**

- Detailed code comments
- API documentation
- User guides for each role
- Developer documentation
- Error logging and monitoring

## Measurable Success Metrics

### Operational Efficiency

- **Booking Time Reduction:** 70% faster than manual process
- **Staff Assignment Time:** <2 minutes per booking
- **Scheduling Conflicts:** <1% of bookings
- **Administrative Time Saved:** 15+ hours/week

### Customer Satisfaction

- **Customer Satisfaction Score:** >4.0/5.0
- **Booking Completion Rate:** >90%
- **Repeat Customer Rate:** >60%
- **Customer Support Tickets:** <5% of bookings

### Staff Performance

- **Attendance Accuracy:** 100%
- **On-Time Arrival:** >95%
- **Average Rating:** >4.0/5.0
- **Task Completion Rate:** >98%

### Business Growth

- **Booking Capacity:** +50% without additional staff
- **Revenue per Customer:** +25% via loyalty program
- **Customer Retention:** +30%
- **Market Expansion:** Ready for multi-location scaling

## Timeline & Milestones

### Phase 1: Foundation (Completed)

- Requirements analysis
- Database design
- System architecture
- Core models and relationships

### Phase 2: Backend Development (In Progress)

- Service layer implementation
- Controller development
- API endpoints
- Validation and security

### Phase 3: Frontend Development (Next)

- React component library
- Customer booking interface
- Staff dashboard
- Admin control panel

### Phase 4: Integration & Testing

- GCash payment integration
- End-to-end testing
- User acceptance testing
- Performance optimization

### Phase 5: Deployment

- Production environment setup
- Data migration
- Staff training
- Launch and monitoring

## Alignment with Stakeholder Needs

### For Customers

- Convenient 24/7 booking access
- Transparent service tracking
- Secure digital payments
- Loyalty rewards
- Quality feedback mechanism

### For Staff

- Clear schedule visibility
- Digital attendance tracking
- Performance insights
- Easy booking access
- Direct customer communication

### For Management

- Operational oversight
- Data-driven decisions
- Efficient resource allocation
- Performance monitoring
- Scalability support

### For the Business

- Operational cost reduction
- Customer retention improvement
- Service quality enhancement
- Competitive advantage
- Growth enablement
