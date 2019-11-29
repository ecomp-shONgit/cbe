'use strict';

/* localizeNode
   reads the attribute 'data-localize' from node and replace the innerHTML with the localized message
   @var element node                            
   @need browser.i18n
*/  
function localizeNode(node)
  {
  var localizeKey = node.getAttribute('data-localize');
  if( localizeKey!= null && localizeKey!='' )
    {
    var localizeMessage = browser.i18n.getMessage(localizeKey);
       
    if( localizeMessage!='' )
      node.innerHTML = localizeMessage;   
    }
  }
  
 /* pleaseDoItNow
    execute the 'main script' in tab-context 
    @var object storage-data 
    @need browser.i18n
    @need browser.tabs
    @need browser.runtime
 */
function pleaseDoItNow(data)
  {
  var isActive = data.isActive;
  var tabID = data.tabID;

  
  if( typeof(tabID) == 'undefined' || tabID == null || tabID==0 ) 
    {
    return;
    } 

  browser.tabs.get(tabID, function(tab) 
    {
    if (browser.runtime.lastError)  console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);

     
    /* the tab and the popup are separeted - so we have to load some js and css in tab-context */     
    if(!browser.runtime.lastError && tab && tab.url && tab.url.substring(0,6)!="chrome" && tab.url.substring(0,5)!="about" ) 
      {

        // console.log("we are in tabID "+tabID+" with url "+tab.url);
        
     console.log(isActive);   
      
        /* browser.js */
        browser.tabs.executeScript(tabID, { file: 'js/browser.js' }, function() 
          {
          if (browser.runtime.lastError)  console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
          }); 

        /* extension_functions.js */  
        browser.tabs.executeScript(tabID, { file: 'js/extension.functions.js' }, function() 
          {
          if (browser.runtime.lastError)  console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
          });           

        /* css file  */
        browser.tabs.insertCSS(tabID, { file: 'css/main.css' }, function() 
          {
          if (browser.runtime.lastError)  console.log('There was an error inserting css : \n' + browser.runtime.lastError.message);
          }); 
             
      
      /* content-script can loaded here */
       
      
      } 
    else
      {
      
      // console.log("will do nothing");
      
      }

    });     
  }



/* saveTheOptions
   save the options in browser.storage
               
   @need browser.i18n
   @need browser.storage
*/
function saveTheOptions()
  {
  var opt1 = document.querySelector('#option1').value;
  var status = document.querySelector('#status');
  var savedMess = browser.i18n.getMessage('savedOpt') || 'Options saved.';
        
  browser.storage.local.set({
    option1: opt1
    }, function() {
      status.textContent = savedMess;
      setTimeout(function() { status.textContent = ''; }, 1450);
    });  
  }
  
  
/* setTheOptions
   load the options from browser.storage
               
   @need browser.i18n
   @need browser.storage
*/ 
function setTheOptions()
  {
  var opt1_el = document.querySelector('#option1');
  var status = document.querySelector('#status');
  var loadMess = browser.i18n.getMessage('loadOpt') || 'Options loaded.';  
   
  browser.storage.local.get(null, function(data)
    {
    opt1_el.value = data.option1;
    status.textContent = loadMess;
    setTimeout(function() { status.textContent = ''; }, 1450);
    });   
  } 