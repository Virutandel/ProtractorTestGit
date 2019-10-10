var simulatorOR = require('../json/OR.json');


var SimulatorPage = function(){

this.deopDownSelectCommands = function(commands){
    if(commands.localeCompare('screenTriggerIdle')){
        browser.driver.findElement(by.xpath(simulatorOR.locator.simulatorPage.dropDownBtn)).click();
        browser.driver.findElement(by.xpath(simulatorOR.locator.simulatorPage.screenTriggerIdel)).click();
    }
    else{
        console.log('Please select DeopDown Button')
    }
  }

this.loadContentBtn1 = function(){
    console.log ("SOR " + simulatorOR);
    console.log ("SOR " + simulatorOR.locator);
    browser.driver.findElement(by.id(simulatorOR.locator.simulatorPage.loadContent_onPage_ID)).click();
};

this.loadContentBtn2_PopUps = function(){
    browser.driver.findElement(by.id(simulatorOR.locator.simulatorPage.loadContent_onPopups_ID)).click();   
   // return require('../pages/ScreenTriggerIdelPage');
};


};


module.exports = new SimulatorPage();