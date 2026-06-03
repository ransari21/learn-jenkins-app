# Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Webhook
   |
   v
Jenkins Pipeline
   |
   +--> Checkout
   +--> Install Dependencies
   +--> Run Tests
   +--> Build React App
   +--> Build Docker Image
   +--> Package Artifact
   +--> Upload to S3
   +--> Deploy to Elastic Beanstalk
   |
   v
AWS Production Environment
```
