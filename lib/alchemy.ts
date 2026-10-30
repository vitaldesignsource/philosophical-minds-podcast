import type { Shelf } from "./library";

export const alchemyShelf: Shelf = {
  slug: "alchemy",
  number: "03",
  title: "Alchemy",
  eyebrow: "The Great Work",
  cardDescription: "Operations, materials, allegories, laboratory history, and interior transformation.",
  summary:
    "Fifteen centuries of work at the furnace: what the alchemists actually did, the language they hid it in, and why the split between laboratory and soul is a modern invention.",

  heroImage: "/shelf-alchemies.webp",
  heroImageAlt:
    "Glass and copper vessels ranged along a workbench, an alembic and crucibles lit from one side.",
  facts: [
    { label: "Origin", value: "Greco-Roman Egypt, chiefly Alexandria" },
    { label: "Period", value: "c. 200 CE to the eighteenth century" },
    { label: "Languages", value: "Greek, Arabic, Latin, then the vernaculars" },
    { label: "Earliest named practitioners", value: "Maria the Jewess, Zosimos of Panopolis" },
    { label: "Philosophical setting", value: "Aristotelian matter theory, Stoic pneuma, Hermetic cosmology" },
  ],

  overview: [
    "Alchemy is routinely introduced as chemistry's embarrassing predecessor: credulous people heating substances in the hope of making gold, who accidentally invented distillation along the way. Almost nothing about that picture survives contact with the sources. Alchemists were careful experimentalists with a coherent theory of matter, working in a tradition that lasted longer than modern chemistry has yet existed, and they produced real results — mineral acids, phosphorus, antimony compounds, a great deal of pharmacy.",
    "The tradition begins in Greco-Roman Egypt, where the practical crafts of metallurgy, dyeing and gem-making met Greek natural philosophy. The first substantial text, circulating under the name of Democritus, is largely recipes. By about 300 the picture is stranger and richer: Zosimos of Panopolis writes technical instructions for apparatus in one breath and, in the next, records a dream of a priest at an altar who dismembers himself and is transformed. Both belong to the same body of work, by the same author, apparently without any sense of category violation.",
    "That refusal to separate is the heart of the matter. Later readers wanted two alchemies: a practical one that became chemistry and a spiritual one that became psychology. The sources do not cooperate. The same writers describe furnace temperatures and the purification of the operator, because they held that the work on matter and the work on the worker were one undertaking. Matter itself was alive, tending toward perfection, and the alchemist was assisting a process nature already intended — which is exactly why he had to be fit to assist it.",
    "The texts are deliberately obscure. Alchemists used cover names, calling one substance by the name of another, and described operations in allegory, mythology and sequences of images. This was not confusion but policy: the knowledge was held to be dangerous in careless hands, and an apprenticeship was meant to be served. The consequence is that alchemical writing cannot be read straight. It must be decoded, and the decoding is only now being done with any rigour — much of what we securely know about what these operations actually were has been established in the last forty years, often by historians who repeated the procedures in a laboratory and watched what happened.",
  ],

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "Physika kai Mystika",
        meta: "Pseudo-Democritus · Greek · 1st–2nd century",
        description:
          "On Natural and Mystical Things, the earliest substantial alchemical text to survive. It is mostly recipes — for gold, for silver, for gems, for purple dye — punctuated by the refrain that one nature delights in another, one nature conquers another, one nature masters another. The theory is thin and the practice is detailed, which is roughly the reverse of what later readers expect.",
      },
      {
        title: "The Writings of Zosimos",
        meta: "Zosimos of Panopolis · Greek · c. 300",
        description:
          "The first alchemist with a recognisable voice, writing to a woman named Theosebeia. The corpus includes descriptions of stills and furnaces alongside the Visions, in which a priest at an altar is dismembered, burned and reconstituted as spirit. Zosimos offers no apology for the juxtaposition, and any account of alchemy that cannot accommodate both halves of him is incomplete.",
      },
      {
        title: "The Emerald Tablet",
        meta: "Arabic, then Latin from the twelfth century",
        description:
          "A few lines asserting the correspondence of above and below, attributed to Hermes and prefixed to centuries of alchemical work as its charter. Its brevity is part of its power: it states a principle without specifying an operation, leaving every practitioner to find his own in it. Shared with the Hermeticism shelf, where its textual history is set out.",
      },
      {
        title: "The Jabirian Corpus",
        meta: "Arabic · 9th–10th century",
        description:
          "Thousands of treatises under the name of Jabir ibn Hayyan, almost certainly the work of a school rather than one man. It supplies the theory that governs everything afterward: all metals are composed of mercury and sulphur in varying proportion and purity, so transmutation is a matter of adjusting a ratio rather than of creating something new. The Books of the Balance push this toward a quantitative science of matter.",
      },
      {
        title: "Summa Perfectionis",
        meta: "Pseudo-Geber · Latin · c. 1310",
        description:
          "The most influential alchemical work of the Latin Middle Ages, written under Jabir's Latinised name but shown by modern scholarship to be the work of Paul of Taranto. It argues that substances are built from tightly packed corpuscles, an account of matter that fed directly into seventeenth-century natural philosophy. Sober, systematic, and almost free of allegory.",
      },
      {
        title: "Rosarium Philosophorum",
        meta: "Printed 1550 · woodcut series",
        description:
          "Twenty woodcuts tracing a king and queen through union, death, putrefaction and rebirth. It is the best-known visual statement of the coniunctio, and it became the backbone of Jung's reading of alchemy four centuries later — which has made it simultaneously the most familiar alchemical text and the one most often read through a modern lens.",
      },
      {
        title: "Atalanta Fugiens",
        meta: "Michael Maier · 1617",
        description:
          "Fifty emblems, each with an engraving, a Latin epigram, a discourse and a three-voice fugue, so that the work is meant to be looked at, read and heard at once. Nothing else in the tradition is so ambitious as a total artwork, and it marks the point at which alchemy became as much a literary and musical enterprise as a laboratory one.",
      },
    ],
  },

  caution: {
    eyebrow: "A Necessary Caution",
    body: "The idea that alchemy was really about inner transformation, with the furnace as mere allegory, is not an ancient teaching. It took shape in the nineteenth century with Mary Anne Atwood's Suggestive Inquiry of 1850 and Ethan Allen Hitchcock's Remarks of 1857, and reached its most powerful form in Jung, who read the texts as projections of unconscious processes. That reading is genuinely illuminating about Jung and about symbolism, and it is a twentieth-century interpretation rather than a historical account. Lawrence Principe and William Newman have shown that the alchemists overwhelmingly meant what they said about metals. The interior dimension is real and it is not a substitute for the laboratory; treat any source that offers you one without the other with caution.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Prima Materia",
        title: "The First Matter",
        description:
          "Every transmutation begins by reducing a substance to formlessness, stripping away the qualities that make it the particular thing it is, so that a new form can be imposed. The sources give it a hundred names and decline to say plainly what it is. What matters structurally is the move: you cannot make something new without first undoing what is there.",
      },
      {
        term: "Solve et Coagula",
        title: "Dissolve and Bind",
        description:
          "The rhythm of the entire work, repeated at every scale. What is fixed must be made volatile and what is volatile must be fixed; what is joined must be separated and then rejoined at a higher degree of purity. The operation is performed many times over, and the repetition is not failure but method.",
      },
      {
        term: "Mercurius",
        title: "Mercury and Sulphur",
        description:
          "Inherited from the Jabirian corpus: metals differ because they combine two principles in different proportions and purities. Mercury confers fusibility and lustre, sulphur combustibility and colour. Neither is the ordinary substance of that name. Paracelsus later added salt, giving the tria prima that governed medicine as well as metals.",
      },
      {
        term: "Nigredo",
        title: "The Sequence of Colours",
        description:
          "The work is tracked by what appears in the vessel: blackening, then whitening, then often a spectrum, then reddening. These are real observations — putrefaction and the colour changes of metallic compounds — and simultaneously the stages of an interior process. The blackening is the one everyone remembers, because it is the stage at which the work looks like it has been ruined.",
      },
      {
        term: "Coniunctio",
        title: "The Chemical Wedding",
        description:
          "The union of opposites: sun and moon, king and queen, sulphur and mercury, fixed and volatile. It is figured as marriage, and often as a marriage that ends in death, since the pair must perish as separate things before anything new can come of them. The erotic imagery is not decoration; it names a real requirement that the opposites genuinely combine rather than merely sit together.",
      },
      {
        term: "Decknamen",
        title: "Cover Names",
        description:
          "The deliberate practice of calling one substance by the name of another — the green lion, the grey wolf, the doves of Diana. Each is a specific reagent, recoverable by anyone who has the key, and opaque to anyone who does not. Treating these as pure symbolism loses the chemistry; treating them as pure code loses why those particular images were chosen.",
      },
      {
        term: "Opus",
        title: "The Great Work",
        description:
          "The whole undertaking, from first matter to stone. It is long, it fails repeatedly, and it demands that the operator be patient, solitary and morally fit — not as a pious addendum but because an impure practitioner was held to produce an impure result. The work and the worker are the same project viewed from two sides.",
      },
      {
        term: "Lapis",
        title: "The Stone and the Elixir",
        description:
          "The goal, understood as a single perfected substance that brings whatever it touches to its own perfection: base metal to gold, sick body to health, mortal life to something longer. Chrysopoeia, gold-making, is thus one application of the stone rather than the point of it, which is why the same texts move so easily between metallurgy and medicine.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "Fifteen Centuries at the Furnace" },
    entries: [
      {
        period: "1st–3rd c. CE",
        title: "Alexandria",
        description:
          "Egyptian craft traditions in metals, dyes and glass meet Greek matter theory. Maria the Jewess is credited with the water bath that still carries her name, along with several sealed vessels and stills; the apparatus of the laboratory is in place before the theory is.",
      },
      {
        period: "c. 300",
        title: "Zosimos",
        description:
          "The practice acquires a literature and a voice. Zosimos writes on furnaces and on visions, cites predecessors, and treats alchemy as a tradition with a history rather than a set of recipes.",
      },
      {
        period: "4th–7th c.",
        title: "Byzantine Compilers",
        description:
          "Commentators including Synesius, Olympiodorus and Stephanus of Alexandria copy, excerpt and interpret the Greek alchemists. Their anthologies are the reason anything survives at all, and their allegorising sets the interpretive habits of everyone downstream.",
      },
      {
        period: "8th–10th c.",
        title: "The Arabic Transformation",
        description:
          "Alchemy is systematised in Arabic. The Jabirian corpus supplies the mercury-sulphur theory, and al-Razi classifies substances and apparatus with a precision that would not be matched for centuries. The word itself comes through Arabic, al-kimiya, as does the elixir.",
      },
      {
        period: "1144",
        title: "Alchemy Enters Latin",
        description:
          "Robert of Chester completes the first Latin translation of an alchemical work and notes in his preface that the Latin world does not yet know what alchemy is. Within a century it is a recognised, contested and widely practised art.",
      },
      {
        period: "13th–14th c.",
        title: "The Latin Flowering",
        description:
          "Roger Bacon, the pseudo-Lullian corpus and the Summa Perfectionis build a sophisticated Latin tradition. Pope John XXII's bull of 1317 condemns alchemical fraud — a measure that tells us less about theory than about how much money was by then changing hands.",
      },
      {
        period: "16th c.",
        title: "Paracelsus",
        description:
          "Paracelsus redirects alchemy from making gold toward making medicines, founding iatrochemistry and introducing salt as a third principle. His followers carry chemical medicine into the European universities over furious opposition from the Galenists.",
      },
      {
        period: "17th c.",
        title: "Chymistry",
        description:
          "The great age of alchemical emblem books and of serious experiment, often in the same people. Newton wrote perhaps a million words on alchemy, more than on physics. Boyle, long cast as alchemy's executioner, pursued transmutation and lobbied to repeal the law forbidding it. Historians now use the single word chymistry for this undifferentiated practice.",
      },
      {
        period: "18th c.",
        title: "The Separation",
        description:
          "Chemistry gradually detaches, keeping the apparatus and the substances while discarding the matter theory and the secrecy. Lavoisier's new nomenclature completes the break by making the old language unusable. Alchemy does not so much end as lose its vocabulary.",
      },
      {
        period: "19th–21st c.",
        title: "Reinterpretation and Recovery",
        description:
          "Atwood and Hitchcock recast alchemy as a purely inner discipline, a reading Jung developed into a full psychology of individuation. Since the 1980s Principe, Newman and others have reconstructed what the operations actually were, in several cases by performing them, and restored the practitioners as experimentalists without flattening what they believed they were doing.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "The Secrets of Alchemy",
        author: "Lawrence M. Principe",
        note: "The best single book on the subject by a wide margin. Principe is both a historian and a working chemist, and he decodes actual recipes and runs them, which lets him tell you what the green lion was. Start and possibly finish here.",
      },
      {
        stage: "Primary sources",
        title: "The Alchemy Reader",
        author: "Stanton J. Linden, editor",
        note: "An anthology running from the Greeks to Newton, with enough framing to make each excerpt usable. The fastest way to acquire a feel for how alchemical prose actually sounds.",
      },
      {
        stage: "For the origins",
        title: "Becoming Gold",
        author: "Shannon Grimes",
        note: "Zosimos in his own setting, read as an Egyptian temple craftsman rather than a proto-chemist or a mystic. It makes sense of the technical and visionary writing as one vocation.",
      },
      {
        stage: "For the method",
        title: "Alchemy Tried in the Fire",
        author: "William R. Newman and Lawrence M. Principe",
        note: "A close study of Starkey and Boyle that demonstrates how alchemical practice worked as experimental science. This is the book that retired the idea of a clean break between alchemy and chemistry.",
      },
      {
        stage: "For Newton",
        title: "Newton the Alchemist",
        author: "William R. Newman",
        note: "What Newton was doing in the laboratory for three decades, reconstructed from the manuscripts. Neither an embarrassment to be excused nor a secret key to the Principia, but serious chymistry on its own terms.",
      },
      {
        stage: "For the images",
        title: "Atalanta Fugiens",
        author: "Michael Maier",
        note: "Best met in an edition that reproduces the engravings and includes the music. The emblems reward slow looking in a way no paraphrase conveys.",
      },
      {
        stage: "For the psychological reading",
        title: "Psychology and Alchemy",
        author: "C. G. Jung",
        note: "Indispensable for understanding twentieth-century esotericism and a serious work of interpretation. Read it as Jung's system illustrated through alchemical imagery rather than as an account of what the alchemists meant.",
      },
      {
        stage: "For the long view",
        title: "The Forge and the Crucible",
        author: "Mircea Eliade",
        note: "Places alchemy in a much older story about smiths, ores and the acceleration of natural processes. The comparative method has dated, but the central intuition about metallurgy and the sacred still repays attention.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Prima materia", gloss: "The formless first matter a substance is reduced to before it can be reshaped." },
      { term: "Solve et coagula", gloss: "Dissolve and bind; the alternation of separation and reunion that drives the work." },
      { term: "Nigredo", gloss: "The blackening; putrefaction, and the stage at which the work appears to have failed." },
      { term: "Albedo", gloss: "The whitening; purification, and the first clear sign that the work is proceeding." },
      { term: "Rubedo", gloss: "The reddening; the final stage, at which the stone is said to be achieved." },
      { term: "Coniunctio", gloss: "The union of opposites, figured as a marriage that passes through death." },
      { term: "Decknamen", gloss: "Cover names; a substance deliberately called by the name of something else." },
      { term: "Tria prima", gloss: "Paracelsus's three principles — salt, sulphur and mercury — underlying body, soul and spirit." },
      { term: "Athanor", gloss: "The slow furnace, built to hold a steady heat for the weeks or months a stage required." },
      { term: "Chrysopoeia", gloss: "Gold-making; one application of the stone rather than the whole aim of the art." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/topics/alchemy", label: "Alchemy", kind: "Topic" },
    { href: "/topics/science-and-the-ether", label: "Science and the Ether", kind: "Topic" },
    { href: "/journal/alchemy-language-of-change", label: "Alchemy, the Language of Change", kind: "Journal" },
  ],
};
