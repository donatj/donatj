### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been building [picopass](https://github.com/donatj/picopass), a TinyGo experiment that turns a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current UTC time, a stored password, or a freshly generated TOTP code.

I’ve been refining the device interaction so it works more naturally at the keyboard: it exposes both USB serial logging and HID input, and pressing the same button twice quickly sends Return instead of that button’s usual text.

I’m keeping picopass deliberately in toy-project territory—useful for disposable test credentials and for learning my way around Wi‑Fi, NTP, USB, HID, and constrained hardware, but not something to trust as a real authenticator.

### What I have been thinking about

I’ve been thinking a lot about reviewability. I still like Go in part because straightforward code is easier to read, discuss, and safely extend—and careful human review remains the important part of shipping software well.

Last update: 2026-10-20
