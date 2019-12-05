/*  content.js  
  
  the script has the same rights as in a single website
  we can manipule the dom here as usuly                         
     
*/ 




/*
example 1

will add a class to all images in document
the css-file main.css wihl class 'cbe_c1' was before inserted in extension.function.js: pleaseDoItNow(data) 

*/
document.querySelectorAll('img').forEach(function(item) {
  item.classList.add("cbe_c1");
});