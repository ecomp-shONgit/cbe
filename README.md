
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
```

Desktop Browser Market Share Worldwide - October 2019 from statscounter
https://gs.statcounter.com/browser-market-share/desktop/worldwide/

Browser | Market Share Perc. (Nov 2019)
------------ | -------------
Chrome | 68.9
Firefox | 9.42
Safari | 9.16
Edge | 4.57
IE | 3.67
Opera | 2.34
Yandex Browser | 0.49
UC Browser | 0.29
Coc Coc | 0.25
Chromium | 0.18
Mozilla | 0.17
QQ Browser | 0.16
Sogou Explorer | 0.11
Maxthon | 0.08
Whale Browser | 0.07
Vivaldi | 0.05
360 Safe Browser | 0.03
Pale Moon | 0.02
Waterfox | 0.01
Other | 0.03
