pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm run ready'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
