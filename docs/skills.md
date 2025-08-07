---
head:
  - - meta
    - name: description
      content: Erfan Jap's professional skills and technical expertise
layout: doc
---

# Professional Skills & Portfolio

> An overview of my professional experience and technical skills, organized by year and project.

[[toc]]

## Technical Expertise

### Frontend
- **Vue.js 3** - Component-based UI development
- **Vite** - Next generation frontend tooling
- **Pinia** - State management for Vue applications
- **Storybook** - UI component development environment

### Backend
- **Node.js** - JavaScript runtime
- **TypeScript** - Typed JavaScript
- **Spring Boot** - Java-based framework
- **Kotlin** - Modern JVM language

### Cloud & DevOps
- **AWS CDK** - Infrastructure as code
- **AWS Lambda** - Serverless computing
- **DynamoDB** - NoSQL database service
- **API Gateway** - RESTful API management
- **GitLab CI/CD** - Continuous integration/deployment

### Testing
- **Playwright** - End-to-end testing
- **Vitest** - Unit testing framework

### Ways of Working
- **TDD** - Test-driven development methodology

## Project Timeline

### 2025

#### Payment Simulator (Test Bank) | *Full-stack Development*

**Project Overview**  
Designed and developed a Payment Simulator for internal testing and external client use.

**Key Features**
- Simulate payments to payID
- Simulate payments to bank accounts (BSB + Account Number)
- payID verification with real-time payee details display

**Technical Contributions**
- Introduced AWS CDK for infrastructure as code
- Implemented Storybook for component-driven development
- Set up Playwright for end-to-end testing

**Tech Stack**
- *Frontend*: Vue.js 3, Vite & Vitest, Pinia, Storybook
- *Infrastructure*: AWS CDK, AWS CloudFront, AWS S3

---

#### Dynamic API Gateway Usage Plan | *Backend Development*

**Project Overview**  
Implemented a dynamic assignment system for API Gateway usage plans based on consumer credentials.

**Motivation**
- Overcome the 10,000 API key limit in API Gateway
- Create a scalable solution as the business grows

**Technical Contributions**
- Introduced TypeScript throughout the project
- Refactored critical existing code for improved type safety and maintainability

**Tech Stack**
- TypeScript
- AWS API Gateway
- AWS Lambda

### 2024

#### ABA File Batch Processing System | *Financial System Development*

**Project Overview**  
Designed and developed a batch processing system for ABA (Australian Bankers Association) files, the universal format used by Australian banks for batch transactions.

**Key Features**
- Near real-time payments via NPP ([New Payments Platform](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/))
- Fallback to [Direct Entry](https://www.auspaynet.com.au/resources/direct-entry) system when NPP is unavailable
- Secure file transfer via SFTP

**Tech Stack**
- *Batch Processing*: AWS Lambda, DynamoDB, SQS, AWS S3 and Transfer Family, AWS EventBridge for scheduling
- *CI/CD*: AWS CloudFormation, AWS CloudWatch, GitLab CI/CD
- *Testing*: Playwright

---

#### Checkout Application | *Payment Processing*

**Project Overview**  
Developed a Checkout application enabling users to make payments for products or services through the [PayTo](https://payto.com.au) infrastructure.

**Key Features**
- Seamless payment integration
- Real-time transaction updates
- Secure payment processing

**Tech Stack**
- *Frontend*: Vue.js, Storybook
- *Backend*: AWS AppSync with GraphQL, AWS Lambda, DynamoDB, SQS
- *CI/CD & Testing*: AWS CDK, AWS CloudWatch, GitLab CI/CD, Playwright

---

#### Vue 2 to Vue 3 Migration | *Frontend Modernization*

**Project Overview**  
Led the migration of a Vue 2 project to Vue 3 in response to Vue 2's end-of-life status.

**Migration Scope**
- Webpack to Vite
- Jest to Vitest
- WebdriverIO to Playwright

**Key Benefits**
- Improved performance
- Better TypeScript integration
- Faster build times
- Modern testing infrastructure

---

#### CloudWatch Monitoring System | *DevOps*

**Project Overview**  
Automated the creation of CloudWatch dashboards, alarms, and custom metrics to monitor application health and performance.

**Key Features**
- Real-time performance monitoring
- Automated alerts
- Custom metrics for business-specific KPIs

**Tech Stack**
- AWS CloudWatch
- AWS CloudFormation

### 2023

#### User Dashboard | *Web Application*

**Project Overview**  
Developed new features for the user dashboard to enhance functionality and user experience.

**Key Features**
- Transactions and Reports
- User management
- Service management

**Tech Stack**
- Vue.js
- WebdriverIO
- AWS Cognito
- AWS API Gateway, Lambda, DynamoDB
- GitLab CI/CD

---

#### PayTo API Improvements | *API Development*

**Project Overview**  
Continuous improvements to the PayTo API, enhancing functionality, performance, and security.

### 2022

#### PayTo API | *API Development*

**Project Overview**  
Designed and developed the PayTo API, providing a comprehensive solution for payment agreements.

**Key Capabilities**
- Create PayTo agreements
- Amend existing agreements
- Cancel agreements
- Initiate payments for PayTo agreements

**Tech Stack**
- AWS API Gateway, Lambda, DynamoDB, SQS (AWS Serverless stack)
- AWS CloudFormation
- GitLab CI/CD

---

#### Cognito User Migration | *Authentication System*

**Project Overview**  
Automated the migration of user accounts to a new Cognito user pool, triggered when users log in.

**Implementation**
- Lambda triggers attached to Cognito user pool
- Seamless user experience during migration

**Tech Stack**
- AWS Cognito
- AWS Lambda
