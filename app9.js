const grids = document.querySelectorAll(".grid-b");
const btn = document.getElementById("next-color");

let j = 0;

const colorChange = () => {
  for (const grid of grids) {
    const items = grid.querySelectorAll(".item");
    let k = 0;
    for (const item of items) {
      item.style.backgroundColor = `hsl(${j}, 100%, ${90 - k}%)`;
      k += 5;
    }
  }
  j += 30;
};

colorChange();

const interval = setInterval(colorChange, 2000);
const stopColorChange = () => clearInterval(interval);
btn.addEventListener("click", stopColorChange);
