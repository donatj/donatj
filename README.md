### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been building [picopass](https://github.com/donatj/picopass), a TinyGo experiment that turns a Raspberry Pi Pico 2 W into a small physical keyboard for typing the current UTC time, a stored password, or a freshly generated TOTP code.

I’ve been refining the device’s button-driven interaction, including a same-button double press that sends Return, while keeping its USB serial logging and HID keyboard behavior working side by side. It has been a fun excuse to work through Wi-Fi, NTP time sync, and tiny-device input handling in one compact project.

I’m deliberately treating picopass as a disposable-credentials experiment rather than a security product: it is useful for testing and learning, but not for protecting real accounts. I like that constraint—it leaves room to explore the hardware and software without pretending the prototype is something it is not.

### What I have been thinking about

I’ve been thinking about AI as a tool that can make major refactors dramatically cheaper while still requiring people to understand and review the code they merge. Codebases may be more mutable than ever, but architecture still matters when I expect to keep building on top of them.

Last update: 2026-10-04
