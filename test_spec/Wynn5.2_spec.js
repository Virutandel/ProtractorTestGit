
describe('waynn home page test', function () {

    var expected_text;
    beforeEach(function () {
        browser.driver.get('http://172.16.17.228/shell/index.html?displayWidth=1280&displayHeight=1024&contentWidth=256&contentHeight=956&host=ws://172.16.17.228/simulator/clientsocket');

        browser.driver.sleep(2000).then(function () {
            browser.driver.executeScript('pubsub.publish( "s"+"0x11", { "cmd": "screenTrigger",  "ver": "1.0", "screenTrigger": { "screenId": "0x11", "displayMessage": "This is the idle screen trigger!" }});');
        });

    })

    afterEach(function () {
        browser.driver.sleep(400);
        //console.log('Next test');
    })

    it('synchronize browser Test', function ()  {

        browser.driver.sleep(4000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "100000"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');

        // expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        // expected_text.then(function (text) {
        // //    console.log("  result is --> " + text);
        //     expect(text).toBe("100000");
        // });
    })

    it('Test Total-points-Box test with valid point 900 should be 900:', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "900"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');

        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
           // console.log("  result is --> " + text);
            expect(text).toBe("900");
        });
    })



    it('Total-points-Box text with valid point 100 should not be junk character + alphabet + random number :', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "100"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');

        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
            //console.log("  result is --> " + text);
            expect(text).not.toMatch("!@#$%^&*()_+|23456789abcdefghijklmnopqrstuvwxyz");
        });
    })

    it('Total-points-Box test with null shloud be null (should not be 0):', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": " "}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');
        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
            //console.log("  result is --> " + text);
            expect(text).toBe("");
        });

    })

    it('Total-points-Box test with @#$% (special characters) shloud not be @#$% (special characters):', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "@#$%"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');

        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
            //console.log("  result is --> " + text);
            expect(text).not.toEqual("@#$%");
        });

    })

    it('Total-points-Box test with xyz (alphabet) shloud not be xyz (alphabet):', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "xyz"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');

        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
            //console.log("  result is --> " + text);
            expect(text).not.toBe("xyz");
        });

    })

    it('Test with Total points Box Tets should not print more thne 20 digit:', function () {

        browser.driver.sleep(5000).then(function () {
            browser.driver.executeScript('document.getElementById("WrapperFrame").contentWindow.postMessage({"cmd": "tokenUpdate","ver": "1.0","tokenUpdate": [{"id": "0x11","value": "123456789012345678901"}]}, "*");');
        });

        browser.driver.switchTo().frame('WrapperFrame');
        expected_text = browser.driver.findElement(by.xpath("//igt-token-update[@show='0x11']")).getText();
        expected_text.then(function (text) {
            //console.log("  result is --> " + text);
            expect(text).toBe("points out of window");
        });

    })
})
