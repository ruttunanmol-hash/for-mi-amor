const game = document.getElementById("game");


function startGame(){

game.innerHTML=`

<h1>💜 Level 1 Unlocked 💜</h1>

<p class="heart">✨</p>

<p class="text">
Welcome to your birthday quest, Jose.
</p>

<p class="text">
Your first mission:
Unlock our story.
</p>

<button onclick="story()">
✨ Begin
</button>

`;

}



function story(){

game.innerHTML=`

<h1>📖 Our Story</h1>

<div class="gift">

<h2>March 14 💜</h2>

<p>
The day we met.
A small moment that became something special.
</p>

</div>


<div class="gift">

<h2>March 16 🤍</h2>

<p>
The day you said yes.
The beginning of our journey.
</p>

</div>


<button onclick="gifts()">
🎁 Unlock Gifts
</button>

`;

}



function gifts(){

game.innerHTML=`

<h1>🎁 Gifts Unlocked</h1>


<div class="gift">
💌 A letter from my heart
</div>


<div class="gift">
🎮 Our gaming memories
</div>


<div class="gift">
🎵 Our special song
</div>


<button onclick="ending()">
🌙 Final Surprise
</button>

`;

}



function ending(){

game.innerHTML=`

<h1>💜 You Completed The Quest 💜</h1>

<p class="heart">
✨
</p>

<p class="text">

Thank you for being my favorite person.

My favorite gift will always be you.

</p>


<p class="text">
Happy Birthday, Jose.
🤍

</p>

`;

}
