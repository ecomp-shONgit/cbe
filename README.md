
# cbe
## Cross Browser Extension

A skeleton for a browser extension based on WebExtensions. Tested in

Browser | Version
------------ | -------------
Opera | 65.0
Vivaldi | 2.9
Chrome | 78.0
Brave | 1.0
TorBrowser | 9.0
Firefox | Quantum
Chromium | 58.0


The skeleton uses following JavaScript APIs:
* runtime
* tabs
* storage
* browserAction
* i18n

To support different browser namespaces there is an alias function in browser.js
```javascript
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();
