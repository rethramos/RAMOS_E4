// RAMOS, Rethaniel A.
// 11839864
// CCAPDEV X22
// 17 February 2020

var x = 0;
var n = 3;

function upload() {
  var imgInput = document.getElementById("img-input");
  var imgPath = imgInput.value;
  var fileTypes = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!fileTypes.exec(imgPath)) {
    alert("Invalid file type.");
  } else {
    x++;
    // document.getElementById("ctr").innerHTML = x;

    // var container = document.getElementById("container");
    var row = document.createElement("div");
    row.className = "row";

    var reader = new FileReader();

    // If file loads successfully
    reader.onload = function (e) {
      var url = e.target.result;
      var img = document.createElement("img");

      img.src = url;
      row.appendChild(img);
      var cols = document.getElementsByClassName("col");
      cols[(x - 1) % n].appendChild(row);
    };

    // If file fails to load
    reader.onerror = function (e) {
      console.error("File could not be read" + e.target.error.code);
    }

    // Preview the image
    reader.readAsDataURL(imgInput.files[0]);


  }


}
