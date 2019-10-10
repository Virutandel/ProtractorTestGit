
describe('waynn test',function(){

    var expected_text;
    beforeEach(function(){
        browser.driver.get('http://172.16.17.228/shell/index.html?displayWidth=1280&displayHeight=1024&contentWidth=256&contentHeight=956&host=ws://172.16.17.228/simulator/clientsocket');
      
        browser.driver.sleep(3000).then(function(){
            browser.driver.executeScript('pubsub.publish( "s"+"0x11", { "cmd": "screenTrigger",  "ver": "1.0", "screenTrigger": { "screenId": "0x11", "displayMessage": "This is the idle screen trigger!" }});');
         });
 
    })

    afterEach(function(){
        browser.driver.sleep(2000);
        console.log('after it block');
    })

    it('Test with Total points Box with value with valid credential 900 :',function(){
       
         browser.driver.sleep(5000).then(function(){
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "900"}]}, "*");');
         });

         browser.driver.switchTo().frame('WrapperFrame');

         expect(browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText()).toContain('900');
         
            //  var points = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
            //   points.then(elementText => {
            //   console.log("element Text is : " + elementText);
            //   })
       
              expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
              
              expected_text.then(function(text){
                console.log("result is --> " + text);
                expect(parseInt(text)).toBe(900);
              });


            //   browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText().then(function(text){
            //     console.log("result is --> " + text);
            //   })


        })



        it('Test with Total points Box with value with valid credential 900 not match with other value :',function(){
       
            browser.driver.sleep(5000).then(function(){
               browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "900"}]}, "*");');
            });
   
            browser.driver.switchTo().frame('WrapperFrame');
   
            expect(browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText()).toContain('900');
            
               //  var points = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
               //   points.then(elementText => {
               //   console.log("element Text is : " + elementText);
               //   })
          
                 expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
                 
                 expected_text.then(function(text){
                   console.log("result is --> " + text);
                   expect(parseInt(text)).not.toBe(9000);
                 });
   
   
               //   browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText().then(function(text){
               //     console.log("result is --> " + text);
               //   })
   
   
           })
   
})