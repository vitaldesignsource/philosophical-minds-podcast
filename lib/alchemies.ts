import type { Shelf } from "./library";

export const alchemiesShelf: Shelf = {
  slug: "alchemies",
  number: "03",
  title: "Alchemies",
  eyebrow: "The Great Works",
  cardDescription:
    "Greek, Arabic, Latin, Chinese, Indian and Tibetan traditions: operations, materials, elixirs, allegories, and the perfected body.",
  summary:
    "There was never one alchemy. At least four independent traditions worked for two millennia on the transformation of matter and of the practitioner — and their differences are more instructive than their likenesses.",

  facts: [
    { label: "Independent centres", value: "Greco-Egyptian, Chinese, Indian; Islamicate as inheritor and transformer" },
    { label: "Span", value: "c. 200 BCE to the present, unbroken in India and Tibet" },
    { label: "Languages", value: "Greek, Arabic, Latin, Chinese, Sanskrit, Tamil, Tibetan, Persian, the vernaculars" },
    { label: "Shared aim", value: "Perfection of a substance, a body, or both at once" },
    { label: "Characteristic metal", value: "Mercury, in every tradition, for reasons each explains differently" },
    { label: "Modern recovery", value: "Largely since the 1980s, often by repeating the operations" },
  ],

  overview: [
    "The singular is a historical accident. English inherited one word, al-kimiya, through Arabic and Latin, and then applied it backwards and outwards to every practice that resembled it — so that Chinese waidan, Indian rasaśāstra and Greek chrysopoeia all arrive in English wearing the same borrowed name. The name conceals that these were separate undertakings with separate questions, separate materials and, in at least three cases, separate origins.",
    "What they share is a conviction that matter is not inert. Substances were held to have natures that tend somewhere, to ripen as fruit ripens, and the alchemist's work was to accelerate a process nature had already begun. Lead was not a different thing from gold but an immature version of it; a body was not fixed at its given span but capable of being cooked, stabilised and extended. From that single premise an enormous amount follows, and the traditions follow it in strikingly different directions.",
    "The Greco-Egyptian line, beginning in Alexandria around the first century, asked what metals are and how their species might be changed. The Chinese line, older by some centuries, asked how a person might become an immortal, and treated the elixir as the means. The Indian line asked how mercury — understood as the seed of Shiva — could fix the body against decay and death. The Islamicate world received the Greek material, rebuilt its theory, and handed to Latin Europe a systematised science that Europe then ran for six hundred years. Each inherited a different question and therefore built a different art.",
    "The convergences are real and worth stating precisely, because they are usually overstated. All four traditions settle on mercury as the master substance. All four develop a doctrine of stages marked by colour change. All four produce a literature that is deliberately obscure, and all four insist that the operator's fitness bears on the outcome. These are not trivial likenesses. But they are not evidence of a single lost teaching, and the resemblances are at least partly explained by the materials themselves: anyone who works seriously with cinnabar, sulphur and the base metals in a furnace will encounter the same colour sequences and the same spectacular reversibility of mercury, and will reach for similar language to describe them.",
    "The differences cut deeper than the likenesses. Greco-Egyptian and Latin alchemy are overwhelmingly about metals, with medicine arriving late through Paracelsus. Chinese alchemy is about longevity and transcendence from the start, and moves from the laboratory into the body — the great internal tradition, neidan, dispenses with the furnace entirely and makes the practitioner's own physiology the vessel. Indian alchemy keeps the laboratory and the body in a single frame, with the perfected body, not gold, as the declared goal. Gold-making is marginal in China, instrumental in India, and central in the West.",
    "Reading them together is useful only if the differences survive the comparison. The sections below set out each tradition in its own terms first, and reserve the cross-cultural claims for afterwards, where they can be stated with the qualifications they need.",
  ],

  traditions: {
    heading: { eyebrow: "The Plural", title: "Traditions of the Work" },
    entries: [
      {
        region: "Greco-Roman Egypt",
        name: "Alexandrian Chemeia",
        span: "1st–4th century CE",
        description:
          "The oldest Western line, formed where Egyptian craft practice in metals, dyes and glass met Greek matter theory. Its early texts are largely recipes for imitating gold, silver, gems and purple; its later ones, above all Zosimos of Panopolis, combine furnace instructions with visionary allegory in a way that no later tradition quite repeats. The apparatus arrives before the theory: Maria the Jewess is credited with the water bath, the tribikos and the kerotakis, and her name still sits on a piece of standard laboratory equipment.",
        markers: ["Pseudo-Democritus", "Zosimos", "Maria the Jewess", "Ouroboros", "Chrysopoeia"],
      },
      {
        region: "Byzantium",
        name: "The Commentators",
        span: "4th–11th century",
        description:
          "Not an innovating tradition but the reason an earlier one survives. Synesius, Olympiodorus and Stephanus of Alexandria excerpted, copied and allegorised the Greek alchemists, and their anthologies — above all the manuscript Marcianus graecus 299 — are the channel through which the Alexandrian corpus reaches us at all. Their habit of reading the operations as figures for something else set interpretive expectations that every later reader inherited, for better and worse.",
        markers: ["Stephanus", "Olympiodorus", "Marcianus graecus 299", "Allegorical reading"],
      },
      {
        region: "Islamicate world",
        name: "Al-Kimiya",
        span: "8th–14th century",
        description:
          "The tradition that made alchemy a science. The Jabirian corpus supplies the mercury–sulphur theory that governs all subsequent Western work: metals differ because they combine two principles in different proportions and purities, so transmutation adjusts a ratio rather than creating a new thing. Al-Razi classifies substances, apparatus and operations with a rigour unmatched for centuries. It is also where the serious criticism begins — Ibn Sina denied that the species of metals could be changed at all, an objection Latin alchemists were still answering four hundred years later.",
        markers: ["Jabir ibn Hayyan", "Al-Razi", "Mercury–sulphur", "Takwin", "Ilm al-mizan"],
      },
      {
        region: "The Latin West",
        name: "Alchimia",
        span: "12th–17th century",
        description:
          "Latin Europe received the art by translation in 1144 and spent six centuries arguing with it. The Summa Perfectionis built a corpuscular theory of matter that fed directly into seventeenth-century natural philosophy; the pseudo-Lullian corpus and the emblem books built a symbolic literature of extraordinary density. It is the only tradition in which alchemy becomes a major visual and literary art — Atalanta Fugiens is simultaneously a book of engravings, a book of epigrams and a book of fugues.",
        markers: ["Summa Perfectionis", "Pseudo-Lull", "Rosarium", "Emblem books", "Decknamen"],
      },
      {
        region: "Early modern Europe",
        name: "Chymistry",
        span: "16th–18th century",
        description:
          "Historians now use a single undifferentiated word for the period in which alchemy and chemistry cannot be separated, because the practitioners did not separate them. Paracelsus turned the art from metals toward medicine and added salt as a third principle. Newton wrote perhaps a million words on it, more than on physics. Boyle, long cast as alchemy's executioner, pursued transmutation and lobbied to repeal the statute forbidding it. The split comes only with Lavoisier's new nomenclature, which made the old vocabulary unusable.",
        markers: ["Paracelsus", "Tria prima", "Van Helmont", "Starkey", "Newton", "Boyle"],
      },
      {
        region: "China",
        name: "Waidan — the External Elixir",
        span: "2nd century BCE – 10th century CE",
        description:
          "The older of the two Chinese arts, and probably the oldest alchemical tradition anywhere. Its aim is not gold but transcendence: a compounded elixir, taken internally, that confers longevity and finally immortality. Cinnabar is the master material, prized because it yields mercury on heating and can be recovered as cinnabar again — a visible death and resurrection in the vessel. Ge Hong's Baopuzi is the great systematic statement. The practice was lethal in a well-documented way: several Tang emperors died of elixir poisoning, and the tradition's decline is not unconnected.",
        markers: ["Cantong qi", "Ge Hong", "Baopuzi", "Cinnabar", "Taiqing", "Elixir poisoning"],
      },
      {
        region: "China",
        name: "Neidan — the Internal Elixir",
        span: "8th century – present",
        description:
          "The most radical move any alchemical tradition made: the furnace, the vessel and the ingredients are relocated inside the practitioner's own body. The elixir is compounded from jing, qi and shen — essence, breath and spirit — circulated through the cinnabar fields on a precisely timed schedule of heating and cooling borrowed wholesale from the external art. The technical vocabulary of waidan survives intact and is now read as physiology. Zhang Boduan's Awakening to Reality is its central poem; the Quanzhen school carried it into a monastic order that still exists.",
        markers: ["Zhang Boduan", "Wuzhen pian", "Jing–qi–shen", "Dantian", "Huohou", "Quanzhen"],
      },
      {
        region: "India",
        name: "Rasaśāstra — the Science of Mercury",
        span: "c. 8th century – present",
        description:
          "Mercury is rasa, and rasa is the seed of Shiva; mica is the seed of the Goddess; their conjunction in the vessel is explicitly a divine marriage. The declared goal is not wealth but dehavāda, the doctrine of the perfected body — a body made adamantine, immune to decay, liberated while still alive. Gold-making is real in these texts but subordinate, often a test that the mercury has reached the required potency before it is given to a human being. The tradition fuses with Hatha yoga and the Nath Siddhas, and it never stopped: mercurial preparations remain part of licensed Ayurvedic pharmacy today.",
        markers: ["Rasārṇava", "Pārada", "Dehavāda", "Nath Siddhas", "Abhraka", "Jīvanmukti"],
      },
      {
        region: "Tibet",
        name: "Chulen and the Mercury Ash",
        span: "11th century – present",
        description:
          "Tibetan medicine absorbed the Indian rasāyana material and built something procedurally distinct around it. Chulen, essence extraction, is a discipline of subsisting on compounded pills rather than ordinary food, practised in retreat. More striking is tsothal, a purified mercury ash whose preparation runs to weeks of staged detoxification and is transmitted as a restricted lineage practice; it remains an ingredient in the highest-grade precious pills of Sowa Rigpa. This is a living alchemy with a pharmacopoeia, a training system and a regulatory problem.",
        markers: ["Bcud len", "Tsothal", "Sowa Rigpa", "Precious pills", "Yuthok"],
      },
      {
        region: "Korea and Japan",
        name: "The East Asian Periphery",
        span: "7th century – 19th century",
        description:
          "Both received Chinese models rather than originating their own, and the honest account is one of adaptation rather than invention. Korean naedan developed within Chosŏn-period Daoist practice and produced a modest literature of its own. In Japan, elixir and longevity techniques arrive with Daoist and esoteric Buddhist transmission and are absorbed into Shugendō mountain asceticism and into medicine, without ever constituting a separate alchemical school. Claims for an independent Japanese alchemy should be treated sceptically.",
        markers: ["Naedan", "Chosŏn Daoism", "Shugendō", "Esoteric Buddhism"],
      },
      {
        region: "Jewish and Christian Kabbalah",
        name: "Aesch Mezareph",
        span: "16th–18th century",
        description:
          "The intersection of alchemy and Kabbalah is later and thinner than popular accounts suggest, and most of it happens in Christian Kabbalah rather than Jewish. The one substantial alchemical-kabbalistic treatise, Aesch Mezareph, survives only in the Latin of Knorr von Rosenroth's Kabbala Denudata, which maps the metals onto the sefirot. Maria the Jewess is routinely claimed for this tradition, but her name attaches to her centuries after the fact and tells us little. Treat the whole area as genuinely interesting and poorly evidenced.",
        markers: ["Aesch Mezareph", "Kabbala Denudata", "Sefirot and metals", "Knorr von Rosenroth"],
      },
    ],
  },

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "Physika kai Mystika",
        meta: "Pseudo-Democritus · Greek · 1st–2nd century",
        description:
          "On Natural and Mystical Things, the earliest substantial alchemical text to survive. It is mostly recipes — for gold, for silver, for gems, for purple dye — punctuated by the refrain that one nature delights in another, one nature conquers another, one nature masters another. The theory is thin and the practice detailed, which is roughly the reverse of what later readers expect.",
      },
      {
        title: "The Writings of Zosimos",
        meta: "Zosimos of Panopolis · Greek · c. 300",
        description:
          "The first alchemist with a recognisable voice, writing to a woman named Theosebeia. The corpus includes descriptions of stills and furnaces alongside the Visions, in which a priest at an altar is dismembered, burned and reconstituted as spirit. Zosimos offers no apology for the juxtaposition, and any account of alchemy that cannot accommodate both halves of him is incomplete.",
      },
      {
        title: "Cantong qi",
        meta: "Attributed to Wei Boyang · Chinese · c. 142 CE",
        description:
          "The Token for the Joining of the Three, the foundational Chinese alchemical scripture and one of the most commented-upon texts in the language. It welds the cosmology of the Book of Changes to the Daoist cosmogony and to the elixir, in verse dense enough that it sustained both an external and, later, an internal reading. Every subsequent Chinese alchemist writes in its shadow.",
      },
      {
        title: "Baopuzi Neipian",
        meta: "Ge Hong · Chinese · c. 320",
        description:
          "The Master Who Embraces Simplicity, the great systematic defence of elixir alchemy. Ge Hong argues at length that immortality is attainable by technique rather than by fate, catalogues elixirs and their effects, and is scathing about practitioners who lack the texts or the discipline. It is the single most informative source on what external alchemy actually involved.",
      },
      {
        title: "The Jabirian Corpus",
        meta: "Arabic · 9th–10th century",
        description:
          "Thousands of treatises under the name of Jabir ibn Hayyan, almost certainly the work of a school rather than one man. It supplies the theory that governs everything afterward: all metals are composed of mercury and sulphur in varying proportion and purity, so transmutation is a matter of adjusting a ratio. The Books of the Balance push this toward a quantitative science of matter, and the takwin treatises toward the artificial generation of life.",
      },
      {
        title: "Sirr al-asrar",
        meta: "Abu Bakr al-Razi · Arabic · c. 900",
        description:
          "The Secret of Secrets, and the most purely practical major text in any tradition. Al-Razi classifies every substance, every piece of apparatus and every operation into ordered tables, with almost no allegory and no appeal to the operator's spiritual state. Read beside Zosimos it shows how wide the range of alchemical writing really is.",
      },
      {
        title: "The Emerald Tablet",
        meta: "Arabic, then Latin from the twelfth century",
        description:
          "A few lines asserting the correspondence of above and below, attributed to Hermes and prefixed to centuries of work as its charter. Its brevity is its power: it states a principle without specifying an operation, leaving every practitioner to find his own in it. Shared with the Hermeticism shelf, where its textual history is set out.",
      },
      {
        title: "Summa Perfectionis",
        meta: "Pseudo-Geber · Latin · c. 1310",
        description:
          "The most influential alchemical work of the Latin Middle Ages, written under Jabir's Latinised name but shown by modern scholarship to be the work of Paul of Taranto. It argues that substances are built from tightly packed corpuscles, an account of matter that fed directly into seventeenth-century natural philosophy. Sober, systematic, and almost free of allegory.",
      },
      {
        title: "Rasārṇava",
        meta: "Sanskrit · c. 11th–12th century",
        description:
          "The Flood of Mercury, cast as a dialogue between Bhairava and the Goddess, and the central text of Indian alchemy. It sets out the eighteen operations on mercury, insists that transmuting metal is merely the proof that the mercury is fit for a body, and states the tradition's governing ambition without embarrassment: not gold, but a body that does not die.",
      },
      {
        title: "Wuzhen pian",
        meta: "Zhang Boduan · Chinese · 1075",
        description:
          "Awakening to Reality, the founding poem of the southern internal alchemy lineage and the counterpart to the Cantong qi for neidan. Eighty-one verses that take the entire external vocabulary — furnace, tripod, lead, mercury, firing times — and relocate it inside the body, with a deliberate ambiguity that the commentaries have been unpacking for nine hundred years.",
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
    eyebrow: "Two Necessary Cautions",
    body:
      "First, on the inner reading: the idea that alchemy was really about spiritual transformation, with the furnace as mere allegory, is not an ancient teaching. It took shape in the nineteenth century with Mary Anne Atwood and Ethan Allen Hitchcock, and reached its most powerful form in Jung. That reading illuminates Jung and symbolism; it is not a historical account, and Principe and Newman have shown the Western alchemists overwhelmingly meant what they said about metals. Second, on the plural: the resemblances between Greek, Chinese and Indian alchemy are not evidence of one lost universal teaching. Needham argued for transmission from China westward; most scholars now hold that the major centres arose independently and exchanged material only later and partially. Shared mercury symbolism and shared colour sequences are substantially explained by shared materials — anyone heating cinnabar sees the same things. Comparison is worth doing, and it is worth doing without the assumption that it will find a single origin.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Ideas Across the Traditions" },
    entries: [
      {
        term: "Prima Materia",
        title: "The First Matter",
        description:
          "Western transmutation begins by reducing a substance to formlessness, stripping the qualities that make it the particular thing it is so that a new form can be imposed. The sources give it a hundred names and decline to say plainly what it is. What matters structurally is the move: you cannot make something new without first undoing what is there.",
      },
      {
        term: "Solve et Coagula",
        title: "Dissolve and Bind",
        description:
          "The rhythm of the Western work, repeated at every scale. What is fixed must be made volatile and what is volatile must be fixed; what is joined must be separated and rejoined at a higher degree of purity. The operation is performed many times over, and the repetition is method, not failure.",
      },
      {
        term: "Mercurius",
        title: "Mercury and Sulphur",
        description:
          "Inherited from the Jabirian corpus: metals differ because they combine two principles in different proportions and purities. Mercury confers fusibility and lustre, sulphur combustibility and colour. Neither is the ordinary substance of that name. Paracelsus later added salt, giving the tria prima that governed medicine as well as metals.",
      },
      {
        term: "Rasa",
        title: "Mercury as Divine Seed",
        description:
          "Indian alchemy reaches mercury by a different road. Pārada is the seed of Shiva and abhraka the menstrual seed of the Goddess; their union in the vessel is a marriage, and the resulting compound carries a divine potency into whatever receives it. The same metal, the same centrality, an entirely different warrant — which is precisely why the traditions should not be collapsed.",
      },
      {
        term: "Jing Qi Shen",
        title: "The Three Treasures",
        description:
          "Internal alchemy's ingredients: essence, breath and spirit, the body's own substances refined into one another in sequence. Essence is converted to breath, breath to spirit, spirit returned to emptiness. The furnace is the lower cinnabar field and the fire is attention, applied on a schedule as exacting as any kiln.",
      },
      {
        term: "Nigredo",
        title: "The Sequence of Colours",
        description:
          "The Western work is tracked by what appears in the vessel: blackening, then whitening, then often a spectrum, then reddening. These are real observations — putrefaction and the colour changes of metallic compounds — and simultaneously the stages of an interior process. The blackening is the one everyone remembers, because it is the stage at which the work looks ruined.",
      },
      {
        term: "Coniunctio",
        title: "The Union of Opposites",
        description:
          "Sun and moon, king and queen, sulphur and mercury, fixed and volatile; in India Shiva and Shakti, in China lead and mercury as yang and yin. It is figured as a marriage, often one ending in death, since the pair must perish as separate things before anything new comes of them. The erotic imagery names a real requirement that the opposites genuinely combine rather than merely sit together.",
      },
      {
        term: "Decknamen",
        title: "Cover Names",
        description:
          "The deliberate practice of calling one substance by the name of another — the green lion, the grey wolf, the doves of Diana. Each is a specific reagent, recoverable by anyone with the key and opaque to anyone without. Treating these as pure symbolism loses the chemistry; treating them as pure code loses why those particular images were chosen.",
      },
      {
        term: "Huohou",
        title: "Fire Times",
        description:
          "The Chinese insistence that an operation's timing matters as much as its ingredients. Heating is scheduled against cosmological cycles — hexagrams, months, the twelve double-hours — so that the work in the vessel is synchronised with the work of the cosmos. Carried into internal alchemy unchanged, where it governs the tempo of breath and attention.",
      },
      {
        term: "Dehavāda",
        title: "The Perfected Body",
        description:
          "The Indian goal, and the clearest case of a tradition declining the Western priority altogether. The siddha seeks a body made adamantine and deathless, liberated while still alive rather than after death. Transmuting base metal is the assay that proves the mercury strong enough to attempt it.",
      },
      {
        term: "Lapis",
        title: "The Stone and the Elixir",
        description:
          "The Western goal, understood as a single perfected substance that brings whatever it touches to its own perfection: base metal to gold, sick body to health, mortal life to something longer. Gold-making is thus one application of the stone rather than the point of it, which is why the same texts move so easily between metallurgy and medicine.",
      },
      {
        term: "Opus",
        title: "The Work and the Worker",
        description:
          "Every tradition holds that the operator's condition bears on the result — not as pious addendum but as mechanism, since an impure practitioner was held to produce an impure product. Ge Hong requires retreat and fasting; the Latin texts require solitude and patience; the Indian texts require initiation. The work and the worker are one project seen from two sides.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "Two Millennia at the Furnace" },
    entries: [
      {
        period: "c. 200 BCE",
        title: "Han Beginnings",
        description:
          "Chinese elixir practice appears in the historical record, bound up with court patronage and the search for deathlessness. Emperor Wu of Han funds practitioners; the Cantong qi follows within three centuries and becomes the tradition's charter.",
      },
      {
        period: "1st–3rd c. CE",
        title: "Alexandria",
        description:
          "Egyptian craft traditions in metals, dyes and glass meet Greek matter theory. Maria the Jewess is credited with the water bath that still carries her name, along with several sealed vessels and stills; the apparatus of the laboratory is in place before the theory is.",
      },
      {
        period: "c. 300",
        title: "Zosimos and Ge Hong",
        description:
          "Within a generation of each other and in total mutual ignorance, the Greek and Chinese traditions each acquire their first great systematiser. Zosimos gives the West a literature with a voice and a history; Ge Hong gives China a defence of elixir alchemy that no later writer supersedes.",
      },
      {
        period: "4th–7th c.",
        title: "Byzantine Compilers",
        description:
          "Synesius, Olympiodorus and Stephanus copy, excerpt and interpret the Greek alchemists. Their anthologies are the reason anything survives, and their allegorising sets the interpretive habits of everyone downstream.",
      },
      {
        period: "8th–10th c.",
        title: "The Arabic Transformation",
        description:
          "Alchemy is systematised in Arabic. The Jabirian corpus supplies the mercury–sulphur theory, and al-Razi classifies substances and apparatus with a precision unmatched for centuries. The word itself comes through Arabic, al-kimiya, as does the elixir.",
      },
      {
        period: "8th–11th c.",
        title: "The Internal Turn",
        description:
          "Chinese practice moves inward. Elixir poisoning has discredited the external art — several Tang emperors die of it — and neidan reinterprets the entire technical vocabulary as a map of the body. The furnace is abandoned without a word of the language being lost.",
      },
      {
        period: "1144",
        title: "Alchemy Enters Latin",
        description:
          "Robert of Chester completes the first Latin translation of an alchemical work and notes in his preface that the Latin world does not yet know what alchemy is. Within a century it is a recognised, contested and widely practised art.",
      },
      {
        period: "11th–13th c.",
        title: "The Sanskrit Synthesis",
        description:
          "Rasaśāstra reaches its classical form in the Rasārṇava and its successors, fusing tantric ritual, Siddha yoga and mercurial pharmacy into one discipline. Alchemy and Hatha yoga develop in the same milieu and borrow from each other throughout.",
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
          "Paracelsus redirects European alchemy from making gold toward making medicines, founding iatrochemistry and introducing salt as a third principle. His followers carry chemical medicine into the universities over furious opposition from the Galenists.",
      },
      {
        period: "17th c.",
        title: "Chymistry",
        description:
          "The great age of alchemical emblem books and of serious experiment, often in the same people. Newton wrote perhaps a million words on alchemy. Boyle pursued transmutation and lobbied to repeal the law forbidding it. Historians now use the single word chymistry for this undifferentiated practice.",
      },
      {
        period: "18th c.",
        title: "The European Separation",
        description:
          "Chemistry detaches, keeping the apparatus and the substances while discarding the matter theory and the secrecy. Lavoisier's new nomenclature completes the break by making the old language unusable. European alchemy does not so much end as lose its vocabulary.",
      },
      {
        period: "19th–20th c.",
        title: "Reinterpretation",
        description:
          "Atwood and Hitchcock recast alchemy as a purely inner discipline, a reading Jung developed into a full psychology of individuation. Meanwhile the Asian traditions continue without interruption, largely unnoticed by the European conversation about what alchemy had been.",
      },
      {
        period: "1980s–present",
        title: "Recovery and Continuity",
        description:
          "Principe, Newman and others reconstruct what the Western operations actually were, in several cases by performing them. Needham, Sivin, Robinet and Pregadio open the Chinese material; White and Wujastyk the Indian. Rasaśāstra and Tibetan mercury processing remain living practices with living regulatory controversies.",
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
        note: "The best single book on Western alchemy by a wide margin. Principe is both historian and working chemist, and he decodes actual recipes and runs them, which lets him tell you what the green lion was. Start here even if your interest is elsewhere.",
      },
      {
        stage: "For the plural",
        title: "Alchemy and Chemistry in the Middle Ages and Renaissance",
        author: "Various; begin with Principe, editor",
        note: "Comparative work is scattered rather than consolidated. Read the Western, Chinese and Indian specialists side by side rather than trusting any single synthesis, and be sceptical of books that promise one.",
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
        stage: "For China",
        title: "Great Clarity: Daoism and Alchemy in Early Medieval China",
        author: "Fabrizio Pregadio",
        note: "The clearest account of what external alchemy was for and how it worked, by the scholar who has done most to make the Chinese material available in English. His translations of the Cantong qi and Wuzhen pian are the companions to it.",
      },
      {
        stage: "For internal alchemy",
        title: "The Taoist Body / Taoist Meditation",
        author: "Isabelle Robinet",
        note: "Robinet established how neidan actually reuses the external vocabulary, and why that reuse is a serious intellectual move rather than a retreat into metaphor. Dense, and worth the effort.",
      },
      {
        stage: "For India",
        title: "The Alchemical Body",
        author: "David Gordon White",
        note: "The standard work on rasaśāstra and the Siddha traditions, and the book that put Indian alchemy into the comparative conversation. Strong on the tantric setting; read alongside Wujastyk for the pharmacological side.",
      },
      {
        stage: "For the method",
        title: "Alchemy Tried in the Fire",
        author: "William R. Newman and Lawrence M. Principe",
        note: "A close study of Starkey and Boyle demonstrating how alchemical practice worked as experimental science. The book that retired the idea of a clean break between alchemy and chemistry.",
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
        note: "Places alchemy in a much older story about smiths, ores and the acceleration of natural processes. The comparative method has dated badly and the book is where many of the universalist claims above originate — read it knowing that.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Traditions" },
    entries: [
      { term: "Al-kimiya", gloss: "Arabic; the art itself, and the root of every European name for it." },
      { term: "Al-iksir", gloss: "Arabic; the transmuting agent, which becomes the Latin elixir." },
      { term: "Prima materia", gloss: "Latin; the formless first matter a substance is reduced to before reshaping." },
      { term: "Solve et coagula", gloss: "Latin; dissolve and bind, the alternation that drives the Western work." },
      { term: "Nigredo", gloss: "The blackening; putrefaction, and the stage at which the work appears to have failed." },
      { term: "Albedo", gloss: "The whitening; purification, and the first clear sign that the work proceeds." },
      { term: "Rubedo", gloss: "The reddening; the final stage, at which the stone is said to be achieved." },
      { term: "Coniunctio", gloss: "The union of opposites, figured as a marriage that passes through death." },
      { term: "Decknamen", gloss: "German, used technically; a substance deliberately called by another's name." },
      { term: "Tria prima", gloss: "Paracelsus's salt, sulphur and mercury, underlying body, soul and spirit." },
      { term: "Athanor", gloss: "The slow furnace, built to hold steady heat for the weeks a stage required." },
      { term: "Chrysopoeia", gloss: "Greek; gold-making, one application of the stone rather than the whole aim." },
      { term: "Takwin", gloss: "Arabic; the artificial generation of living things, the Jabirian corpus's boldest claim." },
      { term: "Ilm al-mizan", gloss: "Arabic; the science of the balance, Jabir's quantitative theory of natures." },
      { term: "Dan", gloss: "Chinese; cinnabar, and by extension the elixir itself." },
      { term: "Waidan", gloss: "Chinese; the external elixir, compounded in a vessel over fire." },
      { term: "Neidan", gloss: "Chinese; the internal elixir, compounded in the body from its own substances." },
      { term: "Jing, qi, shen", gloss: "Chinese; essence, breath and spirit — internal alchemy's three ingredients." },
      { term: "Dantian", gloss: "Chinese; the cinnabar fields, the body's three centres of refinement." },
      { term: "Huohou", gloss: "Chinese; fire times, the cosmologically scheduled tempo of heating." },
      { term: "Rasa", gloss: "Sanskrit; taste, essence, fluid — and mercury, the master substance." },
      { term: "Pārada", gloss: "Sanskrit; mercury, understood as the seed of Shiva." },
      { term: "Abhraka", gloss: "Sanskrit; mica, understood as the seed of the Goddess and mercury's partner." },
      { term: "Rasaśāstra", gloss: "Sanskrit; the science of mercury, Indian alchemy's own name for itself." },
      { term: "Dehavāda", gloss: "Sanskrit; the doctrine of the body, holding that the body can be perfected and kept." },
      { term: "Jīvanmukti", gloss: "Sanskrit; liberation attained while still alive and embodied." },
      { term: "Bcud len", gloss: "Tibetan, chulen; essence extraction, subsisting on compounded pills in retreat." },
      { term: "Tsothal", gloss: "Tibetan; purified mercury ash, prepared over weeks as a restricted lineage practice." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/library/philosophies", label: "Philosophies", kind: "Shelf" },
    { href: "/topics/alchemy", label: "Alchemy", kind: "Topic" },
    { href: "/topics/science-and-the-ether", label: "Science and the Ether", kind: "Topic" },
    { href: "/journal/alchemy-language-of-change", label: "Alchemy, the Language of Change", kind: "Journal" },
  ],
};
