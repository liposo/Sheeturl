var gScriptUrl =
  "https://script.google.com/macros/s/AKfycbxmlPDQHBSTcrBHKlin3-8-K-m3BYdgKjWWZBNXKkKK2jEIEuZF/exec";

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({ url: "options.html" });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  var url = tab.url;
  var title = tab.title;

  insertUrl =
    gScriptUrl +
    "?action=insert&title=" +
    title +
    "&url=" +
    url +
    "&sheetUrl=" +
    localStorage["sheetUrl"] +
    "&sheetName=" +
    localStorage["sheetName"];

  insert();
});

function insert() {
  chrome.browserAction.setBadgeText({ text: "sync" });
  fetch(insertUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      if (result.result == "success") {
        chrome.browserAction.setBadgeText({ text: "OK" });
        chrome.browserAction.setBadgeBackgroundColor({ color: "#00A572" });
      } else {
        chrome.browserAction.setBadgeText({ text: "ERROR" });
        chrome.browserAction.setBadgeBackgroundColor({ color: "#b80f0a" });
      }
      timer = setTimeout(function() {
        chrome.browserAction.setBadgeText({ text: "" });
      }, 2000);
    })
    .catch(function(error) {
      chrome.browserAction.setBadgeText({ text: "ERROR" });
      chrome.browserAction.setBadgeBackgroundColor({ color: "#b80f0a" });
      timer = setTimeout(function() {
        chrome.browserAction.setBadgeText({ text: "" });
      }, 2000);
    });
}
