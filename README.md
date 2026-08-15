# Animated Keycode Detector ⌨️

A lightweight browser-based keyboard event inspector built with vanilla HTML, CSS, and JavaScript.

Press any key to inspect the keyboard event your browser receives, including its key, code, legacy keyCode, location, modifiers, and repeat state.

## 🌐 Live Demo

https://shivamsinghrajputtt.github.io/Animated-Keycode-Detector/

## ✨ Features

- Detects keyboard `keydown` events in real time
- Displays the pressed key and modern `event.code`
- Shows legacy `keyCode` for reference
- Identifies standard, left, right, and numpad key locations
- Detects Ctrl, Shift, Alt, and Meta modifiers
- Shows repeat state for held keys
- Animated visual feedback for each key press
- Copies the current event details to the clipboard
- Resets the inspector to its initial state
- Responsive layout for desktop and smaller screens
- Accessible status updates for keyboard-event changes
- Respects `prefers-reduced-motion`
- Automated Node.js tests with GitHub Actions CI

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js built-in test runner
- GitHub Actions
- GitHub Pages

## 🚀 Run locally

No frontend build step is required. Serve the project with any static web server, for example:

```bash
npx serve .
```

Then open the local URL and press a key.

Run the test suite with:

```bash
npm test
```

## 🧠 What this project demonstrates

This project demonstrates the differences between `event.key`, `event.code`, `event.location`, modifier flags, the legacy `event.keyCode` property, and keyboard repeat events.

The event-normalization logic lives in `src/keycode.js`, keeping the core behavior independently testable from the DOM UI.

## 📁 Project structure

```text
.
├── .github/workflows/ci.yml
├── src/keycode.js
├── test/keycode.test.js
├── favicon.svg
├── index.html
├── script.js
├── style.css
├── package.json
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

## 🌐 Browser support

The app uses standard browser keyboard-event APIs and the Clipboard API for the copy action. Clipboard access can depend on browser security rules and the page's serving context.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for the full license text.

## 🤝 Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## 🔐 Security

For security-related reports, please read [SECURITY.md](SECURITY.md).
