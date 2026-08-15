# Architecture

## Overview

Animated Keycode Detector is a static browser application. The UI runs entirely in the browser and has no backend, database, or build-time framework.

```text
Keyboard Event
      │
      ▼
  script.js
      │
      ├── reads browser KeyboardEvent
      │
      ├── updates animated UI
      │
      └── copies / resets displayed data
      │
      ▼
  src/keycode.js
      │
      ├── normalizes key details
      ├── maps keyboard locations
      ├── extracts modifiers
      └── preserves repeat state
      │
      ▼
  test/keycode.test.js
      │
      └── validates normalization behavior
```

## Responsibilities

### `index.html`

Provides the semantic page structure, event detail fields, controls, metadata, and no-JavaScript fallback.

### `script.js`

Owns browser interaction. It listens for keyboard events, updates the DOM, manages animation state, handles copy/reset actions, and presents the normalized event information.

### `src/keycode.js`

Contains the independently testable keyboard-event normalization helpers. Keeping this logic isolated makes browser-specific event behavior easier to verify with Node.js tests.

### `test/keycode.test.js`

Covers normal keys, Space, modifiers, keyboard locations, missing browser fields, and repeat-state behavior.

### GitHub Actions

Every push and pull request runs the Node.js test suite through `.github/workflows/ci.yml` before changes are considered ready to merge.

## Design decisions

- **Vanilla JavaScript:** the project is intentionally framework-free because the problem is small and browser-native APIs are sufficient.
- **No backend:** keyboard events are processed locally; no user input needs to leave the browser.
- **Testable core logic:** event normalization is separated from DOM manipulation so important behavior can be tested without a browser.
- **Progressive enhancement:** the page remains understandable without JavaScript and explicitly tells the user when JavaScript is required for interaction.
- **Reduced motion:** the UI respects the user's `prefers-reduced-motion` setting.

## Data flow

1. The browser emits a `keydown` event.
2. The application reads key, code, location, modifier, and repeat information.
3. Normalization helpers convert browser values into predictable display values.
4. `script.js` updates the visible event details and animation state.
5. The user can copy the displayed details or reset the inspector.
6. Automated tests validate the normalization layer independently from the UI.
