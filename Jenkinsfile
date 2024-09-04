pipeline {
    agent any
    tools {
      nodejs 'node22'
    }
    environment {
        SONAR_SCANNER_HOME    = tool  'sonar-scanner'
        AWS_REGION            = 'us-east-1'
        AWS_ACCESS_KEY_ID     = '-'
        AWS_SECRET_ACCESS_KEY = '-'

    }

    stages {
        stage('Git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iam-ismaeel/Mern-stack-app-kubernetes-development-environment-deployment.git'
           }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix Backend'
                sh 'npm install --prefix frontend'
            }
        }

        stage('Trivy FS Scan') {
            steps {
                sh 'trivy fs --format table -o fs-report.html .'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv(installationName: 'sonar', credentialsId: 'sonar-tok') {
                    sh '${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectName=my-project -Dsonar.projectKey=my-project'
                }
            }
        }

        stage('Build and Tag Docker Images') {
            steps {
                sh 'docker build -t backend:0.0.1 ./Backend'
                sh 'docker tag backend:0.0.1 992382838241.dkr.ecr.$AWS_REGION.amazonaws.com/backend'
                sh 'docker build -t frontend:0.0.1 ./frontend'
                sh 'docker tag frontend:0.0.1 992382838241.dkr.ecr.$AWS_REGION.amazonaws.com/frontend'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh 'trivy image --format table -o fs-report.html backend:0.0.1'
                sh 'trivy image --format table -o fs-report.html frontend:0.0.1'
            }
        }

        stage('Push Images to AWS ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 992382838241.dkr.ecr.$AWS_REGION.amazonaws.com
                docker push 992382838241.dkr.ecr.$AWS_REGION.amazonaws.com/backend
                docker push 992382838241.dkr.ecr.$AWS_REGION.amazonaws.com/frontend
                '''
            }
        }
    }
}
