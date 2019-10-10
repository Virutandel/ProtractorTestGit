
var BasePage = function(){

  this.navigateToURL = function(url){

    browser.driver.get(url);

  };

   this.getPageTitle = function(){

       return browser.driver.getTitle();

   }
};
module.exports = BasePage;