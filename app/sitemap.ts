import { journalArticles } from "@/lib/journal";
import { shelves } from "@/lib/shelves";
import { coreTopics, topicSlug } from "@/lib/topics";
import { guestProfiles } from "@/lib/guests";
import { getPodcastFeed } from "@/lib/rss";
import type { MetadataRoute } from "next";

const baseUrl = "https://philosophicalmindspodcast.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const feed = await getPodcastFeed(120);
  const staticRoutes = [
    "",
    "/episodes",
    "/guests",
    "/topics",
    "/projects",
    "/appearances",
    "/library",
    "/journal",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const episodeRoutes = feed.episodes.map((episode) => ({
    url: `${baseUrl}/episodes/${episode.slug}`,
    lastModified: episode.publishedAt ? new Date(episode.publishedAt) : new Date(),
  }));

  const journalRoutes = journalArticles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
  }));

  const guestRoutes = guestProfiles.map((profile) => ({
    url: `${baseUrl}/guests/${profile.slug}`,
    lastModified: new Date(),
  }));

  const topicRoutes = coreTopics.map((topic) => ({
    url: `${baseUrl}/topics/${topicSlug(topic.title)}`,
    lastModified: new Date(),
  }));

  const shelfRoutes = [
    ...shelves.map((shelf) => ({
      url: `${baseUrl}/library/${shelf.slug}`,
      lastModified: new Date(),
    })),
    { url: `${baseUrl}/library/recommended-books`, lastModified: new Date() },
  ];

  return [
    ...staticRoutes,
    ...episodeRoutes,
    ...journalRoutes,
    ...guestRoutes,
    ...topicRoutes,
    ...shelfRoutes,
  ];
}
