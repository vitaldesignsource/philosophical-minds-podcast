import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Episodes",
  description:
    "Search and listen through the Philosophical Minds Podcast archive.",
  path: "/episodes",
  image: "/og-episodes.jpg",
});

export default async function EpisodesPage() {
  const feed = await getPodcastFeed();

  return (
    <main>
      <section className="page-hero" style={{ "--hero-image": "url('/hero-episodes.webp')" } as React.CSSProperties}>
        <SiteHeader />
        <p className="eyebrow">Scholarly media catalog</p>
        <h1>Episode Archive</h1>
        <p>Search the living record of conversations by keyword, topic, year, and publication order.</p>
      </section>
      <section className="archive-section">
        <EpisodeExplorer episodes={feed.episodes} />
      </section>
    </main>
  );
}
