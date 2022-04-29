const ul = document.querySelector("ul");
const contChoice = document.querySelector(".container--choice");
const contVoted = document.querySelector(".container--voted");
const button = document.querySelector("button");
let vote;

function removeState() {
  [...ul.children].forEach((el) => el.classList.remove("hoverState"));
}

ul.addEventListener("mouseover", function (e) {
  if (e.target.tagName === "LI") {
    const num = e.target.textContent;
    for (let i = 0; i < num; i++) {
      ul.children[i].classList.add("hoverState");
    }
    ul.addEventListener("mouseout", removeState);
    vote = undefined;
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    vote = e.target.textContent;
    ul.removeEventListener("mouseout", removeState);
  }
});

button.addEventListener("click", () => {
  if (vote) {
    contChoice.classList.remove("active");
    contVoted.classList.add("active");
    contVoted.querySelector(
      ".tag"
    ).textContent = `You selected ${vote} out of 5`;
  }
});

// // EXPERIMENT
// const exp1 = document.querySelector(".experiment--1");
// const exp2 = document.querySelector(".experiment--2");

// exp2.addEventListener("click", function () {
//   exp1.classList.toggle("act");
//   exp2.classList.toggle("act");

//   // exp1.classList.toggle("act");
// });
