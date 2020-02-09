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

// let second = 0,
//   minute = 0;
// let timer = document.querySelector(".timer-container");
// let interval;
// function startTimer() {
//   interval = setInterval(function() {
//     timer.innerHTML = minute + "mins " + second + "secs";
//     second++;
//     if (second == 60) {
//       minute++;
//       second = 0;
//     }
//     if (minute == 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// }
// function moveCounter(){
//     moves++;
//     counter.innerHTML = moves;
//     //start timer on first move
//     if(moves == 1){
//         second = 0;
//         minute = 0;
//         hour = 0;
//         startTimer();
//     }

let gameContainer = document.querySelector(`.game-container`);
let matchboard = document.querySelector(`.container`);
for (let cat of catsArray) {
  //   //   catsArray.sort(() => Math.floor(Math.random() * catsArray.length));
  //   catsArray.sort(() => Math.floor(Math.random() * catsArray.length));
  //   //   catsArray.sort(() => [Math.floor(Math.random() * catsArray.length)]);
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
// let resetGame = document.querySelector(`.container`);
// resetGame.addEventListener("click",reset)
// function reset (event) {
//     if (event.target.className === ".reset") {
//         resetGame.reset();
// }
// (function shuffle() {
//   cards.forEach(card => {
//     let randomPos = Math.floor(Math.random() * 12);
//     card.style.order = randomPos;
//   });
// })();
