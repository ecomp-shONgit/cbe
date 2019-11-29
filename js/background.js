'use strict';

/*  background.js  
                         
    @need js/browser.js
    @need js/extension.functions.js 
           
    @need browser.runtime
    @need browser.storage
    @need browser.i18n
    @need browser.browserAction
    @need browser.tabs        
*/ 

browser.runtime.onInstalled.addListener(function() {
  browser.storage.local.clear();
  browser.storage.local.set({isActive: false, tabID: 0, option1: 4 }, function() { });
  browser.browserAction.setBadgeText({text: 'OFF'});
  browser.browserAction.setBadgeBackgroundColor({color: "gray"});          
 });
 

browser.tabs.onActivated.addListener(function(info) { 
   browser.storage.local.set({tabID: info.tabId}, function() {
     browser.storage.local.get(null, function(data)
      {  
      
//console.dir(data);
pleaseDoItNow(data);

      }); 

  });
});   