let typingText=document.getElementById("typing-text");

let typingEffect1=' Front-End Develeoper';
// let typingEffect2='English';

var j=0;

function typingFunction(){
        if(j<typingEffect1.length){
            typingText.innerHTML+=typingEffect1.charAt(j);
             j++;
             setTimeout(typingFunction, 400);
            //  for(j=19; j>=0;j--){
            //     typingText.innerHTML+=typingEffect1.charAt(j);
            //     setTimeout(typingFunction, 400);
            //  }
         }
        // else if(j<typingEffect2.length && i==typingEffect2.length){
        //     typingText.innerHTML+=typingEffect2.charAt(j);
        //      j++;
        //      setTimeout(typingFunction, 400);
        //  }
        
    }
typingFunction();


let click;

function showMenu(){
    if(click==1){
        document.getElementById("sidebar").style.width="250px";
        return click=0;
    }
    else{
        document.getElementById("sidebar").style.width="0";
        return click=1;
    }
}

// -------------
// let allpro = document.getElementsByClassName("allwebproject");
//         function allProject() {
//             allpro.style.display = "block";
//         }
//         allProject();
