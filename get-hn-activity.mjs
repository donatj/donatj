import { fileURLToPath } from "node:url";

const apiBase = "https://hacker-news.firebaseio.com/v0";

function decodeNumericEntities(text) {
	return text
		.replace(/&#x([\da-f]+);/gi, (_match, codePoint) => decodeCodePoint(codePoint, 16))
		.replace(/&#(\d+);/g, (_match, codePoint) => decodeCodePoint(codePoint, 10));
}

function decodeCodePoint(codePoint, radix) {
	const value = Number.parseInt(codePoint, radix);
	return value <= 0x10ffff ? String.fromCodePoint(value) : "";
}

function positiveInteger(value, fallback) {
	const parsed = Number(value);
	return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function cleanText(html) {
	return decodeNumericEntities(html)
		.replace(/<p>/gi, "\n\n")
		.replace(/<[^>]*>/g, "")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&")
		.replace(/[ \t]+\n/g, "\n")
		.replace(/\n{3,}/g, "\n\n")
		.trim();
}

function recentItems(items, cutoff, maxItems) {
	return items
		.filter(
			(item) =>
				item &&
				!item.dead &&
				!item.deleted &&
				["comment", "story"].includes(item.type) &&
				item.time >= cutoff,
		)
		.sort((left, right) => right.time - left.time)
		.map((item) => ({
			type: item.type,
			createdAt: new Date(item.time * 1000).toISOString(),
			text: cleanText(item.text ?? item.title ?? ""),
		}))
		.filter((item) => item.text)
		.slice(0, maxItems);
}

function truncate(text, maxLength = 1_000) {
	return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

export function formatHackerNewsActivity(activity) {
	if (!activity.items.length) return "";

	return [
		"Recent Hacker News activity:",
		...activity.items.map(
			(item) => `- ${item.type === "comment" ? "Comment" : "Story"}: ${truncate(item.text)}`,
		),
	].join("\n");
}

async function fetchJSON(fetchImpl, url) {
	const response = await fetchImpl(url);
	if (!response.ok) {
		throw new Error(`Hacker News API request failed: ${response.status} ${url}`);
	}

	return response.json();
}

export async function collectHackerNewsActivity({
	username = "donatj",
	days = 14,
	scanLimit = 100,
	maxItems = 20,
	now = new Date(),
	fetchImpl = fetch,
} = {}) {
	const user = await fetchJSON(fetchImpl, `${apiBase}/user/${encodeURIComponent(username)}.json`);
	const submitted = Array.isArray(user.submitted) ? user.submitted.slice(0, scanLimit) : [];
	const items = await Promise.all(
		submitted.map((id) => fetchJSON(fetchImpl, `${apiBase}/item/${id}.json`)),
	);
	const cutoff = Math.floor(now.getTime() / 1000) - days * 24 * 60 * 60;

	return {
		source: "Hacker News",
		username,
		periodDays: days,
		items: recentItems(items, cutoff, maxItems),
	};
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const activity = await collectHackerNewsActivity({
		username: process.env.HN_USERNAME ?? "donatj",
		days: positiveInteger(process.env.HN_DAYS, 14),
	});

	process.stdout.write(`${formatHackerNewsActivity(activity)}\n`);
}
