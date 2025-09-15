pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image with tag 'task3:latest'
                    sh 'docker build -t task3:latest .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Stop any existing container named 'task3-container'
                    sh 'docker rm -f task3-container || true'
                    // Run container in detached mode
                    sh 'docker run -d --name task3-container -p 3000:3000 task3:latest'
                }
            }
        }
    }
}
