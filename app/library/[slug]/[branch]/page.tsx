import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { articleSchema, breadcrumbSchema, jsonLdGraph, pageMetadata } from "@/lib/seo";
import { branchPages, findBranch } from "@/lib/shelves";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string; branch: string }>;
};

export function generateStaticParams() {
  return branchPages().map(({ shelf, branch }) => ({ slug: shelf.slug, branch: branch.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, branch } = await params;
  const found = findBranch(slug, branch);

  if (!found) {
    return { title: "Tradition", description: "A tradition within a Philosophical Minds reference shelf." };
  }

  return pageMetadata({
    title: found.branch.title,
    description: found.branch.summary,
    path: `/library/${slug}/${branch}`,
    image: "/og-shelf.jpg",
    type: "article",
  });
}

export default async function BranchPage({ params }: Props) {
  const { slug, branch } = await params;
  const found = findBranch(slug, branch);

  if (!found) notFound();
  const { shelf, branch: entry } = found;

  const schema = jsonLdGraph(
    articleSchema({
      title: entry.title,
      description: entry.summary,
      path: `/library/${shelf.slug}/${entry.slug}`,
    }),
    breadcrumbSchema([
      { name: "The Library", path: "/library" },
      { name: shelf.title, path: `/library/${shelf.slug}` },
      { name: entry.title, path: `/library/${shelf.slug}/${entry.slug}` },
    ]),
  );

  return (
    <main>
      <JsonLd data={schema} />

      <section
        className="page-hero shelf-hero"
        style={shelf.heroImage ? ({ "--hero-image": `url('${shelf.heroImage}')` } as React.CSSProperties) : undefined}
      >
        <SiteHeader />
        <p className="eyebrow">{entry.meta}</p>
        <h1>{entry.title}</h1>
        <p className="shelf-hero__summary">{entry.summary}</p>
        <div className="hero__actions">
          <Link className="button" href={`/library/${shelf.slug}`}>
            Back to {shelf.title}
          </Link>
        </div>
      </section>

      <section className="shelf-section">
        <div className="shelf-layout">
          <aside className="shelf-rail" aria-label="Position in the Library">
            <p className="eyebrow">Shelf {shelf.number}</p>
            <strong>{shelf.title}</strong>
            <span>{entry.title}</span>
            <div className="shelf-rail__rule" aria-hidden="true">
              <i />
            </div>
          </aside>

          <article className="shelf-entry">
            <div className="shelf-prose">
              {entry.overview.map((paragraph, index) => (
                <p className={index === 0 ? "shelf-prose__lead" : undefined} key={paragraph.slice(0, 48)}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{entry.markers.heading.eyebrow}</p>
                <h2>{entry.markers.heading.title}</h2>
              </div>
              <div className="shelf-principles">
                {entry.markers.entries.map((marker) => (
                  <article className="shelf-principle" key={marker.term}>
                    <p className="shelf-principle__term">{marker.term}</p>
                    <h3>{marker.title}</h3>
                    <p>{marker.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{entry.texts.heading.eyebrow}</p>
                <h2>{entry.texts.heading.title}</h2>
              </div>
              <div className="shelf-texts">
                {entry.texts.entries.map((text) => (
                  <article className="shelf-text" key={text.title}>
                    <p className="eyebrow">{text.meta}</p>
                    <h3>{text.title}</h3>
                    <p>{text.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">{entry.reading.heading.eyebrow}</p>
                <h2>{entry.reading.heading.title}</h2>
              </div>
              <ul className="shelf-reading">
                {entry.reading.entries.map((read) => (
                  <li className="shelf-reading__item" key={`${read.title}-${read.author}`}>
                    <p className="shelf-reading__stage">{read.stage}</p>
                    <div>
                      <h3>
                        <em>{read.title}</em>
                      </h3>
                      <p className="shelf-reading__author">{read.author}</p>
                      <p>{read.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shelf-block">
              <div className="shelf-block__heading">
                <p className="eyebrow">Continue</p>
                <h2>The Other Traditions</h2>
              </div>
              <div className="shelf-links">
                {(shelf.branches?.entries ?? [])
                  .filter((other) => other.slug && other.slug !== entry.slug)
                  .map((other) => (
                    <Link className="shelf-link" href={`/library/${shelf.slug}/${other.slug}`} key={other.slug}>
                      <span>{other.meta.split("·")[0].trim()}</span>
                      {other.title}
                    </Link>
                  ))}
              </div>
              <div className="center-row">
                <Link className="button" href={`/library/${shelf.slug}`}>
                  Back to {shelf.title}
                </Link>
                <Link className="button button--quiet" href="/library">
                  The Library
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
