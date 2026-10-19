import { SiteHeader } from "@/components/SiteHeader";
import { readingByShelf, totalRecommendedBooks } from "@/lib/shelves";
import type { Metadata } from "next";
import Link from "next/link";

const total = totalRecommendedBooks();

export const metadata: Metadata = {
  title: "Recommended Books",
  description: `Every book the Library recommends — ${total} titles across the reference shelves, each with a note on why it earns its place.`,
};

export default function RecommendedBooksPage() {
  const groups = readingByShelf();

  return (
    <main>
      <section className="page-hero shelf-hero">
        <SiteHeader />
        <p className="eyebrow">Reading Paths</p>
        <h1>Recommended Books</h1>
        <p className="shelf-hero__summary">
          Every title the reference shelves recommend, gathered in one place. {total} books across {groups.length}{" "}
          traditions, each with a note on why it is worth your time and where in the sequence it belongs.
        </p>
        <div className="hero__actions">
          <Link className="button" href="/library">
            Back to the Library
          </Link>
        </div>
      </section>

      <section className="shelf-section">
        <div className="shelf-layout">
          <aside className="shelf-rail" aria-label="Collection size">
            <p className="eyebrow">Titles</p>
            <strong>{total}</strong>
            <span>Across {groups.length} shelves</span>
            <div className="shelf-rail__rule" aria-hidden="true">
              <i />
            </div>
          </aside>

          <article className="shelf-entry">
            {groups.map(({ shelf, entries }) => (
              <div className="shelf-block" key={shelf.slug}>
                <div className="shelf-block__heading">
                  <p className="eyebrow">Shelf {shelf.number}</p>
                  <h2>
                    <Link href={`/library/${shelf.slug}`}>{shelf.title}</Link>
                  </h2>
                </div>
                <ul className="shelf-reading">
                  {entries.map((entry) => (
                    <li className="shelf-reading__item" key={`${shelf.slug}-${entry.title}-${entry.author}`}>
                      <p className="shelf-reading__stage">{entry.stage}</p>
                      <div>
                        <h3>
                          <em>{entry.title}</em>
                        </h3>
                        <p className="shelf-reading__author">{entry.author}</p>
                        <p>{entry.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Continue</p>
                <h2>Elsewhere on Philosophical Minds</h2>
              </div>
              <div className="center-row">
                <Link className="button" href="/library">
                  Back to the Library
                </Link>
                <Link className="button button--quiet" href="/episodes">
                  Episode Archive
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
