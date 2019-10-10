var sP = require ('../pages/SimulatorPage.js');
//var sP = new SimulatorPage();
    

var loginPage = require('../pages/LoginPage.js');
//var loginPage = new LoginPage();

var Basepage =  require('../base/Basepage.js');
var base = new Basepage();

//var ScreenTriggerIdle = require('../pages/ScreenTriggerIdlePage.js');

describe('Simulator Test',function(){

  it("Load content with screenTriggerIdel",function(){
    console.log ("sp = " +JSON.stringify(sP) + " obj " + sP);
    base.navigateToURL("http://172.16.17.228/simulator/#/login");
      //LoginPage.enterUseNameAndPassword('igt','igt');
      //broswer.driver.sleep(3000);
      //broswer.driver.sleep(3000);
      loginPage.clickOnLoginBtn();
      sP.deopDownSelectCommands("screenTriggerIdle");   
  });
});