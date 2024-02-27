function promptName() {
    var name = prompt("Please enter your name:");
    document.getElementById("Output").innerHTML = name;
}
function enlargeImage(){
    var image = document.getElementById("enlargeImage");
    image.style.width = (image.clientWidth + 250) + "px";
    image.style.height = (image.clientHeight + 200) + "px";
}
function mouseOver(element){
    element.style.color = "#ADD8E6";
    element.style.fontWeight = "bold";
    element.style.fontSize = "18px";
}
function mouseOut(element){
    element.style.color = "#000000";
    element.style.fontWeight = "normal";
    element.style.fontSize = "inherit"; 
}
