chrome.browserAction.onClicked.addListener(function (tab) {

    var googleScriptUrl = "Your Google Script URL";
    var sheetUrl = "Your Google Sheet URL";
    var sheetName = "Your sheet(tab) name";
    var url = tab.url;
    var title = tab.title;
    var url = googleScriptUrl + "?action=insert&title=" + title + "&url=" + url + "&sheetUrl=" + sheetUrl + "&sheetName=" + sheetName;

    fetch(url).then(response => alert(response.status));
    return true;
});
