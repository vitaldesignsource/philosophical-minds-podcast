export type HermeticFact = {
  label: string;
  value: string;
};

export type HermeticText = {
  title: string;
  meta: string;
  description: string;
};

export type HermeticPrinciple = {
  term: string;
  title: string;
  description: string;
};

export type HermeticEra = {
  period: string;
  title: string;
  description: string;
};

export type ReadingEntry = {
  stage: string;
  title: string;
  author: string;
  note: string;
};

export type GlossaryEntry = {
  term: string;
  gloss: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  kind: string;
};

export const hermeticismSummary =
  "The Greco-Egyptian literature attributed to Hermes Trismegistus, its central doctrines, its long transmission into the Renaissance, and where a serious reader should begin.";

export const hermeticismOverview: string[] = [
  "Hermeticism is not a church, a creed, or a single system. It is a literature: a body of Greek writings composed in Roman Egypt, largely between the first and third centuries of the common era, placed under the name of Hermes Trismegistus. The name means Hermes the Thrice-Greatest, and the figure behind it is a genuine fusion rather than a borrowing. Greek settlers in Egypt recognised their own Hermes, guide of souls and messenger of the gods, in Thoth, the Egyptian god of writing, measure, and sacred knowledge. What emerged was neither purely Greek nor purely Egyptian, but a third thing that spoke in Greek philosophical vocabulary about an older Egyptian inheritance.",
  "Most of the philosophical Hermetica take the form of teaching dialogues. Hermes instructs his son Tat, or his pupil Asclepius, or King Ammon; in the first and most famous treatise, Hermes himself is instructed by a vast presence called Poimandres, who names himself the Mind of Sovereignty. These are not treatises in the modern academic sense. They are records of instruction that move from cosmology to ethics to something closer to initiation, and they frequently end not in a conclusion but in a hymn.",
  "Scholarship has traditionally divided this material into two streams, following A.-J. Festugière: the technical Hermetica, concerned with astrology, alchemy, medicine, and the making of talismans, and the philosophical Hermetica, concerned with God, cosmos, and the destiny of the soul. The division is useful for finding your way around the library, but it should be held loosely. More recent work, particularly by Garth Fowden and Christian Bull, has argued that the same milieu produced both, and that the practical and contemplative strands were understood as stages of a single path rather than rival enterprises.",
  "What gives Hermeticism its outsized importance is not only what it says but what happened to it. Carried through Arabic and Byzantine hands, recovered in Florence in the fifteenth century, and mistakenly believed to be older than Moses, it became the philosophical charter for two centuries of Renaissance magic, natural philosophy, and religious reform. Almost every subsequent Western esoteric current runs through it.",
];

export const hermeticismFacts: HermeticFact[] = [
  { label: "Origin", value: "Roman Egypt, chiefly Alexandria" },
  { label: "Period", value: "c. 100–300 CE" },
  { label: "Languages", value: "Greek, with Latin, Coptic, Armenian and Arabic survivals" },
  { label: "Attributed to", value: "Hermes Trismegistus" },
  { label: "Philosophical setting", value: "Middle Platonism, Stoicism, Egyptian temple learning" },
];

