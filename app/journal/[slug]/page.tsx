import { MarkdownArticle } from "@/components/MarkdownArticle";
import { SiteHeader } from "@/components/SiteHeader";
import { getJournalArticle, journalArticles } from "@/lib/journal";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    return {
      title: "Journal Article",
      description: "A Philosophical Minds journal article.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) notFound();

  return (
    <main>
      <section className="page-hero journal-article-hero">
        <SiteHeader />
        <p className="eyebrow">{article.eyebrow}</p>
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
        <div className="hero__actions">
          <Link className="button" href="/journal">
            Back to Journal
          </Link>
          <span className="button button--quiet journal-read-time">{article.readTime}</span>
        </div>
      </section>

      <section className="journal-article-section">
        <article className="journal-article">
          <figure className="journal-article__image">
            <img src={article.image} alt={article.imageAlt} />
          </figure>
          <p className="journal-article__dek">{article.excerpt}</p>
          <MarkdownArticle content={article.content} />
        </article>
      </section>
    </main>
  );
}
