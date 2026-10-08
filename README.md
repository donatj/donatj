### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been pushing forward on [picopass](https://github.com/donatj/picopass), a TinyGo experiment that turns a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current time, a stored password, or a freshly generated TOTP code. I’ve been refining the button handling, including a quick repeat press that sends Return, while keeping it squarely aimed at disposable test credentials and hands-on exploration of Wi-Fi, NTP, USB serial, and HID input.

I also released an update to [mpo](https://github.com/donatj/mpo) that adds MPO writing alongside its existing stereoscopic-photo decoding and conversion tools. That means the Go library and command-line tools can now build Multi Picture Object files from multiple images as well as unpack them, making the project more useful for working both directions with old 3D-photo formats.

Lately I’ve been enjoying projects that connect a small, focused bit of code to something tangible: a button that types at the right moment, or a utility that gives an older image format a practical new workflow. I’m trying to keep those tools simple enough to inspect, reuse, and understand without a lot of ceremony.

### What I have been thinking about

I’ve been thinking about reviewability as a real design constraint: tools and languages that make changes easy to read can matter as much as making them easy to write. Even as AI makes large refactors cheaper, I still want the resulting systems—and the decisions behind them—to be understandable by the people responsible for maintaining them.

Last update: 2026-10-08
