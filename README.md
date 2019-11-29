# cbe
Cross Browser Extension

A skeleton for a browser extension based on WebExtensions

Tested in
+ Opera 65.0
+ Vivaldi 2.9
+ Chrome 78.0
+ Brave 1.0
+ TorBrowser 9.0
+ Firefox Quantum
+ Chromium 58.0


The skeleton uses following JavaScript APIs:
+ runtime
+ tabs
+ storage
+ browserAction
+ i18n

To support different namespaces there is short mapper in browser.js 

window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();


