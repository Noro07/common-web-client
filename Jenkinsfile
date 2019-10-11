pipeline {
  agent { docker { image 'node:10.15.3' } }

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
