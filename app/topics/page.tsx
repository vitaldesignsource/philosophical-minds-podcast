import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import { coreTopics, topicMatches, topicSlug } from "@/lib/topics";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Topics",
  description: "A relational map of Philosophical Minds topics, traditions, and recurring ideas.",
};

export default async function TopicsPage() {
  const feed = await getPodcastFeed(80);

  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Map of Ideas</p>
        <h1>Topics</h1>
        <p>
          A refined relationship explorer for traditions, thinkers, symbols, practices, and episode threads. It is designed
          to become a full visual graph without becoming a chaotic field of dots.
        </p>
      </section>
      <section className="route-section">
        <div className="route-grid">
          {coreTopics.map((topic) => {
            const count = feed.episodes.filter((episode) => topicMatches(episode, topic)).length;
            return (
              <Link className="route-card" href={`/topics/${topicSlug(topic.title)}`} key={topic.title}>
                <p className="eyebrow">{count} related signals</p>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
