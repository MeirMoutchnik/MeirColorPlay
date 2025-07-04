const container = document.querySelector(".container-a");
const contAll = document.querySelectorAll(".flex-container");
const cards = document.querySelectorAll(".flex-card-6");
const btn = document.getElementById("next-color");

let j = 0;
let k = 0;

const changeColor = () => {
  if (k === 0) {
    for (const cont of contAll) {
      cont.style.justifyContent = "flex-end";
    }
  } else if (k === 1) {
    for (const cont of contAll) {
      cont.style.justifyContent = "center";
    }
  } else if (k === 2) {
    for (const cont of contAll) {
      cont.style.justifyContent = "flex-start";
    }
  }

  for (const card of cards) {
    card.style.backgroundColor = `hsl(${j}, 100%, 70%)`;
  }
  container.style.background = `radial-gradient(hsl(${j}, 100%, 70%), hsl(${
    j + 180
  }, 100%, 50%), hsl(${j + 180}, 100%, 80%)`;

  if (k < 2) {
    k++;
  } else {
    k = 0;
    j += 30;
  }
};

changeColor();

btn.addEventListener("click", changeColor);
