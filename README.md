### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been building [picopass](https://github.com/donatj/picopass), a TinyGo experiment for turning a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current time, a stored password, or a freshly generated TOTP code.

I’ve been polishing its physical interaction model: it now works as both a USB serial device and HID keyboard, with dedicated buttons for each value and a quick repeat press for sending Return. It has been a fun way to work through Wi-Fi, NTP time sync, USB HID, and small-device input handling together.

I’m keeping it deliberately in experiment territory rather than presenting it as an authenticator. It is useful for disposable test credentials and for learning how these pieces fit together, while staying clear that real account protection calls for purpose-built, security-reviewed hardware.

### What I have been thinking about

I’ve been thinking a lot about reviewability as a core engineering feature. I still appreciate Go’s straightforwardness because code that is easy to read and reason about makes it much easier for people—including me—to review confidently and keep systems understandable over time.

Last update: 2026-10-15
