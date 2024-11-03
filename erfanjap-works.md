# Erfan Jap - Works

## 2024

### Batch processing system for ABA file format

Design and development of batch processing system for ABA file format.

ABA (Australian Bankers Association) file format is a universal format used by banks in Australia to allow for batch transactions.

The batch processing system will send the payments in near real time using the NPP ([New Payments Platform](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)) if the recipient's banking details (BSB and Account or PayID) is NPP-reachable with fallback to [Direct Entry](https://www.auspaynet.com.au/resources/direct-entry) system.

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

Development of Checkout application that allow user to make payment to products or services.

The payments is processed via [PayTo](https://payto.com.au) infrastructure. 

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

## 2022

### PayTo API

Design and development of PayTo API.

The API includes capabilities to:
  - Create mandate/agreement
  - Amend mandate/agreement
  - Cancel mandate/agreement
  - Initiate payment

#### Tech stack

- AWS API Gateway, Lambda, DynamoDB, SQS
- AWS CloudFormation
- GitLab CI/CD

### Automate web application user migration

- Automate migration of user account to a new Cognito user pool

#### Tech stack

- AWS Cognito
- AWS Lambda
