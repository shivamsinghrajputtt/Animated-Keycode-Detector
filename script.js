const keyDiv = document.querySelector(".key");
const codeDiv = document.querySelector(".code");
const body = document.body;

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(135deg, hsl(${hue}, 100%, 60%), hsl(${(hue + 60) % 360}, 100%, 50%))`;
}

document.addEventListener("keydown", (event) => {
  const keyName = event.key === " " ? "Space" : event.key;
  keyDiv.textContent = keyName;
  codeDiv.textContent = `KeyCode: ${event.keyCode}`;
  body.style.background = randomColor();
});
