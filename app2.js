// const secAll = document.querySelectorAll(".section");
const secOdd = document.querySelectorAll(".section:nth-of-type(odd");
const secEven = document.querySelectorAll(".section:nth-of-type(even");
const btn = document.getElementById("next-color");

let j = 0;

const colorChange = () => {
  secOdd.forEach(
    (sec) =>
      (sec.style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`)
  );
  secEven.forEach(
    (sec) =>
      (sec.style.background = `linear-gradient(to left, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`)
  );
  // for (let i = 0; i < secAll.length; i++) {
  //   if (i % 2 === 0) {
  //     secAll[
  //       i
  //     ].style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`;
  //   } else {
  //     secAll[
  //       i
  //     ].style.background = `linear-gradient(to left, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 20%)`;
  //   }
  // }
  j += 30;
};

colorChange();

btn.addEventListener("click", colorChange);
