// The Library is a set of reference shelves. Each shelf is one tradition,
// described by the same shape so they render through a single page component
// and read consistently from one to the next.

export type ShelfFact = {
  label: string;
  value: string;
};

export type ShelfText = {
  title: string;
  meta: string;
  description: string;
};

export type ShelfPrinciple = {
  term: string;
  title: string;
  description: string;
};

export type ShelfEra = {
  period: string;
  title: string;
  description: string;
};

export type ShelfReading = {
  stage: string;
  title: string;
  author: string;
  note: string;
};

export type ShelfGlossaryEntry = {
  term: string;
  gloss: string;
};

export type ShelfLink = {
  href: string;
  label: string;
  kind: string;
};

/** A caveat worth stating plainly, so a reading path does not mislead. */
export type ShelfCaution = {
  eyebrow: string;
  body: string;
};

/** Section headings vary by tradition: Hermeticism descends, alchemy operates. */
export type ShelfHeading = {
  eyebrow: string;
  title: string;
};

export type Shelf = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  /** One line for the shelf's card on the Library index. */
  cardDescription: string;
  /** One sentence under the shelf title, and the page's meta description. */
  summary: string;
  /** Hero artwork for the shelf page. Falls back to the site hero when absent. */
  heroImage?: string;
  /** Describes the artwork. Only used where the image is content, not decoration. */
  heroImageAlt?: string;
  facts: ShelfFact[];
  overview: string[];
  texts: { heading: ShelfHeading; entries: ShelfText[] };
  caution?: ShelfCaution;
  principles: { heading: ShelfHeading; entries: ShelfPrinciple[] };
  eras: { heading: ShelfHeading; entries: ShelfEra[] };
  reading: { heading: ShelfHeading; entries: ShelfReading[] };
  glossary: { heading: ShelfHeading; entries: ShelfGlossaryEntry[] };
  related: ShelfLink[];
};

/** A shelf that is planned but not yet written. */
export type PlannedShelf = {
  title: string;
  cardDescription: string;
};