export const hermeticTexts: HermeticText[] = [
  {
    title: "Corpus Hermeticum",
    meta: "Greek · seventeen treatises",
    description:
      "The central collection, assembled in Byzantium from older material and numbered I–XVIII with XV absent. It opens with the Poimandres, a vision of the divine Mind and the descent and return of the human being, and includes the Crater or Monad on the bowl of intellect sent down to humanity, and the thirteenth treatise on rebirth, the most explicitly initiatory text in the collection.",
  },
  {
    title: "Asclepius",
    meta: "Latin translation of the Greek Perfect Discourse",
    description:
      "A long dialogue surviving complete only in Latin, once ascribed to Apuleius. It contains the two passages that made Hermeticism notorious: the account of god-making, in which the Egyptian priesthood draws divine presence into consecrated statues, and the Lament, a prophecy of the desolation of Egypt when the gods depart. It is also the source of the phrase magnum miraculum est homo, a great miracle is the human being.",
  },
  {
    title: "The Emerald Tablet",
    meta: "Arabic, then Latin from the twelfth century",
    description:
      "A few dozen cryptic lines, first attested in the Arabic Book of the Secret of Creation attributed to Balinus, and known in the Latin West from the twelfth century onward. Its opening formula, that what is below corresponds to what is above, became the axiom of European alchemy and the single most quoted sentence in the Western esoteric tradition.",
  },
  {
    title: "The Nag Hammadi Hermetica",
    meta: "Coptic · Codex VI",
    description:
      "Three Hermetic pieces found in the 1945 Nag Hammadi discovery: the Discourse on the Eighth and Ninth, the Prayer of Thanksgiving, and a section of the Asclepius. The first is the only surviving text that appears to record an actual Hermetic initiation, complete with ritual embrace, silence, and ascent beyond the seven spheres.",
  },
  {
    title: "The Stobaean Fragments",
    meta: "Greek · excerpted in the fifth century",
    description:
      "Extracts copied into the anthology of John of Stobi, preserving Hermetic material found nowhere else. The longest and strangest is the Kore Kosmou, the Pupil of the World, a mythic narrative of the manufacture of souls, their fall into bodies, and the ordering of the world by Isis and Osiris.",
  },
  {
    title: "The Definitions to Asclepius",
    meta: "Armenian · edited by Jean-Pierre Mahé",
    description:
      "A series of compressed sayings surviving in an Armenian translation, plausibly among the oldest Hermetic material we possess. They read less like a treatise than like the memorised aphorisms a school would give a student to carry.",
  },
  {
    title: "The Technical Hermetica",
    meta: "Astrological, medical, alchemical, talismanic",
    description:
      "The larger and less read half of the tradition: the Liber Hermetis and related astrological handbooks, the Cyranides on the virtues of stones, plants and animals, iatromathematical texts joining medicine to the stars, and downstream the great Arabic magical compendium known in Latin as the Picatrix.",
  },
];

export const kybalionNote =
  "The Kybalion, published in Chicago in 1908 under the name of Three Initiates and generally attributed to William Walker Atkinson, is not an ancient Hermetic text. Its seven principles appear nowhere in the Corpus Hermeticum. It is a genuinely interesting document of American New Thought, and it has introduced a great many readers to the word Hermeticism, but it should be read as a modern work about the tradition rather than as a source within it.";

export const hermeticPrinciples: HermeticPrinciple[] = [
  {
    term: "Nous",
    title: "Mind Before Matter",
    description:
      "Reality begins in intellect, not in substance. God is called Mind, and the cosmos is the thought of that Mind given body. To know anything truly is to participate in the intelligence that made it, which is why Hermetic knowledge is never merely informational.",
  },
  {
    term: "Sympatheia",
    title: "As Above, So Below",
    description:
      "The cosmos is a single continuous fabric, and every level answers to every other. Stars, metals, plants, organs, and states of soul are bound in chains of correspondence. This is the working assumption behind Hermetic astrology, medicine, and alchemy alike.",
  },
  {
    term: "Kosmos",
    title: "A Living and Divine World",
    description:
      "The world is not a prison and not an accident. It is beautiful, ensouled, and called a second god. This world-affirming strand is what most clearly separates the Hermetica from the world-rejecting Gnostic texts they are often grouped with, though the collection is not uniform and darker notes do sound in it.",
  },
  {
    term: "Anthropos",
    title: "The Double Nature of the Human",
    description:
      "The human being descends from the divine Mind and yet takes a body from nature, and so stands uniquely between two orders: mortal in one and immortal in the other. This is the great miracle of the Asclepius, and the reason the tradition regards self-knowledge and knowledge of God as one act.",
  },
  {
    term: "Heimarmene",
    title: "Fate and the Seven Spheres",
    description:
      "In its descent the soul takes on something from each planetary sphere, and these become the passions that govern a life. The ascent is the return of each of them, sphere by sphere, until the soul stands in the Ogdoad, the eighth, beyond the reach of fate.",
  },
  {
    term: "Gnosis",
    title: "Knowledge That Transforms",
    description:
      "The aim is not doctrine but a change of being. The thirteenth treatise describes rebirth as the dissolution of the twelve tormentors and the arrival of the powers that replace them, after which the initiate can say that he is no longer the man he was.",
  },
  {
    term: "Sige",
    title: "Silence and the Hymn",
    description:
      "Hermetic instruction repeatedly ends where argument stops. The teaching is sealed by silence and completed in praise, and the Prayer of Thanksgiving suggests that worship, not proposition, is the natural terminus of knowing God.",
  },
  {
    term: "Telestike",
    title: "The Consecration of Statues",
    description:
      "The Asclepius describes drawing divine presence into images so that they become channels of prophecy and healing. This passage scandalised Augustine, fascinated Ficino, and connects Hermetic practice directly to Neoplatonic theurgy as Iamblichus would defend it.",
  },
];

