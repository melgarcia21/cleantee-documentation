---
title: Introduction
description: Welcome to the CleanTee Online Booking System documentation
---

# Welcome to CleanTee Online Booking System

## What is CleanTee?

CleanTee Online Booking System is a **comprehensive web-based application** designed to modernize and streamline the operations of CleanTee Cleaning Services. Built with Laravel, React, and MySQL, it replaces manual booking processes with an integrated digital platform that serves customers, staff, and administrators.

## Why This Documentation?

This documentation serves multiple purposes:

### 📚 For Users
- **Customer Guides** - Learn how to book services, track orders, and earn rewards
- **Staff Guides** - Understand how to manage schedules and track attendance  
- **Admin Guides** - Master booking management and reporting tools

### 👨‍💻 For Developers
- **Technical Documentation** - Understand the codebase architecture
- **API Reference** - Learn how to interact with the system
- **Code Examples** - See best practices and implementation patterns
- **Deployment Guides** - Deploy and maintain the system

### 🎓 For Academic Reference
- **System Design** - Review the complete SDLC documentation
- **Requirements Analysis** - Understand the problem and solution approach
- **Architecture Decisions** - Learn why specific technologies were chosen

## Quick Navigation

### Getting Started
- [Quick Start Guide](/getting-started/quick-start) - Get up and running in 15 minutes
- [System Requirements](/getting-started/requirements) - Check what you need
- [Installation Guide](/getting-started/installation) - Detailed setup instructions
- [Configuration](/getting-started/configuration) - Configure your installation

### For Users
- [Customer Guide](/user-guides/customer/getting-started) - Book and manage services
- [Staff Guide](/user-guides/staff/getting-started) - View schedules and clock in/out
- [Admin Guide](/user-guides/admin/dashboard) - Manage operations

### For Developers
- [System Architecture](/architecture/overview) - Understand the tech stack
- [Database Schema](/database/schema) - Explore the data model
- [Technical Documentation](/technical/backend/structure) - Dive into the code

## System Overview

### Key Features

**For Customers 👥**
- 3-step booking process
- Real-time service tracking
- GCash payment integration
- Loyalty points rewards
- Service feedback & ratings

**For Staff 👷**
- Digital clock in/out system
- View assigned bookings
- Access customer locations
- Track performance metrics

**For Administrators 👔**
- Comprehensive booking management
- Staff assignment & monitoring
- Attendance tracking
- Report generation

### Technology Stack

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend:** React 18 with Inertia.js
- **Database:** MySQL 8.0+
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Who Should Use This Documentation?

### 👥 End Users
If you're a **customer, staff member, or administrator** of CleanTee Services:
- Start with the [User Guides](/user-guides/customer/getting-started)
- Learn how to use specific features
- Find answers to common questions

### 👨‍💻 Developers & Maintainers
If you're **developing or maintaining** the system:
- Review the [Technical Documentation](/technical/backend/structure)
- Understand the [System Architecture](/architecture/overview)
- Check [Code Examples](/examples/booking) for common tasks
- Follow [Development Guidelines](/developer/standards)

### 🎓 Students & Researchers
If you're studying this project for **academic purposes**:
- Read the [System Overview](/overview/background) for context
- Review [Requirements Analysis](/requirements/functional)
- Study [Design Decisions](/architecture/patterns)
- Explore [Database Design](/database/schema)

## Documentation Structure

### Phase 1: Understanding the System
1. **System Overview** - Background, problems, objectives, scope
2. **Requirements** - What the system must do and how well it must perform
3. **Architecture** - How the system is built and organized

### Phase 2: Using the System
4. **User Guides** - Step-by-step instructions for each user role
5. **Features** - Detailed explanation of each feature

### Phase 3: Developing & Maintaining
6. **Technical Docs** - Code structure, models, controllers, services
7. **Database** - Schema, relationships, migrations
8. **Business Logic** - Algorithms and rules
9. **Developer Guide** - Setup, standards, workflows

### Phase 4: Deployment & Support
10. **Deployment** - Production setup and configuration
11. **Testing** - Quality assurance strategies
12. **Maintenance** - Ongoing support and updates

## Key Concepts

### Service Area
CleanTee operates exclusively in **Metro Manila**, covering all 17 cities. Service requests outside this area are not accepted.

### User Roles
The system has three distinct roles:
1. **Customer** - Books and manages cleaning services
2. **Staff** - Performs services and tracks attendance
3. **Administrator** - Oversees operations and staff

### Booking Workflow
1. Customer selects service and provides details
2. System calculates price and required cleaners
3. Customer completes payment
4. Admin reviews and assigns staff
5. Staff performs service
6. Customer provides feedback
7. Loyalty points are awarded

### Business Rules
- Minimum 24-hour advance booking
- Service hours: 7:00 AM - 6:00 PM
- Minimum 3 hours service duration
- 1 cleaner per 50 sqm (base ratio)
- Loyalty: 1 point per ₱100 spent

## Getting Help

### Documentation Navigation
- Use the **sidebar** to browse topics
- Use the **search bar** to find specific content
- Check the **FAQ** for common questions
- Review **Troubleshooting** for common issues

### Support Channels
For technical support or questions:
- **GitHub Issues** - Report bugs or request features
- **Project Repository** - Review source code
- **Contact Support** - Email or phone assistance

## Project Status

### Current Version: 1.0.0 (MVP)

**Completed ✅**
- Database design and implementation
- Backend service layer
- Core models and relationships
- Business logic implementation
- Authentication and authorization

**In Progress 🔄**
- Frontend development
- UI/UX implementation
- Payment gateway integration
- Testing and QA

**Planned 📋**
- Production deployment
- User training
- Documentation completion
- Performance optimization

## Next Steps

Ready to get started? Choose your path:

### 🚀 Quick Start
Jump right in with the [Quick Start Guide](/getting-started/quick-start)

### 📖 Learn More
Understand the system with [System Overview](/overview/background)

### 👨‍💻 Start Developing
Set up your environment with [Installation Guide](/getting-started/installation)

### 📱 Start Using
Check the guides for your role:
- [Customer Guide](/user-guides/customer/getting-started)
- [Staff Guide](/user-guides/staff/getting-started)  
- [Admin Guide](/user-guides/admin/dashboard)

## About This Project

**CleanTee Online Booking System** is a capstone project developed to demonstrate the practical application of web technologies in solving real-world business challenges. It showcases:

- Full-stack web development with modern frameworks
- Database design and optimization
- Business logic implementation
- User experience design
- Security best practices
- Software engineering principles

The project represents months of analysis, design, development, and testing to create a production-ready solution for the cleaning service industry.

---

Thank you for using CleanTee Online Booking System! We hope this documentation helps you make the most of the platform. 🧹✨