let typingText = document.getElementById("typing-text");

let typingEffect1 = ' Bangla';

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

showMenu();

// -------------
// function displaymenu(){
//         document.getElementById("sidebar").style.width = "0";
// }
// displaymenu();









// ------------
// let allpro = document.getElementsByClassName("allwebproject");
//         function allProject() {
//             allpro.style.display = "block";
//         }
//         allProject();


// -----------------------------------------

// let item=document.querySelector(".project").children;
// let pre=document.querySelector(".pre");
// let pre=document.querySelector(".page");
// let next=document.querySelector(".next");
// let maxitem=6;
// let index=1,i;

// function pagination(){
//     for (i=0;i<item.length;i++){
//         item[i].classList.add("hide");
//     }
// }

// pagination();
