import { writeFile } from "node:fs/promises";
import { getPodcastFeed } from "../lib/rss";

const feed = await getPodcastFeed();

if (feed.episodes.length === 0) {
  throw new Error(`RSS snapshot generation failed: ${feed.error || "no episodes returned"}`);
}

const output = `import type { PodcastFeed } from "./rss";

// Generated from the public Libsyn RSS feed. Refresh with:
// ./node_modules/.bin/tsx scripts/generateRssSnapshot.ts
export const podcastFeedSnapshot: PodcastFeed = ${JSON.stringify(
  { ...feed, error: undefined },
  null,
  2,
)};
`;

await writeFile(new URL("../lib/rssSnapshot.ts", import.meta.url), output, "utf8");
console.log(`Saved ${feed.episodes.length} episodes to lib/rssSnapshot.ts`);
