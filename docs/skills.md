# Erfan Jap - Skills

## 2024

### Batch processing system for ABA file format

Design and development of a batch processing system for ABA files.

ABA (Australian Bankers Association) file format is a universal format used by banks in Australia to allow for batch transactions.

The system will facilitate near-real-time payments via the NPP ([New Payments Platform](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)) or, if unavailable, through the [Direct Entry](https://www.auspaynet.com.au/resources/direct-entry) system.

#### Tech stack

- Batch processing system
    - AWS Lambda, DynamoDB, SQS
    - AWS S3 and Transfer Family (for SFTP/Secure File Transfer Service)
    - AWS EventBridge for scheduling
- CI/CD
    - AWS CloudFormation
    - AWS CloudWatch for monitoring
    - GitLab CI/CD
- Automated Testing
    - Playwright

### Checkout app

Developed a Checkout application enabling users to make payments for products or services.

Payments are processed through the [PayTo](https://payto.com.au) infrastructure.

#### Tech stack

- Frontend
    - Vue.js
    - Storybook
- Backend
    - AWS AppSync with GraphQL subscriptions for real-time data app
    - AWS Lambda, DynamoDB, SQS
- CI/CD
    - AWS CDK
    - AWS CloudWatch for monitoring
    - GitLab CI/CD
- Automated Testing
    - Playwright

### Migration of Vue 2 to Vue 3

Migration of Vue 2 project (As Vue 2 is EOL) to Vue 3.

As part of the migration, also migrating the following:

- Webpack to vite
- Jest to vitest
- WebdriverIO to Playwright

### CloudWatch Metric, Dashboard, and Alarm

Automate the creation of CloudWatch dashboards and alarms to monitor application health and performance.

As part of the project, also automate the creation of CloudWatch custom metrics.

#### Tech stack

- AWS CloudWatch
- AWS CloudFormation

## 2023

### User Dashboard

Development of new features for user dashboard. New features includes:
- Transactions and Reports
- User management
- Service management

#### Tech stack

- Vue.js
- WebdriverIO
- AWS Cognito
- AWS Api Gateway, Lambda, DynamoDB
- GitLab CI/CD

### Continuous improvement to PayTo API

## 2022

### PayTo API

Design and development of PayTo API.

The API includes capabilities to:
- Create PayTo agreement
- Amend agreement
- Cancel agreement
- Initiate payment for PayTo agreement

#### Tech stack

- AWS API Gateway, Lambda, DynamoDB, SQS (AWS Serverless stack)
- AWS CloudFormation
- GitLab CI/CD

### Automate user migration when user log-in

- Automate migration of user accounts to a new Cognito user pool.

- This is achieved by utilising Lambda triggers attached to Cognito user pool.

#### Tech stack

- AWS Cognito
- AWS Lambda
