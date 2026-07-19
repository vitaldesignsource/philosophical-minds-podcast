import type { PodcastEpisode } from "./rss";

export type CoreTopic = {
  title: string;
  description: string;
  terms: string[];
};

export const coreTopics: CoreTopic[] = [
  {
    title: "Philosophy",
    description: "Wisdom, inquiry, classical thought, ethics, metaphysics, and the act of thinking itself.",
    terms: ["philosophy", "philosophical", "wisdom", "plato", "aristotle", "socrates"],
  },
  {
    title: "Metaphysics",
    description: "Being, causality, spirit, form, matter, reality, and the structure beneath appearances.",
    terms: ["metaphysics", "metaphysical", "being", "reality", "form", "matter"],
  },
  {
    title: "Alchemy",
    description: "Laboratory, symbolic, and psycho-spiritual traditions of transformation.",
    terms: ["alchemy", "alchemical", "laboratory", "transmutation", "rosicrucian"],
  },
  {
    title: "Theurgy and Ritual",
    description: "Iamblichus, ritual intelligence, divine symbols, and Neoplatonic ascent.",
    terms: ["theurgy", "iamblichus", "ritual", "divine symbol", "neoplaton"],
  },
  {
    title: "Consciousness",
    description: "Mind, matter, liminality, perception, and the hard edges of experience.",
    terms: ["consciousness", "mind", "psyche", "perception", "liminality"],
  },
  {
    title: "Esoteric Christianity",
    description: "Mystical theology, symbolic reading, initiation, and sacred history.",
    terms: ["esoteric christianity", "christian", "gnostic", "gnosticism", "rosicrucian", "mystical theology"],
  },
  {
    title: "Hidden History",
    description: "The archives, forgotten lineages, and contested narratives behind culture.",
    terms: ["hidden history", "history", "lineage", "archive", "civilization"],
  },
  {
    title: "Religion and Mysticism",
    description: "Mystical traditions, sacred practice, religious imagination, and contemplative experience.",
    terms: ["religion", "mysticism", "mystic", "sacred", "contemplative", "tradition"],
  },
  {
    title: "Science and the Ether",
    description: "Natural philosophy, cosmology, subtle bodies, and matter in motion.",
    terms: ["ether", "science", "cosmology", "matter", "natural philosophy"],
  },
  {
    title: "Symbolism and Sacred Architecture",
    description: "Symbols, temple geometry, proportion, ritual space, and the architecture of meaning.",
    terms: ["symbol", "symbolism", "sacred architecture", "architecture", "temple", "geometry"],
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

export function topicMatches(episode: PodcastEpisode, topic: CoreTopic) {
  const haystack = `${episode.title} ${episode.excerpt} ${episode.categories.join(" ")}`.toLowerCase();
  return topic.terms.some((term) => haystack.includes(term.toLowerCase()));
}
