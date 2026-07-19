import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Philosophical Minds explores Western esotericism, alchemy, occult traditions, Theurgy, Neoplatonism, Gnosticism, Rosicrucian thought, and consciousness.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">The Love of Wisdom</p>
        <h1>About Philosophical Minds</h1>
        <p>
          The Philosophical Minds Podcast is a thought-provoking exploration of Western esotericism, alchemy, and occult
          traditions.
        </p>
      </section>
      <section className="route-section">
        <div className="admin-panel">
          <h2>Mission</h2>
          <p>
            Featuring conversations with leading practitioners and experts, the show delves into ancient wisdom,
            metaphysical concepts, and transformative spiritual practices. With a strong emphasis on Theurgic,
            Neoplatonic, Gnostic, and Rosicrucian traditions, the podcast also explores esoteric mystery traditions both
            past and present.
          </p>
          <p>
            Ranging from the psycho-spiritual to the material-chemical nature of existence, Philosophical Minds boldly
            inquires into the liminality of mind and matter, uncovering insights from those dedicated to exploring the
            deeper mysteries of consciousness.
          </p>
          <h2>Host and Biographical Details</h2>
          <p>
            Host photography, formal biography, guest-selection notes, and show history are prepared as editable owner
            fields. The page intentionally avoids invented credentials or unsupplied claims.
          </p>
          <div className="social-strip social-strip--inline">
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
        </div>
      </section>
    </main>
  );
}
