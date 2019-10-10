
describe('Test',function(){
    
    it('credentials', function() {
      browser.driver.get('http://172.16.17.228/shell/index.html?displayWidth=1280&displayHeight=1024&contentWidth=256&contentHeight=956&host=ws://172.16.17.228/simulator/clientsocket');
      console.log ("test step 1");
       var valueF = browser.driver.findElement(By.id('WrapperFrame'));
       browser.driver.sleep(5000).then(function(){
           browser.driver.executeScript('pubsub.publish( "s"+"0x11", { "cmd": "screenTrigger",  "ver": "1.0", "screenTrigger": { "screenId": "0x11", "displayMessage": "This is the idle screen trigger!" }});');
        });
        browser.driver.sleep(9000).then(function(){
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "9000"}]}, "*");');
         });

//console.log ("JSON " + JSON.stringify(valueF));     
       //var valueF2 = browser.driver.findElement(By.id('PinContentFrame'));
     // browser.driver.sleep(19000).then(function(){console.log ("done sleeping");});
    });
    //var valueF = browser.driver.findElement(By.id('WrapperFrame'));
    //console.log ("VF = " + valueF);
    //console.log ("CW = " + valueF.contentWindow);
    //console.log ("JSON " + JSON.stringify(valueF));
    //browser.findElement(by.id('WrapperFrame')).cli
    
    //browser.findElement(by.id('WrapperFrame'))
    // .then(function(e){

    //     console.log ("EVAL "+ e);
    //     console.log ("JSON " + JSON.stringify(e));
    // }) ;
});