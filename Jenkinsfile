pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        bat 'npx codeceptjs run --reporter mochawesome'
      }
    }

  }
}