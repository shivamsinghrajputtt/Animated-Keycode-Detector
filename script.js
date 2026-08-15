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

const locations = {
  0: "Standard",
  1: "Left",
  2: "Right",
  3: "Numpad",
};

function randomGradient() {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(135deg, hsl(${hue}, 90%, 55%), hsl(${(hue + 55) % 360}, 85%, 45%))`;
}

function getModifiers(event) {
  const modifiers = [];
  if (event.ctrlKey) modifiers.push("Ctrl");
  if (event.shiftKey) modifiers.push("Shift");
  if (event.altKey) modifiers.push("Alt");
  if (event.metaKey) modifiers.push("Meta");
  return modifiers;
}

function setStatus(message) {
  statusDiv.textContent = message;
}

function renderKey(event) {
  const keyName = event.key === " " ? "Space" : event.key;
  const modifiers = getModifiers(event);

  keyDiv.textContent = keyName;
  fields.code.textContent = event.code || "—";
  fields.keyCode.textContent = event.keyCode || "—";
  fields.location.textContent = locations[event.location] || "Unknown";
  fields.modifiers.textContent = modifiers.length ? modifiers.join(" + ") : "None";
  body.style.background = randomGradient();

  box.classList.remove("key-pressed");
  requestAnimationFrame(() => box.classList.add("key-pressed"));
  setStatus(event.repeat ? "Key is being held…" : "Key detected");
}

document.addEventListener("keydown", renderKey);

copyButton.addEventListener("click", async () => {
  const text = [
    `Key: ${keyDiv.textContent}`,
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
  fields.code.textContent = "—";
  fields.keyCode.textContent = "—";
  fields.location.textContent = "—";
  fields.modifiers.textContent = "None";
  body.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
  box.classList.remove("key-pressed");
  setStatus("Ready — press any key");
});
