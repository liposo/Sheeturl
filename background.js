chrome.browserAction.onClicked.addListener(function(tab) {
  var url = tab.url;
  var title = tab.title;

  insertUrl =
    localStorage["scriptUrl"] +
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
  chrome.browserAction.setBadgeText({text:"&#8634;"});
  fetch(insertUrl).then(function () {
    chrome.browserAction.setBadgeText({text:""});
  }
  );
}
