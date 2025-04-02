const btn = document.getElementById("next-color");
const contAll = document.querySelectorAll(".flex-container");

let j = 0;
let k = 0;

const changeColor = () => {
  for (let i = 0; i < 8; i++) {
    const cards = contAll[i].querySelectorAll(".flex-card");
    if (i === k || i === k + 1) {
      for (const card of cards) {
        card.classList.add("visibility");
        card.style.backgroundColor = `hsl(${j}, 100%, 80%)`;
      }
    } else {
      for (const card of cards) {
        card.classList.remove("visibility");
      }
    }
  }

  if (k < 6) {
    k += 2;
  } else {
    k = 0;
    j += 30;
  }
};

changeColor();

btn.addEventListener("click", changeColor);
