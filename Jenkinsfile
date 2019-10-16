pipeline {
		agent any
	stages{
		stage ('build'){
			steps{
			echo 'Building..'
				}
			}
		
		stage ('test'){
			steps{
				sh """
                        git clone https://github.com/Virutandel/ProtractorTestGit.git
				"""
				
				}
			
			
			
			steps{
				sh """
                	webdriver-manager update
			webdriver-manager start
                		"""
				
				}
			
			
			
			
			
			steps{
				sh """
                        protractor conf.js
                		"""
				
				}
			
			
			
		
		}
	}

}

