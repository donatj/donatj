import { readFile, writeFile } from "node:fs/promises";
import OpenAI from "openai";

const marker = "<!-- AI GENERATED REPORT -->";
const username = "donatj";
const heading = "### What I've been up to recently";
const lastUpdatedDate = new Date().toISOString().slice(0, 10);

const response = await new OpenAI().responses.create({
	model: process.env.OPENAI_MODEL ?? "gpt-5.6-luna",
	tools: [{ type: "web_search" }],
	tool_choice: "required",
	input: `First, identify every public GitHub organization associated with ${username}. Then research what ${username} has been up to in the past 14 days across the personal account and each of those organizations. Check every identified organization; do not limit research to personal repositories. Prioritize public GitHub activity—especially pull requests, commits, issues, releases, and repositories—and use other public sources when useful.

Include only things that actually happened; do not mention missing, absent, unverified, or undiscovered activity. Ignore Dependabot-related work. Every pull request you mention must be an exact direct Markdown link to its public GitHub URL; never invent a link. Its link text must describe what the pull request achieves, not a repository name or pull-request number. Never use or mention non-programming-related Reddit activity or anything political. Do not include statements or opinions by ${username} that could be critical of any person, organization, project, or product.

If you find relevant public thoughts by ${username} from the period—on the personal blog (https://donatstudios.com/), X (https://x.com/donatj), Bluesky (https://bsky.app/profile/donatstudios.com), or other public social media—about technology, software, or how technology affects work, everyday life, or the wider world, add a brief final section titled "What I have been thinking about". Summarize the general ideas without linking to social-media posts. Omit the section entirely if there is no relevant material. Do not include personal information, private details, or anything political.

Write a concise, friendly, human-readable Markdown update for ${username}'s GitHub profile README in 2–3 short paragraphs. Write entirely in the first person and use the tone of catching up an old friend on what I have been working on.

Choose one or two meaningful threads as the throughline, rather than cataloging every repository or change. For each thread, explain what I am working on and, when the sources support it, the practical problem it addresses, why it matters, or what it aims to accomplish. When covering work in an organization, explain how it relates to that organization's or project's purpose when the sources establish that context. Do not speculate about motivations, impact, or organizational purpose that the sources do not establish.

Links are optional supporting evidence, not coverage. The prose should still read naturally if every link is removed. Use at most two links total, and only for the most representative pull requests or projects; do not link every item or write a sentence that enumerates projects. Use bullets only when they materially improve clarity. Do not include calendar dates or date ranges in the report. Be factual; do not invent work or claim private information. Return only the update, beginning with this exact heading:\n\n${heading}`,
	text: { verbosity: "low" },
});
const report = response.output_text?.trim();

if (!report) throw new Error("OpenAI returned no README report.");

const sections = (await readFile("README.md", "utf8")).split(marker);
if (sections.length !== 2) {
	throw new Error(`README.md must contain ${marker} exactly once.`);
}

await writeFile(
	"README.md",
	`${sections[0].trimEnd()}\n\n${marker}\n\n${report}\n\nLast update: ${lastUpdatedDate}\n`,
);
