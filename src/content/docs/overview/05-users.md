---
title: Target Users
description: User roles, personas, and access levels in the CleanTee Online Booking System
---

# Target Users

## Overview

The CleanTee Online Booking System is designed for **three primary user groups**, each with distinct roles, responsibilities, and system access levels. Understanding these user types is essential for appreciating the system's role-based architecture and tailored functionality.

## Primary User Groups

### 1. Customers (End Users)

**Who They Are:**

- Residential homeowners
- Apartment dwellers
- Office managers
- Business owners
- Property managers
- Anyone requiring professional cleaning services in Metro Manila

**Demographics:**

- **Age:** 25-65 years old
- **Location:** Metro Manila (17 cities)
- **Tech Proficiency:** Basic to intermediate
- **Income Level:** Middle to upper class
- **Device Usage:** Mobile phones, tablets, desktop computers

**User Characteristics:**

- Value convenience and time-saving solutions
- Expect transparency in service delivery
- Prefer digital payment options
- Appreciate loyalty rewards
- Seek reliable, professional service
- Want to track service progress

**Primary Needs:**

- Easy, quick booking process
- Transparent pricing
- Real-time service tracking
- Secure payment options
- Ability to provide feedback
- Service history access
- Rewards for loyalty

**User Journey:**

1. Discover CleanTee services
2. Create account
3. Browse available services
4. Book a cleaning service
5. Make payment
6. Track booking status
7. Receive service
8. Provide feedback
9. Earn loyalty points
10. Rebook services

### 2. Staff (Cleaning Personnel)

**Who They Are:**

- Professional cleaning staff
- Field service workers
- Mobile workforce
- Frontline service providers

**Demographics:**

- **Age:** 18-55 years old
- **Location:** Metro Manila and nearby areas
- **Tech Proficiency:** Basic (mobile-first design)
- **Employment:** Full-time or part-time
- **Experience:** Entry-level to experienced cleaners

**User Characteristics:**

- Need clear, simple instructions
- Rely on mobile devices primarily
- Value fair workload distribution
- Appreciate recognition for good work
- Need location/navigation assistance
- Want visibility into their performance

**Primary Needs:**

- Easy clock in/out system
- Clear view of daily schedule
- Customer location and contact info
- Service specifications and requirements
- Ability to see their ratings/feedback
- Simple, intuitive mobile interface
- Fair task distribution

**User Journey:**

1. Receive login credentials from admin
2. Log into staff portal
3. Clock in for shift
4. View assigned bookings
5. Navigate to customer location
6. Perform cleaning service
7. Mark service as complete
8. Clock out from shift
9. Review feedback received
10. View performance metrics

### 3. Administrators (Management)

**Who They Are:**

- CleanTee business owners
- Operations managers
- Supervisors
- Administrative staff

**Demographics:**

- **Age:** 30-60 years old
- **Role:** Management/supervisory
- **Tech Proficiency:** Intermediate to advanced
- **Responsibility:** Operations oversight
- **Work Location:** Office-based with remote access

**User Characteristics:**

- Need comprehensive oversight tools
- Require data for decision-making
- Responsible for staff management
- Handle customer escalations
- Monitor business performance
- Ensure service quality standards

**Primary Needs:**

- Real-time operational visibility
- Staff assignment tools
- Performance analytics
- Booking management system
- Attendance monitoring
- Report generation capabilities
- Customer service tools
- Reschedule approval workflow

**User Journey:**

1. Log into admin dashboard
2. Review new booking requests
3. Assign staff to bookings
4. Monitor staff attendance
5. Handle reschedule requests
6. Review customer feedback
7. Generate performance reports
8. Address operational issues
9. Optimize resource allocation
10. Track business metrics

## Role-Based Access Control (RBAC)

### Access Levels by Role

| Feature | Customer | Staff | Admin |
|---------|----------|-------|-------|
| Create Booking | ✅ | ❌ | ✅ |
| View Own Bookings | ✅ | ❌ | ✅ |
| View All Bookings | ❌ | ❌ | ✅ |
| Request Reschedule | ✅ | ✅ | ✅ |
| Approve Reschedule | ❌ | ❌ | ✅ |
| Make Payment | ✅ | ❌ | ✅ |
| Process Payment | ❌ | ❌ | ✅ |
| Submit Feedback | ✅ | ❌ | ❌ |
| View Feedback | Own | Own | All |
| Clock In/Out | ❌ | ✅ | ✅ |
| View Assigned Jobs | ❌ | ✅ | ✅ |
| Assign Staff | ❌ | ❌ | ✅ |
| Generate Reports | ❌ | ❌ | ✅ |
| Manage Users | ❌ | ❌ | ✅ |
| View Dashboard | ✅ | ✅ | ✅ |

## User Personas

### Customer Persona: Maria Santos

**Background:**

- 35-year-old marketing manager
- Lives in a 3-bedroom condo in Makati
- Busy professional with limited time
- Tech-savvy, uses smartphone for everything

**Goals:**

- Book cleaning service quickly during lunch break
- Track when cleaners will arrive
- Pay digitally without cash hassle
- Build relationship with reliable service provider

**Pain Points:**

- No time to call and wait for booking confirmation
- Needs flexibility to reschedule when work conflicts arise
- Wants transparent pricing with no hidden fees
- Prefers digital receipts for expense reporting

**How CleanTee Helps:**

- 3-step booking in under 5 minutes
- Real-time status updates via dashboard
- GCash payment integration
- Easy reschedule request system
- Digital receipts automatically generated

