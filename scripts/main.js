  "use strict";

  (function (d, M) {
    var quotes = ["Expose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free.", "There are things known and things unknown and in between are the doors.", "I think of myself as an intelligent, sensitive human being with the soul of a clown which always forces me to blow it at the most important moments.", "A friend is someone who gives you total freedom to be yourself.", "Where's your will to be weird?", "Death makes angels of us all and gives us wings where we had shoulders smooth as ravens claws.", "I like people who shake other people up and make them feel uncomfortable.", "This is the strangest life I've ever known.", "I believe in a long, prolonged, derangement of the senses in order to obtain the unknown.", "Whoever controls the media, controls the mind."],
      len = quotes.length,
      p = d.querySelector("button");
    p.appendChild(d.createTextNode(""));
    d.querySelector("div").addEventListener("click", function () {
      p.firstChild.nodeValue = quotes[M.floor(M.random() * (len))];
    }, 0);
  })(document, Math);
