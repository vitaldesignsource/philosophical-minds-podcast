import { PlayEpisodeButton } from "@/components/PlayEpisodeButton";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { getPodcastFeed } from "@/lib/rss";
import { breadcrumbSchema, jsonLdGraph, pageMetadata, podcastEpisodeSchema } from "@/lib/seo";
import { coreTopics, topicMatches, topicSlug } from "@/lib/topics";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feed = await getPodcastFeed();
  const episode = feed.episodes.find((item) => item.slug === slug);

  if (!episode) {
    return {
      title: "Episode",
      description: "A Philosophical Minds Podcast episode.",
    };
  }

  return pageMetadata({
    title: episode.title,
    description: episode.excerpt,
    path: `/episodes/${episode.slug}`,
    image: episode.artwork || undefined,
    type: "article",
    publishedTime: episode.publishedAt || undefined,
  });
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const feed = await getPodcastFeed();
  const episode = feed.episodes.find((item) => item.slug === slug);

  if (!episode) notFound();

  const schema = jsonLdGraph(
    podcastEpisodeSchema(episode),
    breadcrumbSchema([
      { name: "Episodes", path: "/episodes" },
      { name: episode.title, path: `/episodes/${episode.slug}` },
    ]),
  );

  const episodeTopics = coreTopics.filter((topic) => topicMatches(episode, topic));

  const related = feed.episodes
    .filter((item) => item.slug !== episode.slug && item.categories.some((category) => episode.categories.includes(category)))
    .slice(0, 3);

  return (
    <main>
      <JsonLd data={schema} />
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">{episode.displayDate || "Podcast episode"}</p>
        <h1>{episode.title}</h1>
        <p>{episode.excerpt}</p>
        <div className="hero__actions">
          {episode.audioUrl && <PlayEpisodeButton episode={episode} label="Play Episode" />}
          <Link className="button" href="/episodes">
            Back to Archive
          </Link>
        </div>
      </section>

      <section className="route-section">
        <article className="latest-card">
          <div className="latest-card__art" style={{ backgroundImage: `url(${episode.artwork || "/philosophical-minds-hero.webp"})` }} />
          <div className="latest-card__body">
            <div className="meta-line">
              {episode.episodeNumber && <span>Episode {episode.episodeNumber}</span>}
              {episode.seasonNumber && <span>Season {episode.seasonNumber}</span>}
              {episode.duration && <span>{episode.duration}</span>}
              {episode.author && <span>{episode.author}</span>}
            </div>
            <h2>Show Notes</h2>
            <div className="episode-notes" dangerouslySetInnerHTML={{ __html: episode.descriptionHtml }} />
            <h3>Ideas Explored</h3>
            <div className="tag-row">
              {episode.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>

            {episodeTopics.length > 0 && (
              <>
                <h3>Explore These Topics</h3>
                <div className="tag-row tag-row--links">
                  {episodeTopics.map((topic) => (
                    <Link href={`/topics/${topicSlug(topic.title)}`} key={topic.title}>
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      </section>

      <section className="route-section">
        <div className="section-heading">
          <p className="eyebrow">Continue the Inquiry</p>
          <h2>Related Conversations</h2>
        </div>
        <div className="route-grid">
          {related.map((item) => (
            <Link className="route-card" href={`/episodes/${item.slug}`} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
          {related.length === 0 && (
            <div className="empty-state">
              <h3>Related episodes will grow with the archive.</h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
