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

/** One regional or cultural branch of a tradition that exists in several. */
export type ShelfTradition = {
  /** Where it was practised: "China", "The Latin West", "Islamicate world". */
  region: string;
  /** What that branch is called in its own setting. */
  name: string;
  /** Rough active span, for orientation rather than precision. */
  span: string;
  description: string;
  /** Signature terms, operations or texts, shown as a short list. */
  markers: string[];
};

/** A named person a shelf turns on, where the tradition is carried by figures. */
export type ShelfFigure = {
  name: string;
  dates: string;
  /** The school or setting they belong to. */
  school: string;
  description: string;
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
  facts: ShelfFact[];
  overview: string[];
  /** Present on shelves whose tradition exists in several cultures at once. */
  traditions?: { heading: ShelfHeading; entries: ShelfTradition[] };
  texts: { heading: ShelfHeading; entries: ShelfText[] };
  caution?: ShelfCaution;
  principles: { heading: ShelfHeading; entries: ShelfPrinciple[] };
  /** Present on shelves carried by named thinkers rather than anonymous practice. */
  figures?: { heading: ShelfHeading; entries: ShelfFigure[] };
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
