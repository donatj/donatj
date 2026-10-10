### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been deepening [MDDoc](https://github.com/donatj/mddoc), my PHP-to-Markdown documentation generator. The newest work makes it able to document declarations nested inside conditionals, `try` blocks, functions, and methods, while building out fixture-based project tests that make generated documentation changes easier to review—see [the work to document nested declarations](https://github.com/donatj/mddoc/pull/55).

I also shipped MDDoc 0.13.0 with first-class Composer class lookup, PHP enum documentation, configurable wrapping for long signatures, and cleaner handling of `void` return annotations. That means documentation can follow a project’s existing Composer setup—including dependency classes—without loading those classes, while covering more modern PHP source accurately.

I’ve kept tinkering with [picopass](https://github.com/donatj/picopass), a TinyGo experiment for turning a Raspberry Pi Pico 2 W into a small USB keyboard that can type time, a stored value, or a freshly generated TOTP code. It remains deliberately a throwaway hardware experiment for learning about Wi-Fi, NTP, USB serial, and HID input rather than anything meant to secure real accounts.

### What I have been thinking about

I’ve been thinking a lot about reviewability: tools can make large changes cheaper to produce, but someone still needs to understand the architecture and own what lands. I’m also apparently still carrying a lot of old keyboard muscle memory around—some shortcuts never really leave you.

Last update: 2026-10-10
