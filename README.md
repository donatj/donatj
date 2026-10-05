### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been pushing forward on [MDDoc](https://github.com/donatj/mddoc), my PHP-to-Markdown documentation generator. The newest work is [adding enum documentation](https://github.com/donatj/mddoc/pull/53), including backed and unbacked cases, while a larger in-progress effort teaches it to discover classes through Composer rather than making projects duplicate autoload mappings. I’m also making inherited API descriptions clearer about where they came from, so generated docs better reflect real ownership and behavior.

Over at [Shielded.dev](https://github.com/ShieldedDotDev/shieldeddotdev), I added a homepage generator for fixed README badges: it previews the SVG and produces ready-to-copy Markdown from a title, value, and color. That makes the service more immediately useful for someone who just needs a simple badge without manually assembling image URLs.

I’ve also kept tinkering with [picopass](https://github.com/donatj/picopass), a TinyGo experiment for turning a Raspberry Pi Pico 2 W into a small USB keyboard that can type the current time, a configured password, or a generated TOTP code. The device now supports a same-button double press for Return, which makes its physical controls more useful while keeping it firmly in the realm of disposable-credential hardware experimentation.

### What I have been thinking about

I’ve been thinking about AI as a tool that can make major refactors dramatically cheaper, without reducing the need for people to understand and review what they merge. Code may be more mutable than it used to be, but architecture still matters when I expect a system to keep growing.

Last update: 2026-10-05
