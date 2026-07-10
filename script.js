// THE RED STRING THEORY
// JAVASCRIPT PART 1


// HEART MESSAGES ❤️

function showHeartMessage(){

    const messages = [

        "Some people cross paths by chance... but some feel like fate 🧵❤️",

        "Every little moment became a thread connecting us ✨",

        "I hope we keep creating memories together 🌹",

        "The red string may stretch, but it never disappears ❤️",

        "Some connections are worth holding onto forever 💜"

    ];


    const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];


    document.getElementById("heartText").innerHTML =
    randomMessage;

}




// MUSIC MESSAGE 🎵

function playMusicMessage(){

    const musicMessages = [

        "This song will always remind me of this little world we created ❤️",

        "Every melody feels warmer when it reminds me of someone special 🎶",

        "A song can hold memories the same way a red string holds connections 🧵"

    ];


    const randomMusic =
    musicMessages[Math.floor(Math.random() * musicMessages.length)];


    document.getElementById("musicMessage").innerHTML =
    randomMusic;

}

// JAVASCRIPT PART 2
// GIFTS + PETS + FINAL LETTER



// GIFT ROOM 🎁

function openGift(number){

    let message = "";


    if(number === 1){

        message =
        "🎁 Gift One: A promise to always cheer for you and celebrate your happiness.";

    }


    if(number === 2){

        message =
        "💌 Gift Two: More memories, more laughter, and more moments together.";

    }


    if(number === 3){

        message =
        "🧵 Gift Three: The red string that connects two people who matter to each other.";

    }


    document.getElementById("giftText").innerHTML = message;

}





// GUARDIAN PETS 🐾

function choosePet(pet){

    let message = "";


    if(pet === "cat"){

        message =
        "🐱 Moon Cat: I will protect your peaceful nights and your sweetest dreams.";

    }


    if(pet === "dog"){

        message =
        "🐶 Star Dog: I will protect your smiles and all your happy memories.";

    }


    if(pet === "bear"){

        message =
        "🧸 Heart Bear: I will remind you that your heart deserves kindness.";

    }


    document.getElementById("petText").innerHTML = message;

}





// FINAL LETTER 💌

function openLetter(){

    const letter =
    document.getElementById("letter");


    letter.style.display = "block";


    letter.scrollIntoView({

        behavior: "smooth"

    });

}

// JAVASCRIPT PART 3
// RED STRING THEORY MAGIC EFFECTS 🧵✨



// CREATE FLOATING HEARTS ❤️

function createHeart(){


    const heart = document.createElement("div");


    heart.innerHTML = "❤️";


    heart.className = "floating-heart";


    heart.style.left =
    Math.random() * 100 + "vw";


    heart.style.animationDuration =
    (Math.random() * 3 + 3) + "s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}



// START HEARTS

setInterval(createHeart, 1200);







// SCROLL REVEAL EFFECT ✨


const sections =
document.querySelectorAll("section");


window.addEventListener("scroll", ()=>{


    sections.forEach(section=>{


        const position =
        section.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";

        }


    });


});







// RED STRING CLICK EFFECT 🧵


document.addEventListener("click", function(event){


    const string =
    document.createElement("span");


    string.innerHTML = "🧵";


    string.className =
    "string-effect";


    string.style.left =
    event.pageX + "px";


    string.style.top =
    event.pageY + "px";



    document.body.appendChild(string);



    setTimeout(()=>{


        string.remove();


    },1000);


});

