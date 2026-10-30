import type { Shelf } from "./library";

export const kabbalahShelf: Shelf = {
  slug: "qabalah-and-kabbalah",
  number: "04",
  title: "Qabalah and Kabbalah",
  eyebrow: "The Received Tradition",
  cardDescription: "Symbolic structures, religious contexts, and esoteric interpretations.",
  summary:
    "The Jewish mystical tradition of the sefirot and the Ein Sof, the Christian and occult systems that later borrowed its vocabulary, and why the three are not interchangeable.",

  heroImage: "/shelf-kabbalah.webp",
  heroImageAlt:
    "Ten points of flame suspended in a dim hall, arranged in the pattern of the sefirot.",
  facts: [
    { label: "Origin", value: "Provence and Catalonia, with far older antecedents" },
    { label: "Period", value: "12th century to the present" },
    { label: "Languages", value: "Hebrew and Aramaic, later Latin and the vernaculars" },
    { label: "Central work", value: "The Zohar" },
    { label: "Setting", value: "Rabbinic Judaism, Neoplatonic emanation, earlier Hekhalot mysticism" },
  ],

  overview: [
    "The word kabbalah means received tradition, and the claim of reception is the first thing to understand about it. This is not a system anyone proposes; it is a body of teaching held to have been handed down, ultimately from Sinai, and recovered rather than invented. The texts that make the claim are datable — the tradition takes recognisable shape in Provence and Catalonia in the twelfth and thirteenth centuries — but the claim itself shapes how the material is written, transmitted and argued over.",
    "Its governing problem is the relation between an infinite God and a finite world. If the divine is genuinely without limit, unknowable and without attributes — the Ein Sof, the Without End — then nothing can be said of it, and no world could proceed from it without compromising its infinity. The kabbalistic answer is the sefirot: ten aspects, powers or vessels through which the hidden God becomes manifest, related to one another in a structure usually drawn as a tree. They are not rungs on a ladder the mystic climbs. They are the inner life of divinity, and because the human being is made in that image, the structure is also a description of the person.",
    "From this follows the claim that makes kabbalah genuinely radical rather than merely contemplative: human action reaches upward. Performing a commandment with the right intention, or praying with the right direction of mind, is held to affect the divine realm itself — to unify what has been separated, to draw down flow, to participate in repair. The tradition is thus inseparable from Jewish practice. It is not a philosophy that happens to use religious images; it is an account of what the commandments do.",
    "After the expulsion from Spain in 1492, that account was rebuilt around catastrophe. Isaac Luria, teaching in Safed for barely two years, described creation as beginning with a divine contraction to make room for something other, followed by a shattering of the vessels meant to hold the light, scattering sparks into the world. What remains for human beings is tikkun: gathering the sparks, mending the breach. It is difficult to overstate how completely this myth reshaped Jewish mysticism, or how readily its language of exile and repair travelled beyond it.",
  ],

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "Sefer Yetzirah",
        meta: "The Book of Formation · Hebrew · dating disputed",
        description:
          "A few pages, possibly from late antiquity, describing creation through thirty-two paths of wisdom: ten sefirot and the twenty-two letters of the Hebrew alphabet. Its brevity and strangeness made it endlessly commentable, and almost every later development starts from one reading of it or another. Here the sefirot are something closer to primordial numbers than to divine attributes.",
      },
      {
        title: "Sefer ha-Bahir",
        meta: "The Book of Brilliance · c. 1180 · Provence",
        description:
          "The first work in which the sefirot appear as powers within the Godhead rather than abstract principles, and the first to use the symbolic language — masculine and feminine aspects, the tree, the divine marriage — that the tradition afterward depends on. It reads as fragmentary and deliberately obscure, and it changed everything.",
      },
      {
        title: "The Zohar",
        meta: "The Book of Radiance · Aramaic · late 13th century, Castile",
        description:
          "The central work of kabbalah: a sprawling mystical commentary on the Torah, written in an artificial Aramaic and presented as the teaching of the second-century sage Shimon bar Yochai. Gershom Scholem argued on linguistic grounds that it is largely the work of Moses de León; later scholars have complicated that into something more like a circle of writers. Its literary power is not in dispute — it is one of the great books of the Jewish canon by any measure.",
      },
      {
        title: "Sha'arei Orah",
        meta: "Gates of Light · Joseph Gikatilla · c. 1290",
        description:
          "The clearest systematic guide to the sefirot and the divine names associated with each, written while the Zohar was being composed. Its lucidity made it the standard introduction for centuries, and its Latin translation became the principal means by which Christian scholars encountered kabbalah at all.",
      },
      {
        title: "Pardes Rimonim",
        meta: "Orchard of Pomegranates · Moses Cordovero · 16th century",
        description:
          "The great synthesis of everything written before Luria, organised, compared and reconciled. Cordovero worked through the inherited material with the thoroughness of a systematiser, and the result is the best place to see classical kabbalah as a coherent whole before the Lurianic turn reorganised it.",
      },
      {
        title: "Etz Hayim",
        meta: "The Tree of Life · Hayim Vital · late 16th century",
        description:
          "Isaac Luria wrote almost nothing. What survives is chiefly his student's record, and this is its fullest statement: contraction, the breaking of the vessels, the configuration of divine faces, and the work of repair. The system is intricate to the point of vertigo and became the dominant form of kabbalah for the next three centuries.",
      },
      {
        title: "Tanya",
        meta: "Shneur Zalman of Liadi · 1797",
        description:
          "Lurianic metaphysics turned into a practical psychology for ordinary people: how to understand the two souls contending in oneself, and what to do about it. The foundational text of Chabad and the clearest example of kabbalah moving from an elite discipline to something addressed to a whole community.",
      },
    ],
  },

  caution: {
    eyebrow: "Three Traditions, One Vocabulary",
    body: "Three distinct enterprises share this terminology and are frequently conflated. Jewish Kabbalah is a living religious tradition, inseparable from Hebrew, Torah and halakhic practice, and still developing. Christian Cabala began in the Renaissance with Pico and Reuchlin, who studied the texts seriously but read them as confirmation of Christian doctrine. Hermetic Qabalah is a modern Western occult system, built from the nineteenth century onward by Lévi, the Golden Dawn and their successors, which grafts the sefirot onto tarot, astrology and ceremonial magic. A rough convention distinguishes them by spelling — Kabbalah, Cabala, Qabalah — though it is not observed consistently. The occult system is a real tradition with real achievements and it is not a description of Jewish mysticism. Reading Dion Fortune to learn what the Zohar says will mislead you about both.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Ein Sof",
        title: "The Without End",
        description:
          "The divine as it is in itself: infinite, without attribute, and not an object of thought or speech. Nothing is predicated of it, not even existence in any sense we use the word. Everything the tradition discusses concerns what proceeds from it, never it.",
      },
      {
        term: "Sefirot",
        title: "The Ten",
        description:
          "The aspects through which the hidden God becomes manifest, from Keter at the crown to Malkhut at the root. Whether they are God's essence or vessels distinct from it was argued for centuries without resolution, and the argument matters: one answer makes the tree a description of divinity, the other makes it a description of how divinity acts.",
      },
      {
        term: "Shekhinah",
        title: "The Indwelling Presence",
        description:
          "The lowest sefirah, the point at which the divine touches the world, and the only aspect figured as feminine. The tradition speaks of her exile — separated from the higher unity and sharing the condition of a scattered people — and of the reunion that human action works toward. It is among the most emotionally charged ideas in Jewish thought.",
      },
      {
        term: "Tzimtzum",
        title: "The Contraction",
        description:
          "Luria's startling opening move: before anything could exist, the Infinite withdrew from a point within itself to make room. Creation begins with an absence rather than an act. Later readers divided sharply over whether to take this literally, and the question of what it means for God to withdraw has never stopped being live.",
      },
      {
        term: "Shevirat ha-Kelim",
        title: "The Breaking of the Vessels",
        description:
          "The vessels meant to receive the emanated light could not hold it and shattered, scattering sparks of holiness into the husks of a broken world. Catastrophe is written into the structure of things at the outset, which is precisely what made the myth speak to a community in exile.",
      },
      {
        term: "Tikkun",
        title: "Repair",
        description:
          "The gathering of the scattered sparks and the mending of what broke — the task assigned to human beings, performed through the commandments, prayer and directed intention. It gives ordinary observance cosmic stakes, and it is the single kabbalistic idea that has travelled furthest beyond its origin.",
      },
      {
        term: "Devekut",
        title: "Cleaving",
        description:
          "Adhesion to God: the contemplative goal, described as attachment or clinging rather than absorption. The distinction is deliberate and marks a real difference from traditions in which the self dissolves. In Hasidism devekut becomes something sought in every moment rather than at the end of a long ascent.",
      },
      {
        term: "Otiyot",
        title: "The Letters",
        description:
          "The Hebrew letters are treated as the instruments of creation rather than as signs for sounds, so their shapes, numerical values and permutations carry meaning. Gematria and the techniques built on it are not word games here; they rest on the claim that the world is made of language.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "From Provence Outward" },
    entries: [
      {
        period: "1st–6th c.",
        title: "Hekhalot and Yetzirah",
        description:
          "Before kabbalah proper, Jewish mystics described ascents through heavenly palaces to the chariot throne, and the Sefer Yetzirah set out creation through letters and numbers. These supply the vocabulary the later tradition inherits.",
      },
      {
        period: "c. 1180",
        title: "Provence",
        description:
          "The Sefer ha-Bahir surfaces, and around Isaac the Blind a circle forms in which the sefirot are taught as divine powers. The tradition enters history already claiming to be ancient.",
      },
      {
        period: "13th c.",
        title: "Girona and Castile",
        description:
          "Nahmanides lends kabbalah rabbinic respectability by alluding to it in his Torah commentary. Abraham Abulafia develops an ecstatic practice of letter permutation aimed at prophecy. In Castile, the Zohar takes shape.",
      },
      {
        period: "1492",
        title: "Expulsion",
        description:
          "The expulsion from Spain scatters Jewish communities across the Mediterranean and gives the mystical literature a new urgency. Exile ceases to be a historical condition and becomes a cosmic one.",
      },
      {
        period: "16th c.",
        title: "Safed",
        description:
          "A small town in the Galilee becomes the most important centre in the history of the tradition. Cordovero systematises; Luria arrives, teaches for about two years, and dies at thirty-eight leaving a mythology that reorganises everything after him.",
      },
      {
        period: "1665–66",
        title: "The Messianic Crisis",
        description:
          "Sabbatai Zevi is proclaimed messiah and much of the Jewish world believes it, on foundations Lurianic kabbalah had laid. His conversion to Islam under Ottoman pressure leaves a wound that makes kabbalah itself suspect in many quarters for generations.",
      },
      {
        period: "18th c.",
        title: "Hasidism",
        description:
          "The Baal Shem Tov and his successors bring kabbalistic devotion to communities with no training in its texts, shifting emphasis from cosmic repair to inward attachment and joy. It is the tradition's most successful popularisation.",
      },
      {
        period: "1486–1600",
        title: "Christian Cabala",
        description:
          "Pico della Mirandola announces that nothing proves the divinity of Christ better than magic and kabbalah, and Reuchlin builds the claim into a scholarly edifice. Christian Hebraists learn real Hebrew and read real texts, in the service of a conclusion the texts do not support.",
      },
      {
        period: "19th–20th c.",
        title: "Hermetic Qabalah",
        description:
          "Éliphas Lévi ties the twenty-two paths to the tarot trumps, and the Golden Dawn makes the Tree of Life the filing system for an entire magical curriculum — grades, gods, colours, planets, perfumes. Crowley and Dion Fortune carry it into the twentieth century, by which point the connection to Jewish sources is largely nominal.",
      },
      {
        period: "20th c.",
        title: "The Academic Turn",
        description:
          "Gershom Scholem establishes the historical study of Jewish mysticism almost single-handedly, against a scholarly consensus that had dismissed it. Moshe Idel later challenges Scholem's framework, and Daniel Matt's translation finally makes the Zohar readable in English.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "Kabbalah: A Very Short Introduction",
        author: "Joseph Dan",
        note: "A hundred and fifty pages by a major scholar, covering the history, the main ideas and the modern distortions. The fastest honest orientation available.",
      },
      {
        stage: "The founding study",
        title: "Major Trends in Jewish Mysticism",
        author: "Gershom Scholem",
        note: "The book that created the field, delivered as lectures in Jerusalem in 1938. Later scholarship has revised much of it, but every subsequent account is written either with Scholem or against him.",
      },
      {
        stage: "For the texts",
        title: "The Essential Kabbalah",
        author: "Daniel C. Matt",
        note: "Short passages from across the tradition, well chosen and clearly translated. The best way to find out whether you want to read further before committing to anything long.",
      },
      {
        stage: "The Zohar itself",
        title: "The Zohar: Pritzker Edition",
        author: "Translated by Daniel C. Matt",
        note: "Twelve volumes and decades of work, with a commentary that makes an extremely difficult text navigable. Begin with A Guide to the Zohar, Arthur Green's companion volume, rather than opening volume one cold.",
      },
      {
        stage: "The major revision",
        title: "Kabbalah: New Perspectives",
        author: "Moshe Idel",
        note: "The most significant challenge to Scholem's account, arguing for stronger continuity with earlier Jewish tradition and for the centrality of ecstatic and theurgic practice. Demanding, and the book that reopened questions many considered settled.",
      },
      {
        stage: "For Safed",
        title: "Physician of the Soul, Healer of the Cosmos",
        author: "Lawrence Fine",
        note: "Luria and his circle as a living community — the practices, the relationships, the daily texture of a group that believed it was repairing creation. It makes the Lurianic system comprehensible as something people actually did.",
      },
      {
        stage: "For the Christian reception",
        title: "The Occult Mind",
        author: "Christopher I. Lehrich",
        note: "On how Renaissance scholars read kabbalistic and magical texts, and what their interpretive assumptions did to the material. Useful for seeing the Christian Cabala as a transformation rather than a transmission.",
      },
      {
        stage: "For the occult stream",
        title: "The Mystical Qabalah",
        author: "Dion Fortune",
        note: "The clearest statement of the Hermetic system and the one most later occult writing derives from. Read it as the twentieth-century esoteric tradition it is, and not as an account of Jewish mysticism, which it does not claim and is not.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Ein Sof", gloss: "The Without End; the divine in itself, beyond attribute or description." },
      { term: "Sefirah", gloss: "One of the ten aspects through which the hidden God is manifest; plural sefirot." },
      { term: "Keter", gloss: "Crown; the highest sefirah, bordering on the unknowable." },
      { term: "Malkhut", gloss: "Kingdom; the lowest sefirah, where the divine meets the created world." },
      { term: "Shekhinah", gloss: "The indwelling presence, identified with Malkhut and spoken of as in exile." },
      { term: "Tzimtzum", gloss: "Contraction; the divine withdrawal that makes room for creation." },
      { term: "Shevirat ha-kelim", gloss: "The breaking of the vessels that could not hold the emanated light." },
      { term: "Tikkun", gloss: "Repair; the human work of gathering the scattered sparks." },
      { term: "Devekut", gloss: "Cleaving; attachment to God as the goal of contemplative practice." },
      { term: "Gematria", gloss: "Interpretation through the numerical values of Hebrew letters." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
  { href: "/library/gnosticism", label: "Gnosticism", kind: "Shelf" },
    { href: "/topics/religion-and-mysticism", label: "Religion and Mysticism", kind: "Topic" },
    { href: "/topics/esoteric-christianity", label: "Esoteric Christianity", kind: "Topic" },
    { href: "/topics/metaphysics", label: "Metaphysics", kind: "Topic" },
  ],
};
