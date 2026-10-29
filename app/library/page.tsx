import { SiteHeader } from "@/components/SiteHeader";
import { plannedShelves, shelves } from "@/lib/shelves";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "The Library",
  description:
    "A philosophical library for thinkers, traditions, symbols, books, and systems.",
  path: "/library",
});

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
          {shelves.map((shelf) => (
            <Link className="route-card route-card--open" href={`/library/${shelf.slug}`} key={shelf.slug}>
              <p className="eyebrow">Shelf {shelf.number}</p>
              <h2>{shelf.title}</h2>
              <p>{shelf.cardDescription}</p>
            </Link>
          ))}
          <Link className="route-card route-card--open" href="/library/recommended-books">
            <p className="eyebrow">Reading paths</p>
            <h2>Recommended Books</h2>
            <p>Every title the shelves recommend, gathered in one place with a note on each.</p>
          </Link>
          {plannedShelves.map((shelf) => (
            <article className="route-card" key={shelf.title}>
              <p className="eyebrow">In preparation</p>
              <h2>{shelf.title}</h2>
              <p>{shelf.cardDescription}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
