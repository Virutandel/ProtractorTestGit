pipeline {
stages {
        stage ("Compile-Package"){
		steps	{
			protractor conf.js
			}
        			 }

	}
}
