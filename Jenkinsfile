pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh '''npm install'''
        sh '''npx codeceptjs run --reporter mochawesome'''
      }
    }

  }
}
