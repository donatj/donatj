### Hello!

I am a PHP, Go and TypeScript developer based in Minneapolis. 

I work across the entire stack, but I’m happiest in the backend. Moving data, pushing bytes around, making things fast.

I ❤️ tiny reusable parts with single responsibilities and no side effects. I keep code simple, clear, and easy for anyone to read.

I’ve spent fifteen years in EdTech keeping old systems running and new ones from catching fire. Before that I built industrial and B2B tools where things had to work because people depended on them.

<!-- AI GENERATED REPORT -->

### What I've been up to recently

I’ve been deepening [MDDoc](https://github.com/donatj/mddoc), my PHP-to-Markdown documentation generator. My newest work is [teaching it to find declarations inside nested statements](https://github.com/donatj/mddoc/pull/55), so valid functions, classes, enums, interfaces, and traits do not disappear from generated documentation merely because they live inside conditionals, `try` blocks, functions, or methods.

I also added [PHP enum documentation support](https://github.com/donatj/mddoc/pull/53), including backed and unbacked enums, their cases, and values. That makes the generated output more useful for projects using modern PHP features while preserving support for older PHP versions.

Earlier in the month, I taught MDDoc to discover classes through Composer’s registered autoloaders instead of requiring duplicated PSR mappings. That lets it document code from a project and its installed dependencies without loading those classes, which should make real-world Composer projects easier to document accurately.

### What I have been thinking about

I’ve been thinking about how much good software depends on code being easy to review. Tools can make big changes cheaper, but I still want the resulting code and architecture to be clear enough for people to understand, question, and maintain.

Last update: 2026-10-19
