import { SiteHeader } from "@/components/SiteHeader";
import { findShelf, shelves } from "@/lib/shelves";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return shelves.map((shelf) => ({ slug: shelf.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const shelf = findShelf(slug);

  if (!shelf) {
    return {
      title: "Reference Shelf",
      description: "A reference shelf in the Philosophical Minds library.",
    };
  }

  return {
    title: shelf.title,
    description: shelf.summary,
  };
}

export default async function ShelfPage({ params }: Props) {
  const { slug } = await params;
  const shelf = findShelf(slug);

  if (!shelf) notFound();

  return (
    <main>
      <section className="page-hero shelf-hero">
        <SiteHeader />
        <p className="eyebrow">{shelf.eyebrow}</p>
        <h1>{shelf.title}</h1>
        <p className="shelf-hero__summary">{shelf.summary}</p>
        <div className="hero__actions">
          <Link className="button" href="/library">
            Back to the Library
          </Link>
        </div>
      </section>

      <section className="shelf-section">
        <div className="shelf-layout">
          <aside className="shelf-rail" aria-label="Shelf position">
            <p className="eyebrow">Reference Shelf</p>
            <strong>{shelf.number}</strong>
            <span>{shelf.title}</span>
            <div className="shelf-rail__rule" aria-hidden="true">
              <i />
            </div>
          </aside>

          <article className="shelf-entry">
            <dl className="shelf-facts">
              {shelf.facts.map((fact) => (
                <div className="shelf-facts__item" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="shelf-prose">
              {shelf.overview.map((paragraph, index) => (
                <p className={index === 0 ? "shelf-prose__lead" : undefined} key={paragraph.slice(0, 48)}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{shelf.texts.heading.eyebrow}</p>
                <h2>{shelf.texts.heading.title}</h2>
              </div>
              <div className="shelf-texts">
                {shelf.texts.entries.map((text) => (
                  <article className="shelf-text" key={text.title}>
                    <p className="eyebrow">{text.meta}</p>
                    <h3>{text.title}</h3>
                    <p>{text.description}</p>
                  </article>
                ))}
              </div>
              {shelf.caution && (
                <aside className="shelf-caution">
                  <p className="eyebrow">{shelf.caution.eyebrow}</p>
                  <p>{shelf.caution.body}</p>
                </aside>
              )}
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{shelf.principles.heading.eyebrow}</p>
                <h2>{shelf.principles.heading.title}</h2>
              </div>
              <div className="shelf-principles">
                {shelf.principles.entries.map((principle) => (
                  <article className="shelf-principle" key={principle.term}>
                    <p className="shelf-principle__term">{principle.term}</p>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{shelf.eras.heading.eyebrow}</p>
                <h2>{shelf.eras.heading.title}</h2>
              </div>
              <ol className="shelf-timeline">
                {shelf.eras.entries.map((era) => (
                  <li className="shelf-timeline__item" key={era.title}>
                    <p className="shelf-timeline__period">{era.period}</p>
                    <div>
                      <h3>{era.title}</h3>
                      <p>{era.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{shelf.reading.heading.eyebrow}</p>
                <h2>{shelf.reading.heading.title}</h2>
              </div>
              <ul className="shelf-reading">
                {shelf.reading.entries.map((entry) => (
                  <li className="shelf-reading__item" key={`${entry.title}-${entry.author}`}>
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

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{shelf.glossary.heading.eyebrow}</p>
                <h2>{shelf.glossary.heading.title}</h2>
              </div>
              <dl className="shelf-glossary">
                {shelf.glossary.entries.map((entry) => (
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
                <h2>Related on Philosophical Minds</h2>
              </div>
              <div className="shelf-links">
                {shelf.related.map((link) => (
                  <Link className="shelf-link" href={link.href} key={link.href}>
                    <span>{link.kind}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="center-row">
                <Link className="button" href="/library">
                  Back to the Library
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
