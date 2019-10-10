

describe('table mountain test',function(){
   
    beforeEach(function(){
        browser.driver.get(
            "http://172.16.17.228/shell/index.html?displayWidth=1280&displayHeight=1024&contentWidth=256&contentHeight=956&xPosition=0&yPosition=0&bannerPosition=bottom&localXmlSocketPort=7000&localWebSocketPort=7001&localProtocolVers=1.0&machineNumber=11111&location=AA1234&uid=33334562&actualWidth=0&actualHeight=0&bannerHeight=0&screenType=primary&mediaDisplayType=scale&mediaDisplayPosition=bottom&fullscreenCapable=true&audioCapable=true&boardVersion=0&host=ws://172.16.17.228/simulator/clientsocket");
        browser.driver.manage().window().maximize();
    })

    it('check 128x448',function(){
        browser.driver.findElement(By.xpath("//div[@id='btn3']")).click();
		//browser.driver.sleep(2000);
		browser.driver.findElement(By.xpath("//div[@id='btn2']")).click();
		//browser.driver.sleep(2000);
		browser.driver.findElement(By.xpath("//div[@id='btn3']")).click();
		//browser.driver.sleep(2000);
		browser.driver.findElement(By.xpath("//div[@id='btn1']")).click();
		
    
        //SWITCH FRAME
     //   var size = browser.driver.findElements(By.tagName("iframe")).size;
    
		// System.out.println("Number of Frame: " + size);
		browser.driver.switchTo().frame("WrapperFrame");
		
        
        //click on dining
        browser.driver.findElement(By.id("locale-prop")).click();
        browser.driver.sleep(2000);
        
        //click on mountain Feast Buffet
        browser.driver.findElement(By.id("nav3")).click();
        browser.driver.sleep(2000);
        
        //scrollerDown
        browser.driver.findElement(By.id("scrollerDown")).click();
        browser.driver.sleep(2000);
        
        var title =  browser.driver.getTitle();
//        expect(browser.driver.get)
        console.log(title);
        expect(title).toEqual("Wrapper Shell")

        //click on back
        browser.driver.findElement(By.id("locale-backnav")).click();
        browser.driver.sleep(1000);

        browser.driver.findElement(By.id("nav2")).click();
		browser.driver.sleep(1000);
        browser.driver.findElement(By.id("locale-backnav")).click();
       
        var title2 =  browser.driver.getTitle();
        console.log(title2);
        expect(title2).toEqual("Wrapper Shell")
        browser.driver.sleep(1000);


	//VERIFY EAGLES LANDING RESTAURANT
//    browser.driver.findElement(By.id("nav1")).click();
 //   var title3 =  browser.driver.getTitle();
  //  console.log(title3);
   // expect(title3).toEqual("Wrapper Shell")
    //browser.driver.sleep(1000);
	//VERIFY MOUNTAIN FEAST BUFFET
    
    //browser.driver.findElement(By.id("locale-backnav")).click();
   
 //   browser.driver.findElement(By.id("locale-next")).click();
   
 //   browser.driver.findElement(By.id("nav2")).click();
   
 //   browser.driver.findElement(By.id("nav1")).click();
   // var title4 =  browser.driver.getTitle();
 //   console.log(title4);
  //  expect(title4).toEqual("Wrapper Shell")
   // browser.driver.sleep(1000);



    //TM CAFE
   // browser.driver.findElement(By.id("locale-backnav")).click();
   
    

    //browser.driver.findElement(By.id("nav1")).click();
    //var title2 =  browser.driver.getTitle();
    //console.log(title2);
    //expect(title2).toEqual("Wrapper Shell")
    //browser.driver.sleep(1000);

    //browser.driver.findElement(By.id("locale-backnav")).click();
    
    }) 


})