### Staff Persona: Juan dela Cruz

**Background:**

- 28-year-old cleaning professional
- 3 years experience in residential cleaning
- Uses basic Android smartphone
- Relies on public transportation

**Goals:**

- See daily schedule clearly
- Get directions to customer locations
- Complete work efficiently
- Improve personal ratings
- Ensure fair workload distribution

**Pain Points:**

- Unclear job assignments via group chat
- Difficulty finding customer addresses
- No visibility into performance
- Manual attendance tracking causes errors

**How CleanTee Helps:**

- Mobile-optimized staff dashboard
- Google Maps integration for navigation
- Simple clock in/out system
- View customer ratings and feedback
- Clear daily schedule view

### Admin Persona: Linda Reyes

**Background:**

- 42-year-old operations manager
- 10 years in service industry management
- Responsible for 30+ staff members
- Office-based with occasional field visits

**Goals:**

- Efficient staff assignment based on availability
- Monitor real-time operations
- Identify top performers and training needs
- Generate reports for business decisions
- Ensure high customer satisfaction

**Pain Points:**

- Manual staff assignment is time-consuming
- Difficult to track attendance accurately
- No centralized view of operations
- Hard to identify performance trends
- Customer complaints not tracked systematically

**How CleanTee Helps:**

- Centralized booking management dashboard
- Real-time staff availability view
- Automated attendance tracking
- Performance analytics and reports
- Integrated customer feedback system

## User Needs Matrix

### Functional Needs

| Need | Customer | Staff | Admin | Priority |
|------|----------|-------|-------|----------|
| Authentication | ✅ | ✅ | ✅ | Critical |
| Booking Management | ✅ | ❌ | ✅ | Critical |
| Payment Processing | ✅ | ❌ | ✅ | Critical |
| Attendance Tracking | ❌ | ✅ | ✅ | Critical |
| Assignment View | ❌ | ✅ | ✅ | Critical |
| Feedback System | ✅ | View Only | ✅ | High |
| Loyalty Program | ✅ | ❌ | View Only | High |
| Reschedule Workflow | Request | Request | Approve | High |
| Reporting | ❌ | Basic | Advanced | High |
| User Management | Profile | Profile | All Users | Medium |

### Non-Functional Needs

| Need | Customer | Staff | Admin | Requirement |
|------|----------|-------|-------|-------------|
| Mobile Responsive | ✅ | ✅ | ✅ | Essential |
| Fast Load Times | ✅ | ✅ | ✅ | <3 seconds |
| Intuitive UI | ✅ | ✅ | ✅ | Critical |
| Secure Access | ✅ | ✅ | ✅ | Critical |
| 24/7 Availability | ✅ | ❌ | ✅ | High |
| Offline Capability | ❌ | Partial | ❌ | Nice-to-have |

## User Security & Privacy

### Customer Security

- Secure password storage (bcrypt hashing)
- Session management
- Personal data encryption
- Payment information security (PCI compliance)
- Booking history privacy
- Optional anonymous feedback

### Staff Security

- Separate authentication
- Location data privacy (optional tracking)
- Performance data confidentiality
- Personal information protection
- Limited access to customer data

### Admin Security

- Enhanced authentication (2FA recommended)
- Activity logging
- Role hierarchy
- Data access controls
- Audit trail maintenance
- Secure report generation

## User Support & Training

### Customer Support

- **Onboarding:** Interactive tutorial on first login
- **Help Center:** FAQ and guides
- **In-App Help:** Contextual help tooltips
- **Support Channel:** Email/phone support
- **Self-Service:** Password reset, profile management

### Staff Training

- **Initial Training:** In-person orientation session
- **Quick Start Guide:** Mobile-friendly PDF
- **Video Tutorials:** Short how-to videos
- **Manager Support:** Direct supervisor assistance
- **Refresher Training:** Periodic updates

### Admin Training

- **Comprehensive Training:** Full system walkthrough
- **Documentation:** Detailed user manual
- **Live Demo:** Interactive system demo
- **Ongoing Support:** Technical support line
- **Advanced Features:** Power user training

## User Growth Strategy

### Customer Acquisition

- Social media marketing
- Referral program
- First-booking discounts
- Local advertising
- Partner promotions

### Staff Recruitment

- Job posting platforms
- Referral bonuses for staff
- Competitive compensation
- Performance incentives
- Training opportunities

### Admin Capacity

- Scalable user management
- Multi-admin support (future)
- Permission delegation
- Team collaboration tools
- Cross-training protocols

## Accessibility Considerations

### For All Users

- High contrast mode option
- Keyboard navigation support
- Screen reader compatibility
- Clear, simple language
- Consistent UI patterns

### For Staff (Lower Digital Literacy)

- Large, touch-friendly buttons
- Minimal text, more icons
- Step-by-step wizards
- Confirmation dialogs
- Error prevention

### For Customers with Disabilities

- WCAG 2.1 compliance (target)
- Alternative text for images
- Color contrast requirements
- Resizable text
- Voice input support (future)

## Summary

The CleanTee Online Booking System serves three distinct user groups:

1. **Customers** - Need convenient booking, payment, and tracking
2. **Staff** - Need clear assignments, attendance tools, and feedback
3. **Administrators** - Need operational oversight and management tools

Each role has carefully designed interfaces and features tailored to their specific needs, technical proficiency, and business objectives. The role-based access control ensures security, privacy, and appropriate functionality for each user type.
