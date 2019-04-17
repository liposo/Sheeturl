var gScriptUrl =
  "https://script.google.com/macros/s/AKfycbxmlPDQHBSTcrBHKlin3-8-K-m3BYdgKjWWZBNXKkKK2jEIEuZF/exec";

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
  fetch(insertUrl).then(function() {
    chrome.browserAction.setBadgeText({ text: "" });
  });
}
