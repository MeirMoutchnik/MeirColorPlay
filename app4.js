const contAll = document.querySelectorAll(".flex-container");
const btn = document.getElementById("next-color");

let j = 0;

const changeColor = () => {
  for (let i = 0; i < contAll.length; i++) {
    const cards = contAll[i].querySelectorAll(".flex-card");
    if (i % 2 === 0) {
      for (const card of cards) {
        card.style.backgroundColor = `hsl(${j - (i / 2) * 30}, 100%, 80%)`;
      }
    } else {
      for (const card of cards) {
        card.style.backgroundColor = `hsl(${
          j - ((i - 1) / 2) * 30
        }, 100%, 80%)`;
      }
    }
  }
  j += 30;
};

// const cards1 = document.querySelectorAll(".cards-1");
// const cards2 = document.querySelectorAll(".cards-2");
// const cards3 = document.querySelectorAll(".cards-3");
// const cards4 = document.querySelectorAll(".cards-4");

// let j = 0;
// const changeColor = () => {
//   for (const card1 of cards1) {
//     card1.style.backgroundColor = `hsl(${j}, 100%, 80%)`;
//   }
//   for (const card2 of cards2) {
//     card2.style.backgroundColor = `hsl(${j - 30}, 100%, 80%)`;
//   }
//   for (const card3 of cards3) {
//     card3.style.backgroundColor = `hsl(${j - 60}, 100%, 80%)`;
//   }
//   for (const card4 of cards4) {
//     card4.style.backgroundColor = `hsl(${j - 90}, 100%, 80%)`;
//   }
//   j += 30;
// };

changeColor();

btn.addEventListener("click", changeColor);
