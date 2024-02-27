function promptName() {
    var name = prompt("Please enter your name:");
    document.getElementById("nameOutput").innerHTML = "Hello, " + name + "!";
}
function enlargeImage(){
    var image = document.getElementById("enlargeImage");
    image.style.width = (image.clientWidth + 250) + "px";
    image.style.height = (image.clientHeight + 200) + "px";
}
function mouseover(element) {
  element.style.backgroundColor = #C0C0C0;
}
function mouseout(element) {
    element.style.backgroundColor = 333;
}

