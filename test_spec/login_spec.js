
var Basepage = require('../base/Basepage.js');
var base = new Basepage();

var simulatorPage = require('../pages/SimulatorPage.js');

var loginPage = require('../pages/LoginPage.js');

//var SimulatorPage = require ('../pages/SimulatorPage.js'); //no need to create next page declaration
//var SimulatorPage = new SimulatorPage();                     // its already defire in loginPage
describe('IGT M5 Simulator Login Test',function(){
    
    it('loginTest with valid credentials')
    base.navigateToURL("http://172.16.17.228/simulator/#/login");
    //LoginPage.enterUseNameAndPassword('igt','igt');
    //broswer.driver.sleep(3000);
    loginPage.clickOnLoginBtn();
  //  simulatorPage.clickOnLoginBtn();
simulatorPage.loadContentBtn1();
});


