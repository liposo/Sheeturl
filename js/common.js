document.querySelector("#saveButton").addEventListener("click", function () {
  saveOptions();
});

function saveOptions() {
  var sheetUrl = document.getElementById("sheetUrl");

  if (sheetUrl.checkValidity()) {
    localStorage["sheetUrl"] = escape(sheetUrl.value);

    window.close();
  }
}