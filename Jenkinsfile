pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        bat 'call npx codeceptjs run --reporter mochawesome'
      }
    }

  }
}