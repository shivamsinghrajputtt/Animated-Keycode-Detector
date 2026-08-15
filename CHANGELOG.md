# Changelog

All notable changes to this project are documented here.

## [1.0.0] - 2026-08-15

### Added

- Real-time keyboard event inspection for browser `keydown` events.
- Key, `event.code`, legacy `keyCode`, location, modifier, and repeat-state details.
- Animated visual feedback with reduced-motion support.
- Copy-to-clipboard and reset controls.
- Responsive layout and accessible live status updates.
- Independently tested keyboard-event normalization logic.
- GitHub Actions CI for automated Node.js tests.
- Architecture, contribution, security, and licensing documentation.

### Changed

- Browser runtime now reuses the tested keyboard normalization module instead of duplicating the logic.
- Removed the non-professional public footer from the demo UI.

[1.0.0]: https://github.com/shivamsinghrajputtt/Animated-Keycode-Detector/releases/tag/v1.0.0
