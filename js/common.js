document.querySelector("#saveButton").addEventListener("click", function() {
    saveOptions();
  });

function saveOptions() {
    var sheetUrl = document.getElementById("sheetUrl");
    var sheetName = document.getElementById("sheetName");
  
    if (sheetUrl.checkValidity() && sheetName.checkValidity()) {
      localStorage["sheetUrl"] = sheetUrl.value;
      localStorage["sheetName"] = sheetName.value;

      window.close();
    }
}