pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        bat 'npm install'
        bat 'npx codeceptjs run --reporter mochawesome'
      }
    }

  }
}
