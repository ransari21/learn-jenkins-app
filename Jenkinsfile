pipeline {
    agent any

    environment {
        APP_NAME = 'learn-jenkins-app'
        DOCKER_IMAGE = 'learn-jenkins-app'
        AWS_REGION = 'us-west-1'
        S3_BUCKET = 'ci-cd-project-storage'
        EB_APP_NAME = 'learn-jenkins-app'
        EB_ENV_NAME = 'learn-jenkins-app-prod'
        ZIP_FILE = 'deployment-package.zip'
    }

    triggers {
        githubPush()
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
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }

        stage('Package Artifact') {
            steps {
                sh 'zip -r $ZIP_FILE Dockerfile nginx.conf package.json src public index.html vite.config.js vitest.config.js || true'
                archiveArtifacts artifacts: '$ZIP_FILE', fingerprint: true
            }
        }

        stage('Upload Artifact to S3') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-jenkins-credentials'
                ]]) {
                    sh 'aws s3 cp $ZIP_FILE s3://$S3_BUCKET/$APP_NAME/$BUILD_NUMBER/$ZIP_FILE --region $AWS_REGION'
                }
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                input message: 'Deploy this build to production?', ok: 'Deploy'
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-jenkins-credentials'
                ]]) {
                    sh '''
                    aws elasticbeanstalk create-application-version                       --application-name $EB_APP_NAME                       --version-label build-$BUILD_NUMBER                       --source-bundle S3Bucket=$S3_BUCKET,S3Key=$APP_NAME/$BUILD_NUMBER/$ZIP_FILE                       --region $AWS_REGION

                    aws elasticbeanstalk update-environment                       --environment-name $EB_ENV_NAME                       --version-label build-$BUILD_NUMBER                       --region $AWS_REGION
                    '''
                }
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
