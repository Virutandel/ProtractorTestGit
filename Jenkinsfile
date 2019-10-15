           



pipeline {
    // Limit this to run on only some machines
    agent { label "D16StaticSlave72" }
    
    environment {
         // Environment variable identifiers need to be both valid bash variable
        // identifiers and valid Groovy variable identifiers. 
        NEWEST_COMMIT = sh(script:"git rev-parse HEAD", returnStdout:true).trim() 
        CONTENT_VERSION = sh(script:"sed -n 3p version.txt", returnStdout:true).trim()    
        M5_VERSION = sh(script:"sed -n 5p version.txt", returnStdout:true).trim() 
        GIT_REPO_NAME = ""
        WORKSPACE = sh(script:"pwd", returnStdout:true).trim() 
    }

    stages {

        stage ("PreBuild"){
		    steps{
			    //clean workspace
				sh """
				  git reset --hard
				  git clean -fdx
				  """
			}
        }

        stage ("Functional Tests"){
            when {
                expression {
                    return !(BRANCH_NAME == 'release')
                }
            }
            steps {
                // integrate functional tests here
                echo "PLACE FUNCTIONAL TESTS HERE"
                //wynn test Bitbucket link
				
				
				sh """ 
                # Run test
                cd IGTTechServicesTestAutomation
                protractor conf.js
                """
			}
        }            

        stage ("Build Deployment Files"){
            when {
                expression {
                    return (BRANCH_NAME == 'release')
                }
            }
            steps {
                // parse the output using visual studio parsing rules
                echo "Get tools"

                sh """
                  rm -rf m5_tools
                  git clone http://M5Jenkins:IGTtest1@systems.stash.igt.com/scm/mmrh5ts/m5_tools.git
                  cd m5_tools
                  git checkout v1.2
                  cd ..
                  cp m5_tools/deploy/* $WORKSPACE
                  """
                echo "Build Content Patch"
                echo "$CONTENT_VERSION"
                sh """
                    chmod +x buildContentPatch.sh
                    ./buildContentPatch.sh $NEWEST_COMMIT $CONTENT_VERSION $M5_VERSION
                   """

                echo "Generate Release Notes"
                sh """
                    chmod +x buildReleaseNotes.sh
                    ./buildReleaseNotes.sh $NEWEST_COMMIT $CONTENT_VERSION $M5_VERSION
                   """
            }
        }

        stage ("Publish Deployment Files Results") {
            when {
                expression {
                    return (BRANCH_NAME == 'release')
                }
            }
            steps {
                echo "Update Merged Commit"
                script{
                  GIT_REPO_NAME = GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1')
                }
                sh """
                    chmod +x updateCommitToVersion.sh
                    ./updateCommitToVersion.sh $NEWEST_COMMIT $GIT_REPO_NAME $BUILD_NUMBER
                   """                
                
                echo "PublishStep"
				dir('output'){
				    echo "ZIP"
                  zip zipFile: "${GIT_REPO_NAME}_${M5_VERSION}.${CONTENT_VERSION}.${BUILD_NUMBER}.zip", dir:'.'
				    echo "Archiving Output"
					archiveArtifacts artifacts: '**', excludes: ''
				}
            }
        }

    }

    // The options directive is for configuration that applies to the whole job.
    options {
        // Don't let multiple copies of the same build run.
        disableConcurrentBuilds()

        // For example, we'd like to make sure we only keep X builds at a time, so
        // we don't fill up our storage!
        buildDiscarder(logRotator(numToKeepStr:'5'))

        // And we'd really like to be sure that this build doesn't hang forever, so
        // let's time it out after an hour.
        timeout(time: 180, unit: 'MINUTES')

        // Add timestamps to the output
        timestamps()
    }

}
