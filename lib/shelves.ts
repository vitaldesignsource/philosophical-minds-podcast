import { alchemiesShelf } from "./alchemies";
import { daoismShelf } from "./daoism";
import { gnosticismShelf } from "./gnosticism";
import { hermeticismShelf } from "./hermeticism";
import { kabbalahShelf } from "./kabbalah";
import { neoplatonismShelf } from "./neoplatonism";
import { philosophiesShelf } from "./philosophies";
import { sacredArchitectureShelf } from "./sacredArchitecture";
import type { PlannedShelf, Shelf } from "./library";

/** Shelves with a written reference entry, in reading order. */
export const shelves: Shelf[] = [
  hermeticismShelf,
  neoplatonismShelf,
  alchemiesShelf,
  kabbalahShelf,
  sacredArchitectureShelf,
  philosophiesShelf,
  daoismShelf,
  gnosticismShelf,
];

/** Shelves the Library announces but has not written yet. */
export const plannedShelves: PlannedShelf[] = [
  {
    title: "Theurgy and Ritual",
    cardDescription:
      "Divine symbols, invocation, the grimoire traditions, and ritual as a means of knowledge rather than a substitute for it.",
  },
  {
    title: "Tantra and the Dharmic Systems",
    cardDescription:
      "The darśanas, Buddhist philosophy, Kashmir Śaivism, and the tantric body as an instrument of liberation.",
  },
];

export function findShelf(slug: string) {
  return shelves.find((shelf) => shelf.slug === slug);
}

/** Every reading-path entry across all shelves, grouped by shelf. */
export function readingByShelf() {
  return shelves.map((shelf) => ({ shelf, entries: shelf.reading.entries }));
}

/** How many books the Library currently recommends. */
export function totalRecommendedBooks() {
  return shelves.reduce((count, shelf) => count + shelf.reading.entries.length, 0);
}
