import { alchemyShelf } from "./alchemy";
import { hermeticismShelf } from "./hermeticism";
import { kabbalahShelf } from "./kabbalah";
import { neoplatonismShelf } from "./neoplatonism";
import type { PlannedShelf, Shelf } from "./library";

/** Shelves with a written reference entry, in reading order. */
export const shelves: Shelf[] = [hermeticismShelf, neoplatonismShelf, alchemyShelf, kabbalahShelf];

/** Shelves the Library announces but has not written yet. */
export const plannedShelves: PlannedShelf[] = [
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
