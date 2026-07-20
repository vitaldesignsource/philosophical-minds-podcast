import { CompletePlaylist } from "@/components/CompletePlaylist";
import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PlayEpisodeButton } from "@/components/PlayEpisodeButton";
import { SiteHeader } from "@/components/SiteHeader";
import { getPodcastFeed } from "@/lib/rss";
import { topicSlug } from "@/lib/topics";
import Link from "next/link";

const paths = [
  "Philosophy",
  "Metaphysics",
  "Alchemy",
  "Theurgy and Ritual",
  "Consciousness",
  "Esoteric Christianity",
  "Hidden History",
  "Religion and Mysticism",
  "Science and the Ether",
  "Symbolism and Sacred Architecture",
];

const libraryEntries = [
  ["Episodes", "Listen through the newest conversations and trace recurring questions across the archive."],
  ["The Minds", "A guest index for scholars, practitioners, authors, historians, and independent researchers."],
  ["Appearances", "Podcast interviews and external conversations featuring Sky Mathis as a guest."],
  ["The Library", "Reference pages for traditions, thinkers, symbols, books, and metaphysical systems."],
  ["Journal", "Essays, reading lists, episode companions, and philosophical definitions."],
  ["Map of Ideas", "A relational topic explorer connecting episodes, guests, traditions, and concepts."],
  ["Support the Work", "Help sustain long-form inquiry, research, production, and future library development."],
];

export default async function Home() {
  const feed = await getPodcastFeed();
  const latest = feed.episodes[0];
  const featured = feed.episodes.slice(1, 7);

  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="hero__background" />
          <div className="hero__veil" />
          <SiteHeader />
          <div className="hero__content">
            <p className="eyebrow">The Love of Wisdom</p>
            <h1>Philosophical Minds</h1>
            <p>
              Long-form conversations exploring philosophy, metaphysics, consciousness, religion, alchemy, hidden history,
              and the architecture of human thought.
            </p>
            <div className="hero__actions">
              {latest?.audioUrl ? (
                <PlayEpisodeButton episode={latest} label="Listen to the Latest Episode" />
              ) : (
                <a className="button button--primary" href="#playlist">
                  Listen to the Latest Episode
                </a>
              )}
              <Link className="button" href="/episodes">
                Explore All Episodes
              </Link>
              <Link className="button button--quiet" href="/library">
                Enter the Library
              </Link>
            </div>
          </div>
          <div className="hero__signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="latest-section" id="latest">
          <div className="section-heading">
            <p className="eyebrow">Latest from the archive</p>
            <h2>Newest Conversation</h2>
          </div>

          {latest ? (
            <article className="latest-card">
              <div className="latest-card__art" style={{ backgroundImage: `url(${latest.artwork || feed.artwork || "/philosophical-minds-hero.png"})` }} />
              <div className="latest-card__body">
                <div className="meta-line">
                  <span>{latest.displayDate}</span>
                  {latest.duration && <span>{latest.duration}</span>}
                  {latest.episodeNumber && <span>Episode {latest.episodeNumber}</span>}
                </div>
                <h2>{latest.title}</h2>
                {latest.guest && <p className="guest-line">{latest.guest}</p>}
                <p>{latest.excerpt}</p>
                <div className="tag-row">
                  {latest.categories.slice(0, 5).map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <div className="latest-card__actions">
                  {latest.audioUrl && <PlayEpisodeButton episode={latest} label="Play Episode" />}
                  <Link className="button" href={`/episodes/${latest.slug}`}>
                    View Episode Page
                  </Link>
                  <a className="button button--quiet" href="https://open.spotify.com/show/4Ln1tnkAHHNTly7ujKkb1W" target="_blank" rel="noreferrer">
                    Spotify
                  </a>
                </div>
              </div>
            </article>
          ) : (
            <div className="empty-state">
              <h3>RSS temporarily unavailable</h3>
              <p>
                The site is ready to display the newest feed item as soon as the endpoint responds. The full embedded
                playlist below remains available for listening.
              </p>
            </div>
          )}
        </section>

        <section className="paths-section" id="topics">
          <div className="section-heading">
            <p className="eyebrow">Paths of Inquiry</p>
            <h2>Follow a Question Through the Archive</h2>
          </div>
          <div className="path-grid">
            {paths.map((path, index) => (
              <Link className="path-card" href={`/topics/${topicSlug(path)}`} key={path}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{path}</h3>
                <p>Episodes, guests, texts, and library notes organized around this line of inquiry.</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="archive-section" id="archive">
          <div className="section-heading">
            <p className="eyebrow">Searchable media catalog</p>
            <h2>Featured Conversations</h2>
            <p>
              Filter by topic, year, and keyword. Play controls send episodes into the persistent player without forcing
              visitors away from the archive.
            </p>
          </div>
          <EpisodeExplorer episodes={featured.length > 0 ? featured : feed.episodes} compact />
          <div className="center-row">
            <Link className="button button--primary" href="/episodes">
              Open the Complete Archive
            </Link>
          </div>
        </section>

        <section className="living-archive">
          <div>
            <p className="eyebrow">A Living Archive of Ideas</p>
            <h2>More Than a Podcast</h2>
            <p>
              Philosophical Minds brings scholars, practitioners, authors, alchemists, historians, mystics, and independent
              researchers into sustained conversation. Each episode becomes part of a wider architecture of people,
              traditions, questions, and ideas.
            </p>
          </div>
          <div className="library-grid">
            {libraryEntries.map(([title, description]) => (
              <Link href={routeFor(title)} className="library-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <blockquote>Philosophy begins when the familiar world becomes mysterious again.</blockquote>
          <p>Editable featured quote prepared for the owner dashboard.</p>
        </section>

        <section className="playlist-section" id="playlist">
          <div className="section-heading">
            <p className="eyebrow">All episodes playable</p>
            <h2>Complete Podcast Playlist</h2>
            <p>
              Every available conversation from the public feed, arranged in a single listening manuscript. Choose an
              episode below to send it directly into the persistent scroll player.
            </p>
          </div>
          <CompletePlaylist episodes={feed.episodes} />
        </section>

        <section className="newsletter-section">
          <div>
            <p className="eyebrow">Continue the Inquiry</p>
            <h2>Join the Philosophical Circle</h2>
            <p>
              Receive new conversations, essays, research notes, recommended books, guest updates, and additions to the
              Philosophical Minds archive.
            </p>
          </div>
          <NewsletterForm />
          <div className="social-strip">
            <a href="https://www.youtube.com/@philosophicalmindspodcast" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/philosophicalmindspodcast/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.patreon.com/philosophicalminds" target="_blank" rel="noreferrer">
              Patreon
            </a>
          </div>
          <a className="support-link" href="https://www.patreon.com/philosophicalminds" target="_blank" rel="noreferrer">
            Support the podcast on Patreon
          </a>
        </section>
      </main>
    </>
  );
}

function routeFor(title: string): string {
  const routes: Record<string, string> = {
    Episodes: "/episodes",
    "The Minds": "/guests",
    Appearances: "/appearances",
    "The Library": "/library",
    Journal: "/journal",
    "Map of Ideas": "/topics",
    "Support the Work": "https://www.patreon.com/philosophicalminds",
  };
  return routes[title] || "/";
}
