const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const reset = document.querySelector("#reset");
const winPointOptions = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winPoint = 0;
let isGameOver = false;

p1Display.style.color = "red";
p2Display.style.color = "red";

const changeWinPoint = function () {
  if (winPoint === 0) {
    alert("Please Select the Win Point!");
  }
};
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    if (p1Score < winPoint) {
      p1Score += 1;
    }
    if (p1Score === winPoint) {
      if (p1Score !== 0) p1Display.style.color = "lightgreen";
      isGameOver = true;
    }
  }
  changeWinPoint();
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    if (p2Score < winPoint) {
      p2Score += 1;
    }

    if (p2Score === winPoint) {
      if (p2Score !== 0) p2Display.style.color = "lightgreen";
      isGameOver = true;
    }
  }
  changeWinPoint();
  p2Display.textContent = p2Score;
});

const resetFunc = function () {
  p1Score = 0;
  p2Score = 0;
  p1Display.style.color = "red";
  p2Display.style.color = "red";
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  if (p1Score < winPoint && p2Score < winPoint) {
    isGameOver = false;
  }
};

reset.addEventListener("click", resetFunc);

winPointOptions.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  //   console.log(winPoint);
  resetFunc();
});
