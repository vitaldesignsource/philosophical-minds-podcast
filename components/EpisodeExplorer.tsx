"use client";

import type { PodcastEpisode } from "@/lib/rss";
import { useMemo, useState } from "react";
import { PlayEpisodeButton } from "./PlayEpisodeButton";

type Props = {
  episodes: PodcastEpisode[];
  compact?: boolean;
};

export function EpisodeExplorer({ episodes, compact = false }: Props) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");

  const topics = useMemo(() => {
    const values = new Set<string>();
    episodes.forEach((episode) => episode.categories.forEach((category) => values.add(category)));
    return Array.from(values).sort().slice(0, 24);
  }, [episodes]);

  const years = useMemo(() => {
    const values = new Set<string>();
    episodes.forEach((episode) => {
      const yearValue = episode.publishedAt ? new Date(episode.publishedAt).getFullYear() : undefined;
      if (yearValue && !Number.isNaN(yearValue)) values.add(String(yearValue));
    });
    return Array.from(values).sort((a, b) => Number(b) - Number(a));
  }, [episodes]);

  const visibleEpisodes = useMemo(() => {
    const terms = query.toLowerCase().trim();
    return episodes
      .filter((episode) => {
        const matchesQuery =
          !terms ||
          [episode.title, episode.excerpt, episode.guest, episode.author, episode.categories.join(" ")]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(terms);
        const matchesTopic = topic === "all" || episode.categories.includes(topic);
        const episodeYear = episode.publishedAt ? String(new Date(episode.publishedAt).getFullYear()) : "";
        const matchesYear = year === "all" || episodeYear === year;
        return matchesQuery && matchesTopic && matchesYear;
      })
      .sort((a, b) => {
        if (sort === "oldest") return dateValue(a.publishedAt) - dateValue(b.publishedAt);
        if (sort === "featured") return Number(Boolean(b.guest)) - Number(Boolean(a.guest));
        return dateValue(b.publishedAt) - dateValue(a.publishedAt);
      })
      .slice(0, compact ? 6 : 48);
  }, [compact, episodes, query, sort, topic, year]);

  return (
    <section className="episode-explorer" aria-label="Episode archive">
      <div className="archive-toolbar">
        <label className="search-field">
          <span>Search the archive</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Alchemy, consciousness, Neoplatonism..."
          />
        </label>
        <label>
          <span>Topic</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            <option value="all">All topics</option>
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="all">All years</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="featured">Most featured</option>
          </select>
        </label>
        <div className="segmented" aria-label="Archive view">
          <button type="button" className={view === "grid" ? "active" : ""} onClick={() => setView("grid")}>
            Grid
          </button>
          <button type="button" className={view === "list" ? "active" : ""} onClick={() => setView("list")}>
            List
          </button>
        </div>
        <button
          className="clear-button"
          type="button"
          onClick={() => {
            setQuery("");
            setTopic("all");
            setYear("all");
            setSort("newest");
          }}
        >
          Clear
        </button>
      </div>

      {visibleEpisodes.length > 0 ? (
        <div className={`episode-grid episode-grid--${view}`}>
          {visibleEpisodes.map((episode) => (
            <article className="episode-card" key={episode.id}>
              <div className="episode-card__art" style={{ backgroundImage: `url(${episode.artwork || "/philosophical-minds-hero.png"})` }} />
              <div className="episode-card__body">
                <div className="meta-line">
                  <span>{episode.displayDate || "Undated"}</span>
                  {episode.duration && <span>{episode.duration}</span>}
                  {episode.episodeNumber && <span>Episode {episode.episodeNumber}</span>}
                </div>
                <h3>{episode.title}</h3>
                {episode.guest && <p className="guest-line">{episode.guest}</p>}
                <p>{episode.excerpt}</p>
                <div className="tag-row">
                  {episode.categories.slice(0, 4).map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <div className="episode-card__actions">
                  {episode.audioUrl ? (
                    <PlayEpisodeButton episode={episode} variant="small" label="Listen" />
                  ) : (
                    <span className="muted">Audio link pending</span>
                  )}
                  <a href={`/episodes/${episode.slug}`}>Episode page</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>The archive is waiting for the feed.</h3>
          <p>
            The site keeps the catalog interface ready while the RSS endpoint is unavailable. The Libsyn playlist below remains available
            for listening.
          </p>
        </div>
      )}
    </section>
  );
}

function dateValue(value: string): number {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}
