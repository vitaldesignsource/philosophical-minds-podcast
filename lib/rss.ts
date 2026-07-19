import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

export type PodcastEpisode = {
  id: string;
  slug: string;
  title: string;
  descriptionHtml: string;
  excerpt: string;
  publishedAt: string;
  displayDate: string;
  audioUrl: string;
  duration: string;
  episodeNumber?: string;
  seasonNumber?: string;
  author?: string;
  guest?: string;
  artwork?: string;
  categories: string[];
  explicit?: string;
  sourceUrl?: string;
};

export type PodcastFeed = {
  title: string;
  description: string;
  artwork?: string;
  sourceUrl: string;
  lastBuildDate?: string;
  episodes: PodcastEpisode[];
  error?: string;
};

const PRIMARY_RSS_URL = "https://philosophicalmindspodcast.com/rss";
const FALLBACK_RSS_URL = "https://philosophicalminds.libsyn.com/rss";

const parser = new XMLParser({
  attributeNamePrefix: "@_",
  cdataPropName: "#cdata",
  ignoreAttributes: false,
  parseAttributeValue: false,
  parseTagValue: false,
  removeNSPrefix: false,
  textNodeName: "#text",
  trimValues: true,
});

const allowedTags = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
];

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags,
  allowedAttributes: {
    a: ["href", "name", "target", "rel"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", {
      rel: "noopener noreferrer",
      target: "_blank",
    }),
  },
};

export async function getPodcastFeed(limit?: number): Promise<PodcastFeed> {
  const urls = [PRIMARY_RSS_URL, FALLBACK_RSS_URL];
  const errors: string[] = [];

  for (const url of urls) {
    try {
      const feed = await fetchAndParseFeed(url);
      return {
        ...feed,
        episodes: typeof limit === "number" ? feed.episodes.slice(0, limit) : feed.episodes,
      };
    } catch (error) {
      errors.push(`${url}: ${error instanceof Error ? error.message : "unknown error"}`);
    }
  }

  return {
    title: "Philosophical Minds",
    description:
      "Long-form conversations exploring philosophy, metaphysics, consciousness, religion, alchemy, hidden history, and the architecture of human thought.",
    artwork: "/philosophical-minds-hero.png",
    sourceUrl: PRIMARY_RSS_URL,
    episodes: [],
    error: errors.join(" | "),
  };
}

async function fetchAndParseFeed(url: string): Promise<PodcastFeed> {
  const response = await fetch(url, {
    cache: "force-cache",
    headers: {
      accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
      "user-agent": "PhilosophicalMindsWebsite/1.0 (+https://philosophicalmindspodcast.com)",
    },
    next: { revalidate: 60 * 30 },
  });

  if (!response.ok) {
    throw new Error(`RSS returned ${response.status}`);
  }

  const xml = await response.text();
  if (!xml.includes("<rss") && !xml.includes("<feed")) {
    throw new Error("response was not RSS");
  }

  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel ?? parsed?.feed;
  if (!channel) {
    throw new Error("RSS channel missing");
  }

  const channelArtwork = firstText(channel.image?.url) || getImageUrl(channel["itunes:image"]);
  const items = arrayify(channel.item ?? channel.entry);
  const episodes = items
    .map((item, index) => normalizeEpisode(item, channelArtwork, index))
    .filter((episode): episode is PodcastEpisode => Boolean(episode?.title));

  return {
    title: firstText(channel.title) || "Philosophical Minds",
    description:
      toPlainText(firstText(channel.description) || firstText(channel["itunes:summary"])) ||
      "A living archive of philosophical conversations.",
    artwork: channelArtwork || "/philosophical-minds-hero.png",
    sourceUrl: url,
    lastBuildDate: firstText(channel.lastBuildDate) || firstText(channel.pubDate),
    episodes,
  };
}

