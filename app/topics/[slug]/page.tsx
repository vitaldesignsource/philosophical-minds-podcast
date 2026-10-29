import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import { pageMetadata } from "@/lib/seo";
import { findShelf } from "@/lib/shelves";
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

  // A topic page lists conversations; the Library shelf of the same name is the
  // reference entry. Distinct titles keep the two from competing for one query.
  return pageMetadata({
    title: `${topic.title} Episodes`,
    description: `Philosophical Minds conversations on ${topic.title.toLowerCase()}. ${topic.description}`,
    path: `/topics/${slug}`,
  });
}

export default async function TopicSignalsPage({ params }: Props) {
  const { slug } = await params;
  const topic = findTopic(slug);
  if (!topic) notFound();

  const feed = await getPodcastFeed(120);
  const relatedEpisodes = feed.episodes.filter((episode) => topicMatches(episode, topic));
  const relatedShelves = (topic.shelves ?? []).map(findShelf).filter((shelf) => shelf !== undefined);

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

      {relatedShelves.length > 0 && (
        <section className="route-section topic-shelves">
          <div className="section-heading">
            <p className="eyebrow">In the Library</p>
            <h2>Read Further on {topic.title}</h2>
            <p>
              Reference entries covering this material as a tradition: its primary texts, central ideas and a reading
              path.
            </p>
          </div>
          <div className="shelf-links shelf-links--centered">
            {relatedShelves.map((shelf) => (
              <Link className="shelf-link" href={`/library/${shelf.slug}`} key={shelf.slug}>
                <span>Shelf {shelf.number}</span>
                {shelf.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="archive-section">
        <div className="section-heading">
          <p className="eyebrow">{relatedEpisodes.length} related signals</p>
          <h2>Conversations Connected to {topic.title}</h2>
        </div>
        <EpisodeExplorer episodes={relatedEpisodes} />
      </section>
    </main>
  );
}
