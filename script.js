const game = document.getElementById("game");



function startGame(){

game.innerHTML = `

<h1>💜 Level 1 Unlocked 💜</h1>

<p class="heart">✨</p>

<p class="text">
Welcome to your birthday quest, Jose.
</p>

<p class="text">
A little adventure made with all my love.
</p>


<button onclick="story()">
✨ Begin Our Story
</button>

`;

}




function story(){

game.innerHTML = `

<h1>📖 Our Story</h1>


<div class="gift">

<h2>March 14 💜</h2>

<p>
The day we met.

A small moment that became something
I will always treasure.
</p>

</div>



<div class="gift">

<h2>March 16 🤍</h2>

<p>
The day you said yes.

The beginning of something
very special to me.
</p>

</div>


<button onclick="gifts()">
🎁 Unlock Gifts
</button>


`;

}





function gifts(){

game.innerHTML = `

<h1>🎁 Your Gifts</h1>


<div class="gift" onclick="letter()">

💌 A Letter From My Heart

</div>



<div class="gift" onclick="memories()">

🎮 Our Gaming Memories

</div>



<div class="gift" onclick="song()">

🎵 Te Adoro

</div>



<div class="gift" onclick="reasons()">

💗 20 Reasons Why I Love You

</div>



`;

}






function letter(){

game.innerHTML = `

<h1>💌 A Letter From My Heart</h1>


<p class="text">

Happy Birthday, Jose. 💜

<br><br>

I don't think words will ever be enough
to explain how much I love you.

<br><br>

Since you came into my life, you made
ordinary moments feel special.

The random conversations, the laughs,
the silly moments, and everything we share
are memories I will always keep close to my heart.

<br><br>

I believe in the red string theory.

The idea that two people who are meant
to find each other are connected by an
invisible red string.

<br><br>

Sometimes I wonder if that string was
always guiding me toward you.

Out of all the people in this world,
our paths crossed, and I am so grateful
that they did.

<br><br>

Thank you for making me smile,
for being someone I can laugh with,
and for making my days brighter.

<br><br>

I hope you always remember that you are
loved, appreciated, and important to me.

<br><br>

Happy Birthday, my love. 💜

</p>



<button onclick="gifts()">
⬅ Back
</button>


`;

}






function memories(){

game.innerHTML = `

<h1>🎮 Our Gaming Memories</h1>


<p class="text">

One of my favorite things about us is
the little worlds we create together
when we play games.

<br><br>

I love laughing with you, teasing each
other, celebrating our wins, and even
the moments where things don't go
perfectly but we still have fun.

<br><br>

I really hope we can play even more games
together in the future.

<br><br>

More adventures.

More jokes.

More random moments.

More memories that only we understand.

<br><br>

Because honestly, it isn't just about
the game.

It's about who I'm playing with.

And I love spending time with you. 💜

</p>



<button onclick="gifts()">
⬅ Back
</button>


`;

}







function song(){

game.innerHTML = `

<h1>🎵 Te Adoro</h1>


<p class="text">

Some songs are just songs.

But some songs become connected
to a person and a feeling.

<br><br>

"Te Adoro" reminds me of you.

It reminds me of the happiness,
warmth, and love you bring into my life.

<br><br>

This is your little song gift from me.

<br><br>

Te adoro. 💜

</p>



<button onclick="gifts()">
⬅ Back
</button>


`;

}








function reasons(){

game.innerHTML = `

<h1>💗 20 Reasons Why I Love You</h1>


<p class="text">


1. You make me smile even on normal days. 💜
<br><br>

2. You make little moments feel special.
<br><br>

3. I can be completely myself with you.
<br><br>

4. Your laugh makes me happy.
<br><br>

5. You make my days brighter.
<br><br>

6. I love our random conversations.
<br><br>

7. You make ordinary memories unforgettable.
<br><br>

8. I love spending time with you.
<br><br>

9. You make me feel cared for.
<br><br>

10. You understand me.
<br><br>

11. I love your personality.
<br><br>

12. I love the way we laugh together.
<br><br>

13. I love our little inside jokes.
<br><br>

14. You make me excited for future memories.
<br><br>

15. You are someone special in my life.
<br><br>

16. You make me feel lucky.
<br><br>

17. I love the way you make me feel.
<br><br>

18. I am grateful that I met you.
<br><br>

19. You are my favorite person.
<br><br>

20. I love you simply because you are you. 💜


</p>



<button onclick="ending()">
🌙 Final Surprise
</button>


`;

}








function ending(){

game.innerHTML = `

<h1>💜 Quest Complete 💜</h1>


<p class="heart">
✨
</p>


<p class="text">

You unlocked every gift.

<br><br>

But the biggest gift is having you
in my life.

<br><br>

Happy Birthday, Jose.

<br><br>

I love you forever. 💜

</p>

`;

}
