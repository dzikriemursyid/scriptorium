const container = document.querySelector(".container");
const gamePoint = document.querySelector(".gamePoint");
const p1Display = document.querySelector(".p1-display");
const p2Display = document.querySelector(".p2-display");

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;

container.addEventListener("click", (clicked) => {
  if (clicked.target.classList.contains("btn")) {
    if (p1Score < winPoint && p2Score < winPoint) {
      if (clicked.target.classList.contains("p1-Btn")) {
        p1Score += 1;
        p1Display.textContent = p1Score;
      } else {
        p2Score += 1;
        p2Display.textContent = p2Score;
      }
    }
  }
  if (clicked.target.classList.contains("resetBtn")) {
    reset();
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
}

gamePoint.addEventListener("change", () => {
  winPoint = parseInt(gamePoint.value);
  reset();
});
