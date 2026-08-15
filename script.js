import { formatModifiers, getKeyDetails } from "./src/keycode.js";

const keyDiv = document.querySelector(".key");
const statusDiv = document.querySelector(".status");
const body = document.body;
const box = document.querySelector(".box");
const fields = {
  code: document.querySelector('[data-field="code"]'),
  keyCode: document.querySelector('[data-field="keyCode"]'),
  location: document.querySelector('[data-field="location"]'),
  modifiers: document.querySelector('[data-field="modifiers"]'),
  repeat: document.querySelector('[data-field="repeat"]'),
};
const copyButton = document.querySelector("#copyButton");
const resetButton = document.querySelector("#resetButton");

function randomGradient() {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(135deg, hsl(${hue}, 90%, 55%), hsl(${(hue + 55) % 360}, 85%, 45%))`;
}

function setStatus(message) {
  statusDiv.textContent = message;
}

function renderKey(event) {
  const details = getKeyDetails(event);

  keyDiv.textContent = details.key;
  fields.code.textContent = details.code;
  fields.keyCode.textContent = details.keyCode;
  fields.location.textContent = details.location;
  fields.modifiers.textContent = formatModifiers(details);
  fields.repeat.textContent = details.repeat ? "Yes" : "No";
  body.style.background = randomGradient();

  box.classList.remove("key-pressed");
  requestAnimationFrame(() => box.classList.add("key-pressed"));
  setStatus(details.repeat ? "Key is being held…" : "Key detected");
}

document.addEventListener("keydown", renderKey);

copyButton.addEventListener("click", async () => {
  const text = [
    `Key: ${keyDiv.textContent}`,
    `Code: ${fields.code.textContent}`,
    `Legacy keyCode: ${fields.keyCode.textContent}`,
    `Location: ${fields.location.textContent}`,
    `Modifiers: ${fields.modifiers.textContent}`,
    `Repeat: ${fields.repeat.textContent}`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    setStatus("Key details copied");
  } catch {
    setStatus("Copy failed — select the details manually");
  }
});

resetButton.addEventListener("click", () => {
  keyDiv.textContent = "—";
  fields.code.textContent = "—";
  fields.keyCode.textContent = "—";
  fields.location.textContent = "—";
  fields.modifiers.textContent = "None";
  fields.repeat.textContent = "No";
  body.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
  box.classList.remove("key-pressed");
  setStatus("Ready — press any key");
});
