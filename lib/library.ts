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

/**
 * A distinct strand within a tradition — a regional lineage, a school, or a
 * method pursued for its own ends. Used where a shelf covers something plural
 * enough that one narrative would misrepresent it.
 */
export type ShelfBranch = {
  title: string;
  /** Region and period, or whatever situates the strand. */
  meta: string;
  description: string;
  /**
   * When a branch carries its own page, it needs a slug and enough substance
   * to deserve one. A branch with a slug but no overview would be a thin page,
   * so the renderer requires both.
   */
  slug?: string;
  summary?: string;
  overview?: string[];
  /** What distinguishes this strand in practice. */
  markers?: { heading: ShelfHeading; entries: ShelfPrinciple[] };
  texts?: { heading: ShelfHeading; entries: ShelfText[] };
  reading?: { heading: ShelfHeading; entries: ShelfReading[] };
};

/** A branch that has everything its own page needs. */
export type ShelfBranchPage = ShelfBranch &
  Required<Pick<ShelfBranch, "slug" | "summary" | "overview" | "markers" | "texts" | "reading">>;

export function hasOwnPage(branch: ShelfBranch): branch is ShelfBranchPage {
  return Boolean(branch.slug && branch.overview && branch.markers && branch.texts && branch.reading);
}

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
  /** Optional. The distinct strands the shelf covers, where there is more than one. */
  branches?: { heading: ShelfHeading; entries: ShelfBranch[] };
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
