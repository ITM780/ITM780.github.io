function promptname() {
  var name = prompt("Please enter your name:" ;
  var output = document.getElementById("nameOutput") ;
  output.innerHTML = "Hello, "+ name ;
}
function enlargeImage() {
  var image = document.getElementById("Image") ;
  image.style.width = 150px ;
}
function mouseover(element) {
  element.style.backgroundColor = #325 ;
}
function mouseout(element) {
    element.style.backgroundColor = "" ;
}

