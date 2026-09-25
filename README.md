### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been building [picopass](https://github.com/donatj/picopass), a TinyGo experiment that turns a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current UTC time, a configured password, or a freshly generated TOTP code.

I’ve been wiring together Wi‑Fi and NTP time synchronization with USB serial logging and HID keyboard output, then using three physical buttons as the interface. The goal is to explore the Pico 2 W and TinyGo while making a little desktop gadget that can enter a few frequently needed values without reaching for another app.

I’ve also been refining the button behavior so a normal press types its value while a quick repeat press deliberately sends Return. It’s still firmly an experiment rather than a security product, but it has been a fun way to work through hardware input, timing, and USB-device behavior in one compact project.

### What I have been thinking about

I’ve been thinking about AI coding as something that can make large refactors much cheaper without removing the need to understand and review what gets merged. I find it most useful when I stay specific about the shape of the solution, actively own the result, and treat generated code as mutable material—not a substitute for engineering judgment.

Last update: 2026-09-25
