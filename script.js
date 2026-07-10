/*
THE RED STRING THEORY ❤️
JOSE'S BIRTHDAY WEBSITE
JAVASCRIPT PART 1
*/


// BUTTON: START OUR STORY 🧵

function scrollToStory(){

    document
    .getElementById("story")
    .scrollIntoView({

        behavior: "smooth"

    });

}






// MUSIC ROOM MESSAGE 🎵


function playMusicMessage(){


    const messages = [


        "🎵 This song is a little reminder of how special you are to me ❤️",


        "✨ Some feelings are impossible to explain, but music helps say them.",


        "🧵 Every memory becomes another thread in our story."

    ];



    const randomMessage =

    messages[Math.floor(Math.random() * messages.length)];



    document
    .getElementById("musicMessage")
    .innerHTML = randomMessage;


}

/*
JAVASCRIPT PART 2
GIFTS + PETS + FINAL LETTER
*/



// BIRTHDAY GIFTS 🎁


function openGift(number){


    let message = "";



    if(number === 1){


        message =

        "🎁 Gift One: I hope your birthday is filled with happiness, laughter, and everything you deserve.";


    }





    if(number === 2){


        message =

        "💌 Gift Two: More memories, more laughs, and hopefully many more birthdays together.";


    }





    if(number === 3){


        message =

        "🧵 Gift Three: A reminder that some connections are special and worth cherishing forever ❤️";


    }





    document

    .getElementById("giftText")

    .innerHTML = message;



}









// GUARDIAN PETS 🐾



function choosePet(pet){



    let message = "";





    if(pet === "cat"){


        message =

        "🐱 Moon Cat says: I will protect your dreams and bring you peaceful nights.";


    }







    if(pet === "dog"){


        message =

        "🐶 Star Dog says: I will protect your smiles and happiest memories.";


    }







    if(pet === "bear"){


        message =

        "🧸 Heart Bear says: You deserve kindness, happiness, and endless love.";


    }







    document

    .getElementById("petText")

    .innerHTML = message;



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
