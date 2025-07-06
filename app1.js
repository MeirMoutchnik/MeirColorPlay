const body = document.querySelector("body");
const h2All = document.querySelectorAll("h2");
const header1 = document.querySelector(".header-1");
const btn = document.getElementById("next-color");

let j = 0;

const colorChange = () => {
  body.style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 50%)`;
  header1.style.background = `linear-gradient(to right, hsl(${j}, 100%, 100%), hsl(${j}, 100%, 50%)`;
  for (const h2El of h2All) {
    h2El.style.backgroundColor = `hsl(${j + 180}, 50%, 70%)`;
    h2El.style.color = `hsl(${j}, 100%, 15%)`;
  }

  j += 30;
};

const opaqueHeading = () => {
  if (window.scrollY > 0) {
    header1.classList.add("scroll");
  } else {
    header1.classList.remove("scroll");
  }
};

colorChange();

btn.addEventListener("click", colorChange);
window.addEventListener("scroll", opaqueHeading);
