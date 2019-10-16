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
			webdriver-manager update
			webdriver-manager start
                        protractor conf.js
                		"""
				
				}
			
		
		}
	

}

