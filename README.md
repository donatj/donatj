### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been continuing to tinker with [picopass](https://github.com/donatj/picopass), my TinyGo experiment for turning a Raspberry Pi Pico 2 W into a small physical keyboard that can type the time, a stored password, or a fresh TOTP code. I’ve been refining its button-driven interaction and keeping it firmly in the realm of disposable-credential hardware experimentation rather than a security product. ([github.com](https://github.com/donatj/picopass))

I also wrapped up a substantial [CsvToMarkdownTable](https://github.com/donatj/CsvToMarkdownTable) refresh: [modernizing CSV parsing and package distribution](https://github.com/donatj/CsvToMarkdownTable/pull/198). The converter now uses a real CSV parser, which makes quoted fields, escaped quotes, and embedded newlines behave much more reliably while preserving its usefulness in browsers, Node, and the command line. ([github.com](https://github.com/donatj/CsvToMarkdownTable/pull/198))

The thread connecting those projects has been making small tools more trustworthy in the places where their simple interfaces meet messy real input—whether that is physical buttons and USB keyboards or CSV files that are more complicated than they first appear.

### What I have been thinking about

I’ve been thinking about AI as a tool that can make large refactors much cheaper, without removing the need for people to understand and review what they merge. Code may be increasingly mutable, but architecture still matters whenever I expect to keep building on a system.

Last update: 2026-10-01
