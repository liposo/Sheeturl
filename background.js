chrome.browserAction.onClicked.addListener(function (tab) {
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
  fetch(insertUrl).then(response => console.log("Insert:" + response.status));
}


