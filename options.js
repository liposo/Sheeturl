var linkList = document.querySelector('#link-list');

window.addEventListener("load", function() {
  if (
    localStorage["scriptUrl"] &&
    localStorage["sheetUrl"] &&
    localStorage["sheetName"]
  ) {
    document.getElementById("scriptUrl").value = localStorage["scriptUrl"];
    document.getElementById("sheetUrl").value = localStorage["sheetUrl"];
    document.getElementById("sheetName").value = localStorage["sheetName"];

    read();
  } else {
    var message = document.createElement("p");
    message.setAttribute("id", "alert-message");
    message = "URLs or sheet name are missing";

    document.querySelector("#urls-inputs").append(message);
  }
});

document.querySelector("#save-options").addEventListener("click", function() {
  saveOptions();
});

function saveOptions() {
  var scriptUrl = document.getElementById("scriptUrl").value;
  var sheetUrl = document.getElementById("sheetUrl").value;
  var sheetName = document.getElementById("sheetName").value;

  if (scriptUrl && sheetUrl && sheetName) {
    localStorage["scriptUrl"] = scriptUrl;
    localStorage["sheetUrl"] = sheetUrl;
    localStorage["sheetName"] = sheetName;

    var alert = document.querySelector("#alert-message");
    document.querySelector("#urls-inputs").removeChild(alert);
  }

  window.close()
}

async function read() {
  var readUrl =
    localStorage["scriptUrl"] +
    "?action=read&sheetUrl=" +
    localStorage["sheetUrl"] +
    "&sheetName=" +
    localStorage["sheetName"];

  let response = await fetch(readUrl);
  let body = await response.json();

  body.forEach(element => {
    var listItem = createListItem(element);
    linkList.appendChild(listItem);
  });
}

function createListItem(element) {
  var listItem = document.createElement("li");
  var itemTitle = document.createElement("h4");
  var itemUrl = document.createElement("a");

  itemTitle.innerHTML = element.title;
  itemUrl.innerHTML = element.url;
  itemUrl.setAttribute("src", element.url);

  listItem.appendChild(itemTitle);
  listItem.appendChild(itemUrl);

  return listItem;
}
