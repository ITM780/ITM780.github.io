function promptname() {
  var name = prompt("Please enter your name:" ;
  var output = document.getElementById("nameOutput") ;
  output.innerHTML = "Hello, "+ name + ".";
}
function enlargeImage() {
  var img = document.getElementById("Image") ;
  img.style.width = 150px ;
}
function resetImageSize() {
  var img = document.getElementById("myImage");
  img.style.width = 100px ;
}
function mouseover(element) {
  element.style.backgroundColor = #325 ;
}
function mouseout(element) {
    element.style.backgroundColor = "" ;
}

