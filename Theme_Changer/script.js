const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (cb) {
    if (cb.target.id === "grey") {
      body.style.backgroundColor = cb.target.id;
    }
    if (cb.target.id === "white") {
      body.style.backgroundColor = cb.target.id;
    }
    if (cb.target.id === "blue") {
      body.style.backgroundColor = cb.target.id;
    }
    if (cb.target.id === "yellow") {
      body.style.backgroundColor = cb.target.id;
    }
  });
});
