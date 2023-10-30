pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh '''npx codeceptjs run --reporter mochawesome'''
      }
    }

  }
}
