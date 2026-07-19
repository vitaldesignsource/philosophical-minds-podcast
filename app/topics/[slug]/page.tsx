import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import { findTopic, topicMatches } from "@/lib/topics";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = findTopic(slug);

  if (!topic) {
    return {
      title: "Topic",
      description: "A Philosophical Minds topic page.",
    };
  }

  return {
    title: topic.title,
    description: topic.description,
  };
}

export default async function TopicSignalsPage({ params }: Props) {
  const { slug } = await params;
  const topic = findTopic(slug);
  if (!topic) notFound();

  const feed = await getPodcastFeed(120);
  const relatedEpisodes = feed.episodes.filter((episode) => topicMatches(episode, topic));

  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Related Signals</p>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
        <div className="hero__actions">
          <Link className="button" href="/topics">
            Back to Topics
          </Link>
          <Link className="button button--quiet" href="/episodes">
            Full Episode Archive
          </Link>
        </div>
      </section>

      <section className="archive-section">
        <div className="section-heading">
          <p className="eyebrow">{relatedEpisodes.length} related signals</p>
          <h2>Conversations Connected to {topic.title}</h2>
          <p>
            These results are gathered from episode titles, descriptions, and RSS topic categories. As transcripts and
            library entries are added, this page can become a deeper research workbench for the topic.
          </p>
        </div>
        <EpisodeExplorer episodes={relatedEpisodes} />
      </section>
    </main>
  );
}
