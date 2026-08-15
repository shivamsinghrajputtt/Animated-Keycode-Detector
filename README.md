# Animated Keycode Detector ⌨️✨

A lightweight browser-based keyboard event inspector built with vanilla HTML, CSS, and JavaScript.

It turns every keyboard press into readable event data while keeping the original animated visual experience.

## ✨ Features

- Detects keyboard `keydown` events in real time
- Displays the pressed key and modern `event.code`
- Shows legacy `keyCode` for reference
- Identifies standard, left, right, and numpad key locations
- Detects Ctrl, Shift, Alt, and Meta modifiers
- Animated visual feedback for each key press
- Copy the current event details to the clipboard
- Reset the inspector to its initial state
- Responsive layout for desktop and smaller screens
- Respects `prefers-reduced-motion`
- Automated Node.js tests and GitHub Actions CI

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- Node.js built-in test runner
- GitHub Actions

## 🚀 Run locally

No frontend build step is required. Serve the project with any static web server, for example:

```bash
npx serve .
```

Then open the local URL and press a key.

For the utility test suite:

```bash
npm test
```

## 🧠 What this project demonstrates

This project focuses on browser keyboard events and the difference between `event.key`, `event.code`, `event.location`, modifier flags, and the legacy `event.keyCode` property.

The event-normalization logic lives in `src/keycode.js`, making the core behavior independently testable from the DOM UI.

## 📁 Project structure

```text
.
├── .github/workflows/ci.yml
├── src/keycode.js
├── test/keycode.test.js
├── index.html
├── script.js
├── style.css
├── package.json
└── README.md
```

## 🌐 Browser support

The app uses standard browser keyboard-event APIs and the Clipboard API for the copy action. Clipboard access can depend on browser security rules and the page's serving context.

## 📄 License

No license file is currently included in the repository.
