import { SiteHeader } from "@/components/SiteHeader";
import { journalArticles } from "@/lib/journal";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays, episode companions, reading lists, and philosophical studies.",
};

export default function JournalPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Premium editorial archive</p>
        <h1>Journal</h1>
        <p>
          Essays, research articles, episode companions, reading lists, guest contributions, definitions, announcements,
          and historical investigations.
        </p>
      </section>
      <section className="route-section journal-index-section">
        <div className="route-grid journal-grid">
          {journalArticles.map((article) => (
            <Link className="route-card journal-card" href={`/journal/${article.slug}`} key={article.slug}>
              <div className="journal-card__image">
                <img src={article.image} alt={article.imageAlt} />
              </div>
              <div className="journal-card__body">
                <p className="eyebrow">{article.eyebrow}</p>
                <h3>{article.title}</h3>
                <p className="journal-card__subtitle">{article.subtitle}</p>
                <p>{article.excerpt}</p>
                <div className="meta-line journal-card__meta">
                  <span>{article.readTime}</span>
                  <span>Read article</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
