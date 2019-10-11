pipeline {
  // agent { docker { image 'node:10.15.3' } }

  stages {
    stage('pre-build') {
      steps {
        sh 'node -v'
      }
    }
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