export const hermeticEras: HermeticEra[] = [
  {
    period: "1st–3rd c. CE",
    title: "Alexandria",
    description:
      "The philosophical Hermetica are composed in Greek in Roman Egypt, drawing on Middle Platonism and Stoicism while preserving Egyptian temple concerns with the sacredness of the world, the efficacy of images, and the priestly transmission of knowledge.",
  },
  {
    period: "4th–5th c.",
    title: "The Christian Verdict",
    description:
      "Lactantius reads Hermes as a pagan prophet who glimpsed the truth and cites him as a witness for Christianity. Augustine, in the City of God, condemns the god-making of the Asclepius as demonic. Both, in opposite directions, guarantee that Hermes will not be forgotten.",
  },
  {
    period: "8th–12th c.",
    title: "Arabic Transmission",
    description:
      "Hermes is absorbed into Islamic learning, associated with the Sabians of Harran and with the prophet Idris. The Emerald Tablet surfaces in Arabic, alchemical and astral-magical texts multiply, and much of this material re-enters Europe through Latin translation.",
  },
  {
    period: "11th c.",
    title: "Byzantium",
    description:
      "The Greek treatises are copied and studied in Constantinople. Michael Psellos comments on the Poimandres, and the manuscript tradition that will eventually reach Florence is kept alive.",
  },
  {
    period: "1460–1471",
    title: "Ficino in Florence",
    description:
      "A monk brings a Greek codex from Macedonia to Cosimo de' Medici, who orders Marsilio Ficino to set Plato aside and translate Hermes first. The resulting Pimander appears in print in 1471. The priority was deliberate: Hermes was believed to be a contemporary of Moses, the fountainhead of an ancient theology older than Greek philosophy itself.",
  },
  {
    period: "16th c.",
    title: "The Renaissance Flowering",
    description:
      "Pico della Mirandola, Lodovico Lazzarelli, Cornelius Agrippa, Francesco Patrizi, and Giordano Bruno build on the Hermetic charter. Magic, astrology, and natural philosophy are argued to be pious rather than forbidden, because the cosmos they operate on is itself divine.",
  },
  {
    period: "1614",
    title: "Casaubon's Redating",
    description:
      "Isaac Casaubon shows on philological grounds that the Corpus is a work of the Christian era, not of remote Egyptian antiquity. The claim of Mosaic priority collapses, though Hermetic thought continues quietly through the Rosicrucian manifestos, Robert Fludd, the Cambridge Platonists, and the alchemical labours of Isaac Newton.",
  },
  {
    period: "19th–20th c.",
    title: "Occult Revival",
    description:
      "Hermeticism returns as a banner: the Hermetic Order of the Golden Dawn, Theosophy, G. R. S. Mead's Thrice-Greatest Hermes of 1906, and Jung's reading of alchemy as a symbolic psychology of individuation.",
  },
  {
    period: "1944–present",
    title: "Scholarly Recovery",
    description:
      "Festugière's four volumes establish the modern study of the texts. Frances Yates makes Hermeticism central to the history of science, a thesis since heavily qualified. Fowden restores the Egyptian setting, Copenhaver provides the standard English translation, and Bull and Hanegraaff reopen the question of what kind of community, if any, stood behind the writings.",
  },
];

