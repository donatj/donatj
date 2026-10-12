### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’m extending [MDDoc](https://github.com/donatj/mddoc) so generated PHP documentation can find declarations nested inside conditionals, `try` blocks, functions, and methods—making sure valid classes, functions, enums, interfaces, and traits do not quietly disappear from the output. I’m working through this in [a pull request that documents declarations inside nested statements](https://github.com/donatj/mddoc/pull/55).

I’ve also been making MDDoc more useful in real Composer projects: it can now discover classes through registered Composer autoloaders rather than duplicating PSR mappings, including installed dependencies, and it now generates documentation for backed and unbacked PHP enums, their cases, and values. I landed the Composer support in [a pull request that finds classes through Composer](https://github.com/donatj/mddoc/pull/38).

I’ve kept tinkering with [picopass](https://github.com/donatj/picopass), my TinyGo Raspberry Pi Pico 2 W experiment that acts as a small physical keyboard for typing a current time, a stored password, or a disposable TOTP code. I’ve been refining the button interaction so it is easier to use at the desk, including a quick repeat press for sending Return.

### What I have been thinking about

I’ve been thinking about how much code review shapes good software work: languages and tools that make changes easy to read and reason about are especially valuable when reviewing is a central part of the job.

Last update: 2026-10-12
