function promptName() {
  var name = prompt("Please enter your name:");
  var output = document.getElementById("nameOutput");
  output.innerHTML = "Hello, "+ name + ".";
}
function enlargeImage() {
  var image = document.getElementById("Image");
  image.style.width = 65px;
}
function resetImageSize() {
  var image = document.getElementById("Image");
  image.style.width = 40px;
}
function mouseover(element) {
  element.style.backgroundColor = #C0C0C0;
}
function mouseout(element) {
    element.style.backgroundColor = 333;
}

