import { guestProfiles } from "./guests";
import type { PodcastEpisode } from "./rss";

export type CoreTopic = {
  title: string;
  description: string;
  terms: string[];
  /**
   * Library shelves that treat this topic as a tradition. Curated rather than
   * matched on keywords: a shelf is listed only where it genuinely covers the
   * topic, so these links stay worth following.
   */
  shelves?: string[];
  /** Hero artwork for the topic page. Falls back to the site hero when absent. */
  heroImage?: string;
};

export const coreTopics: CoreTopic[] = [
  {
    title: "Philosophy",
    heroImage: "/topic-philosophy.webp",
    description: "Wisdom, inquiry, classical thought, ethics, metaphysics, and the act of thinking itself.",
    terms: ["philosophy", "philosophical", "wisdom", "plato", "aristotle", "socrates"],
    shelves: ["neoplatonism"],
  },
  {
    title: "Metaphysics",
    heroImage: "/topic-metaphysics.webp",
    description: "Being, causality, spirit, form, matter, reality, and the structure beneath appearances.",
    terms: ["metaphysics", "metaphysical", "being", "reality", "form", "matter"],
    shelves: ["neoplatonism", "hermeticism"],
  },
  {
    title: "Hermeticism",
    heroImage: "/topic-hermeticism.webp",
    description: "Hermes Trismegistus, the Corpus Hermeticum, correspondence, and the Hermetic inheritance.",
    terms: ["hermetic", "hermeticism", "hermes", "trismegistus", "emerald tablet", "thoth", "corpus hermeticum"],
    shelves: ["hermeticism", "alchemy"],
  },
  {
    title: "Alchemy",
    heroImage: "/topic-alchemy.webp",
    description: "Laboratory, symbolic, and psycho-spiritual traditions of transformation.",
    terms: ["alchemy", "alchemical", "laboratory", "transmutation", "rosicrucian", "elixir", "spagyric", "chymistry"],
    shelves: ["alchemy", "hermeticism"],
  },
  {
    title: "Theurgy and Ritual",
    heroImage: "/topic-theurgy.webp",
    description: "Iamblichus, ritual intelligence, divine symbols, and Neoplatonic ascent.",
    terms: ["theurgy", "iamblichus", "ritual", "divine symbol", "neoplaton", "magick", "magic", "initiation", "ceremonial", "invocation", "grimoire", "mysteries"],
    shelves: ["neoplatonism", "hermeticism"],
  },
  {
    title: "Consciousness",
    heroImage: "/topic-consciousness.webp",
    description: "Mind, matter, liminality, perception, and the hard edges of experience.",
    terms: ["consciousness", "mind", "psyche", "perception", "liminality", "dream", "vision", "imagination", "soul"],
  },
  {
    title: "Esoteric Christianity",
    heroImage: "/topic-esoteric-christianity.webp",
    description: "Mystical theology, symbolic reading, initiation, and sacred history.",
    terms: ["esoteric christianity", "christian", "gnostic", "gnosticism", "rosicrucian", "mystical theology"],
    shelves: ["qabalah-and-kabbalah", "hermeticism"],
  },
  {
    title: "Hidden History",
    heroImage: "/topic-hidden-history.webp",
    description: "The archives, forgotten lineages, and contested narratives behind culture.",
    terms: ["hidden history", "history", "lineage", "archive", "civilization"],
  },
  {
    title: "Religion and Mysticism",
    heroImage: "/topic-religion-mysticism.webp",
    // Deliberately excludes "esoteric" and "tradition": almost every guest
    // summary contains them, so they matched half the archive and identified
    // nothing.
    description: "Mystical traditions, sacred practice, religious imagination, and contemplative experience.",
    terms: ["religion", "mysticism", "mystic", "sacred", "contemplative", "mystery", "mysteries", "initiation", "kabbalah", "qabalah", "gnosis"],
    shelves: ["qabalah-and-kabbalah", "neoplatonism"],
  },
  {
    title: "Science and the Ether",
    heroImage: "/topic-science-ether.webp",
    description: "Natural philosophy, cosmology, subtle bodies, and matter in motion.",
    terms: ["ether", "science", "cosmology", "matter", "natural philosophy"],
    shelves: ["alchemy"],
  },
  {
    title: "Symbolism and Sacred Architecture",
    heroImage: "/topic-symbolism.webp",
    description: "Symbols, temple geometry, proportion, ritual space, and the architecture of meaning.",
    terms: ["symbol", "symbolism", "sacred architecture", "architecture", "temple", "geometry", "myth", "mythology", "serpent", "emblem"],
    shelves: ["sacred-architecture", "hermeticism"],
  },
];

export function topicSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findTopic(slug: string) {
  return coreTopics.find((topic) => topicSlug(topic.title) === slug);
}

/**
 * Some episodes arrive from the feed with no categories and a title that is
 * only the guest's name, leaving nothing to match on. Where the site already
 * profiles that guest, their summary says what they work on, which is a fair
 * description of what the conversation covers. Only the one-line summary is
 * used; the full biography mentions enough subjects to match almost anything.
 */
function guestSummaryFor(episode: PodcastEpisode) {
  const title = episode.title.toLowerCase();
  return guestProfiles.find((profile) => title.includes(profile.name.toLowerCase()))?.summary ?? "";
}

export function topicMatches(episode: PodcastEpisode, topic: CoreTopic) {
  const haystack =
    `${episode.title} ${episode.excerpt} ${episode.categories.join(" ")} ${guestSummaryFor(episode)}`.toLowerCase();
  return topic.terms.some((term) => haystack.includes(term.toLowerCase()));
}
