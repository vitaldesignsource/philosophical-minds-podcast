import { alchemyShelf } from "./alchemy";
import { gnosticismShelf } from "./gnosticism";
import { hermeticismShelf } from "./hermeticism";
import { kabbalahShelf } from "./kabbalah";
import { neoplatonismShelf } from "./neoplatonism";
import { sacredArchitectureShelf } from "./sacredArchitecture";
import type { PlannedShelf, Shelf } from "./library";

/** Shelves with a written reference entry, in reading order. */
export const shelves: Shelf[] = [
  hermeticismShelf,
  neoplatonismShelf,
  alchemyShelf,
  kabbalahShelf,
  sacredArchitectureShelf,
  gnosticismShelf,
];

/** Shelves the Library announces but has not written yet. */
export const plannedShelves: PlannedShelf[] = [];

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
