// const cardsArray = [
//   {
//     name: "cat1",
//     img: "assets/butwhycat.jpg"
//   },
//   {
//     name: "cat2",
//     img: "assets/greycat.jpg"
//   },
//   {
//     name: "cat3",
//     img: "assets/lilbub.jpg"
//   },
//   {
//     name: "cat4",
//     img: "assets/orangecat.jpg"
//   },
//   {
//     name: "cat5",
//     img: "assets/screamycat.jpg"
//   },
//   {
//     name: "cat6",
//     img: "assets/siamcat.jpg"
//   }
// ];

// document.getElementById("cardContainer");

// const displayCards = () => {
//   cardsArray.forEach(element => console.log(element));
//   cardContainer.innerText = `${cardsArray}`;
//   return `<div id="gameCard"
//           </div>`;
// };
// displayCards();

//console.log(cardsArray);

let gameboard = document.querySelector(".card-container");
//create a loop to make the other cards
for (let i = 0; i < 12; i++) {
  let cardContainer = document.createElement("section");
  cardContainer.classList.add("container");
  let card = document.createElement("div");
  card.classList.add("card");
  let front = document.createElement("div");
  front.classList.add("front");
  let back = document.createElement("div");
  back.classList.add("back");
  card.append(front, back);
  cardContainer.append(card);
  gameboard.append(cardContainer);
  card.addEventListener("click", clicked);
}
//add event listener to gameboard to listen for click
//if event.target is a card, then add class ‘flipped’ to event.target
function clicked(e) {
  console.log(e);
  if (e.target.className === "front") {
    //targeted the parent to effect all cards.
    e.target.parentNode.classList.add("flipped");
  }
}
