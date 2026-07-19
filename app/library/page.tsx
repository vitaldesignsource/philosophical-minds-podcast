import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Library",
  description: "A philosophical library for thinkers, traditions, symbols, books, and systems.",
};

const shelves = [
  ["Hermeticism", "Texts, principles, correspondences, and related conversations."],
  ["Neoplatonism", "The One, intellect, soul, theurgy, ascent, and late antique philosophy."],
  ["Alchemy", "Operations, materials, allegories, laboratory history, and interior transformation."],
  ["Qabalah and Kabbalah", "Symbolic structures, religious contexts, and esoteric interpretations."],
  ["Sacred Architecture", "Temple geometry, cosmology, ritual space, and symbolic proportion."],
  ["Recommended Books", "Reading paths linked to guests, episodes, and philosophical traditions."],
];

export default function LibraryPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Enter the Library</p>
        <h1>The Library</h1>
        <p>
          A taxonomy-driven knowledge section for philosophers, esotericists, alchemists, traditions, metaphysical systems,
          gods and mythic figures, symbols, and recommended reading.
        </p>
      </section>
      <section className="route-section">
        <div className="route-grid">
          {shelves.map(([title, description]) => (
            <article className="route-card" key={title}>
              <p className="eyebrow">Reference shelf</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
