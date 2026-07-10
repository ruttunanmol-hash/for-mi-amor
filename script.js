let currentPage = 1;

const totalPages = 10;


function nextPage(){

    document
    .getElementById(`page${currentPage}`)
    .classList.remove("active");


    currentPage++;


    if(currentPage <= totalPages){

        document
        .getElementById(`page${currentPage}`)
        .classList.add("active");

    }

}




// Create 20 heart bubbles

const reasons = [

"You make me smile every day 💜",

"You make ordinary moments special",

"I can be myself around you",

"Your laugh makes me happy",

"You make my days brighter",

"I love our random conversations",

"You make me feel loved",

"I love our memories together",

"You always make me smile",

"You are someone I trust",

"I love your personality",

"I love our inside jokes",

"I love spending time with you",

"You make me excited for the future",

"You make me feel lucky",

"You are my favorite person",

"I love how kind you are",

"I am grateful I met you",

"You make life more beautiful",

"I love you because you are you 💜"

];



const heartContainer = document.getElementById("heartContainer");


if(heartContainer){


reasons.forEach((reason,index)=>{


let heart = document.createElement("div");


heart.className="love-heart";


heart.innerHTML="💗";


heart.onclick=function(){


alert(
"Reason #"+(index+1)+":\n\n"+reason
);


};


heartContainer.appendChild(heart);


});

}






// Add a little surprise when final page loads


function finalMessage(){


alert(
"💜 You completed the birthday quest 💜"
);


}
