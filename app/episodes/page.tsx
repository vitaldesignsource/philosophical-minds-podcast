import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes",
  description: "Search and listen through the Philosophical Minds Podcast archive.",
};

export default async function EpisodesPage() {
  const feed = await getPodcastFeed();

  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Scholarly media catalog</p>
        <h1>Episode Archive</h1>
        <p>
          Search the living record of conversations by keyword, topic, year, and publication order. Every playable episode
          can be sent into the persistent player.
        </p>
      </section>
      <section className="archive-section">
        <EpisodeExplorer episodes={feed.episodes} />
      </section>
    </main>
  );
}
