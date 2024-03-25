// Enter Name Button Settings
document.addEventListener('DOMContentLoaded', function() {
    var nameButton = document.getElementById('nameButton');
    var outputElement = document.getElementById('output');

    nameButton.addEventListener('click', function() {
        var name = prompt('Please enter your name:');
        if (name) {
            outputElement.textContent = 'Hello, ' + name + '!';
        }
    });
});

// Adjustable Image Settings
document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('myImage');

    myImage.addEventListener('click', function() {
        if (this.style.width === '100px') {
            this.style.width = '200px'; 
        } else {
            this.style.width = '100px'; 
        }
    });
});

// MouseOver Settings
function mouseOver(element){
    element.style.color = "#ADD8E6";
    element.style.fontWeight = "bold";
    element.style.fontSize = "18px";
}

// MouseOut Settings
function mouseOut(element){
    element.style.color = "#000000";
    element.style.fontWeight = "normal";
    element.style.fontSize = "inherit"; 
}

// JavaScript for Form
function myfunc(event) {
    event.preventDefault();
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var PhoneN = document.getElementById('PhoneN').value;
    var Role1 = document.getElementById('Role1').value;
    var Role2 = document.getElementById('Role2').value;
    var Role3 = document.getElementById('Role3').value;
    var Role4 = document.getElementById('Role4').value;
    var Exp1 = document.getElementById('Exp1').value;
    var Exp2 = document.getElementById('Exp2').value;
    var Exp3 = document.getElementById('Exp3').value;
    var Exp4 = document.getElementById('Exp4').value;
    var Message = document.getElementById('Message').value;
    var Question = document.getElementById('Question').value;

    // Stores Data in Local Storage
    localStorage.setItem('Is_Name', Name);
    localStorage.setItem('Is_Email', Email);
    localStorage.setItem('Is_PhoneN', PhoneN);
    localStorage.setItem('Is_Role1', Role1);
    localStorage.setItem('Is_Role2', Role2);
    localStorage.setItem('Is_Role3', Role3);
    localStorage.setItem('Is_Role4', Role4);
    localStorage.setItem('Is_Exp1', Exp1);
    localStorage.setItem('Is_Exp2', Exp2);
    localStorage.setItem('Is_Exp3', Exp3);
    localStorage.setItem('Is_Exp4', Exp4);
    localStorage.setItem('Is_Message', Message);
    localStorage.setItem('Is_Question', Question);
}

let cont = document.getElementById("container");
function changeSizeByBtn(size) {
    cont.style.10 = size;
