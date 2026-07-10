let currentScene = 0;


const scenes = document.querySelectorAll(".scene");


const levelDisplay = document.getElementById("levelDisplay");



function nextScene(){


if(currentScene < scenes.length - 1){


scenes[currentScene]
.classList.remove("active");



currentScene++;



scenes[currentScene]
.classList.add("active");



levelDisplay.innerHTML =
"LEVEL " + (currentScene + 1) + " / 10";



if(currentScene === 3){

createHearts();

}


}


}







// Letter opening


function openLetter(){


const letter =
document.getElementById("letterBox");


letter.classList.add("show");



}








// Heart Garden


const reasons = [

"You make me smile even on difficult days 💜",

"You make ordinary moments magical",

"I can be myself around you",

"Your laugh makes me happy",

"You make my life brighter",

"I love our random conversations",

"You make me feel loved",

"I treasure every memory with you",

"You make me excited for the future",

"I trust you",

"I love your personality",

"I love our inside jokes",

"I love spending time with you",

"You make moments unforgettable",

"I feel lucky I found you",

"You are one of my favorite people",

"You make my heart happy",

"I am grateful our paths crossed",

"You make my world better",

"I love you because you are you 💜"

];




let heartsCollected = 0;



function createHearts(){


const garden =
document.getElementById("garden");

garden.innerHTML="";


reasons.forEach((reason)=>{


let heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="💗";



heart.onclick=function(){


heart.style.transform="scale(0)";



setTimeout(()=>{

heart.remove();

},300);



heartsCollected++;



document.getElementById("heartDisplay")
.innerHTML =
"💗 " + heartsCollected + " / 20";



showReason(reason);



if(heartsCollected === 20){


setTimeout(()=>{

alert(
"✨ Heart Garden Complete ✨\n\nYou unlocked all my reasons."
);


},500);


}



};



garden.appendChild(heart);



});


}







function showReason(text){


const box =
document.getElementById("reasonBox");



box.innerHTML =

"💜 " + text;


box.style.animation="none";


setTimeout(()=>{

box.style.animation="enter .5s";

},10);


}









// Gift opening


function openGift(box){


box.innerHTML="✨💜✨";


document.getElementById("giftMessage")
.innerHTML =
"You found a little piece of my heart 💜";


}









// Click sparkle effect


document.addEventListener(
"click",
function(event){


let sparkle =
document.createElement("span");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=
event.clientX+"px";


sparkle.style.top=
event.clientY+"px";


sparkle.style.fontSize="25px";


sparkle.style.pointerEvents="none";


sparkle.style.zIndex="99";



document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},700);



});
