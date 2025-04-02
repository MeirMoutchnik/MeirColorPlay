const btn = document.getElementById("next-color");
const secAll = document.querySelectorAll(".section");

let j = 0;

const colorChange = () => {
  for (let i = 0; i < secAll.length; i++) {
    if (i % 2 === 0) {
      secAll[
        i
      ].style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`;
    } else {
      secAll[
        i
      ].style.background = `linear-gradient(to left, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`;
    }
  }
  j += 30;
};

colorChange();

btn.addEventListener("click", colorChange);

// const type1 = document.querySelectorAll("#type-1");
// const type2 = document.querySelectorAll("#type-2");

// let j = 0;

// const colorChange = () => {
//   for (let i = 0; i < type1.length; i++) {
//     type1[
//       i
//     ].style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%))`;
//   }
//   for (let i = 0; i < type2.length; i++) {
//     type2[
//       i
//     ].style.background = `linear-gradient(to left, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%))`;
//   }
//   j += 30;
// };

// colorChange();

// btn.addEventListener("click", colorChange);
