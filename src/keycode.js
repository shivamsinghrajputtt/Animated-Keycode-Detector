const LOCATION_NAMES = {
  0: "Standard",
  1: "Left",
  2: "Right",
  3: "Numpad",
};

export function getLocationName(location = 0) {
  return LOCATION_NAMES[location] || "Unknown";
}

export function getModifiers(event) {
  const modifiers = [];
  if (event.ctrlKey) modifiers.push("Ctrl");
  if (event.shiftKey) modifiers.push("Shift");
  if (event.altKey) modifiers.push("Alt");
  if (event.metaKey) modifiers.push("Meta");
  return modifiers;
}

export function getKeyDetails(event) {
  return {
    key: event.key === " " ? "Space" : event.key,
    code: event.code || "—",
    keyCode: event.keyCode || 0,
    location: getLocationName(event.location),
    modifiers: getModifiers(event),
    repeat: Boolean(event.repeat),
  };
}

export function formatModifiers(details) {
  return details.modifiers.length ? details.modifiers.join(" + ") : "None";
}
