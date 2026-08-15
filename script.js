import { getKeyDetails, formatModifiers } from "./src/keycode.js";

const keyDiv = document.querySelector(".key");
const statusDiv = document.querySelector(".status");
const body = document.body;
const box = document.querySelector(".box");
const fields = {
  code: document.querySelector('[data-field="code"]'),
  keyCode: document.querySelector('[data-field="keyCode"]'),
  location: document.querySelector('[data-field="location"]'),
  modifiers: document.querySelector('[data-field="modifiers"]'),
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
  body.style.background = randomGradient();
  box.classList.remove("key-pressed");
  requestAnimationFrame(() => box.classList.add("key-pressed"));

  setStatus(details.repeat ? "Key is being held…" : "Key detected");
}

document.addEventListener("keydown", renderKey);

copyButton.addEventListener("click", async () => {
  const details = getKeyDetails({
    key: keyDiv.textContent === "Space" ? " " : keyDiv.textContent,
    code: fields.code.textContent,
    keyCode: Number(fields.keyCode.textContent) || 0,
    location: 0,
    ctrlKey: fields.modifiers.textContent.includes("Ctrl"),
    shiftKey: fields.modifiers.textContent.includes("Shift"),
    altKey: fields.modifiers.textContent.includes("Alt"),
    metaKey: fields.modifiers.textContent.includes("Meta"),
  });

  const text = [
    `Key: ${details.key}`,
    `Code: ${fields.code.textContent}`,
    `Legacy keyCode: ${fields.keyCode.textContent}`,
    `Location: ${fields.location.textContent}`,
    `Modifiers: ${fields.modifiers.textContent}`,
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
  Object.values(fields).forEach((field) => (field.textContent = "—"));
  fields.modifiers.textContent = "None";
  body.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
  box.classList.remove("key-pressed");
  setStatus("Ready — press any key");
});
