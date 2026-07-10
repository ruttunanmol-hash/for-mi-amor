let currentLevel = 0;

const levels = document.querySelectorAll(".level");

const levelText = document.getElementById("levelText");



function nextLevel(){

    if(currentLevel < levels.length - 1){

        levels[currentLevel]
        .classList.remove("active");


        currentLevel++;


        levels[currentLevel]
        .classList.add("active");


        levelText.innerHTML =
        "Level " + (currentLevel + 1) + " / 10";


        if(currentLevel === 3){

            createHeartGarden();

        }


    }

}







// 20 reasons

const reasons = [

"You make me smile even when I don't realize I need it. 💜",

"You make normal days feel special.",

"I can always be myself around you.",

"Your laugh is one of my favorite sounds.",

"You make my life brighter.",

"I love our random conversations.",

"You make me feel cared for.",

"I love all the memories we create.",

"You make me excited for the future.",

"You are someone I can trust.",

"I love your personality.",

"I love our little jokes.",

"I love spending time with you.",

"You make moments unforgettable.",

"I feel lucky that I found you.",

"You are one of my favorite people.",

"You make me feel happy.",

"I am grateful our paths crossed.",

"You make my world better.",

"I love you because you are you. 💜"

];





let collected = 0;



function createHeartGarden(){


const garden =
document.getElementById("heartGarden");


garden.innerHTML="";

collected=0;


document.getElementById("heartCount")
.innerHTML="0 / 20 Hearts";



reasons.forEach((reason,index)=>{


let heart =
document.createElement("div");


heart.className="love-heart";


heart.innerHTML="💗";


heart.onclick=function(){


heart.style.transform="scale(0)";


setTimeout(()=>{

heart.remove();

},300);



collected++;


document.getElementById("heartCount")
.innerHTML =
collected + " / 20 Hearts";



showReason(reason);



if(collected===20){

setTimeout(()=>{

alert(
"💜 Heart Garden Complete!\n\nYou unlocked all 20 reasons."
);

},500);

}


};



garden.appendChild(heart);


});


}








function showReason(text){


let message =
document.createElement("div");


message.className="card";


message.innerHTML =
"💗 " + text;



document.getElementById("heartGarden")
.appendChild(message);



}






// Secret little sparkle effect

document.addEventListener(
"click",
function(e){


let sparkle =
document.createElement("span");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkle.style.fontSize="25px";

sparkle.style.pointerEvents="none";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},700);



});
