pipeline {
    agent any

    environment {
        APP_NAME = 'learn-jenkins-app'
        DOCKER_IMAGE = 'learn-jenkins-app'
        ZIP_FILE = 'deployment-package.zip'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Docker build skipped because local Jenkins container is not connected to Docker daemon.'
            }
        }

        stage('Package Artifact') {
            steps {
                sh 'zip -r $ZIP_FILE dist Dockerfile nginx.conf package.json package-lock.json src public index.html vite.config.js vitest.config.js'
                archiveArtifacts artifacts: '$ZIP_FILE', fingerprint: true
            }
        }

        stage('Local Deployment Simulation') {
            steps {
                echo 'Artifact packaged successfully.'
                echo 'In a cloud setup, this artifact would be uploaded to S3 and deployed to AWS Elastic Beanstalk.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}