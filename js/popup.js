'use strict';

/*  popup.js  
                         
    @need js/browser.js
    @need js/extension.functions.js 
           
    @need browser.runtime
    @need browser.storage
    @need browser.i18n
    @need browser.browserAction
    @need browser.tabs        
*/ 

document.addEventListener("DOMContentLoaded", function(event) { 

var isActiveSwitch = document.querySelector('#isActiveSwitch');
  
  /* localization of html-elements */
  document.querySelectorAll('.localize').forEach(function(node) {
    localizeNode(node);
    });   

  /* get all stored data */
  browser.storage.local.get(null, function(data) {
    isActiveSwitch.checked = data.isActive;   
    });
  
  /* switch on / off */  
  isActiveSwitch.addEventListener("click", function(el) {
    var status = el.target.checked;
    browser.storage.local.set({isActive: status}, function() 
      {
       browser.storage.local.get(null, function(data)
        { 
        if( data.isActive )
          {
          browser.browserAction.setBadgeText({text: 'ON'});
          browser.browserAction.setBadgeBackgroundColor({color: "green"});         
          }
        else
          {
          browser.browserAction.setBadgeText({text: 'OFF'});
          browser.browserAction.setBadgeBackgroundColor({color: "gray"});          
          }            
        }); 
      }); 
    });
}); 