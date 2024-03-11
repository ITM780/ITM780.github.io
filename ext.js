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

function myfunc(event) {
    event.preventDefault();
    var Name = document.getElementById('Name').value;
    var male = document.getElementById('male').value;
    var female = document.getElementById('female').value;
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
    
    localStorage.setitem('Is_Name', Name);
    localStorage.setitem('Is_male', male);
    localStorage.setitem('Is_female', female);
    localStorage.setitem('Is_Email', Email);
    localStorage.setitem('Is_PhoneN', PhoneN);
    localStorage.setitem('Is_Role1', Role1);
    localStorage.setitem('Is_Role2', Role2);
    localStorage.setitem('Is_Role3', Role3);
    localStorage.setitem('Is_Role4', Role4);
    localStorage.setitem('Is_Exp1', Exp1);
    localStorage.setitem('Is_Exp2', Exp2);
    localStorage.setitem('Is_Exp3', Exp3);
    localStorage.setitem('Is_Exp4', Exp4);
    localStorage.setitem('Is_Message', Message);
    localStorage.setitem('Is_Question', Question);
}
