/* eslint-disable no-undef */

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "/static/js/extension.js" });
});
