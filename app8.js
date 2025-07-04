const container = document.querySelector(".container-8a");
const contAll = document.querySelectorAll(".flex-container");
const cards = document.querySelectorAll(".flex-card-7");
const h2All = document.querySelectorAll("h2");
const btn = document.getElementById("next-color");

let j = 0;
let k = 0;

const changeColor = () => {
  switch (k) {
    case 0:
      for (const cont of contAll) {
        cont.style.justifyContent = "flex-end";
      }
      container.style.background = `radial-gradient(at 50% 180%, hsl(${
        j + 180
      }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
        j + 180
      }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;

      h2All[2].textContent = "Item 1";
      h2All[5].textContent = "Item 1";
      cards[0].classList.add("invisibility");
      cards[1].classList.add("invisibility");
      cards[3].classList.add("invisibility");
      cards[4].classList.add("invisibility");
      cards[2].classList.remove("invisibility");
      cards[5].classList.remove("invisibility");
      break;
    case 1:
      for (const cont of contAll) {
        cont.style.justifyContent = "flex-end";
      }
      container.style.background = `radial-gradient(at 50% 100%, hsl(${
        j + 180
      }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
        j + 180
      }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;
      h2All[0].textContent = "Item 1";
      h2All[3].textContent = "Item 1";
      h2All[2].textContent = "Item 3";
      h2All[5].textContent = "Item 3";
      cards[0].classList.remove("invisibility");
      cards[1].classList.remove("invisibility");
      cards[3].classList.remove("invisibility");
      cards[4].classList.remove("invisibility");
      break;
    case 2:
      for (const cont of contAll) {
        cont.style.justifyContent = "center";
      }
      container.style.background = `radial-gradient(circle, hsl(${
        j + 180
      }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
        j + 180
      }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;
      break;
    case 3:
      for (const cont of contAll) {
        cont.style.justifyContent = "flex-start";
      }
      container.style.background = `radial-gradient(at 50% 0%, hsl(${
        j + 180
      }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
        j + 180
      }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;
      break;
    case 4:
      for (const cont of contAll) {
        cont.style.justifyContent = "flex-start";
      }
      container.style.background = `radial-gradient(at 50% -80%, hsl(${
        j + 180
      }, 100%, 30%) 20%, hsl(${j}, 100%, 70%) 40%, hsl(${
        j + 180
      }, 100%, 30%) 60%, hsl(${j + 180}, 100%, 70%) 80%`;

      h2All[0].textContent = "Item 3";
      h2All[3].textContent = "Item 3";
      cards[1].classList.add("invisibility");
      cards[2].classList.add("invisibility");
      cards[4].classList.add("invisibility");
      cards[5].classList.add("invisibility");
  }

  for (const card of cards) {
    card.style.backgroundColor = `hsl(${j}, 100%, 80%)`;
  }

  if (k < 4) {
    k++;
  } else {
    k = 0;
    j += 30;
  }
};

changeColor();

btn.addEventListener("click", changeColor);
