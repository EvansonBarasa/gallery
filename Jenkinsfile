pipeline { 
  agent any
   tools { 
    nodejs "nodejs"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/EvansonBarasa/gallery.git'
      }
    }
    stage('Build project') {
      steps { 
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps { 
        sh 'npm test'
      }
    }
    stage('Deploy to Heroku') {
     steps {
        withCredentials([usernameColonPassword(credentialsId: 'gallery', variable: 'HEROKU_CREDENTIALS' )]){
             sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/desolate-forest-40208.git master'
         }
        }
    } 
  }
}

post {
        success {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'evanzo85@gmail.com'
        }
        failure {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'evanzo85@gmail.com'
        }