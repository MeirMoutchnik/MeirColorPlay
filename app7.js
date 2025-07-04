const container = document.querySelector(".container-a");
const contAll = document.querySelectorAll(".flex-container");
const cards = document.querySelectorAll(".flex-card-7");
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
    card.style.backgroundColor = `hsl(${j}, 100%, 80%)`;
  }
  container.style.background = `radial-gradient(at 50% 0%, hsl(${
    j + 180
  }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
    j + 180
  }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;

  if (k < 2) {
    k++;
  } else {
    k = 0;
    j += 30;
  }
};

changeColor();

btn.addEventListener("click", changeColor);
