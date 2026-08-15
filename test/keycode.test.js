import test from "node:test";
import assert from "node:assert/strict";
import { formatModifiers, getKeyDetails, getLocationName } from "../src/keycode.js";

test("normal key details are normalized", () => {
  const details = getKeyDetails({
    key: "a",
    code: "KeyA",
    keyCode: 65,
    location: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    repeat: false,
  });

  assert.deepEqual(details, {
    key: "a",
    code: "KeyA",
    keyCode: 65,
    location: "Standard",
    modifiers: [],
    repeat: false,
  });
});

test("space is presented as Space", () => {
  const details = getKeyDetails({ key: " ", code: "Space", keyCode: 32, location: 0 });
  assert.equal(details.key, "Space");
  assert.equal(details.code, "Space");
});

test("modifier keys are formatted in a stable order", () => {
  const details = getKeyDetails({
    key: "A",
    code: "KeyA",
    keyCode: 65,
    location: 0,
    ctrlKey: true,
    shiftKey: true,
    altKey: true,
    metaKey: true,
  });

  assert.equal(formatModifiers(details), "Ctrl + Shift + Alt + Meta");
});

test("keyboard locations are mapped correctly", () => {
  assert.equal(getLocationName(0), "Standard");
  assert.equal(getLocationName(1), "Left");
  assert.equal(getLocationName(2), "Right");
  assert.equal(getLocationName(3), "Numpad");
  assert.equal(getLocationName(99), "Unknown");
});

test("missing browser fields have safe fallbacks", () => {
  const details = getKeyDetails({ key: "x" });
  assert.equal(details.code, "—");
  assert.equal(details.keyCode, 0);
  assert.equal(details.location, "Standard");
  assert.equal(formatModifiers(details), "None");
});
