import { PlayEpisodeButton } from "@/components/PlayEpisodeButton";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
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

  return {
    title: episode.title,
    description: episode.excerpt,
    openGraph: {
      title: episode.title,
      description: episode.excerpt,
      images: episode.artwork ? [episode.artwork] : ["/og.png"],
      type: "article",
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const feed = await getPodcastFeed();
  const episode = feed.episodes.find((item) => item.slug === slug);

  if (!episode) notFound();

  const related = feed.episodes
    .filter((item) => item.slug !== episode.slug && item.categories.some((category) => episode.categories.includes(category)))
    .slice(0, 3);

  return (
    <main>
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
          <div className="latest-card__art" style={{ backgroundImage: `url(${episode.artwork || "/philosophical-minds-hero.png"})` }} />
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
