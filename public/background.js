/* eslint-disable no-undef */

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "/static/js/extension.js" });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("extension");
//   const shadowRoot = container.attachShadow({ mode: "open" });

//   const paragraph = document.createElement("p");
//   paragraph.textContent = "This is a paragraph inside shadow DOM.";
//   shadowRoot.appendChild(paragraph);
// });
