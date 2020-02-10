
"use strict";
const catsArray = [
  {
    id: "cat1",
    src: "assets/catpic1.jpg"
  },
  {
    id: "cat2",
    src: "assets/catpic2.jpg"
  },
  {
    id: "cat3",
    src: "assets/catpic3.jpg"
  },
  {
    id: "cat4",
    src: "assets/catpic4.jpg"
  },
  {
    id: "cat5",
    src: "assets/catpic5.jpg"
  },
  {
    id: "cat6",
    src: "assets/catpic6.jpg"
  },
  {
    id: "cat1",
    src: "assets/catpic1.jpg"
  },
  {
    id: "cat2",
    src: "assets/catpic2.jpg"
  },
  {
    id: "cat3",
    src: "assets/catpic3.jpg"
  },
  {
    id: "cat4",
    src: "assets/catpic4.jpg"
  },
  {
    id: "cat5",
    src: "assets/catpic5.jpg"
  },
  {
    id: "cat6",
    src: "assets/catpic6.jpg"
  }
];
let matches = 0;
//SHUFFLE FUNCTION
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let gameContainer = document.querySelector(`.game-container`);
let matchboard = document.querySelector(`.container`);
shuffle(catsArray);
for (let cat of catsArray) {
  let cardContainer = document.createElement(`section`);
  cardContainer.classList.add(`card-container`);
  let card = document.createElement(`div`);
  card.classList.add(`card`);
  card.setAttribute("data-cat-id", cat.id);
  let front = document.createElement(`div`);
  front.classList.add(`front`);
  let back = document.createElement(`div`);
  back.classList.add(`back`);
  back.style.backgroundImage = `url(${cat.src})`;
  card.append(front, back);
  cardContainer.append(card);
  matchboard.append(cardContainer);
}
//add event listener to gameboard to listen for clicks
matchboard.addEventListener(`click`, clicked);
let clickedEls = [];
function clicked(event) {
  console.log(event);
  if (event.target.className === `front` && clickedEls.length === 1) {
    event.target.parentNode.classList.add(`flipped`);
    clickedEls.push(event.target.parentNode);
    if (
      clickedEls[0].getAttribute("data-cat-id") ===
      clickedEls[1].getAttribute("data-cat-id")
    ) {
      matches++;
      setTimeout(function() {
        clickedEls[0].style.display = "none";
        clickedEls[1].style.display = "none";
        clickedEls = [];
      }, 900);
      console.log("SAME");
    } else {
      setTimeout(function() {
        clickedEls[0].classList.remove("flipped");
        clickedEls[1].classList.remove("flipped");
        clickedEls = [];
      }, 1000);
      console.log("Not the same");
    }
  } else {
    //targeted the parent to effect all cards.
    event.target.parentNode.classList.add(`flipped`);
    clickedEls.push(event.target.parentNode);
  }
}
let time = 60;
let countdown = document.querySelector(".countdown");
// let timeCard = document.querySelector("")
///messing around
let clock = document.querySelector("body");
clock.addEventListener("click", function(e) {
  if (e.target.id === "start") {
    //stop messing around
    function timeout() {
      let timer = setTimeout(function() {
        countdown.innerText = `Timer: ${time}`;
        if (time > 0 && matches < 6) {
          time--;
          console.log(time);
        } else if (matches === 6) {
          document.querySelector(".win-popup-container").style.display = "flex";
        } else if (matches <= 6) {
          document.querySelector(".lose-popup-container").style.display =
            "flex";
        }
        timeout();
      }, 1005);
    }
    timeout();
  }
});