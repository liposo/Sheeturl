var linkList = document.querySelector("#link-list");
var gScriptUrl =
  "https://script.google.com/macros/s/AKfycbxmlPDQHBSTcrBHKlin3-8-K-m3BYdgKjWWZBNXKkKK2jEIEuZF/exec";

window.addEventListener("load", function() {
  if (
    localStorage["sheetUrl"] &&
    localStorage["sheetName"]
  ) {
    document.getElementById("sheetUrl").value = localStorage["sheetUrl"];
    document.getElementById("sheetName").value = localStorage["sheetName"];

    read();
  } else {
    var message = document.createElement("p");
    message.setAttribute("id", "alert-message");
    message = "URL or sheet name are missing";

    document.querySelector(".inputs").append(message);
  }
});

document.querySelector("#save-options").addEventListener("click", function() {
  saveOptions();
});

document.querySelector("#refresh").addEventListener("click", function () {
  var children = Array.prototype.slice.call(linkList.children);
  
  children.forEach((element) => {
    element.remove();
  });

  read();
});

function saveOptions() {
  var sheetUrl = document.getElementById("sheetUrl").value;
  var sheetName = document.getElementById("sheetName").value;

  if (sheetUrl && sheetName) {
    localStorage["sheetUrl"] = sheetUrl;
    localStorage["sheetName"] = sheetName;

    var alert = document.querySelector("#alert-message");
    if (alert) {
      document.querySelector("#urls-inputs").removeChild(alert);
    }
  }

  window.close();
}

async function read() {
  var readUrl =
    gScriptUrl +
    "?action=read&sheetUrl=" +
    localStorage["sheetUrl"] +
    "&sheetName=" +
    localStorage["sheetName"];

  let response = await fetch(readUrl);
  let body = await response.json();

  if(Object.keys(body).length){
    body.forEach(element => {
      var listItem = createListItem(element);
      linkList.appendChild(listItem);
    });
  } 
}

function createListItem(element) {
  var listItem = document.createElement("li");
  var itemTitle = document.createElement("h2");
  var itemUrl = document.createElement("a");

  itemTitle.innerHTML = element.title;
  itemUrl.innerHTML = element.url;
  itemUrl.setAttribute("href", element.url);

  listItem.appendChild(itemTitle);
  listItem.appendChild(itemUrl);

  return listItem;
}
