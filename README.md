### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been continuing to tinker with [picopass](https://github.com/donatj/picopass), my TinyGo experiment for turning a Raspberry Pi Pico 2 W into a small USB keyboard that can type the current time, a stored test password, or a freshly generated TOTP code. I’ve been making its physical controls more practical, including a quick repeat press for sending Return, while keeping it squarely focused on disposable credentials and hands-on embedded experimentation rather than real account security.

I’ve also been pushing [MDDoc](https://github.com/donatj/mddoc) forward as a more capable PHP documentation generator. It now has stronger support for documenting enums and for finding classes through Composer autoloaders without loading them, which makes generated documentation fit more naturally into real-world PHP projects and their dependency trees.

Most recently, I’ve been extending MDDoc’s parser so declarations nested inside conditionals, `try` blocks, functions, and methods do not quietly disappear from generated output. It’s the kind of edge-case work that helps documentation better reflect the code people actually maintain.

Last update: 2026-10-27
