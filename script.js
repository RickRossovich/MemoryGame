const catsArray = [
  {
    id: "cat1",
    src: "assets/butwhycat.jpg"
  },
  {
    id: "cat2",
    src: "assets/greycat.jpg"
  },
  {
    id: "cat3",
    src: "assets/lilbub.jpg"
  },
  {
    id: "cat4",
    src: "assets/orangecat.jpg"
  },
  {
    id: "cat5",
    src: "assets/screamycat.jpg"
  },
  {
    id: "cat6",
    src: "assets/siamcat.jpg"
  },
  {
    id: "cat1",
    src: "assets/butwhycat.jpg"
  },
  {
    id: "cat2",
    src: "assets/greycat.jpg"
  },
  {
    id: "cat3",
    src: "assets/lilbub.jpg"
  },
  {
    id: "cat4",
    src: "assets/orangecat.jpg"
  },
  {
    id: "cat5",
    src: "assets/screamycat.jpg"
  },
  {
    id: "cat6",
    src: "assets/siamcat.jpg"
  }
];


let matchboard = document.querySelector(`.container`);
// container.innerHTML = "";
for (let cat of catsArray) {
  let cardContainer = document.createElement(`section`);
  cardContainer.classList.add(`container`);
  let card = document.createElement(`div`);
  card.classList.add(`card`);
  let front = document.createElement(`div`);
  front.classList.add(`front`);
  let back = document.createElement(`div`);
  back.classList.add(`back`);
  back.style.backgroundImage = `url(${cat.src})`;
  card.append(front, back);
  cardContainer.append(card);
  matchboard.append(cardContainer);
  // card.addEventListener(`click`, clicked);
}
//add event listener to gameboard to listen for clicks
matchboard.addEventListener(`click`, clicked);
//if event.target is a card, then add class ‘flipped’ to event.target
function clicked(event) {
  console.log(event);
  if (event.target.className === `front`) {
    //targeted the parent to effect all cards.
    event.target.parentNode.classList.add(`flipped`);
  } if ()


