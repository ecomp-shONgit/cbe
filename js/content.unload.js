/*  content.unload.js  
  
  same as in content.js                  
     
*/ 


/*
example 1

remove the class 'cbe_c1' from content

*/
document.querySelectorAll('img').forEach(function(item) {
  item.classList.remove("cbe_c1");
});                                                                            