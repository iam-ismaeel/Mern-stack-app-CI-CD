pipeline {
    agent any
    tools {
      nodejs 'nodejsapp'
    }
    environment {
        SONAR_SCANNER_HOME = '/usr/local/sonar-scanner'
    }

    stages {
        stage('Git checkout') {
            steps {
          git credentialsId: 'git-cred', url: 'https://github.com/iam-ismaeel/Mern-stack-app-kubernetes-development-environment-deployment.git'
           }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix backend'
                sh 'npm install --prefix frontend'
            }
        }

        stage('Trivy FS Scan') {
            steps {
                sh 'trivy fs --format table -o fs-report.html ./backend'
                sh 'trivy fs --format table -o fs-report.html ./frontend'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv(installationName: 'sonar-scanner', credentialsId: 'sonar-tok') {
                    sh '${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectName=my-project -Dsonar.projectKey=my-project'
                }
            }
        }

        stage('Build and Tag Docker Images') {
            steps {
                sh 'docker build -t backend:0.0.1 ./backend'
                sh 'docker tag backend:0.0.1 992382838241.dkr.ecr.us-east-1.amazonaws.com/backend'
                sh 'docker build -t frontend:0.0.1 ./frontend'
                sh 'docker tag frontend:0.0.1 992382838241.dkr.ecr.us-east-1.amazonaws.com/frontend'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh 'trivy image --format table -o fs-report.html backend:0.0.1'
                sh 'trivy image --format table -o fs-report.html forntend:0.0.1'
            }
        }

        stage('Push Images to AWS ECR') {
            steps {
                sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 992382838241.dkr.ecr.us-east-1.amazonaws.com'
                sh 'docker push 992382838241.dkr.ecr.us-east-1.amazonaws.com/backend:0.0.1'
                sh 'docker push 992382838241.dkr.ecr.us-east-1.amazonaws.com/frontend:0.0.1'
            }
        }
    }
}
