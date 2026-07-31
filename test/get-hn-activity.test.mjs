import assert from "node:assert/strict";
import test from "node:test";

import {
	cleanText,
	collectHackerNewsActivity,
	formatHackerNewsActivity,
} from "../get-hn-activity.mjs";

function response(body) {
	return {
		ok: true,
		json: async () => body,
	};
}

test("cleans Hacker News comment markup", () => {
	assert.equal(
		cleanText("One<p>Two &amp; &quot;three&quot; &#x2F; &#47;"),
		'One\n\nTwo & "three" / /',
	);
});

test("collects recent comments and stories from a user feed", async () => {
	const now = new Date("2026-08-01T00:00:00Z");
	const cutoff = Math.floor(now.getTime() / 1000) - 14 * 24 * 60 * 60;
	const items = {
		"1": { id: 1, type: "comment", time: cutoff + 1, text: "A <i>recent</i> thought" },
		"2": { id: 2, type: "story", time: cutoff + 2, title: "A recent story" },
		"3": { id: 3, type: "comment", time: cutoff - 1, text: "An older thought" },
	};
	const fetchImpl = async (url) => {
		if (url.endsWith("/user/example.json")) return response({ submitted: [1, 2, 3] });
		return response(items[url.match(/item\/(\d+)\.json$/)[1]]);
	};

	const activity = await collectHackerNewsActivity({
		username: "example",
		now,
		fetchImpl,
	});

	assert.deepEqual(activity.items, [
		{
			type: "story",
			createdAt: "2026-07-18T00:00:02.000Z",
			url: "https://news.ycombinator.com/item?id=2",
			text: "A recent story",
		},
		{
			type: "comment",
			createdAt: "2026-07-18T00:00:01.000Z",
			url: "https://news.ycombinator.com/item?id=1",
			text: "A recent thought",
		},
	]);
});

test("formats collected activity as prompt context", () => {
	assert.equal(
		formatHackerNewsActivity({
			items: [
				{
					type: "comment",
					text: "A useful thought",
					url: "https://news.ycombinator.com/item?id=1",
				},
			],
		}),
		"Recent Hacker News activity:\n- Comment: A useful thought\n  Source: https://news.ycombinator.com/item?id=1",
	);
});
