var linkList = document.querySelector("#link-list");
var refresh = document.querySelector("#refresh");
var gScriptUrl =
  "https://script.google.com/macros/s/AKfycbxmlPDQHBSTcrBHKlin3-8-K-m3BYdgKjWWZBNXKkKK2jEIEuZF/exec";

window.addEventListener("load", function() {
  if (
    localStorage["sheetUrl"]
  ) {
    document.getElementById("sheetUrl").value = unescape(localStorage["sheetUrl"]);

    read();
  } else {
    var message = document.createElement("p");
    message.setAttribute("id", "alert-message");
    message = "URL are missing";

    document.querySelector(".inputs").append(message);
  }
});

refresh.addEventListener("click", function () {
  refresh.classList.add('spin');
  
  var children = Array.prototype.slice.call(linkList.children);
  
  children.forEach((element) => {
    element.remove();
  });

  read();
});

async function read() {
  var readUrl =
    gScriptUrl +
    "?action=read&sheetUrl=" +
    localStorage["sheetUrl"];
  
  let response = await fetch(readUrl);
  let body = await response.json();

  if(Object.keys(body).length){
    
    refresh.classList.remove('spin');

    body.forEach(element => {
      var listItem = createListItem(element);
      linkList.appendChild(listItem);
    });
  } 
}

function createListItem(element) {
  var listItem = document.createElement("li");
  var title = document.createElement("h2");
  var link = document.createElement("a");
  var urlSpan = document.createElement("span"); 

  title.innerHTML = element.title;
  urlSpan.innerHTML = element.url;

  link.appendChild(title);
  link.appendChild(urlSpan);
  link.setAttribute("href", element.url);

  listItem.appendChild(link);

  return listItem;
}
