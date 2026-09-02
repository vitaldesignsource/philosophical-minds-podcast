import { SiteHeader } from "@/components/SiteHeader";
import {
  hermeticEras,
  hermeticGlossary,
  hermeticPrinciples,
  hermeticReading,
  hermeticRelated,
  hermeticTexts,
  hermeticismFacts,
  hermeticismOverview,
  hermeticismSummary,
  kybalionNote,
} from "@/lib/hermeticism";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Library",
  description: "A philosophical library for thinkers, traditions, symbols, books, and systems.",
};

const shelves: { title: string; description: string; href?: string; status: string }[] = [
  {
    title: "Hermeticism",
    description: "Texts, principles, correspondences, and related conversations.",
    href: "#hermeticism",
    status: "Open shelf",
  },
  {
    title: "Neoplatonism",
    description: "The One, intellect, soul, theurgy, ascent, and late antique philosophy.",
    status: "In preparation",
  },
  {
    title: "Alchemy",
    description: "Operations, materials, allegories, laboratory history, and interior transformation.",
    status: "In preparation",
  },
  {
    title: "Qabalah and Kabbalah",
    description: "Symbolic structures, religious contexts, and esoteric interpretations.",
    status: "In preparation",
  },
  {
    title: "Sacred Architecture",
    description: "Temple geometry, cosmology, ritual space, and symbolic proportion.",
    status: "In preparation",
  },
  {
    title: "Recommended Books",
    description: "Reading paths linked to guests, episodes, and philosophical traditions.",
    status: "In preparation",
  },
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
          {shelves.map((shelf) =>
            shelf.href ? (
              <Link className="route-card route-card--open" href={shelf.href} key={shelf.title}>
                <p className="eyebrow">{shelf.status}</p>
                <h3>{shelf.title}</h3>
                <p>{shelf.description}</p>
              </Link>
            ) : (
              <article className="route-card" key={shelf.title}>
                <p className="eyebrow">{shelf.status}</p>
                <h3>{shelf.title}</h3>
                <p>{shelf.description}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="shelf-section" id="hermeticism">
        <div className="shelf-layout">
          <aside className="shelf-rail" aria-label="Shelf position">
            <p className="eyebrow">Reference Shelf</p>
            <strong>01</strong>
            <span>Hermeticism</span>
            <div className="shelf-rail__rule" aria-hidden="true">
              <i />
            </div>
          </aside>

          <article className="shelf-entry">
            <header className="shelf-entry__header">
              <p className="eyebrow">Thrice-Greatest</p>
              <h2>Hermeticism</h2>
              <span aria-hidden="true" />
            </header>

            <p className="shelf-entry__summary">{hermeticismSummary}</p>

            <dl className="shelf-facts">
              {hermeticismFacts.map((fact) => (
                <div className="shelf-facts__item" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="shelf-prose">
              {hermeticismOverview.map((paragraph, index) => (
                <p className={index === 0 ? "shelf-prose__lead" : undefined} key={paragraph.slice(0, 48)}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Primary Sources</p>
                <h3>The Core Texts</h3>
              </div>
              <div className="shelf-texts">
                {hermeticTexts.map((text) => (
                  <article className="shelf-text" key={text.title}>
                    <p className="eyebrow">{text.meta}</p>
                    <h4>{text.title}</h4>
                    <p>{text.description}</p>
                  </article>
                ))}
              </div>
              <aside className="shelf-caution">
                <p className="eyebrow">A Necessary Caution</p>
                <p>{kybalionNote}</p>
              </aside>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Doctrine</p>
                <h3>Central Ideas</h3>
              </div>
              <div className="shelf-principles">
                {hermeticPrinciples.map((principle) => (
                  <article className="shelf-principle" key={principle.term}>
                    <p className="shelf-principle__term">{principle.term}</p>
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Transmission</p>
                <h3>The Long Descent</h3>
              </div>
              <ol className="shelf-timeline">
                {hermeticEras.map((era) => (
                  <li className="shelf-timeline__item" key={era.title}>
                    <p className="shelf-timeline__period">{era.period}</p>
                    <div>
                      <h4>{era.title}</h4>
                      <p>{era.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Where to Start</p>
                <h3>A Reading Path</h3>
              </div>
              <ul className="shelf-reading">
                {hermeticReading.map((entry) => (
                  <li className="shelf-reading__item" key={`${entry.title}-${entry.author}`}>
                    <p className="shelf-reading__stage">{entry.stage}</p>
                    <div>
                      <h4>
                        <em>{entry.title}</em>
                      </h4>
                      <p className="shelf-reading__author">{entry.author}</p>
                      <p>{entry.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Vocabulary</p>
                <h3>Terms of the Tradition</h3>
              </div>
              <dl className="shelf-glossary">
                {hermeticGlossary.map((entry) => (
                  <div className="shelf-glossary__item" key={entry.term}>
                    <dt>{entry.term}</dt>
                    <dd>{entry.gloss}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Continue</p>
                <h3>Related on Philosophical Minds</h3>
              </div>
              <div className="shelf-links">
                {hermeticRelated.map((link) => (
                  <Link className="shelf-link" href={link.href} key={link.href}>
                    <span>{link.kind}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="center-row">
                <Link className="button" href="/episodes">
                  Browse the Episode Archive
                </Link>
                <Link className="button button--quiet" href="/topics">
                  Explore Topics
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
