import type { Shelf } from "./library";

export const gnosticismShelf: Shelf = {
  slug: "gnosticism",
  number: "06",
  title: "Gnosticism",
  eyebrow: "The Alien God",
  cardDescription: "Nag Hammadi, the demiurge, Sophia's error, and knowledge as awakening.",
  summary:
    "A family of second-century movements holding that the world was badly made, that something in us does not belong to it, and that knowing this is what saves.",

  heroImage: "/shelf-gnosticism.webp",
  heroImageAlt:
    "A buried earthenware jar broken open in desert sand, papyrus codices visible inside, low light across the cliffs behind.",

  facts: [
    { label: "Origin", value: "Egypt, Syria and Rome" },
    { label: "Period", value: "Chiefly 2nd–4th centuries CE" },
    { label: "Languages", value: "Greek, surviving mostly in Coptic translation" },
    { label: "Central discovery", value: "The Nag Hammadi codices, 1945" },
    { label: "Setting", value: "Second Temple Judaism, Middle Platonism, early Christianity" },
  ],

  overview: [
    "For eighteen centuries these movements were known almost entirely through the people who wanted them destroyed. Irenaeus, Hippolytus and Epiphanius quoted the texts in order to refute them, and what survived was therefore a hostile summary — accurate in places, polemical throughout, and impossible to check. Then in December 1945, near the Egyptian town of Nag Hammadi, a farmer digging for fertiliser broke open a sealed jar containing thirteen leather-bound codices. For the first time the material could speak in its own voice, and it proved stranger, more varied and more literary than its opponents had let on.",
    "What the texts share is an intuition rather than a doctrine: that something is wrong with the world, and that the wrongness is structural rather than moral. It is not that people behave badly; it is that the cosmos itself was badly made. In the fullest versions, the maker is a lesser being who came about through an error in the divine fullness, and who does not know there is anything above him. He surveys what he has made and declares that he is God and there is no other — a line lifted from Isaiah and turned into the signature of ignorance.",
    "Against that background, the human situation is one of displacement. Something in us originates above and does not belong here, and has forgotten where it came from. Salvation is accordingly not forgiveness, or moral repair, or the end of history. It is gnosis: recognition, waking, the moment of remembering what one is. The call that wakes the sleeper is a recurring figure in these writings, and it explains why so many of them read less like doctrine than like someone being shaken by the shoulder.",
    "Whether any of this amounts to a single religion called Gnosticism is now seriously doubted. The texts differ from one another sharply, the label was coined long after the fact, and it inherits the heresiologists' habit of treating many unrelated things as one deviation. What is certain is that a cluster of second-century teachers and communities — Valentinus in Rome, Basilides in Alexandria, the authors of the Sethian myths — were asking where evil comes from if God is good, and answered in a way the emerging church could not absorb.",
  ],

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "The Gospel of Thomas",
        meta: "Coptic · Nag Hammadi Codex II · 114 sayings",
        description:
          "Not a narrative. There is no birth, no passion, no resurrection — only sayings, many of them paralleling the canonical gospels and some found nowhere else. It opens by promising that whoever finds the meaning of these words will not taste death, which sets the terms: the text withholds, and reading it is the work. Its relation to the synoptic tradition remains among the most argued questions in the field.",
      },
      {
        title: "The Apocryphon of John",
        meta: "Coptic · four copies survive · Sethian",
        description:
          "The fullest account of the myth: the unknowable One, the first emanation Barbelo, the ranks of aeons, and Sophia's attempt to bring forth without her consort. What she produces is Yaldabaoth, who steals power from his mother, makes a world, populates it with rulers, and boasts of being alone. Everything afterward follows from that error. It survives in four copies, which tells us how central it was.",
      },
      {
        title: "The Gospel of Truth",
        meta: "Coptic · Nag Hammadi Codex I · Valentinian",
        description:
          "Possibly by Valentinus himself, and unlike anything else in the collection: a sustained meditation on error, forgetting and return, written with real literary control. Nothing is refuted and little is explained. It treats ignorance as a kind of fog that the coming of knowledge simply dissolves, and it is the best evidence that this material produced genuine religious writing rather than only systems.",
      },
      {
        title: "The Gospel of Philip",
        meta: "Coptic · Nag Hammadi Codex II · Valentinian",
        description:
          "A collection of reflections on sacrament, language and union, organised loosely if at all. It is the source of the bridal chamber, the most discussed and least understood of the Valentinian rites, and of the passage about Mary Magdalene that has carried the text far outside scholarly circles. On names and how they mislead, it is unexpectedly sharp.",
      },
      {
        title: "The Thunder, Perfect Mind",
        meta: "Coptic · Nag Hammadi Codex VI",
        description:
          "A revelation poem spoken by a female voice entirely in paradox: the first and the last, the honoured and the scorned, the whore and the holy one. It fits no category and names no doctrine. It shares a codex with the Hermetic texts, which is worth noticing — the people who buried these books did not sort them into the traditions we use.",
      },
      {
        title: "Pistis Sophia",
        meta: "Coptic · the Askew Codex · known since 1785",
        description:
          "A long, late and elaborate dialogue in which the risen Christ instructs his disciples for years rather than days, and Sophia's repentances are recited at length. Available to scholars well before Nag Hammadi, it shaped early impressions of this material and gave it a reputation for baroque complexity that the simpler texts do not deserve.",
      },
      {
        title: "Against Heresies",
        meta: "Irenaeus of Lyon · Greek, surviving in Latin · c. 180",
        description:
          "The hostile witness, and still indispensable. Irenaeus sets out the Valentinian system in detail in order to make it look ridiculous, and in doing so preserves material that would otherwise be lost. Reading him beside the Nag Hammadi texts is the fastest way to see both how much the heresiologists got right and how much their framing distorts.",
      },
    ],
  },

  caution: {
    eyebrow: "Two Things Commonly Said",
    body: "First, that Gnosticism was a religion. The word was coined in the seventeenth century and systematised in the nineteenth, and Michael Williams and Karen King have argued at length that it gathers texts with little in common while inheriting the heresiologists' assumption that all deviation is one thing. Many specialists now prefer to name particular groups — Sethian, Valentinian — and some avoid the category entirely. Second, that these are the suppressed original Christianity. They are mostly second-century, later than the canonical gospels, and represent developments rather than a lost beginning. The suppression was real; the priority is not. Both claims are worth setting aside, because the texts are more interesting than either.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Gnosis",
        title: "Knowledge That Wakes",
        description:
          "Not information about God but recognition of one's own origin, closer to remembering than to learning. It cannot be transmitted as doctrine, which is why so much of this literature works through myth, paradox and address rather than argument. Having it changes what you are, not what you believe.",
      },
      {
        term: "Pleroma",
        title: "The Fullness",
        description:
          "The divine realm above, populated by aeons that emanate in pairs from an unknowable source. It is complete in itself and lacks nothing, which makes the question of how anything could go wrong in it the central problem these systems exist to answer.",
      },
      {
        term: "Sophia",
        title: "The Error in Wisdom",
        description:
          "The disturbance begins not with rebellion but with desire: the youngest aeon tries to know the unknowable, or to create without her partner, and produces something malformed. That the world originates in a mistake made by Wisdom, rather than in sin or in malice, is the most distinctive move in the whole literature.",
      },
      {
        term: "Yaldabaoth",
        title: "The Craftsman Who Thinks He Is Alone",
        description:
          "Sophia's misbegotten son fashions the cosmos from stolen power and declares that he is God and there is no other. He is not evil so much as ignorant, and the line is quoted from the Hebrew prophets, which makes the identification unmistakable and the provocation deliberate.",
      },
      {
        term: "Spinther",
        title: "The Spark",
        description:
          "Something in the human being derives from above and was never native here. It can be forgotten but not destroyed, and its presence is why the rulers of this world take an interest in us. Salvation is the restoration of that fragment, not the improvement of the person around it.",
      },
      {
        term: "Archontes",
        title: "The Rulers",
        description:
          "Powers governing the planetary spheres, keeping souls within the world they administer. The ascending soul must pass each one, sometimes by knowing its name or its seal. The same planetary ladder appears in Hermetic and Neoplatonic writing, with a markedly less hostile atmosphere.",
      },
      {
        term: "Klesis",
        title: "The Call",
        description:
          "Someone from outside enters the world to wake those who are asleep in it. The figure takes many forms across the texts, and the recurring images are of sleep, drunkenness and forgetting — states one is in without knowing one is in them, which is precisely the difficulty.",
      },
      {
        term: "Syzygia",
        title: "Pairing",
        description:
          "The aeons exist in male-female pairs, and what goes wrong goes wrong when a pair is broken. Restoration is correspondingly figured as union, which is the background to the Valentinian bridal chamber. Whether that rite was enacted, and how, is unresolved.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "Suppression and Recovery" },
    entries: [
      {
        period: "1st c. CE",
        title: "The Materials",
        description:
          "Jewish apocalyptic and wisdom literature, Platonic cosmology and the first Christian writings supply the vocabulary: a transcendent God, intermediary powers, a soul out of place, and a saviour who descends.",
      },
      {
        period: "c. 130–160",
        title: "The Teachers",
        description:
          "Valentinus teaches in Rome and, by one report, is nearly elected bishop. Basilides works in Alexandria. These are not fringe figures but prominent Christian intellectuals, which is part of why the response to them was so forceful.",
      },
      {
        period: "c. 180",
        title: "Irenaeus Replies",
        description:
          "Against Heresies sets out to catalogue and refute, and in doing so helps define orthodoxy by marking its edge. Much of what we knew before 1945 came from this book and the works that followed it.",
      },
      {
        period: "c. 265",
        title: "Plotinus Objects",
        description:
          "The ninth treatise of the second Ennead attacks them for contempt of the cosmos: to call this world a failure is, for a Platonist, to insult the beauty that is plainly in it. The quarrel is a reminder that the Gnostics' sharpest critics included pagans who shared much of their metaphysics.",
      },
      {
        period: "3rd–4th c.",
        title: "Mani",
        description:
          "Mani founds a religion of light and darkness that spreads from Roman North Africa to China and lasts a thousand years. Augustine was a Manichaean hearer for nine years before his conversion, and argued against them for the rest of his life.",
      },
      {
        period: "c. 350–400",
        title: "The Jar Is Buried",
        description:
          "The Nag Hammadi codices are hidden, probably as the Egyptian monasteries came under pressure to purge books outside the newly fixed canon. Whoever buried them took care: they were bound, wrapped and sealed.",
      },
      {
        period: "12th–13th c.",
        title: "The Cathars",
        description:
          "A dualist church spreads through Languedoc, with its own clergy and a following across the nobility. The Albigensian Crusade destroys it. Whether its ideas descend from late antiquity or arose independently is still contested.",
      },
      {
        period: "1773–1785",
        title: "First Light",
        description:
          "The Bruce and Askew codices reach European collections, bringing Pistis Sophia and related texts. For a century and a half these are nearly all the primary evidence there is.",
      },
      {
        period: "1945",
        title: "Nag Hammadi",
        description:
          "Thirteen codices, fifty-two texts, most previously unknown. Publication was delayed for decades by politics, litigation and scholarly territorialism, and a complete English edition did not appear until 1977.",
      },
      {
        period: "1979–present",
        title: "Reassessment",
        description:
          "Elaine Pagels makes the subject public. A generation later Michael Williams and Karen King question whether the category holds at all, and the field moves toward naming specific movements rather than one great heresy.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "The Gnostic Gospels",
        author: "Elaine Pagels",
        note: "The book that brought Nag Hammadi to a general readership, and still the clearest short account of what was at stake politically in the second century. Its framing has been qualified since, which is worth knowing while reading it.",
      },
      {
        stage: "The texts",
        title: "The Nag Hammadi Scriptures",
        author: "Marvin Meyer, editor",
        note: "The complete library in one volume, with introductions to each text. The obvious place to read the primary material rather than accounts of it.",
      },
      {
        stage: "For rigour",
        title: "The Gnostic Scriptures",
        author: "Bentley Layton",
        note: "A translation of unusual precision, arranged by movement rather than by codex, with apparatus that makes the relationships between texts visible. Where Meyer gives you everything, Layton gives you an argument about how it fits together.",
      },
      {
        stage: "The case against the category",
        title: "Rethinking “Gnosticism”",
        author: "Michael Allen Williams",
        note: "Argues that the term describes nothing coherent and should be dismantled. Whether or not the conclusion persuades, the demolition of the usual clichés about world-hatred and libertinism is thorough and hard to answer.",
      },
      {
        stage: "For the historiography",
        title: "What Is Gnosticism?",
        author: "Karen L. King",
        note: "On how the category was built and whose purposes it served, from the heresiologists to modern scholarship. The best account of why this field keeps arguing about its own name.",
      },
      {
        stage: "The formative reading",
        title: "The Gnostic Religion",
        author: "Hans Jonas",
        note: "Written largely before Nag Hammadi and shaped by Heidegger, it reads these texts as an ancient existentialism of thrownness and alienation. Superseded on the evidence and still the most compelling single interpretation anyone has offered.",
      },
      {
        stage: "The current account",
        title: "The Gnostics",
        author: "David Brakke",
        note: "A measured recent synthesis that takes the criticisms seriously without abandoning the subject, and reconstructs the Sethians as an actual community rather than a textual abstraction.",
      },
      {
        stage: "The hostile witness",
        title: "Against Heresies",
        author: "Irenaeus of Lyon",
        note: "Read at least the first book, where the Valentinian system is laid out in full. Hostile testimony read carefully is still testimony, and there is no substitute for seeing how the opposition understood what it was opposing.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Gnosis", gloss: "Saving knowledge; recognition of one's origin rather than information about God." },
      { term: "Pleroma", gloss: "The Fullness; the divine realm of aeons above the created world." },
      { term: "Aeon", gloss: "A being within the Pleroma, emanated in pairs from the unknowable source." },
      { term: "Demiurge", gloss: "The craftsman of the material world, ignorant of what lies above him." },
      { term: "Yaldabaoth", gloss: "The demiurge's name in the Sethian texts; Sophia's misbegotten son." },
      { term: "Sophia", gloss: "Wisdom; the aeon whose error sets the making of the world in motion." },
      { term: "Archon", gloss: "A ruler of one of the planetary spheres, holding souls within the cosmos." },
      { term: "Barbelo", gloss: "The first emanation from the unknowable One in the Sethian myth." },
      { term: "Sethian", gloss: "The movement tracing spiritual descent from Seth, third son of Adam." },
      { term: "Valentinian", gloss: "The school of Valentinus, the most sophisticated and most widely spread." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/library/qabalah-and-kabbalah", label: "Qabalah and Kabbalah", kind: "Shelf" },
    { href: "/topics/esoteric-christianity", label: "Esoteric Christianity", kind: "Topic" },
    { href: "/topics/religion-and-mysticism", label: "Religion and Mysticism", kind: "Topic" },
  ],
};