export const hermeticReading: ReadingEntry[] = [
  {
    stage: "Begin here",
    title: "Hermetica",
    author: "Brian P. Copenhaver",
    note: "The standard scholarly English translation of the Corpus Hermeticum and the Asclepius, with an introduction and notes that quietly settle a century of arguments. If you buy one book on this shelf, buy this one.",
  },
  {
    stage: "Read alongside",
    title: "The Way of Hermes",
    author: "Clement Salaman and others",
    note: "A more devotional rendering of the Corpus, valuable chiefly because it carries Jean-Pierre Mahé's translation of the Armenian Definitions, which is hard to find elsewhere in English.",
  },
  {
    stage: "For context",
    title: "The Egyptian Hermes",
    author: "Garth Fowden",
    note: "The book that put the Hermetica back in Egypt. Fowden reconstructs the social and religious world that produced them and treats the technical and philosophical texts as one enterprise.",
  },
  {
    stage: "For reception",
    title: "Giordano Bruno and the Hermetic Tradition",
    author: "Frances A. Yates",
    note: "The most influential book ever written on Hermeticism and the reason most readers have heard of it. Exhilarating, and to be read with the knowledge that specialists have substantially revised its central thesis.",
  },
  {
    stage: "For depth",
    title: "The Tradition of Hermes Trismegistus",
    author: "Christian H. Bull",
    note: "The current state of the question, arguing for a genuine Egyptian priestly milieu behind the texts. Demanding, and the place to go once the introductions no longer satisfy.",
  },
  {
    stage: "For the field itself",
    title: "Esotericism and the Academy",
    author: "Wouter J. Hanegraaff",
    note: "Not about Hermeticism alone but about how Western esotericism came to be treated as rejected knowledge. It explains why this material was excluded from the story of philosophy, and what was lost by excluding it.",
  },
  {
    stage: "Primary adjacent",
    title: "Three Books of Occult Philosophy",
    author: "Heinrich Cornelius Agrippa",
    note: "The great Renaissance synthesis of Hermetic correspondence, Neoplatonic metaphysics, and practical magic, and the channel through which most later Western occultism received the tradition.",
  },
  {
    stage: "Primary adjacent",
    title: "Picatrix",
    author: "Dan Attrell and David Porreca, translators",
    note: "The astral magic of the technical Hermetica in its fullest surviving form, translated from the Latin. Strange, practical, and indispensable for understanding what Hermetic operation actually looked like.",
  },
];

export const hermeticGlossary: GlossaryEntry[] = [
  { term: "Nous", gloss: "Mind or Intellect; both the divine source and the highest faculty in the human being." },
  { term: "Logos", gloss: "Word, reason, articulation; the ordering utterance by which Mind gives the cosmos its form." },
  { term: "Gnosis", gloss: "Knowledge in the sense of direct acquaintance, which changes the knower rather than informing him." },
  { term: "Poimandres", gloss: "The teacher of the first treatise, traditionally read as Shepherd of Men, though an Egyptian derivation meaning the Knowledge of Re has also been proposed." },
  { term: "Anthropos", gloss: "The archetypal Human, born of the divine Mind and the pattern from which mortal humanity descends." },
  { term: "Heimarmene", gloss: "Fate, understood concretely as the government of life by the planetary spheres." },
  { term: "Ogdoad", gloss: "The eighth region, beyond the seven planets, where the ascending soul is released from fate." },
  { term: "Palingenesia", gloss: "Rebirth or regeneration; the transformation described in the thirteenth treatise." },
  { term: "Hyle", gloss: "Matter, the substrate that receives form and, in some treatises, the source of the soul's confusion." },
  { term: "Prisca theologia", gloss: "The ancient theology; the Renaissance conviction that a single primordial revelation was handed down through Hermes, Orpheus, Pythagoras, and Plato." },
];

export const hermeticRelated: RelatedLink[] = [
  { href: "/topics/alchemy", label: "Alchemy", kind: "Topic" },
  { href: "/topics/theurgy-and-ritual", label: "Theurgy and Ritual", kind: "Topic" },
  { href: "/topics/esoteric-christianity", label: "Esoteric Christianity", kind: "Topic" },
  { href: "/topics/symbolism-and-sacred-architecture", label: "Symbolism and Sacred Architecture", kind: "Topic" },
  { href: "/journal/what-is-theurgy", label: "What Is Theurgy?", kind: "Journal" },
  { href: "/journal/alchemy-language-of-change", label: "Alchemy, the Language of Change", kind: "Journal" },
];
