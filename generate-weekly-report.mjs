import { readFile, writeFile } from "node:fs/promises";
import OpenAI from "openai";

const marker = "<!-- AI GENERATED REPORT -->";
const username = "donatj";
const heading = `### What ${username} has been up to in the last 14 days`;
const lastUpdatedDate = new Date().toISOString().slice(0, 10);

const response = await new OpenAI().responses.create({
	model: process.env.OPENAI_MODEL ?? "gpt-5.6-luna",
	tools: [{ type: "web_search" }],
	tool_choice: "required",
	input: `Research what ${username} has been up to in the past 14 days. Prioritize public GitHub activity—especially pull requests, commits, issues, releases, and repositories—across ${username}'s personal account and every public GitHub organization associated with ${username}. Do not limit research to personal repositories. Use other public sources when useful.

	Include only things that actually happened; do not mention missing, absent, unverified, or undiscovered activity. Ignore Dependabot-related work. Every pull request you mention must be an exact direct Markdown link to its public GitHub URL; never invent a link. Its link text must describe what the pull request achieves, not a repository name or pull-request number. Never use or mention non-programming-related Reddit activity or anything political. Do not include statements or opinions by ${username} that could be critical of any person, organization, project, or product.

	If you find relevant public technical writing or discussion by ${username} from the period—on the personal blog (https://donatstudios.com/), X (https://x.com/donatj), Bluesky (https://bsky.app/profile/donatstudios.com), or other public social media—add a brief final section titled "He has been thinking about." Summarize the general ideas without linking to social-media posts. Omit the section entirely if there is no relevant material. Do not include personal information or private details.

	Write a concise, friendly, human-readable Markdown update for ${username}'s GitHub profile README in 2–3 short paragraphs. Prefer natural, conversational prose. Use bullets only when they materially improve clarity. Be factual; do not invent work or claim private information. Return only the update, beginning with this exact heading:\n\n${heading}`,
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
	`${sections[0].trimEnd()}\n\n${marker}\n\n${report}\n\n<small>${lastUpdatedDate}</small>\n`,
);
