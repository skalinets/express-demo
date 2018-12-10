pipeline {
  agent any
  tools {nodejs "main nodejs"}
  stages {
    stage('build') {
      steps {
        echo 'installing stuff...'
        sh 'npm i'
      }
    }
    stage('test') {
      steps {
        echo 'running tests'
        sh 'npm test'

      }
    }
  }
}