function normalizeEpisode(
  item: Record<string, unknown>,
  channelArtwork: string | undefined,
  index: number,
): PodcastEpisode | undefined {
  const title = firstText(item.title);
  if (!title) return undefined;

  const rawDescription =
    firstText(item["content:encoded"]) ||
    firstText(item.description) ||
    firstText(item["itunes:summary"]);
  const descriptionHtml = sanitizeDescription(rawDescription);
  const publishedAt = firstText(item.pubDate) || firstText(item.published) || "";
  const episodeNumber = firstText(item["itunes:episode"]) || detectEpisodeNumber(title);
  const seasonNumber = firstText(item["itunes:season"]);
  const author = firstText(item["itunes:author"]) || firstText(item.author);
  const guest = detectGuest(title, rawDescription);
  const artwork = getImageUrl(item["itunes:image"]) || getImageUrl(item["media:thumbnail"]) || channelArtwork;
  const audioUrl = getAudioUrl(item.enclosure) || firstText(item.link);
  const categories = normalizeCategories(item.category);

  return {
    id: firstText(item.guid) || audioUrl || `${title}-${index}`,
    slug: slugify(`${episodeNumber ? `${episodeNumber}-` : ""}${title}`),
    title,
    descriptionHtml,
    excerpt: makeExcerpt(rawDescription),
    publishedAt,
    displayDate: formatDate(publishedAt),
    audioUrl,
    duration: firstText(item["itunes:duration"]) || "",
    episodeNumber,
    seasonNumber,
    author,
    guest,
    artwork: artwork || "/philosophical-minds-hero.png",
    categories,
    explicit: firstText(item["itunes:explicit"]),
    sourceUrl: firstText(item.link),
  };
}

function sanitizeDescription(value: string): string {
  if (!value) return "";
  const cleaned = sanitizeHtml(value, sanitizeOptions);
  return cleaned || `<p>${escapeHtml(toPlainText(value))}</p>`;
}

function makeExcerpt(value: string): string {
  const text = toPlainText(value).replace(/\s+/g, " ").trim();
  if (!text) {
    return "Episode notes will appear here when the RSS feed provides them.";
  }
  return text.length > 220 ? `${text.slice(0, 217).trim()}...` : text;
}

function firstText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (Array.isArray(value)) return firstText(value[0]);
  if (typeof value === "object") {
    const object = value as Record<string, unknown>;
    return firstText(object["#cdata"] ?? object["#text"] ?? object.value ?? object.href);
  }
  return "";
}

function getImageUrl(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return getImageUrl(value[0]);
  if (typeof value === "object") {
    const object = value as Record<string, unknown>;
    return firstText(object["@_href"] ?? object["@_url"] ?? object.url);
  }
  return undefined;
}

function getAudioUrl(value: unknown): string {
  if (value == null) return "";
  if (Array.isArray(value)) return getAudioUrl(value[0]);
  if (typeof value === "object") {
    const object = value as Record<string, unknown>;
    return firstText(object["@_url"] ?? object.url);
  }
  return "";
}

function normalizeCategories(value: unknown): string[] {
  return arrayify(value)
    .map((entry) => {
      if (typeof entry === "string") return entry;
      if (entry && typeof entry === "object") {
        const object = entry as Record<string, unknown>;
        return firstText(object["@_text"] ?? object["#text"] ?? object["#cdata"]);
      }
      return "";
    })
    .filter(Boolean)
    .slice(0, 6);
}

function detectEpisodeNumber(title: string): string | undefined {
  const match = title.match(/(?:episode|ep\.?|#)\s*(\d+)/i);
  return match?.[1];
}

function detectGuest(title: string, description: string): string | undefined {
  const titleMatch = title.match(/\b(?:with|w\/|ft\.?|featuring)\s+([^:|–—-]{2,80})/i);
  if (titleMatch?.[1]) return titleMatch[1].trim();
  const descriptionMatch = description.match(/\b(?:guest|with)\s*:\s*([^<\n\r]{2,80})/i);
  return descriptionMatch?.[1]?.trim();
}

function formatDate(value: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90);
}

function toPlainText(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, "\"")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function arrayify<T>(value: T | T[] | undefined): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}
