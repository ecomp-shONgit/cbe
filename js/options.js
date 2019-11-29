'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  var save_el = document.querySelector('#saveButton');
  
  /* localization of html-elements */
  document.querySelectorAll('.localize').forEach(function(node) {
    localizeNode(node);
    });   

  /* get all stored data an fill the html */
  setTheOptions();
  
  /*  */  
  save_el.addEventListener("click", function(el) {
    saveTheOptions();
    });
}); 