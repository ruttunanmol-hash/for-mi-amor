// =========================
// SCENE SYSTEM
// =========================


let currentScene = 1;

const totalScenes = 9;




function showScene(sceneNumber) {


    const scenes =
    document.querySelectorAll(".scene");



    scenes.forEach(scene => {

        scene.classList.remove("active");

    });



    const target =
    document.getElementById(
        "scene" + sceneNumber
    );



    if (target) {

        target.classList.add("active");

    }


}






function nextScene() {


    if (currentScene < totalScenes) {


        currentScene++;


        showScene(currentScene);


    }


}





function previousScene() {


    if (currentScene > 1) {


        currentScene--;


        showScene(currentScene);


    }


}





// =========================
// START FIRST SCENE
// =========================


window.addEventListener(
"DOMContentLoaded",
() => {


    showScene(1);


});

// =========================
// MUSIC ROOM
// =========================


const songLink = 
"https://youtu.be/-ZEHxeH-cgc?si=qbFnXweZ8uG635PD";



let musicPlaying = false;





function toggleMusic() {


    const button =
    document.querySelector(
        ".musicButton"
    );


    const vinyl =
    document.querySelector(
        ".vinylRecord"
    );



    musicPlaying = !musicPlaying;



    if (musicPlaying) {


        window.open(
            songLink,
            "_blank"
        );


        if (button) {

            button.innerHTML =
            "🎵 Playing";

        }



        if (vinyl) {

            vinyl.style.animationPlayState =
            "running";

        }


    }

    else {


        if (button) {

            button.innerHTML =
            "▶ Play";

        }



        if (vinyl) {

            vinyl.style.animationPlayState =
            "paused";

        }


    }


}

// =========================
// GIFT ROOM
// =========================


function openGift(number) {


    const message =
    document.getElementById(
        "giftMessage"
    );



    const gifts =
    document.querySelectorAll(
        ".giftBox"
    );



    gifts.forEach(gift => {


        gift.style.transform =
        "scale(1)";


    });





    if (gifts[number - 1]) {


        gifts[number - 1].style.transform =
        "scale(1.15) rotate(5deg)";


    }






    const messages = {


        1:

        "🎂 Happy Birthday Jose. I hope today is filled with happiness, laughter, and everything you deserve.",




        2:

        "✨ I hope this is only the beginning of many more birthdays and memories together.",




        3:

        "🧵 The red string represents the little moments that brought this story together."

    };






    if (message) {


        message.innerHTML =
        messages[number];


    }


}








// =========================
// LETTER EFFECT
// =========================


function showLetter() {


    const letter =
    document.getElementById(
        "letterText"
    );



    if (!letter) return;



    const originalText =
    letter.innerHTML;



    letter.innerHTML = "";



    let index = 0;





    function type() {


        if (index < originalText.length) {


            letter.innerHTML +=
            originalText.charAt(index);



            index++;


            setTimeout(
                type,
                40
            );


        }


    }





    type();


}

// =========================
// SCENE ANIMATIONS
// =========================


function animateScene() {


    const content =
    document.querySelector(
        ".scene.active .sceneContent"
    );



    if (content) {


        content.style.animation =
        "none";



        setTimeout(() => {


            content.style.animation =
            "fadeUp 1.5s ease forwards";



        }, 50);


    }


}






// Update scene + animation


const oldShowScene =
showScene;



showScene = function(sceneNumber) {


    oldShowScene(sceneNumber);



    animateScene();



    // Start letter when reaching letter scene

    if (sceneNumber === 8) {


        setTimeout(() => {


            showLetter();


        }, 800);


    }



};








// =========================
// FINAL CELEBRATION
// =========================


function celebrate() {


    const finalHeart =
    document.querySelector(
        ".finalString"
    );



    if (finalHeart) {


        finalHeart.style.transform =
        "scale(1.3)";


    }



    const ending =
    document.querySelector(
        ".endingScene"
    );



    if (ending) {


        ending.classList.add(
            "celebrate"
        );


    }


}







// =========================
// BUTTON SOUND EFFECT READY
// =========================


document.addEventListener(
"click",
(event) => {


    if (
        event.target.tagName ===
        "BUTTON"
    ) {


        event.target.style.transform =
        "scale(0.95)";



        setTimeout(() => {


            event.target.style.transform =
            "";


        }, 150);


    }


});
