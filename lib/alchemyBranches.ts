import type { ShelfBranch } from "./library";

/**
 * The strands of the Alchemies shelf, each with enough substance for its own
 * page at /library/alchemies/<slug>. Kept apart from lib/alchemy.ts so the
 * shelf file stays readable.
 */
export const alchemyBranches: ShelfBranch[] = [
  {
    slug: "greco-egyptian",
    title: "Greco-Egyptian",
    meta: "Alexandria · 1st–4th c. CE",
    description:
      "The earliest literature, where craft recipes for metals, dyes and gems meet Greek matter theory. Zosimos of Panopolis writes technical instructions and visionary dreams in the same corpus, apparently without any sense of category violation, and the Western tradition inherits both halves from him.",
    summary:
      "Where the art begins: workshop recipes for imitating gold and purple, a Greek theory of matter to explain them, and the first alchemist to leave a voice.",
    overview: [
      "Alchemy does not begin with philosophy. It begins in workshops, among people who made things: metalworkers alloying cheap metals to pass for precious ones, dyers extracting purple, jewellers producing convincing emeralds. Two Greek papyri found together at Thebes and now in Leiden and Stockholm preserve this world directly. They are recipe collections, practical and unmysterious, and they describe exactly the operations that the first alchemical literature would shortly afterward start to theorise.",
      "What turned craft into alchemy was the arrival of an explanation. Greek natural philosophy supplied the idea that substances share an underlying matter and differ only in the qualities imposed on it — and if that is so, then changing the qualities changes the substance, and a gilder's trick and a genuine transmutation lie on the same continuum. The earliest substantial text, circulating under the name of Democritus, holds the two together: pages of recipes punctuated by the refrain that one nature delights in, conquers and masters another.",
      "By about 300 the picture is richer and far stranger. Zosimos of Panopolis writes to a woman named Theosebeia with instructions on stills and furnaces, and in the same body of work records a dream of a priest at an altar who dismembers himself, is cooked, and emerges transformed into spirit. He offers no apology for the combination and seems to see no difficulty in it. Everything the Western tradition later argues about — whether this is chemistry or interior work — is already present and already undivided in its first real author.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Egyptian Work" },
      entries: [
        {
          term: "Baphē",
          title: "Dyeing as the Root Metaphor",
          description:
            "The vocabulary comes from the dye vat before it comes from the furnace. Tincture, tinging and staining describe what the alchemist does to metal, and the idea that a small quantity of a potent agent transforms a large mass of material is a dyer's observation before it is a philosopher's theory.",
        },
        {
          term: "Organa",
          title: "The Apparatus",
          description:
            "Maria the Jewess is credited with the tribikos, a three-armed still, the kerotakis for exposing metals to vapour, and the water bath that still carries her name in kitchens. The physical equipment of the laboratory is in place before any coherent theory of what it is doing.",
        },
        {
          term: "Chrōmata",
          title: "The Sequence of Colours",
          description:
            "Blackening, whitening, yellowing and purpling are set out here as the order in which the work proceeds, and they remain the tradition's way of tracking progress for fifteen centuries afterward. They are real observations of metallic compounds before they are stages of anything interior.",
        },
        {
          term: "Opsis",
          title: "The Visions",
          description:
            "Zosimos records dreams of dismemberment, boiling and reconstitution alongside his technical instructions. Whether these are allegories of distillation, genuine religious experience, or both at once has never been settled, and the question is as old as the literature.",
        },
        {
          term: "Phthonos",
          title: "Secrecy from the Start",
          description:
            "The texts withhold deliberately. Pseudo-Democritus breaks off at the crucial moment with the line that the book was lost; later writers speak of the envy of the ancients. Concealment is not a later corruption of a once-plain art but present in its earliest documents.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "The Leiden and Stockholm Papyri",
          meta: "Greek · Thebes · 3rd–4th c. CE",
          description:
            "Two papyrus codices of practical recipes, found together and split between collections, covering the colouring of metals, the imitation of precious stones and the dyeing of cloth. No theory, no secrecy, no allegory — the plain workshop knowledge that alchemical literature grew out of and then began to hide.",
        },
        {
          title: "Physika kai Mystika",
          meta: "Pseudo-Democritus · Greek · 1st–2nd c. CE",
          description:
            "The earliest substantial alchemical text. Mostly recipes for gold, silver, gems and purple, framed by a story about a master who died before teaching and a book recovered from a temple pillar. Matteo Martelli's edition reconstructs what is left of the original four books.",
        },
        {
          title: "The Writings of Zosimos",
          meta: "Greek · c. 300",
          description:
            "Letters, technical treatises and the Visions, addressed largely to Theosebeia. Zosimos cites predecessors, argues with rivals and treats alchemy as a tradition with a history, which makes him the first author in it rather than merely a source for it.",
        },
        {
          title: "The Byzantine Commentators",
          meta: "Greek · 4th–7th c.",
          description:
            "Synesius, Olympiodorus and Stephanus of Alexandria excerpt, explain and allegorise the earlier Greek alchemists. Their anthologies are the reason any of this survived at all, and their interpretive habits shaped how every later tradition read the material.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Egyptian Work" },
      entries: [
        {
          stage: "Begin here",
          title: "Becoming Gold",
          author: "Shannon Grimes",
          note: "Zosimos read as an Egyptian temple craftsman rather than a proto-chemist or a mystic. It makes sense of the technical and visionary writing as one vocation rather than two, which is the central puzzle of this period.",
        },
        {
          stage: "For the texts",
          title: "The Four Books of Pseudo-Democritus",
          author: "Matteo Martelli, editor",
          note: "A critical edition and translation of the earliest alchemical work, with the Syriac witnesses that preserve material lost in Greek. The place to see what the first alchemical book actually said.",
        },
        {
          stage: "For context",
          title: "The Secrets of Alchemy",
          author: "Lawrence M. Principe",
          note: "Its opening chapters set the Greco-Egyptian material in its workshop setting and decode several of the recipes, demonstrating what the operations physically were.",
        },
      ],
    },
  },

  {
    slug: "islamic",
    title: "Islamic Alchemy",
    meta: "Arabic · 8th–12th c.",
    description:
      "Where the art becomes systematic. The Jabirian corpus supplies the mercury-sulphur theory that makes transmutation a matter of adjusting proportions, and al-Razi classifies substances and apparatus with a precision not matched for centuries. The word alchemy itself, and the elixir, come through Arabic.",
    summary:
      "Where alchemy acquires a theory of matter, a classification of substances, and the quantitative ambition that Europe inherited along with the vocabulary.",
    overview: [
      "The Greek material reached Arabic through the translation movement of the eighth and ninth centuries, and what happened to it there was decisive for everything afterward. Greco-Egyptian alchemy was a body of practice with scattered explanations. Arabic alchemy made it a science: a theory of what metals are, a systematic account of the substances and apparatus available, and an ambition to make the whole thing quantitative.",
      "The central idea is the mercury-sulphur theory. All metals are composed of two principles — a mercurial one conferring fusibility and lustre, a sulphurous one conferring combustibility and colour — combined in varying proportions and degrees of purity. Neither is the ordinary substance of that name. The consequence is enormous: if lead and gold differ only in ratio and purity, then transmutation is not the creation of something new but the correction of a deficiency, and the project becomes rational rather than miraculous.",
      "The Jabirian corpus, thousands of treatises under the name of Jabir ibn Hayyan and almost certainly the work of a school rather than one man, pushes this toward a science of the balance: the proportions of the four qualities in a substance expressed numerically, with the elixir as the agent that adjusts them. Al-Razi, working as a practising physician, strips away much of the mysticism and produces something closer to a laboratory manual — substances classified, apparatus listed, procedures described in order. Both reach Latin Europe in translation, and the theory survives there essentially unchanged for five hundred years.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Arabic Work" },
      entries: [
        {
          term: "Zaybaq wa Kibrit",
          title: "Mercury and Sulphur",
          description:
            "The theory that organises everything downstream. Metals differ by the proportion and purity of two principles, so transmutation becomes a matter of adjustment rather than creation. Paracelsus later adds salt, but the pair remains the foundation into the seventeenth century.",
        },
        {
          term: "Mīzān",
          title: "The Balance",
          description:
            "The Jabirian attempt to express the qualities of a substance numerically, so that the elixir required to correct it could be calculated. It is tied to the numerical values of Arabic letters and does not work, and it is nonetheless one of the earliest sustained efforts to make matter theory quantitative.",
        },
        {
          term: "Al-Iksīr",
          title: "The Elixir",
          description:
            "The agent of transformation, understood as a prepared substance applied in small quantity to effect a large change. The word passes into Latin and then into every European language, and carries with it the idea that one perfected thing can perfect others.",
        },
        {
          term: "Tasnīf",
          title: "Classification",
          description:
            "Al-Razi sorts substances into bodies, spirits, stones, vitriols, boraxes and salts, and lists the apparatus and procedures of the laboratory systematically. It is recognisably the organisation of a chemical manual, several centuries before anything comparable in Latin.",
        },
        {
          term: "Takwīn",
          title: "Artificial Generation",
          description:
            "The Jabirian texts extend the art beyond metals to the generation of living things, including, notoriously, the artificial human. The claim sets the outer limit of what alchemical theory was taken to permit, and troubled Latin readers considerably.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "The Jabirian Corpus",
          meta: "Arabic · 9th–10th c.",
          description:
            "Thousands of treatises under the name of Jabir ibn Hayyan, including the Books of the Balance and the Seventy Books. The attribution to a single eighth-century figure is not sustainable; what the corpus represents is a school's output over generations, and its theory shaped everything that followed.",
        },
        {
          title: "Sirr al-Asrār",
          meta: "Abu Bakr al-Razi · Arabic · c. 900",
          description:
            "The Secret of Secrets, a practical manual by a working physician. Substances, equipment and procedures are set out in order, with the theorising kept to a minimum. Of all pre-modern alchemical writing it is the easiest to recognise as chemistry.",
        },
        {
          title: "Sirr al-Khalīqa",
          meta: "Attributed to Balinus · Arabic · c. 750–850",
          description:
            "The Book of the Secret of Creation, attributed to a figure derived from Apollonius of Tyana, and the earliest known source of the Emerald Tablet, which appears at its close. It is the channel through which the tradition's single most quoted text entered the world.",
        },
        {
          title: "Kitāb al-Mā' al-Waraqī",
          meta: "Ibn Umail · Arabic · 10th c.",
          description:
            "The Book of the Silvery Water, a commentary on an image of a sage holding a tablet, combining allegorical interpretation with quotation of earlier authorities. Translated into Latin as the Tabula Chemica, it carried a contemplative strand of Arabic alchemy into Europe.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Arabic Work" },
      entries: [
        {
          stage: "Begin here",
          title: "Names, Natures and Things",
          author: "Syed Nomanul Haq",
          note: "On Jabir and the theory of the balance, with translation and commentary on the Book of Stones. The clearest account in English of what the Jabirian project was actually trying to do.",
        },
        {
          stage: "For the setting",
          title: "The Secrets of Alchemy",
          author: "Lawrence M. Principe",
          note: "Its chapter on Arabic alchemy explains the mercury-sulphur theory and the transmission into Latin more clearly and briefly than anything else available.",
        },
        {
          stage: "For transmission",
          title: "Alchemy Tried in the Fire",
          author: "William R. Newman and Lawrence M. Principe",
          note: "Not about Arabic alchemy as such, but it traces how the theory arrived in Europe and what seventeenth-century practitioners were still doing with it five hundred years later.",
        },
      ],
    },
  },
  {
    slug: "latin",
    title: "Latin Alchemy",
    meta: "Europe · 12th–18th c.",
    description:
      "Translation from Arabic from 1144 onward produces a sophisticated Latin tradition: corpuscular matter theory in the Summa Perfectionis, the emblem books of the seventeenth century, and the chymistry of Newton and Boyle, who pursued transmutation seriously while founding what became modern chemistry.",
    summary:
      "Six centuries from the first translation to the separation of chemistry, taking in corpuscular matter theory, the emblem book, and a great deal of litigation.",
    overview: [
      "Robert of Chester finished the first Latin translation of an alchemical work in 1144 and noted in his preface that the Latin world did not yet know what alchemy was. Within a century it knew very well. The Arabic theory arrived more or less intact, was absorbed into a scholastic framework, and produced a tradition that argued about matter with real rigour.",
      "Its most consequential work is the Summa Perfectionis, written around 1310 under the Latinised name of Jabir but shown by modern scholarship to be by Paul of Taranto. It argues that substances are built from tightly packed corpuscles of varying size and compaction, which explains why gold resists every assay and why the alchemist must break a metal down before rebuilding it. That account of matter fed directly into seventeenth-century natural philosophy, which is to say into the origins of modern chemistry.",
      "The later centuries are where alchemy acquires its popular image. Emblem books pair engravings with cryptic verse; patrons fund laboratories and prosecute the alchemists who fail; a papal bull of 1317 is directed at alchemical counterfeiting rather than at the theory. And the period ends with Newton writing perhaps a million words on the subject and Boyle, long cast as alchemy's executioner, pursuing transmutation and lobbying to repeal the English law against it. Historians now use the single word chymistry for this undifferentiated practice, because the line we draw between alchemy and chemistry was not visible to the people doing it.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Latin Work" },
      entries: [
        {
          term: "Corpuscula",
          title: "Corpuscular Matter",
          description:
            "The Summa explains the properties of metals by the size and packing of the particles composing them. It is a genuine theory of matter, argued from laboratory evidence about what survives assay, and it is one of the clearest lines running from medieval alchemy into early modern science.",
        },
        {
          term: "Decknamen",
          title: "Cover Names",
          description:
            "The green lion, the grey wolf, the doves of Diana. Each denotes a specific reagent and is recoverable by anyone holding the key. The practice reaches its densest point in the Latin tradition, and decoding it is how modern historians have reconstructed what these recipes actually were.",
        },
        {
          term: "Emblema",
          title: "The Emblem",
          description:
            "From the sixteenth century the engraving carries as much of the argument as the text. The Rosarium's woodcuts and Maier's fifty emblems with their fugues make alchemy a visual and even musical enterprise, and supply almost every image the subject is now known by.",
        },
        {
          term: "Patrocinium",
          title: "Patronage and Fraud",
          description:
            "Princes funded alchemists and imprisoned those who failed. The resulting archive of contracts, trials and gallows is unusually rich, and it is some of the best evidence we have about what alchemists actually promised and actually did.",
        },
        {
          term: "Chymia",
          title: "Chymistry",
          description:
            "In the seventeenth century there is no distinction between alchemy and chemistry to be drawn. Boyle, Starkey and Newton pursued transmutation and careful quantitative experiment as one activity, and the modern separation is a later tidying of a messier reality.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "Summa Perfectionis",
          meta: "Pseudo-Geber · Latin · c. 1310",
          description:
            "The most influential alchemical work of the Latin Middle Ages: systematic, sober and almost free of allegory, with a corpuscular theory of matter argued from what survives assay. William Newman established that its author was Paul of Taranto rather than Jabir.",
        },
        {
          title: "Rosarium Philosophorum",
          meta: "Printed 1550 · woodcut series",
          description:
            "Twenty woodcuts following a king and queen through union, death, putrefaction and rebirth. The best-known visual statement of the coniunctio, and the series Jung built his reading of alchemy around four centuries later.",
        },
        {
          title: "Atalanta Fugiens",
          meta: "Michael Maier · 1617",
          description:
            "Fifty emblems, each with an engraving, a Latin epigram, a discourse and a three-voice fugue, intended to be looked at, read and heard together. The high point of alchemy as a total artwork.",
        },
        {
          title: "The Newton and Starkey Manuscripts",
          meta: "English and Latin · 17th c.",
          description:
            "Laboratory notebooks and letters rather than published books, and all the more valuable for it. George Starkey's correspondence and Newton's enormous alchemical archive show the work in progress, with its failures, repetitions and decoded recipes intact.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Latin Work" },
      entries: [
        {
          stage: "Begin here",
          title: "Alchemy Tried in the Fire",
          author: "William R. Newman and Lawrence M. Principe",
          note: "Starkey and Boyle studied closely enough to show alchemical practice working as experimental science. The book that retired the idea of a clean break between alchemy and chemistry.",
        },
        {
          stage: "For matter theory",
          title: "Atoms and Alchemy",
          author: "William R. Newman",
          note: "Traces corpuscular theory from the Summa Perfectionis into the seventeenth century, making the case that alchemy contributed directly to the mechanical philosophy rather than merely preceding it.",
        },
        {
          stage: "For Newton",
          title: "Newton the Alchemist",
          author: "William R. Newman",
          note: "What Newton was doing at the furnace for three decades, reconstructed from the manuscripts. Neither an embarrassment to be explained away nor a hidden key to the Principia.",
        },
      ],
    },
  },
  {
    slug: "waidan",
    title: "Waidan",
    meta: "China · external elixir · Han dynasty onward",
    description:
      "Laboratory alchemy pursuing an elixir of deathlessness, compounded chiefly from cinnabar and mercury and sealed in crucibles through long graded firings. Ge Hong's Baopuzi is its great compendium. Several Tang emperors are recorded as dying of the elixirs their alchemists prepared, which the tradition absorbed rather than being destroyed by.",
    summary:
      "The external elixir: cinnabar and mercury sealed in a crucible and fired for months, in pursuit of a body that does not die.",
    overview: [
      "Chinese alchemy developed with no contact with Alexandria and asks a different question. The Western tradition begins with metals and arrives at medicine; waidan begins with deathlessness and treats metals as a means. The elixir is the point, and gold matters mainly because its incorruptibility is the quality one hopes to acquire by ingesting it.",
      "The characteristic operation is the sealed crucible. Cinnabar — mercury sulphide — is heated to drive off mercury, which is then recombined with sulphur to re-form cinnabar, and the cycle repeated. The reversion is the heart of it: a substance decomposed and restored to itself is held to have been returned to a prior and purer state, and the elixir of nine cycles is more potent than that of seven. Firing times are graded with care and tied to cosmological cycles, so that the furnace reproduces the year in miniature.",
      "Ge Hong's Baopuzi, written around 320, is the great compendium and the best window onto what practitioners believed. He argues at length that deathlessness is attainable, catalogues elixirs and ingredients, and is withering about people who expect results without the solitude, expense and years the work demands. The tradition's obvious difficulty — that mercury and lead preparations are poisonous, and several Tang emperors died of them — was absorbed rather than fatal. Death after ingestion could be read as shijie, release from the corpse: not failure but departure.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the External Elixir" },
      entries: [
        {
          term: "Huandan",
          title: "The Reverted Elixir",
          description:
            "Cinnabar decomposed to mercury and recomposed to cinnabar, again and again. The returning is what confers potency, and an elixir is graded by how many cycles it has undergone — the nine-times reverted being the most powerful.",
        },
        {
          term: "Huohou",
          title: "Fire Times",
          description:
            "The schedule of heating: how hot, how long, in what sequence. It is specified in cosmological terms, so the firing tracks the cycles of the year and the hexagrams of the Book of Changes, and the furnace becomes a model of time rather than merely a source of heat.",
        },
        {
          term: "Dan",
          title: "Cinnabar",
          description:
            "The word means both cinnabar and elixir, and the ambiguity is doctrinal rather than accidental. Red mercury sulphide is the characteristic ingredient, the colour of vitality, and the substance whose behaviour under heat makes the whole reversion cycle possible.",
        },
        {
          term: "Zhai",
          title: "Purification and Seclusion",
          description:
            "The operator retires to a mountain, fasts, observes prohibitions and works unobserved. This is not decorative piety: the texts treat ritual preparation as a condition of the operation succeeding, on the same footing as the purity of the ingredients.",
        },
        {
          term: "Shijie",
          title: "Release from the Corpse",
          description:
            "The doctrine that a body left behind is not necessarily evidence of failure — the adept may have departed, leaving an appearance. It allowed the tradition to absorb the plain fact that elixirs killed people, and it is a reminder that these texts answer to religious commitments rather than to results alone.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "The Cantong qi",
          meta: "Attributed to Wei Boyang · c. 2nd c. CE",
          description:
            "The Token for Joining the Three, aligning the Book of Changes, Daoist cosmology and the work of the furnace into a single system in deliberately compressed language. It is the most commented-upon text in Chinese alchemy, and both the external and internal traditions read themselves back into it.",
        },
        {
          title: "Baopuzi Neipian",
          meta: "Ge Hong · c. 320",
          description:
            "The Master Who Embraces Simplicity. Arguments for the attainability of deathlessness, catalogues of elixirs and their ingredients, instructions on seclusion and timing, and sharp criticism of the credulous and the impatient. The single most informative waidan source.",
        },
        {
          title: "The Taiqing Scriptures",
          meta: "Great Clarity corpus · 3rd–6th c.",
          description:
            "The earliest identifiable tradition of Chinese alchemical texts, describing elixir methods together with the rites that frame them. They show alchemy embedded in a religious practice rather than standing apart as a technique.",
        },
        {
          title: "The Danjing Yaojue",
          meta: "Attributed to Sun Simiao · 7th c.",
          description:
            "Essential Formulas from the Alchemical Classics, attributed to the great physician. Practical elixir recipes with the ingredients and procedures set out plainly, from a figure better known for medicine, which shows how close the two pursuits sat.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the External Elixir" },
      entries: [
        {
          stage: "Begin here",
          title: "Great Clarity",
          author: "Fabrizio Pregadio",
          note: "Daoist alchemy in early medieval China, by the scholar who has done most to make the tradition legible in English. Clear on the religious setting and on why the internal work eventually displaced the external.",
        },
        {
          stage: "For the foundational text",
          title: "The Seal of the Unity of the Three",
          author: "Translated by Fabrizio Pregadio",
          note: "The Cantong qi with commentary, which is the only way to approach a text this compressed. Shows how one work could be read as a manual for the furnace and for the body alike.",
        },
        {
          stage: "For the chemistry",
          title: "Science and Civilisation in China, Volume 5",
          author: "Joseph Needham and collaborators",
          note: "The monumental survey, with several parts devoted to alchemy. Dated in its framing and unmatched in detail; indispensable for what the operations physically involved.",
        },
      ],
    },
  },
  {
    slug: "neidan",
    title: "Neidan",
    meta: "China · internal elixir · Tang and Song onward",
    description:
      "The same vocabulary turned inward: the body becomes the crucible, and the ingredients are the vital substances named jing, qi and shen, refined through meditation, breath and visualisation. Neidan does not reject waidan so much as relocate it, and it becomes the dominant form of Daoist practice.",
    summary:
      "The internal elixir: the furnace moved inside the practitioner, and the ingredients found in the body that is working the operation.",
    overview: [
      "From the Tang dynasty onward the operation moves inside. The vocabulary is kept almost entirely — crucible, furnace, firing times, the reverted elixir, cinnabar itself — but the vessel is now the practitioner's own body and the ingredients are the vital substances it already contains. Neidan does not refute waidan so much as reread it, arguing that the external work was always a figure for this one.",
      "The materials are the three treasures: jing, the generative essence; qi, breath or vital energy; shen, spirit. The work refines each into the next, jing into qi and qi into shen, and finally returns shen to emptiness. It is carried out in the cinnabar fields, three centres in the body, through meditation, regulated breathing, visualisation and the circulation of energy along defined paths. The firing times survive as the rhythm of the practice.",
      "What distinguishes the whole enterprise is reversal. Ordinary life runs one way: essence is spent, energy dissipates, the body ages. The internal work runs the sequence backwards, which is why its texts speak of returning rather than attaining. The goal is often figured as an immortal embryo gestated within and eventually delivered. Zhang Boduan's Wuzhen pian of 1075 is its central text, and from the Song onward neidan becomes the dominant form of Daoist self-cultivation, carried by the Quanzhen school into the present.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Internal Elixir" },
      entries: [
        {
          term: "Sanbao",
          title: "The Three Treasures",
          description:
            "Jing, qi and shen — essence, breath and spirit — are the ingredients, and the work refines each into the one above it. Every operation that waidan performed on minerals, neidan performs on these.",
        },
        {
          term: "Dantian",
          title: "The Cinnabar Fields",
          description:
            "Three centres in the body, lower, middle and upper, serving as the vessels of the work. The name is taken directly from the mineral: the field where the elixir is compounded, relocated from the laboratory to the abdomen, the chest and the head.",
        },
        {
          term: "Ni",
          title: "Reversal",
          description:
            "Ordinary existence proceeds from unity into multiplicity and dissipation. The internal work runs that sequence backwards, which is why the texts speak of returning rather than achieving, and why the end point is described as emptiness rather than as a possession.",
        },
        {
          term: "Shengtai",
          title: "The Immortal Embryo",
          description:
            "The refined elixir is figured as a spiritual embryo conceived within, nourished through the practice, and eventually delivered. The gestational imagery is precise rather than ornamental, with stages and durations specified in the manuals.",
        },
        {
          term: "Huohou",
          title: "Fire Times, Kept",
          description:
            "The firing schedule survives the move inward intact, now governing when and how to apply attention and breath. The continuity of this term more than any other shows that neidan understood itself as the same art rather than a replacement for it.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "Wuzhen pian",
          meta: "Zhang Boduan · 1075",
          description:
            "Awakening to Reality, the central text of internal alchemy, in verse dense enough to have attracted commentary for a thousand years. It assumes the Cantong qi throughout and treats the external elixir as a misunderstanding of what was always an interior operation.",
        },
        {
          title: "The Cantong qi, Reread",
          meta: "Commentarial tradition · Song onward",
          description:
            "The same second-century text that grounds waidan becomes the foundation of neidan, through commentaries that read its furnace and ingredients as the body and its energies. Watching one text be reinterpreted is the clearest view of how the tradition turned.",
        },
        {
          title: "Zhong-Lü Chuandao ji",
          meta: "Tang–Song · attributed to Zhongli Quan and Lü Dongbin",
          description:
            "Records of the transmission of the Dao, set as a dialogue between two of the Eight Immortals. It sets out the stages of the internal work systematically and became the template for much later neidan instruction.",
        },
        {
          title: "The Secret of the Golden Flower",
          meta: "Qing dynasty · widely known in translation",
          description:
            "A late and relatively short neidan text, famous in the West through Richard Wilhelm's translation and Jung's commentary. Read with care: that version works from a partial recension and Jung's framing is a psychological reading rather than an account of the practice.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Internal Elixir" },
      entries: [
        {
          stage: "Begin here",
          title: "The Way of the Golden Elixir",
          author: "Fabrizio Pregadio",
          note: "A short, clear introduction to what neidan is, how it relates to the external tradition, and what its vocabulary means. The best orientation available in English.",
        },
        {
          stage: "For the central text",
          title: "Awakening to Reality",
          author: "Zhang Boduan, translated by Fabrizio Pregadio",
          note: "The Wuzhen pian with commentary, without which the verse is impenetrable. Shows how thoroughly the internal reading depends on the older alchemical vocabulary.",
        },
        {
          stage: "For the setting",
          title: "The Daoist Tradition",
          author: "Louis Komjathy",
          note: "Places internal alchemy within Daoist practice as a whole — its lineages, monastic context and relation to other forms of cultivation — which keeps it from being read as a technique floating free of a religion.",
        },
      ],
    },
  },
  {
    slug: "rasashastra",
    title: "Rasaśāstra",
    meta: "India · Sanskrit · c. 8th c. onward",
    description:
      "Mercurial alchemy bound to medicine and to the pursuit of a perfected body. Mercury, identified with the seed of Śiva, is processed through elaborate purifications; the related rasāyana is one of the eight classical branches of Ayurveda. The aim is less gold than a body that does not decay.",
    summary:
      "Mercury as the seed of Śiva, processed through eighteen operations, in pursuit of a body that neither sickens nor dies.",
    overview: [
      "The Sanskrit word rasa carries a run of meanings — juice, essence, taste, and mercury — and the ambiguity is the subject. Rasaśāstra is the science of mercury, and its distinctive move is theological: mercury is identified with the seed of Śiva, and mica or sulphur with the menstrual blood of the Goddess. Their conjunction in the vessel is accordingly a divine marriage, and what it produces partakes of both.",
      "The operations are elaborate and specified in detail. Mercury as it comes from the earth is held to be contaminated and dangerous, carrying defects that must be removed through a graded series of purifications — eighteen in the standard reckoning — before it can be used at all. Later stages have it swallow and digest metals, increasing its power with each, until it can transmute base metal or, more importantly, be taken into the body.",
      "That is the end the tradition cares most about. Rasaśāstra distinguishes the doctrine of metals from the doctrine of the body, and ranks the second above the first: gold-making is a proof of potency, while the real aim is a siddha-deha, a perfected body immune to age and disease. This connects it to rasāyana, one of the eight classical branches of Ayurveda, concerned with rejuvenation and long life, and to the Siddha and Nath traditions of hathayoga, where many of the same substances and much of the same language recur.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Mercurial Work" },
      entries: [
        {
          term: "Rasa",
          title: "Mercury as Divine Seed",
          description:
            "Mercury is not merely the most important material but Śiva's own substance, and its partner mica or sulphur belongs to the Goddess. The operations are therefore a union of deities, and the theology is not applied afterward to the chemistry — it is the reason for it.",
        },
        {
          term: "Saṃskāra",
          title: "The Eighteen Operations",
          description:
            "Raw mercury carries defects that make it unusable and poisonous. A fixed sequence of purifications — sweating, rubbing, swooning, killing and others — removes them in order. The scheme is systematic to a degree unusual in any alchemical tradition.",
        },
        {
          term: "Jāraṇa",
          title: "Digestion of Metals",
          description:
            "Processed mercury is made to absorb and digest other metals, gaining potency with each. The language is alimentary throughout: mercury eats, and what it has eaten it carries, until a small quantity can transform a large mass.",
        },
        {
          term: "Dehavāda",
          title: "The Body Before the Metal",
          description:
            "The tradition names two doctrines, one concerning metals and one concerning the body, and is explicit that the second is the greater. Transmuting lead demonstrates that a preparation works; taking it is the point.",
        },
        {
          term: "Rasāyana",
          title: "Medicine and Long Life",
          description:
            "The link to Ayurveda, where rasāyana is one of the eight classical branches and concerns rejuvenation. Mercurial preparations entered Indian pharmacy through this door and are still manufactured, which makes this the one alchemical tradition with an unbroken clinical line to the present.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "Rasārṇava",
          meta: "Sanskrit · c. 12th c.",
          description:
            "The Flood of Mercury, framed as a dialogue between Śiva and the Goddess, and among the most influential works of the tradition. It is explicit that the preparations which transmute metal also perfect the body that takes them, and that the latter is the higher aim.",
        },
        {
          title: "Rasaratnākara",
          meta: "Attributed to Nāgārjuna · Sanskrit",
          description:
            "The Treasury of Mercury, attributed to an alchemical Nāgārjuna who is not the Madhyamaka philosopher of the same name, though the traditions sometimes conflate them. It sets out apparatus, operations and the preparation of mercury in detail.",
        },
        {
          title: "Rasahṛdayatantra",
          meta: "Govinda Bhagavat · Sanskrit · c. 11th c.",
          description:
            "The Heart of Mercury, an early systematic treatment organised around the operations rather than around recipes, and one of the texts that established the standard sequence of purifications.",
        },
        {
          title: "Rasaratnasamuccaya",
          meta: "Sanskrit · c. 13th–16th c.",
          description:
            "A compendium drawing the earlier literature together, covering minerals, apparatus, the laboratory itself and therapeutic application. It leans furthest toward medicine, and is the text most consulted where rasaśāstra is still practised.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Mercurial Work" },
      entries: [
        {
          stage: "Begin here",
          title: "The Alchemical Body",
          author: "David Gordon White",
          note: "Siddha alchemy and its pursuit of a perfected, deathless body, traced through Sanskrit sources and the yogic traditions around them. The standard work, and unlike anything in the European literature.",
        },
        {
          stage: "For the medicine",
          title: "Roots of Ayurveda",
          author: "Dominik Wujastyk",
          note: "Translated selections from the classical medical literature, which situate rasāyana within the system it belongs to rather than treating it as alchemy that happens to be medical.",
        },
        {
          stage: "For the living tradition",
          title: "Transmutations",
          author: "Dagmar Wujastyk and collaborators",
          note: "Recent scholarship on rasaśāstra as a continuing practice, including how mercurial preparations are made and regulated now. The best corrective to treating this as a closed historical subject.",
        },
      ],
    },
  },
  {
    slug: "chrysopoeia",
    title: "Chrysopoeia",
    meta: "Method · across traditions",
    description:
      "Gold-making proper, the aim everyone remembers and the one the sources treat as a single application of the stone rather than its point. It attracted patronage, fraud and legislation in roughly equal measure, including a papal bull of 1317 directed at alchemical counterfeiting.",
    summary:
      "Gold-making: what transmutation actually meant, what practitioners were seeing in the vessel, and why the courts kept getting involved.",
    overview: [
      "Gold-making is the thing alchemy is remembered for and the thing its own literature is most casual about. The stone, where it is achieved, is described as perfecting whatever it touches; turning lead into gold is one application among several, and the texts move without apparent effort between metallurgy and medicine. Taking chrysopoeia for the whole aim is the commonest way of misreading the subject.",
      "It was nonetheless entirely serious, and rested on a coherent theory. If metals are one substance differing by the proportion and purity of their principles, then lead is immature gold and the alchemist is accelerating a process nature already intends. That is a reasonable inference from the available evidence, and the laboratory kept supplying encouragement: metals really do change colour and character under treatment, alloys really can take on a convincing gold surface, and some phenomena were genuinely spectacular. The arbor Dianae, a silver amalgam crystallising into a branching metallic growth, looked exactly like a metal vegetating.",
      "The money and the law followed. Princes funded laboratories and expected returns; practitioners who failed were imprisoned and occasionally executed in gilded gallows. John XXII's bull of 1317 was aimed at alchemical counterfeiting rather than at the theory. And the most famous transmutation accounts come from reputable witnesses: Helvetius published one in 1667 which Spinoza took seriously enough to investigate, and van Helmont claimed to have performed a projection himself. What exactly they saw remains unresolved, and the honest answer is that we do not know.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Gold Work" },
      entries: [
        {
          term: "Proiectio",
          title: "Projection",
          description:
            "The culminating act: a small quantity of the prepared stone cast onto molten base metal, which is said to transmute at once. The accounts are consistent about the suddenness and about how little material was required.",
        },
        {
          term: "Multiplicatio",
          title: "Multiplication",
          description:
            "The stone could reportedly be increased in quantity and potency by repeating certain operations on it, so that one success in principle underwrote indefinite future work. It is also the point at which many accounts become hardest to credit.",
        },
        {
          term: "Tinctura",
          title: "Tinging",
          description:
            "The older language of dyeing persists: the stone tinges base metal as a dye tinges cloth. Whether that meant a surface effect or a change throughout was argued about, and the assay was the test that mattered.",
        },
        {
          term: "Examinatio",
          title: "The Assay",
          description:
            "Cupellation and the acid tests could distinguish gold from its imitations reliably, and alchemists knew it. Claims were made in the knowledge that they could be checked, which makes the persistence of the enterprise harder to dismiss as simple credulity.",
        },
        {
          term: "Fraus",
          title: "Fraud and Its Archive",
          description:
            "Hollow stirring rods with gold sealed in wax, doctored crucibles, gilded surfaces. The prosecutions left records, and those records are among the best evidence we have of what was actually promised, attempted and sold.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "Summa Perfectionis",
          meta: "Pseudo-Geber · Latin · c. 1310",
          description:
            "The most rigorous medieval case that transmutation is possible, grounded in a corpuscular account of why metals differ and what would be required to change one into another. Argument rather than allegory, and the better for it.",
        },
        {
          title: "Vitulus Aureus",
          meta: "Johann Friedrich Helvetius · 1667",
          description:
            "The Golden Calf, a first-person account of receiving a fragment of the stone from a stranger and performing a projection with it. Spinoza, living nearby, made his own enquiries into the episode, which is why it remains the most discussed transmutation claim on record.",
        },
        {
          title: "Ortus Medicinae",
          meta: "Jan Baptist van Helmont · 1648",
          description:
            "Among much else, van Helmont's statement that he was given a quarter grain of the stone and transmuted eight ounces of mercury with it. The testimony of a careful experimentalist who elsewhere did foundational work on gases.",
        },
        {
          title: "Spondent Quas Non Exhibent",
          meta: "Pope John XXII · 1317",
          description:
            "They promise what they do not deliver. The bull condemns alchemical counterfeiting and the defrauding of buyers rather than the theory of transmutation, which tells us how much money was by then moving through the trade.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Gold Work" },
      entries: [
        {
          stage: "Begin here",
          title: "The Aspiring Adept",
          author: "Lawrence M. Principe",
          note: "Boyle's serious and sustained pursuit of transmutation, including his attempts to obtain the stone and his lobbying to repeal the law against multiplying gold. It makes the enterprise comprehensible from inside.",
        },
        {
          stage: "For the economics",
          title: "Alchemy and Authority in the Holy Roman Empire",
          author: "Tara Nummedal",
          note: "Alchemists as contractors to princes, with the trials and executions that followed failure. The best account of alchemy as a trade with clients, obligations and consequences.",
        },
        {
          stage: "For what they saw",
          title: "The Secrets of Alchemy",
          author: "Lawrence M. Principe",
          note: "Principe reproduces historical recipes in the laboratory, including the arbor Dianae, which demonstrates how a careful observer could reasonably conclude that metals grow.",
        },
      ],
    },
  },
  {
    slug: "iatrochemistry",
    title: "Iatrochemistry",
    meta: "Method · Europe · 16th c. onward",
    description:
      "Paracelsus redirects the art from metals to medicines, adding salt to mercury and sulphur and founding chemical medicine against furious Galenist opposition. Spagyrics, the preparation of plant remedies by separation and recombination, belongs to this turn and is still practised.",
    summary:
      "Alchemy turned on the body: Paracelsus against Galen, the three principles, and chemical remedies that outlasted the theory behind them.",
    overview: [
      "Paracelsus is the hinge. Working in the first half of the sixteenth century, he attacked the prevailing medicine at its foundations — burning Avicenna's canon in public, by one account — and proposed that disease is not an imbalance of humours arising within but a specific entity attacking from outside, to be met with a specific remedy. That reframing is what makes chemical medicine possible: if diseases are particular, cures can be particular too, and the alchemist's furnace is the instrument for preparing them.",
      "His matter theory adds salt to the inherited mercury and sulphur, giving the tria prima: three principles corresponding to what is volatile, what is combustible and what is fixed, and mapping onto spirit, soul and body. The separation of a substance into its three principles, their purification and their recombination, is the operation the tradition calls spagyric, from Greek words for drawing apart and binding together.",
      "The consequences ran in two directions. Chemically prepared remedies — antimony, mercury and metallic preparations — entered European pharmacy over decades of furious opposition from the Galenists, and some were effective while others were lethal, which the controversies reflect. And a strongly vitalist strand developed through van Helmont, who proposed an inner governing principle he called the archeus and did foundational work on gases while pursuing it. Pharmacy kept the preparations long after abandoning the theory, and spagyric practice continues in herbal medicine today.",
    ],
    markers: {
      heading: { eyebrow: "What Distinguishes It", title: "Marks of the Medical Work" },
      entries: [
        {
          term: "Tria Prima",
          title: "The Three Principles",
          description:
            "Salt, sulphur and mercury, standing for what is fixed, what burns and what is volatile, and read onto body, soul and spirit. Adding the third to the inherited pair is Paracelsus's most durable theoretical move.",
        },
        {
          term: "Spagyria",
          title: "Separate and Recombine",
          description:
            "The characteristic operation: break a substance into its principles, purify each, reunite them. Applied to plants it yields the spagyric preparations still made in herbal medicine, and it treats refinement as something done to a thing's parts rather than to the whole.",
        },
        {
          term: "Archeus",
          title: "The Inner Workman",
          description:
            "Van Helmont's governing principle, directing digestion, growth and healing from within. A vitalist posit that is also a research programme: pursuing it led him to distinguish gases as a class and to coin the word.",
        },
        {
          term: "Signatura",
          title: "The Doctrine of Signatures",
          description:
            "The claim that a remedy advertises its use through its form or colour — yellow plants for jaundice, walnut for the brain. It follows from the doctrine of correspondence rather than from observation, and it is where this tradition is weakest.",
        },
        {
          term: "Quinta Essentia",
          title: "The Fifth Essence",
          description:
            "The active virtue of a substance, separable from its gross body by distillation and concentration. The pursuit of it drove real advances in extraction technique, and the word survives in ordinary English with its origin forgotten.",
        },
      ],
    },
    texts: {
      heading: { eyebrow: "Primary Sources", title: "What Survives" },
      entries: [
        {
          title: "Opus Paramirum",
          meta: "Paracelsus · 1531",
          description:
            "The fullest statement of the three principles and of disease as a specific entity rather than a humoral imbalance. Combative, disorganised and genuinely original, which is characteristic of everything he wrote.",
        },
        {
          title: "Archidoxa",
          meta: "Paracelsus · written c. 1526",
          description:
            "The practical counterpart: how to prepare quintessences, tinctures and arcana. Where the Opus Paramirum argues, this one instructs, and it carried his methods to practitioners who had no interest in his philosophy.",
        },
        {
          title: "Basilica Chymica",
          meta: "Oswald Croll · 1609",
          description:
            "A Paracelsian pharmacopoeia that did more than any other book to get chemical remedies into ordinary practice, pairing a philosophical preface with formulations a working apothecary could actually use.",
        },
        {
          title: "Ortus Medicinae",
          meta: "Jan Baptist van Helmont · 1648",
          description:
            "Published after his death and the most substantial work of the tradition. The archeus, the rejection of the four elements, the famous willow tree experiment, and the first use of the word gas, all within a frame that is still recognisably alchemical.",
        },
      ],
    },
    reading: {
      heading: { eyebrow: "Where to Start", title: "On the Medical Work" },
      entries: [
        {
          stage: "Begin here",
          title: "Paracelsus: Medicine, Magic and Mission at the End of Time",
          author: "Charles Webster",
          note: "Paracelsus placed in his apocalyptic religious setting rather than treated as a proto-scientist. It explains why the medicine and the theology are inseparable in him.",
        },
        {
          stage: "For the movement",
          title: "The Chemical Philosophy",
          author: "Allen G. Debus",
          note: "The Paracelsian controversies across two centuries, and how chemical medicine fought its way into the universities. Still the standard survey of the conflict.",
        },
        {
          stage: "For the chemistry",
          title: "The Secrets of Alchemy",
          author: "Lawrence M. Principe",
          note: "Its treatment of the medical turn explains what these preparations physically were, and which of them would have done anything at all.",
        },
      ],
    },
  },
];
