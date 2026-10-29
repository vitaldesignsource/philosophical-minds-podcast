import type { Metadata } from "next";

export const SITE_URL = "https://philosophicalmindspodcast.com";
export const SITE_NAME = "Philosophical Minds";
export const SITE_TITLE = "Philosophical Minds Podcast";
export const AUTHOR_NAME = "Sky Mathis";
export const DEFAULT_OG_IMAGE = "/og.jpg";
export const FEED_PATH = "/rss";

/** Absolute URL for a site-relative path. Every canonical and schema id uses this. */
export function absolute(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path, used for the canonical URL and the OpenGraph url. */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Metadata for a page, with the canonical URL, OpenGraph and Twitter card kept
 * in step. Pages that set metadata by hand tend to drift; routing it through
 * one builder means a page cannot acquire a title without also acquiring a
 * canonical and a social card.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  const url = absolute(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      // Next replaces `alternates` wholesale rather than merging it with the
      // layout's, so feed autodiscovery has to be repeated on every page or it
      // is lost wherever a page sets its own canonical.
      types: { "application/rss+xml": [{ url: FEED_PATH, title: SITE_TITLE }] },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [absolute(image)],
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute(image)],
    },
  };
}

type Thing = Record<string, unknown>;

/** The show itself, referenced by id from every episode. */
export function podcastSeriesSchema(): Thing {
  return {
    "@type": "PodcastSeries",
    "@id": `${SITE_URL}/#podcast`,
    name: SITE_TITLE,
    url: SITE_URL,
    description:
      "Long-form conversations exploring philosophy, metaphysics, consciousness, religion, alchemy, hidden history, and the architecture of human thought.",
    webFeed: absolute(FEED_PATH),
    image: absolute(DEFAULT_OG_IMAGE),
    author: { "@type": "Person", name: AUTHOR_NAME },
  };
}

export function websiteSchema(): Thing {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_TITLE,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#podcast` },
  };
}

export function podcastEpisodeSchema(episode: {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  audioUrl?: string;
  artwork?: string;
  duration?: string;
}): Thing {
  return {
    "@type": "PodcastEpisode",
    "@id": absolute(`/episodes/${episode.slug}`),
    url: absolute(`/episodes/${episode.slug}`),
    name: episode.title,
    description: episode.excerpt,
    ...(episode.publishedAt ? { datePublished: episode.publishedAt } : {}),
    ...(episode.artwork ? { image: episode.artwork } : {}),
    partOfSeries: { "@id": `${SITE_URL}/#podcast` },
    ...(episode.audioUrl
      ? { associatedMedia: { "@type": "MediaObject", contentUrl: episode.audioUrl } }
      : {}),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
}): Thing {
  return {
    "@type": "Article",
    "@id": absolute(article.path),
    headline: article.title,
    description: article.description,
    url: absolute(article.path),
    ...(article.image ? { image: absolute(article.image) } : {}),
    ...(article.datePublished ? { datePublished: article.datePublished } : {}),
    author: { "@type": "Person", name: AUTHOR_NAME },
    publisher: { "@id": `${SITE_URL}/#podcast` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function personSchema(person: { name: string; description: string; path: string }): Thing {
  return {
    "@type": "Person",
    "@id": absolute(person.path),
    name: person.name,
    description: person.description,
    url: absolute(person.path),
  };
}

/** Breadcrumbs for a nested page. Pass the trail without the site root. */
export function breadcrumbSchema(trail: { name: string; path: string }[]): Thing {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

/** Wrap one or more schema objects into a single @graph document. */
export function jsonLdGraph(...things: Thing[]) {
  return { "@context": "https://schema.org", "@graph": things };
}
