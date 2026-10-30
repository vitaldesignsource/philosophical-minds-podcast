import type { Shelf } from "./library";

export const neoplatonismShelf: Shelf = {
  slug: "neoplatonism",
  number: "02",
  title: "Neoplatonism",
  eyebrow: "The Flight of the Alone",
  cardDescription: "The One, intellect, soul, theurgy, ascent, and late antique philosophy.",
  summary:
    "The last great school of ancient philosophy: its account of reality as procession from a single source, its discipline of return, and its long afterlife in three religions.",

  facts: [
    { label: "Origin", value: "Rome and Alexandria, later Athens and Syria" },
    { label: "Period", value: "3rd–6th centuries CE" },
    { label: "Languages", value: "Greek, with Latin, Syriac and Arabic transmission" },
    { label: "Founding figure", value: "Plotinus, 204/5–270" },
    { label: "Philosophical setting", value: "Plato read through Aristotle, Pythagoras and the Stoics" },
  ],

  overview: [
    "Neoplatonism is the name given, many centuries after the fact, to the last great school of ancient Greek philosophy. Its practitioners would not have recognised the word. They called themselves Platonists, and understood their work not as a new system but as the faithful exposition of what Plato had meant. That self-understanding matters, because it explains the form their philosophy takes: not treatises arguing for novel positions, but commentaries, patiently unfolding a text held to contain the truth already.",
    "It begins with Plotinus, who studied for eleven years in Alexandria under the enigmatic Ammonius Saccas and then taught in Rome from the middle of the third century. His central claim is that everything whatever proceeds from a single source that is not itself a thing among things. He calls it simply the One, and insists it is beyond being, beyond thought, and beyond any name we might give it. From the One comes Intellect, in which knower and known are identical and the Forms subsist; from Intellect comes Soul, which mediates between the eternal and the moving; and from Soul comes the world we inhabit.",
    "This procession is not an event. Nothing happens at a moment, nothing is decided, and the source loses nothing by giving. The relation is one of timeless dependence, as light depends on its sun. And it runs in both directions: everything that proceeds also turns back, seeking the source it came from. The soul's philosophical life is that turning made deliberate — purification, contemplation, and at the summit a union in which the distinction between seer and seen falls away. Plotinus ends the Enneads calling it the flight of the alone to the Alone, and Porphyry reports that his teacher reached it four times in the years they spent together.",
    "Where the school divided was on how the ascent is accomplished. Plotinus held that thought could climb the whole way, because something in the soul never fully descends. Iamblichus denied it: the soul is wholly embodied, and what is wholly embodied cannot lift itself. What raises it are symbols the gods have themselves placed in the world, worked through ritual. That disagreement, more than any other, shaped everything after — and it is why a philosophy of pure contemplation ends up the theoretical foundation of late antique ritual practice.",
  ],

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "The Enneads",
        meta: "Plotinus · Greek · fifty-four treatises",
        description:
          "Plotinus wrote without system and apparently without revision, taking up whatever question his students raised. Porphyry gathered the results after his death into six sets of nine treatises, arranged by subject rather than by date, and prefaced the whole with a biography. The arrangement is his teacher's thought organised by a disciple, which is worth remembering: the ascending order from ethics to the One is Porphyry's pedagogy, not Plotinus's own path.",
      },
      {
        title: "Life of Plotinus",
        meta: "Porphyry · Greek · c. 301",
        description:
          "The preface to the Enneads and one of the most vivid portraits to survive from antiquity. It opens with the line that Plotinus seemed ashamed of being in a body, and goes on to record his refusal to sit for a portrait, his care for orphaned children, and the four occasions on which Porphyry believed his teacher attained union with the One.",
      },
      {
        title: "On the Mysteries",
        meta: "Iamblichus · Greek · c. 300",
        description:
          "A reply to Porphyry's sceptical Letter to Anebo, and the fullest defence of theurgy that survives. Iamblichus argues that ritual does not coerce the gods and does not work by the practitioner's understanding; the efficacy lies in divine tokens placed in things by the gods themselves. It is the text that makes ritual philosophically respectable, and the direct ancestor of every later Western claim that symbols act.",
      },
      {
        title: "Elements of Theology",
        meta: "Proclus · Greek · 211 propositions",
        description:
          "Neoplatonic metaphysics set out in the manner of Euclid: numbered propositions, each demonstrated from those before it. Nothing else in the tradition is so compressed or so rigorous. Through a ninth-century Arabic adaptation it reached the Latin West as the Liber de Causis, where it was read as Aristotle's until Aquinas, with Proclus finally in front of him, identified the real source.",
      },
      {
        title: "Platonic Theology and the Commentaries",
        meta: "Proclus · Greek · 5th century",
        description:
          "Proclus's expositions of the Timaeus, the Parmenides and the Republic, together with the Platonic Theology, are where the system is worked out at length rather than in outline. They are also the principal surviving record of how late antiquity actually read Plato, including the conviction that the second half of the Parmenides is a map of the divine orders rather than a logical exercise.",
      },
      {
        title: "The Corpus Dionysiacum",
        meta: "Pseudo-Dionysius · Greek · c. 500",
        description:
          "The Divine Names, the Mystical Theology, and the two hierarchies, written by an unknown author under the name of Paul's Athenian convert. The borrowing from Proclus is extensive and was demonstrated conclusively only in 1895. Because the attribution was believed for a thousand years, Neoplatonic metaphysics entered Christian theology carrying apostolic authority — the single most consequential misattribution in Western thought.",
      },
      {
        title: "The Consolation of Philosophy",
        meta: "Boethius · Latin · c. 524",
        description:
          "Written in prison while awaiting execution, and the channel through which Neoplatonic themes reached the Latin Middle Ages when the Greek texts were lost. Providence, fortune, evil as privation and the soul's true homeland are set out in alternating prose and verse, by a man with every reason to find the consolation inadequate and who argues anyway.",
      },
    ],
  },

  caution: {
    eyebrow: "A Note on the Name",
    body: "The word Neoplatonism is a modern invention, settled on by German scholarship in the nineteenth century to mark off Plotinus and his successors from what was taken to be the genuine Plato. The division it implies is contested and the judgement behind it is not neutral: it was coined by people who thought this phase a decline. Plotinus, Proclus and Damascius all understood themselves as expounding Plato, and read the dialogues as a unified body of doctrine. Use the term, since everyone does, but hold it loosely.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "To Hen",
        title: "The One Beyond Being",
        description:
          "The source is not the greatest of beings but prior to being altogether, since whatever is must already be one and so presupposes unity. It cannot be defined, because definition divides, and strictly it cannot be named. Everything said of it is said by courtesy, and the most accurate speech about it is denial.",
      },
      {
        term: "Proödos",
        title: "Procession Without Loss",
        description:
          "What is perfect overflows, and what overflows produces. But the source is not diminished by what proceeds from it, does not deliberate, and does not act in time. Nothing is subtracted from a flame by the light it casts. Causation here is dependence, not manufacture.",
      },
      {
        term: "Nous",
        title: "Where Thought and Being Coincide",
        description:
          "Intellect is the first thing that can be said to be. In it the knower and the known are not two, and the Forms are not objects it inspects but its own content thinking itself. It contemplates the One and, in failing to hold that simplicity, becomes the many-in-one that is the intelligible world.",
      },
      {
        term: "Psyche",
        title: "The Mediating Soul",
        description:
          "Soul faces two ways: upward to Intellect, which it knows by thinking, and downward to body, which it orders and animates. The World Soul holds the cosmos together; individual souls descend into particular lives. This double orientation is what makes the soul capable of both forgetting its origin and recovering it.",
      },
      {
        term: "Epistrophē",
        title: "Remaining, Procession, Return",
        description:
          "Proclus formalised the rhythm every level enacts: it abides in its cause, proceeds from it, and turns back toward it. The return is not optional or occasional. Desire for the source is simply what it is to be a derived thing, and the philosophical life is that structural longing made conscious.",
      },
      {
        term: "Henosis",
        title: "Union at the Summit",
        description:
          "At the end of the ascent the soul does not observe the One, because observation requires two. What Plotinus describes is a contact in which otherness lapses — not knowledge of the One but presence to it. He is careful to add that it cannot be held, and that one returns.",
      },
      {
        term: "Theourgia",
        title: "The Work of the Gods",
        description:
          "Iamblichus's correction to Plotinus. If the soul descends entirely, no effort of its own can raise it, and the ascent must begin from the divine side. Theurgy operates through tokens sown in stones, plants and sounds by the gods, which act whether or not the practitioner understands them. The point is explicitly that it is not the theurgist's thinking that does the work.",
      },
      {
        term: "Apophasis",
        title: "Speech by Denial",
        description:
          "Since the source exceeds every category, the honest approach strips away predicates rather than accumulating them: not this, not that, not even being. Transmitted through Pseudo-Dionysius, this became the negative theology at the root of Christian mysticism, from Eckhart to the Cloud of Unknowing.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "The School and Its Afterlives" },
    entries: [
      {
        period: "c. 232–243",
        title: "Alexandria",
        description:
          "Plotinus studies for eleven years under Ammonius Saccas, a teacher who wrote nothing and whose doctrines are almost entirely lost. What passed between them is the great blank at the origin of the tradition.",
      },
      {
        period: "245–270",
        title: "Rome",
        description:
          "Plotinus teaches in Rome under imperial patronage, begins writing only at fifty, and proposes to found a city governed by Plato's laws. The project is abandoned, but the circle around him includes senators, physicians and the young Porphyry.",
      },
      {
        period: "c. 301",
        title: "Porphyry Edits",
        description:
          "Porphyry arranges his teacher's writings into the Enneads and adds the Life. He also composes the Isagoge, an introduction to Aristotle's categories that became the standard logic primer in Greek, Latin, Arabic, Syriac, Armenian and Hebrew for over a thousand years.",
      },
      {
        period: "c. 300–325",
        title: "Iamblichus at Apamea",
        description:
          "Iamblichus breaks with Porphyry over ritual, elaborates the hierarchy of divine orders, and makes theurgy integral to the philosophical life. The curriculum he established — a fixed order of Platonic dialogues, crowned by the Parmenides — governed Platonic teaching for the next two centuries.",
      },
      {
        period: "361–363",
        title: "The Emperor Julian",
        description:
          "Julian attempts to restore the old religion with Iamblichean Neoplatonism as its intellectual frame, reorganising the pagan priesthood on a philosophical model. His reign lasts twenty months. The attempt demonstrates how far the school had become a theology as much as a philosophy.",
      },
      {
        period: "5th century",
        title: "Athens",
        description:
          "Syrianus and then Proclus systematise everything. Proclus heads the Athenian school for half a century, writing commentaries, hymns and the Elements of Theology, and producing the most complete articulation the tradition would receive.",
      },
      {
        period: "529",
        title: "The Athenian School Closes",
        description:
          "Justinian forbids pagans to teach. Damascius, the last head of the school, departs with Simplicius and others for the court of Khosrow I in Persia, returning two years later under a clause of the peace treaty guaranteeing their safety. It is the conventional end of ancient philosophy, though Alexandria continued.",
      },
      {
        period: "9th century",
        title: "Baghdad",
        description:
          "In the circle of al-Kindi, portions of the Enneads circulate as the Theology of Aristotle and the Elements of Theology as the Book of Causes, both under Aristotle's name. Islamic philosophy inherits a Neoplatonised Aristotle, and al-Farabi and Avicenna build on that foundation.",
      },
      {
        period: "1492",
        title: "Ficino's Plotinus",
        description:
          "Marsilio Ficino completes the Latin Plotinus, having already translated Plato and the Hermetica. The Renaissance receives Neoplatonism as a living option, and it shapes Pico, Bruno, the Cambridge Platonists, and eventually Coleridge and Emerson.",
      },
      {
        period: "20th century",
        title: "Scholarly Recovery",
        description:
          "E. R. Dodds edits the Elements of Theology, A. H. Armstrong translates the Enneads, and Pierre Hadot argues that ancient philosophy was a way of life rather than a body of doctrine. Later work by Gregory Shaw and Radek Chlup takes theurgy seriously as philosophy rather than as decline.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "Plotinus, or the Simplicity of Vision",
        author: "Pierre Hadot",
        note: "A short, beautiful book that does what no summary of doctrine can: conveys what it would be like to hold these views. Read it before the Enneads and the Enneads will be far less forbidding.",
      },
      {
        stage: "Then the text",
        title: "The Enneads",
        author: "Plotinus, edited by Lloyd P. Gerson",
        note: "The current standard English translation, by a team of scholars, with the apparatus to navigate it. Stephen MacKenna's older version is far more beautiful and considerably less reliable; many readers end up keeping both.",
      },
      {
        stage: "For orientation",
        title: "Plotinus: An Introduction to the Enneads",
        author: "Dominic J. O'Meara",
        note: "A clear map of the system treatise by treatise. The book to have open beside the Enneads when a passage stops making sense, which it will.",
      },
      {
        stage: "For the ritual turn",
        title: "Theurgy and the Soul",
        author: "Gregory Shaw",
        note: "The book that rehabilitated Iamblichus. Shaw argues that theurgy follows rigorously from a particular doctrine of the soul rather than representing a lapse into superstition, and the case is hard to answer.",
      },
      {
        stage: "For the system",
        title: "Proclus: An Introduction",
        author: "Radek Chlup",
        note: "The best way into the most systematic and least approachable of the Neoplatonists. Chlup is unusually good at explaining why the proliferating hierarchies are doing real work rather than multiplying entities for its own sake.",
      },
      {
        stage: "Primary",
        title: "On the Mysteries",
        author: "Iamblichus, translated by Clarke, Dillon and Hershbell",
        note: "The defence of theurgy in full, with a translation and introduction that make a notoriously difficult text navigable.",
      },
      {
        stage: "Primary",
        title: "The Elements of Theology",
        author: "Proclus, edited by E. R. Dodds",
        note: "Dodds's edition has stood since 1933 and remains the model of what a philosophical edition can be. The commentary is often more illuminating than the propositions.",
      },
      {
        stage: "For the reception",
        title: "The Complete Works",
        author: "Pseudo-Dionysius",
        note: "Where Neoplatonism becomes Christian theology. The Mystical Theology runs to a few pages and is among the most influential short texts ever written.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "To Hen", gloss: "The One; the first principle, prior to being and beyond predication." },
      { term: "Nous", gloss: "Intellect; the level at which thinking and what is thought are identical." },
      { term: "Psyche", gloss: "Soul; the mediating level, turned both toward Intellect and toward body." },
      { term: "Hypostasis", gloss: "A genuine level of reality, as distinct from a mere aspect or way of speaking." },
      { term: "Monē", gloss: "Abiding; a cause remaining undiminished in itself while producing." },
      { term: "Proödos", gloss: "Procession; the timeless derivation of each level from the one above it." },
      { term: "Epistrophē", gloss: "Return; the turning of everything derived back toward its source." },
      { term: "Henosis", gloss: "Union; the contact at the summit of ascent in which otherness lapses." },
      { term: "Synthēma", gloss: "A divine token sown in the material world, by which theurgic ritual operates." },
      { term: "Ochēma", gloss: "The soul's subtle vehicle, carrying it between the intelligible and the bodily." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/topics/theurgy-and-ritual", label: "Theurgy and Ritual", kind: "Topic" },
    { href: "/library/alchemies", label: "Alchemies", kind: "Shelf" },
  { href: "/library/qabalah-and-kabbalah", label: "Qabalah and Kabbalah", kind: "Shelf" },
  { href: "/topics/metaphysics", label: "Metaphysics", kind: "Topic" },
    { href: "/topics/philosophy", label: "Philosophy", kind: "Topic" },
    { href: "/topics/esoteric-christianity", label: "Esoteric Christianity", kind: "Topic" },
    { href: "/journal/what-is-theurgy", label: "What Is Theurgy?", kind: "Journal" },
  ],
};
