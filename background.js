chrome.browserAction.onClicked.addListener(function (tab) {

    var googleScriptUrl = "https://script.google.com/macros/s/AKfycbxmlPDQHBSTcrBHKlin3-8-K-m3BYdgKjWWZBNXKkKK2jEIEuZF/exec";
    var sheetUrl = "https://docs.google.com/spreadsheets/d/16DvU6M6-FCtTA7ZL4uVIrSVXE884IjvtRFvpAF_6rYk/edit?usp=sharing";
    var sheetName = "bookmarks";
    var url = tab.url;
    var title = tab.title;
    var url = googleScriptUrl + "?action=insert&title=" + title + "&url=" + url + "&sheetUrl=" + sheetUrl + "&sheetName=" + sheetName;

    fetch(url).then(response => alert(response.status));
    return true;
});