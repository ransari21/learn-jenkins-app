# CI/CD Pipeline Automation Dashboard with Jenkins

A complete DevOps project that automates building, testing, artifact packaging, and deployment workflows for a React application using Jenkins. The project also includes a custom React dashboard that displays live Jenkins build information through a Node.js API integration.

---

## Project Overview

This project demonstrates a modern CI/CD workflow using Jenkins, GitHub, Docker, and AWS deployment concepts. A custom React dashboard visualizes pipeline stages and retrieves real-time build data directly from Jenkins.

### Features

* Automated builds triggered by GitHub pushes
* Jenkins Pipeline execution
* Automated testing with Vitest
* Artifact packaging and archiving
* Docker containerization
* AWS deployment workflow simulation
* Live Jenkins build monitoring dashboard
* GitHub Webhook integration using ngrok

---

## Architecture

```text
GitHub Push
    ↓
GitHub Webhook
    ↓
ngrok Tunnel
    ↓
Jenkins Pipeline
    ↓
Install Dependencies
    ↓
Run Tests
    ↓
Build React Application
    ↓
Package Artifact
    ↓
Archive Build Artifact
    ↓
Deploy (Production Stage)
```

---

## Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Node.js
* Express.js
* Axios

### DevOps

* Jenkins
* Docker
* GitHub Webhooks
* ngrok
* AWS S3
* AWS Elastic Beanstalk

### Testing

* Vitest
* React Testing Library

---

## Live Dashboard Features

The React dashboard displays:

* Latest Jenkins build number
* Build status
* Build duration
* Archived artifact name
* Direct link to Jenkins build
* Manual refresh button
* Pipeline stage visualization
* Interactive architecture popup

---

## Jenkins Pipeline Stages

1. Checkout source code
2. Install dependencies
3. Run automated tests
4. Build React application
5. Package deployment artifact
6. Archive build artifact
7. Production deployment stage

---

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
│
├── tests/
│   └── App.test.jsx
│
├── public/
│
├── server.js
├── Dockerfile
├── Jenkinsfile
├── nginx.conf
├── package.json
├── vitest.config.js
├── vite.config.js
└── README.md
```

---

## Local Setup

### Install Dependencies

```bash
npm install
```

### Run Frontend

```bash
npm run dev
```

### Run Backend API

```bash
npm run server
```

### Run Full Application

```bash
npm run dev:full
```

### Run Tests

```bash
npm test
```

### Build Production Files

```bash
npm run build
```

---

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

---

## Jenkins Setup

### Required Plugins

* Git Plugin
* GitHub Plugin
* Pipeline Plugin
* Docker Pipeline Plugin

### Build Trigger

Enable:

```text
GitHub hook trigger for GITScm polling
```

### Jenkins API Token

Create a Jenkins API token and store it securely.

**Never commit API tokens or credentials to GitHub.**

---

## GitHub Webhook Configuration

Payload URL:

```text
https://YOUR-NGROK-URL/github-webhook/
```

Content Type:

```text
application/json
```

Events:

```text
Push Events
```

Active:

```text
Enabled
```

---

## API Endpoint

### Latest Jenkins Build

```http
GET /api/jenkins/latest-build
```

Example Response:

```json
{
  "buildNumber": 24,
  "status": "SUCCESS",
  "duration": 6451,
  "artifact": "deployment-package.zip",
  "url": "http://localhost:8081/job/learn-jenkins-app/24/"
}
```

---

## Example CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins
3. Jenkins checks out repository
4. Jenkins installs dependencies
5. Jenkins runs automated tests
6. Jenkins builds production application
7. Jenkins archives deployment artifact
8. Dashboard displays updated build status

---

## Resume Bullet

Built a full CI/CD automation platform using Jenkins, React, Node.js, Docker, GitHub Webhooks, and AWS deployment workflows. Implemented automated testing, artifact packaging, live build monitoring, and webhook-triggered pipeline execution, providing real-time visibility into software delivery processes.

---

## Future Improvements

* AWS S3 artifact uploads
* Elastic Beanstalk deployment automation
* Docker registry integration
* Build history dashboard
* Stage-by-stage Jenkins visualization
* Deployment approval workflow
* Authentication and user roles
* Build analytics and reporting

---

## Screenshots

Add screenshots of:

* React Dashboard
* Jenkins Successful Build
* Jenkins Pipeline Console Output
* GitHub Webhook Deliveries
* Docker Container
* Architecture Popup Diagram
* Live Jenkins Build Status Card
