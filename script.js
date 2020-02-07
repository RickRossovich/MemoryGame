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
  card.setAttribute("data-cat-id", cat.id);
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
      clickedEls[0].style.display = "none";
      clickedEls[1].style.display = "none";
      clickedEls = [];
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
