### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been tinkering with [picopass](https://github.com/donatj/picopass), my TinyGo experiment that turns a Raspberry Pi Pico 2 W into a physical TOTP keyboard. I refined its button behavior so normal presses type a value without submitting a form, while a quick second press deliberately sends Return.

I’ve also been extending [Exporter](https://github.com/QuorumCollection/Exporter), our streamed PHP spreadsheet-export library. I added a small XLSX engine that packages Office Open XML worksheets into a streamed ZIP archive, giving the library a modern Excel format alongside its CSV, TSV, and SpreadsheetML support. [The pull request adds the initial XLSX export path](https://github.com/QuorumCollection/Exporter/pull/22).

It’s been a compact stretch of making small data-moving tools more useful: hardware that can type short-lived codes deliberately, and exports that can produce a broadly useful spreadsheet format without abandoning streaming.

### What I have been thinking about

I’ve been thinking about AI-assisted coding as something that can speed up concrete, well-directed implementation and make big refactors less intimidating—but not something that removes the need for people to understand and review what they merge.

Last update: 2026-09-22
