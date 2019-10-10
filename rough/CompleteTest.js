
describe('M5 simulator',function(){
    
    it('handling DropDown',function(){
    
        //open url
        var url = "http://172.16.17.228/simulator/#/";
        browser.driver.get(url);
        browser.driver.sleep(1000);
    
        //click on login IGT page
        browser.driver.findElement(by.xpath("//button[@class='btn btn-primary btn-block']")).click();
        browser.driver.sleep(1000);
    
        //click on dropdown button
        element.all(by.xpath("//button[@id='dropdownMenu1']")).get(0).click();
        //select ScreenTrigger idel from dropDown
        browser.driver.findElement(by.xpath("//a[contains(text(),'screenTriggerIdle')]")).click();
        browser.driver.sleep(3000);
    
        //click on loadContent1 button
        browser.driver.findElement(by.id("data-test-loadContent1")).click();
        browser.driver.sleep(1000);
    
        //click on load content on new window
        
        browser.driver.findElement(by.id("loadContentBtn")).click();
        browser.driver.sleep(2000);
    
    
        //Switch window to game window
    
    browser.driver.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]).then(function(){
            //do your stuff on the pop up window
        });
    });
    
    
        browser.driver.findElement(By.xpath("//div[@id='btn3']")).click();
        browser.driver.sleep(2000);
        browser.driver.findElement(By.xpath("//div[@id='btn2']")).click();
        browser.driver.sleep(2000);
        browser.driver.findElement(By.xpath("//div[@id='btn3']")).click();
        browser.driver.sleep(2000);
        browser.driver.findElement(By.xpath("//div[@id='btn1']")).click();
    
    
    
        //Switch iframe
        // System.out.println("Number of Frame: " + size);
            browser.driver.switchTo().frame("WrapperFrame");
            
            
            //click on dining
            browser.driver.findElement(By.id("locale-prop")).click();
            browser.driver.sleep(2000);
            
    
    //click on mountain Feast Buffet
    browser.driver.findElement(By.id("nav3")).click();
    browser.driver.sleep(2000);
    
    //click donw arrow 
    //browser.driver.findElement(By.xpath(" //button[@id='scrollerDown']")).click();
    //browser.driver.sleep(2000);
    
    //mountain Feast Buffet title verification
    var title =  browser.driver.getTitle();
    //        expect(browser.driver.get)
            console.log(title);
            expect(title).toEqual("Wrapper Shell")
    
    //click on back button
    browser.driver.findElement(By.xpath("//button[@id='mainBackBtn']")).click();
    browser.driver.sleep(1000);
    
    //click on eagle landing restuarant
    browser.driver.findElement(By.xpath("//button[@id='nav2']")).click();
    
    
    //eagle landing restuarant title verification
    var title =  browser.driver.getTitle();
            console.log(title);
            expect(title).toEqual("Wrapper Shell")
    
    //click on back button
    browser.driver.findElement(By.xpath("//button[@id='mainBackBtn']")).click();
    
    
    //click on TM Cafe
    browser.driver.findElement(By.xpath("//button[@id='nav1']")).click();
    
    
    //click on back button
    browser.driver.findElement(By.xpath("//button[@id='mainBackBtn']")).click();
    //click on next button
    browser.driver.findElement(By.xpath("//button[@id='mainScrollDown']")).click();
    
    
    //click on extra cafe
    browser.driver.findElement(By.xpath("//button[@id='nav2']")).click();
    //click on back button
    browser.driver.findElement(By.xpath("//button[@id='mainBackBtn']")).click();
    
    
    
    //click on startbucks 
    browser.driver.findElement(By.xpath("//button[@id='nav1']")).click();
    
    //click on back button
    browser.driver.findElement(By.xpath("//button[@id='mainBackBtn']")).click();
    
    
    });
    });
    