var LoginOR = require('../json/OR.json');

var LoginPage = function(){

this.enterUserNameAndPassword = function(un,pswd){
    browser.driver.sleep(1000);
    browser.driver.findElement(by.xpath(LoginOR.locators.loginPage.username)).sendKeys(un);
    browser.driver.sleep(1000);
    browser.driver.findElement(by.xpath(LoginOR.locators.loginPage.password)).sendKeys(pswd);    
};
this.clickOnLoginBtn = function(){
    browser.driver.findElement(by.xpath(LoginOR.locators.loginPage.clickOnLoginBtn)).click();
 //  return require('../pages/SimulatorPage.js');
};

};
module.exports = new LoginPage();