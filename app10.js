const itemsA = document.querySelectorAll(".grid-10ba .item");
const itemsB = document.querySelectorAll(".grid-10bb .item");
const btn = document.getElementById("next-color");

let j = 0;
let k = 0;

const colorChange = () => {
  if (k % 2 === 0) {
    itemsA.forEach(
      (item) => (item.style.backgroundColor = `hsl(${j}, 100%, 50%)`)
    );
  } else {
    itemsB.forEach(
      (item) => (item.style.backgroundColor = `hsl(${j}, 100%, 50%)`)
    );
    j += 30;
  }
  k++;
};

colorChange();

const interval = setInterval(colorChange, 2000);
const stopColorChange = () => clearInterval(interval);
btn.addEventListener("click", stopColorChange);
