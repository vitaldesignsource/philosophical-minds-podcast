"use client";

import type { PodcastEpisode } from "@/lib/rss";

type Props = {
  episode: PodcastEpisode;
  variant?: "primary" | "small" | "icon";
  label?: string;
};

export function PlayEpisodeButton({ episode, variant = "primary", label = "Play" }: Props) {
  function playEpisode() {
    window.dispatchEvent(
      new CustomEvent("philosophicalminds:play", {
        detail: episode,
      }),
    );
  }

  return (
    <button className={`play-button play-button--${variant}`} type="button" onClick={playEpisode}>
      <span aria-hidden="true">▶</span>
      <span>{label}</span>
    </button>
  );
}
