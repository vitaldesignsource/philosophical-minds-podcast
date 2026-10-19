import { hermeticismShelf } from "./hermeticism";
import type { PlannedShelf, Shelf } from "./library";

/** Shelves with a written reference entry, in reading order. */
export const shelves: Shelf[] = [hermeticismShelf];

/** Shelves the Library announces but has not written yet. */
export const plannedShelves: PlannedShelf[] = [
  {
    title: "Neoplatonism",
    cardDescription: "The One, intellect, soul, theurgy, ascent, and late antique philosophy.",
  },
  {
    title: "Alchemy",
    cardDescription: "Operations, materials, allegories, laboratory history, and interior transformation.",
  },
  {
    title: "Qabalah and Kabbalah",
    cardDescription: "Symbolic structures, religious contexts, and esoteric interpretations.",
  },
  {
    title: "Sacred Architecture",
    cardDescription: "Temple geometry, cosmology, ritual space, and symbolic proportion.",
  },
  {
    title: "Recommended Books",
    cardDescription: "Reading paths linked to guests, episodes, and philosophical traditions.",
  },
];

export function findShelf(slug: string) {
  return shelves.find((shelf) => shelf.slug === slug);
}
