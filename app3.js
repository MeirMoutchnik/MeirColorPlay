const secAll = document.querySelectorAll(".section-3");
const btn = document.getElementById("next-color");

let j = 0;

const colorChange = (i) => {
  // for (let i = 0; i < secAll.length; i++) {
  //   secAll[i].style.background = `linear-gradient(to right bottom, hsl(${
  //     j + i * 30
  //   }, 100%, 100%), hsl(${j + i * 30}, 100%, 50%)`;
  // }
  secAll.forEach(
    (s, i) =>
      (s.style.background = `linear-gradient(to right bottom, hsl(${
        j + i * 30
      }, 100%, 100%), hsl(${j + i * 30}, 100%, 50%)`)
  );
  j += 30;
};

colorChange();

btn.addEventListener("click", colorChange);
