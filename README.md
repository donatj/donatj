### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been continuing work on [picopass](https://github.com/donatj/picopass), a TinyGo experiment that turns a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current time, a stored password, or a freshly generated TOTP code.

I’ve focused on making the device’s physical interaction simpler and more useful: the buttons now have cleaner input handling, and a same-button double press can send Return instead of the button’s usual value. I also added an example device image to make the project easier to understand at a glance.

I’m keeping picopass firmly in “toy experiment” territory rather than treating it as an authenticator: it is useful for disposable test credentials and for exploring Wi-Fi, NTP, USB serial, and HID keyboard behavior on tiny hardware, not for protecting real accounts.

### What I have been thinking about

I’ve been thinking about AI as something that can make large refactors much cheaper without replacing human responsibility for the code. Software may be increasingly mutable, but architecture still matters when I expect to keep extending a system—and I want people reviewing and understanding what they merge.

Last update: 2026-09-28
