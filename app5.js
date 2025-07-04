const contAll = document.querySelectorAll(".flex-container");
const btn = document.getElementById("next-color");

let j = 0;
let k = 0;

const changeColor = () => {
  for (let i = 0; i < contAll.length; i++) {
    const cards = contAll[i].querySelectorAll(".flex-card-5");
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

  if (k < contAll.length - 2) {
    k += 2;
  } else {
    k = 0;
    j += 30;
  }
};

changeColor();

btn.addEventListener("click", changeColor);
