// =========================
// SCENE SYSTEM
// =========================


let currentScene = 1;


const totalScenes = 9;



function showScene(sceneNumber) {


    const scenes = document.querySelectorAll(".scene");


    scenes.forEach(scene => {

        scene.classList.remove("active");

    });



    const next = document.getElementById(
        "scene" + sceneNumber
    );


    if (next) {

        next.classList.add("active");

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
// LOADING SCREEN
// =========================


window.addEventListener(
"load",
() => {


    const loading =
    document.getElementById(
        "loadingScreen"
    );



    setTimeout(() => {


        loading.style.opacity = "0";



        setTimeout(() => {


            loading.style.display =
            "none";


        }, 1500);



    }, 3000);



});

// =========================
// GIFT ROOM
// =========================


function openGift(number) {


    const message =
    document.getElementById(
        "giftMessage"
    );



    if (number === 1) {


        message.innerHTML =

        "❤️ Happy Birthday Jose. I hope today brings you as much happiness as you bring to others.";


    }



    if (number === 2) {


        message.innerHTML =

        "✨ I hope this is only the first of many birthdays we get to celebrate together.";


    }



    if (number === 3) {


        message.innerHTML =

        "🧵 The red string represents every unexpected moment that brought this story here.";


    }


}





// =========================
// MUSIC BUTTON
// =========================


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



    musicPlaying =
    !musicPlaying;



    if (musicPlaying) {


        button.innerHTML =
        "⏸ Pause";


        vinyl.style.animationPlayState =
        "running";


    }

    else {


        button.innerHTML =
        "▶ Play";


        vinyl.style.animationPlayState =
        "paused";


    }


}

// =========================
// LETTER TYPEWRITER
// =========================


function typeLetter() {


    const letter =
    document.getElementById(
        "letterText"
    );


    if (!letter) return;



    const text =
    letter.innerText;



    letter.innerHTML = "";



    let index = 0;



    function write() {


        if (index < text.length) {


            letter.innerHTML +=
            text.charAt(index);



            index++;


            setTimeout(
                write,
                40
            );


        }


    }



    write();


}





// =========================
// START LETTER EFFECT
// =========================


const sceneObserver =
new MutationObserver(() => {


    const scene =
    document.getElementById(
        "scene8"
    );



    if (
        scene &&
        scene.classList.contains(
            "active"
        )
    ) {


        typeLetter();


    }


});





const story =
document.getElementById(
    "storyContainer"
);



if (story) {


    sceneObserver.observe(
        story,
        {
            attributes: true,
            subtree: true,
            attributeFilter: [
                "class"
            ]
        }
    );


}





// =========================
// FINAL HEART GLOW
// =========================


function finalMoment(){


    const heart =
    document.querySelector(
        ".finalString"
    );


    if(heart){


        heart.style.transform =
        "scale(1.3)";


    }


}

// =========================
// SCENE ENTRANCE EFFECTS
// =========================


function animateScene() {


    const content =
    document.querySelector(
        ".scene.active .sceneContent"
    );


    if(content){


        content.style.animation =
        "none";


        setTimeout(() => {


            content.style.animation =
            "fadeUp 1.5s ease forwards";


        }, 50);


    }


}





// Run animation whenever scene changes


const originalShowScene =
showScene;



showScene = function(sceneNumber){


    originalShowScene(sceneNumber);


    animateScene();


};







// =========================
// GIFT ANIMATION
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





    if(gifts[number - 1]) {


        gifts[number - 1].style.transform =
        "scale(1.2) rotate(5deg)";


    }






    const messages = {


        1:
        "❤️ Happy Birthday Jose. I hope your day is filled with happiness and everything you deserve.",


        2:
        "✨ I hope this is only the beginning of many more birthdays and memories together.",


        3:
        "🧵 The red string represents the special connection that brought this birthday story to life."

    };





    message.innerHTML =
    messages[number];



}







// =========================
// FINAL CELEBRATION
// =========================


function celebrate(){


    const ending =
    document.querySelector(
        ".endingScene"
    );



    if(ending){


        ending.classList.add(
            "celebrate"
        );


    }


}
