document.addEventListener('DOMContentLoaded', function() {
    var Bname = document.getElementById('Bname');
    var outputElement = document.getElementById('output');

    nameB.addEventListener('click', function() {
        var Bname = prompt('Please enter your name:');
        if (name) {
            outputElement.textContent = 'Hello, ' + name + '!';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var PImage = document.getElementById('PImage');

    myImage.addEventListener('click', function() {
        if (this.style.width === '200px') {
            this.style.width = '400px'; 
        } else {
            this.style.width = '200px'; 
        }
    });
});

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
