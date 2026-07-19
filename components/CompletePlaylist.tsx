"use client";

import type { PodcastEpisode } from "@/lib/rss";
import { useMemo, useState } from "react";
import { PlayEpisodeButton } from "./PlayEpisodeButton";

type Props = {
  episodes: PodcastEpisode[];
};

export function CompletePlaylist({ episodes }: Props) {
  const [query, setQuery] = useState("");

  const visibleEpisodes = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return episodes;

    return episodes.filter((episode) =>
      [episode.title, episode.guest, episode.author, episode.displayDate, episode.categories.join(" ")]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }, [episodes, query]);

  return (
    <div className="episode-playlist" aria-label="Complete podcast playlist">
      <header className="episode-playlist__header">
        <div>
          <span>{visibleEpisodes.length} of {episodes.length} conversations</span>
          <strong>The Listening Archive</strong>
        </div>
        <label className="episode-playlist__search">
          <span>Search the playlist</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Guest, title, or tradition..."
          />
        </label>
      </header>

      <div className="episode-playlist__list">
        {visibleEpisodes.length > 0 ? (
          visibleEpisodes.map((episode, index) => (
            <article className="episode-playlist__row" key={episode.id}>
              <span className="episode-playlist__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="episode-playlist__details">
                <h3>{episode.title}</h3>
                <p>
                  {[episode.displayDate, episode.guest, episode.duration]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <div className="episode-playlist__actions">
                {episode.audioUrl ? (
                  <PlayEpisodeButton episode={episode} variant="small" label="Play" />
                ) : (
                  <span>Audio pending</span>
                )}
                <a href={`/episodes/${episode.slug}`}>Details</a>
              </div>
            </article>
          ))
        ) : (
          <div className="episode-playlist__empty">
            <strong>No matching conversation found.</strong>
            <p>Try a guest name, subject, or tradition.</p>
          </div>
        )}
      </div>
    </div>
  );
}
