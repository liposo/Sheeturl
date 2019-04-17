document.onload(function () {
  document.getElementById("scriptUrl").value = localStorage["scriptUrl"];
  document.getElementById("sheetUrl").value = localStorage["sheetUrl"];
  document.getElementById("sheetName").value = localStorage["sheetName"];
})

document.querySelector("#save-options").addEventListener("click", function() {
  saveOptions();
});

function saveOptions() {
  var scriptUrl = document.getElementById("scriptUrl").value;
  var sheetUrl = document.getElementById("sheetUrl").value;
  var sheetName = document.getElementById("sheetName").value;

  localStorage["scriptUrl"] = scriptUrl;
  localStorage["sheetUrl"] = sheetUrl;
  localStorage["sheetName"] = sheetName;

  console.log(localStorage["scriptUrl"]);
  console.log(localStorage["sheetUrl"]);
  console.log(localStorage["sheetName"]);

  //window.close()
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
    var linkList = document.querySelector('#link-list"');
    linkList.appendChild(createElement(element));
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