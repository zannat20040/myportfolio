let typingText = document.getElementById("typing-text");

let typingEffect1 = ' Front-End Developer';

var j = 0;

function typingFunction() {
    if (j < typingEffect1.length) {
        typingText.innerHTML += typingEffect1.charAt(j);
        j++;
        setTimeout(typingFunction, 400);
    }
}
typingFunction();

// ----------------------

let click;

function showMenu() {
    if (click == 1) {
        document.getElementById("sidebar").style.width = "250px";
        return click = 0;
    }
    else {
        document.getElementById("sidebar").style.width = "0";
        return click = 1;
    }
}



