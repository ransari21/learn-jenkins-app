# CI/CD Pipeline Automation with Jenkins and AWS

A complete DevOps project that automates the build, test, containerization, artifact storage, and deployment workflow for a React web application.

## Project Description

This project uses Jenkins for a CI/CD workflow with build artifacts, pipeline stages, environment variables, and secure credentials. It integrates GitHub push triggers, Docker for consistent build environments, AWS S3 for artifact storage, and AWS Elastic Beanstalk for deploying the containerized application.

## Tech Stack

- React.js
- Vite
- Jenkins
- Docker
- GitHub Webhooks
- AWS S3
- AWS Elastic Beanstalk
- Nginx
- Vitest

## Project Structure

```text
learn-jenkins-app/
├── src/
│   ├── components/
│   │   └── StageCard.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── tests/
│   └── App.test.jsx
├── public/
├── .github/workflows/node-check.yml
├── Dockerfile
├── Jenkinsfile
├── nginx.conf
├── package.json
├── vitest.config.js
└── README.md
```

## Local Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build production files:

```bash
npm run build
```

## Docker Setup

Build the Docker image:

```bash
docker build -t learn-jenkins-app .
```

Run the container:

```bash
docker run -p 8080:80 learn-jenkins-app
```

Open:

```text
http://localhost:8080
```

## Jenkins Pipeline Stages

1. Checkout source code from GitHub
2. Install npm dependencies
3. Run automated tests
4. Build React production app
5. Build Docker image
6. Package deployment artifact
7. Upload artifact to AWS S3
8. Deploy to AWS Elastic Beanstalk after manual approval

## Jenkins Requirements

Install these Jenkins plugins:

- Git plugin
- GitHub plugin
- Pipeline plugin
- Docker Pipeline plugin
- AWS Credentials plugin

## Jenkins Credentials

Create an AWS credential in Jenkins with this ID:

```text
aws-jenkins-credentials
```

This credential should have permission to access:

- S3
- Elastic Beanstalk
- CloudFormation
- EC2
- IAM permissions required by Elastic Beanstalk

## GitHub Webhook

In your GitHub repository, add a webhook:

```text
Payload URL: http://YOUR-JENKINS-SERVER/github-webhook/
Content type: application/json
Event: Push events
```

## AWS Setup

### S3

Create a bucket:

```text
ci-cd-project-storage
```

### Elastic Beanstalk

Create an Elastic Beanstalk application:

```text
learn-jenkins-app
```

Create an environment:

```text
learn-jenkins-app-prod
```

Platform:

```text
Docker
```

Region used in the Jenkinsfile:

```text
us-west-1
```

You can change the region inside the `Jenkinsfile`.

## Resume Bullet

Built a CI/CD pipeline using Jenkins, GitHub, Docker, and AWS to automate testing, containerization, artifact storage, and deployment of a React application. Configured GitHub webhooks, Jenkins pipeline stages, secure AWS credentials, S3 artifact uploads, and Elastic Beanstalk deployments for staging and production workflows.

## Screenshots to Add

After running the project, add screenshots of:

- React dashboard running locally
- Jenkins successful pipeline build
- Docker container running
- AWS Elastic Beanstalk environment
- S3 artifact upload
