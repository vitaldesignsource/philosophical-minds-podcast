import type { Shelf } from "./library";

export const sacredArchitectureShelf: Shelf = {
  slug: "sacred-architecture",
  number: "05",
  title: "Sacred Architecture",
  eyebrow: "Building the Cosmos",
  cardDescription: "Temple geometry, cosmology, ritual space, and symbolic proportion.",
  summary:
    "How builders made the cosmos inhabitable: orientation, proportion and number from Neolithic alignments to the Renaissance, and how to tell the documented history from the modern mythology.",

  facts: [
    { label: "Scope", value: "Temples, churches, mosques, stupas and the geometry beneath them" },
    { label: "Period", value: "Neolithic to the present" },
    { label: "Instruments", value: "Orientation, proportion, number, light, threshold" },
    { label: "Governing claim", value: "A building can be a working model of the cosmos" },
    { label: "Setting", value: "Platonic cosmology, craft tradition, liturgy and ritual" },
  ],

  overview: [
    "Sacred architecture is not ordinary building with religious decoration applied. The claim running through every tradition that practises it is stronger and stranger: that a structure can be a working model of the cosmos, and that entering it places you inside that model. The instruments for doing this are few and remarkably consistent across cultures that never met — where the building faces, what proportions govern it, what number organises it, how light enters, and how you cross from outside to inside.",
    "The oldest evidence is orientation, and it predates any surviving theory by millennia. At Newgrange the passage admits the sun only at the winter solstice, through an aperture built for the purpose. Egyptian temples are laid out on axes fixed to the sun and to particular stars. Long before anyone wrote down why, builders were locating their structures within the motions of the sky, which tells us the practice is not derived from philosophy. The philosophy arrives afterward to explain something already being done.",
    "When explanation does arrive it is Greek, and it is mathematical. The Timaeus describes a cosmos crafted on geometrical principles, built from proportioned elements and shaped by ratio — which makes number a theological matter rather than merely a practical one. Vitruvius, writing for Augustus, grounds architectural proportion in the human body and gives the West its vocabulary of module and order. Put those together, as the Middle Ages and the Renaissance both did, and a building proportioned correctly is not just pleasing. It is true.",
    "This is also the subject most thickly overgrown with modern invention. Claims that the Parthenon or the Great Pyramid encode the golden ratio are, with few exceptions, retrofitted — the ratio emerges from almost any structure if you are free to choose which points to measure between. What the builders actually recorded is in some ways more interesting: module systems set out in treatises, the ad quadratum and ad triangulum methods argued over by the masters of Milan Cathedral in 1392, liturgical orientation prescribed in writing. The documented history is richer than the mythology, and it has the advantage of being true.",
  ],

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "Timaeus",
        meta: "Plato · Greek · 4th century BCE",
        description:
          "The dialogue that makes geometry cosmological. A craftsman god shapes a world from the regular solids according to proportion, and the result is a living creature, ordered by ratio because ratio is what makes order possible. For the Latin Middle Ages this was almost the only Plato available, which is why its influence on building so far exceeds its length.",
      },
      {
        title: "De Architectura",
        meta: "Vitruvius · Latin · c. 30–15 BCE",
        description:
          "The only architectural treatise to survive from antiquity, in ten books, covering town planning, materials, temples, machines and much else. It supplies firmness, usefulness and delight as the threefold aim, derives proportion from the proportions of the human body, and sets out the orders. Its rediscovery in 1414 effectively launched Renaissance architecture.",
      },
      {
        title: "The Portfolio of Villard de Honnecourt",
        meta: "French · c. 1230 · thirty-three leaves",
        description:
          "A working master's sketchbook: church plans, a lion drawn from life, mechanical devices, and geometric figures used to set out forms and proportions. It is the closest thing we have to a Gothic builder's own account of his methods, and it shows geometry being used as a practical instrument rather than a symbolic flourish.",
      },
      {
        title: "De Re Aedificatoria",
        meta: "Leon Battista Alberti · Latin · 1452",
        description:
          "The first great architectural treatise since Vitruvius and the one that makes proportion a theory of beauty. Alberti's concinnitas is the harmony in which nothing can be added, taken away or altered without making the whole worse — a definition that treats a building as a closed system of relationships rather than an assembly of parts.",
      },
      {
        title: "I Quattro Libri dell'Architettura",
        meta: "Andrea Palladio · Italian · 1570",
        description:
          "Palladio's own buildings presented alongside the ancient ones he measured, with plans and ratios given plainly. The harmonic proportions governing his rooms derive from musical intervals, and the book's clarity carried that system to England and America, which is why the proportional grammar of a Venetian villa ended up in Virginia.",
      },
      {
        title: "The Shilpa Shastras",
        meta: "Sanskrit · Manasara and Mayamata · c. 6th–11th century",
        description:
          "The Indian canons of temple building, specifying the vastu-purusha-mandala — a square grid on which a cosmic figure is laid out and which governs the plan — together with proportion, orientation and ritual sequence. A fully articulated theory of architecture as cosmology, developed entirely independently of the Greek line.",
      },
      {
        title: "Mysterium Cosmographicum",
        meta: "Johannes Kepler · Latin · 1596",
        description:
          "The last serious attempt to derive the structure of the heavens from pure geometry: the five Platonic solids nested between the planetary spheres. Kepler was a working astronomer who later found the ellipse and abandoned the scheme, which makes this the moment the Platonic tradition met its evidence and the clearest possible case study in the limits of the method.",
      },
    ],
  },

  caution: {
    eyebrow: "Measurement and Mythology",
    body: "A large popular literature claims that the golden ratio, pi, or precise astronomical constants are encoded in the Parthenon, the Great Pyramid and the Gothic cathedrals. Very little of it survives scrutiny. Given freedom to choose which points to measure between, and tolerance of a few percent, almost any ratio can be found in almost any building. Mathematicians have repeatedly shown this for the golden section specifically, and the earliest claims of it in the Parthenon date from the nineteenth century, not from any ancient source. None of this means the builders were not working mathematically — they demonstrably were, and they wrote down how. Prefer the methods they recorded over the ones we have found for them.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Orientatio",
        title: "Facing",
        description:
          "Where a building points is its first and oldest commitment: to sunrise, to a solstice, to a star, to Jerusalem or Mecca. Orientation binds the structure to a cycle outside itself, so that the building participates in time rather than merely occupying space. It is the one principle that appears in every tradition without exception.",
      },
      {
        term: "Analogia",
        title: "Proportion as Meaning",
        description:
          "Ratio is treated as the carrier of significance rather than an aesthetic preference. If the cosmos is ordered by proportion, a correctly proportioned building is in agreement with it, and a badly proportioned one is not merely ugly but false. This is what makes architectural theory in these traditions continuous with theology.",
      },
      {
        term: "Microcosmos",
        title: "Building, Body, Cosmos",
        description:
          "The same proportions are held to govern the universe, the human body and the temple, so that each can be read through the others. Vitruvius derives the orders from human proportion; the Indian mandala lays a cosmic figure over the temple plan. To stand inside such a building is to stand inside a diagram of yourself.",
      },
      {
        term: "Axis Mundi",
        title: "The Centre",
        description:
          "Sacred buildings characteristically claim to mark the point where the levels of the world meet — a pole, a mountain, a navel. The claim is not geographical. Many such centres can exist at once, because what is being asserted is a quality of place rather than a location on a map.",
      },
      {
        term: "Limen",
        title: "The Threshold",
        description:
          "Entry is staged rather than incidental: a temenos wall, a gate, a porch, a narthex, a flight of steps, water for washing. The sequence makes the passage from ordinary to consecrated space take time and require consent, and the elaboration of thresholds is one of the most reliable markers that a building is meant to be sacred.",
      },
      {
        term: "Lux",
        title: "Light as Argument",
        description:
          "Light is handled as substance and as theology, not as illumination. Suger rebuilt the choir of Saint-Denis so that light would pass through coloured glass and, in the Neoplatonic terms he used, raise the mind from the material toward the immaterial. Hagia Sophia's dome was described as if suspended from heaven by a golden chain because of how its windows dissolve its base.",
      },
      {
        term: "Modulus",
        title: "The Generating Unit",
        description:
          "A single measure — a column diameter, a bay, a cubit — from which every other dimension is derived by multiplication or division. The module makes a building internally consistent and transmissible: the system can be written down, taught and rebuilt elsewhere at a different size without losing its relationships.",
      },
      {
        term: "Mandala",
        title: "The Plan as Diagram",
        description:
          "In Indian and Buddhist practice the ground plan is itself a cosmological figure, drawn before building begins and determining where everything goes. Construction becomes the raising of a diagram into three dimensions, which makes the relationship between symbol and structure unusually explicit and documented.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "From Alignment to Theory" },
    entries: [
      {
        period: "c. 3200 BCE",
        title: "Neolithic Alignment",
        description:
          "At Newgrange a roof-box admits sunlight to the inner chamber only around the winter solstice. Whatever its builders believed, they possessed enough observational astronomy and enough organisation to build for a single annual event.",
      },
      {
        period: "3rd–1st mil. BCE",
        title: "Egypt",
        description:
          "Temples are laid out on fixed axes with a stretching-of-the-cord ceremony performed by the king, and their plans narrow and darken toward the sanctuary so that the approach is a graded withdrawal from the ordinary world.",
      },
      {
        period: "5th c. BCE",
        title: "The Greek Temple",
        description:
          "The Parthenon is built with deliberate optical refinements — swelling columns, a curved stylobate, inward-leaning colonnades — none of which is necessary structurally. The Greeks are adjusting a building to the eye, and recording that they did so.",
      },
      {
        period: "c. 25 BCE",
        title: "Vitruvius Writes It Down",
        description:
          "Architectural theory acquires a text. Vitruvius's survival through the Middle Ages, and his rediscovery at Saint Gall in 1414, make him the hinge on which the whole Western tradition turns.",
      },
      {
        period: "537",
        title: "Hagia Sophia",
        description:
          "Anthemius and Isidore, both mathematicians rather than builders by trade, raise a dome on pendentives over a square and ring its base with windows. Contemporaries described the result as light rather than masonry, and the problem of the dome over the square shapes building from Istanbul to Rome.",
      },
      {
        period: "1144",
        title: "Saint-Denis",
        description:
          "Suger's rebuilt choir brings together the pointed arch, the rib vault and the flying buttress, in the service of an explicitly Neoplatonic theology of light. The Gothic begins as an argument about what light is for.",
      },
      {
        period: "12th–15th c.",
        title: "The Lodges",
        description:
          "Masons work by geometric constructions kept within the trade, setting out plans ad quadratum or ad triangulum from a single measure. The methods surface in the record when the masters of Milan Cathedral fall out over which to use in 1392, and the dispute is minuted.",
      },
      {
        period: "1450–1570",
        title: "The Renaissance Recovery",
        description:
          "Alberti, Serlio and Palladio reconstruct an ancient theory and extend it, arguing for the centralised church because the circle best images divine perfection. Proportion becomes a subject of printed argument, carried across Europe by the engraved plate.",
      },
      {
        period: "17th c.",
        title: "Geometry Meets Evidence",
        description:
          "Kepler nests the Platonic solids in the heavens and then follows his data to the ellipse. Newton spends years reconstructing the Temple of Solomon in the belief that its proportions preserve ancient knowledge. The tradition reaches its most ambitious and begins to come apart.",
      },
      {
        period: "19th–21st c.",
        title: "Revival and Reassessment",
        description:
          "Viollet-le-Duc rationalises the Gothic, Le Corbusier derives the Modulor from human proportion, and a popular literature of sacred geometry grows up alongside serious scholarship by Wittkower, von Simson, Rykwert and Lindsay Jones — who have gradually established what the builders actually did.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "The Gothic Cathedral",
        author: "Otto von Simson",
        note: "On the Gothic as built theology, taking Suger's Neoplatonism and the geometry of the lodges equally seriously. Dated in places and still the book that shows most clearly what it would mean for a building to be an argument.",
      },
      {
        stage: "The foundational text",
        title: "Ten Books on Architecture",
        author: "Vitruvius, translated by Rowland and Howe",
        note: "Best read in this edition, whose commentary and illustrations make the technical passages usable. Shorter and more practical than its reputation suggests.",
      },
      {
        stage: "For proportion",
        title: "Architectural Principles in the Age of Humanism",
        author: "Rudolf Wittkower",
        note: "The study that established how Renaissance architects actually used harmonic ratios, and why they believed it mattered. It replaced a great deal of speculation with evidence and has not been superseded.",
      },
      {
        stage: "For sacred space",
        title: "The Sacred and the Profane",
        author: "Mircea Eliade",
        note: "The clearest statement of threshold, centre and orientation as a general grammar of sacred space. The comparative method is out of fashion and the categories remain the ones most people still think with.",
      },
      {
        stage: "For the orders",
        title: "The Dancing Column",
        author: "Joseph Rykwert",
        note: "On the column as a figure of the human body, pursued through anthropology, ritual and philology. Difficult, digressive and unlike anything else written on the subject.",
      },
      {
        stage: "For medieval method",
        title: "The Wise Master Builder",
        author: "Nigel Hiscock",
        note: "An investigation of whether Platonic geometry genuinely governed medieval church plans, conducted by measuring them. Valuable precisely because it treats the question as answerable rather than assuming either way.",
      },
      {
        stage: "For the comparative view",
        title: "The Hermeneutics of Sacred Architecture",
        author: "Lindsay Jones",
        note: "Two volumes on how sacred buildings across cultures are experienced and interpreted, and on the methodological traps of comparison. The rigorous alternative to popular universalism.",
      },
      {
        stage: "Beyond the West",
        title: "The Symbolism of the Stupa",
        author: "Adrian Snodgrass",
        note: "A detailed account of Buddhist architectural cosmology, showing a fully worked symbolic system outside the Greek inheritance. The best corrective to treating Vitruvius as the whole story.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Axis mundi", gloss: "The world-axis; the point at which the levels of the cosmos are held to meet." },
      { term: "Temenos", gloss: "Ground cut off and set apart; the enclosure marking a precinct as sacred." },
      { term: "Naos", gloss: "The inner chamber housing the god, called the cella in Latin." },
      { term: "Module", gloss: "The generating unit from which every other dimension of a building is derived." },
      { term: "Ad quadratum", gloss: "Setting out a plan from a square and its diagonal; ad triangulum uses the equilateral triangle." },
      { term: "Entasis", gloss: "The slight swelling of a column, correcting the eye's tendency to see straight sides as concave." },
      { term: "Pendentive", gloss: "The curved triangle that carries a round dome on a square plan." },
      { term: "Concinnitas", gloss: "Alberti's term for the harmony in which nothing can be added or removed without loss." },
      { term: "Vastu-purusha-mandala", gloss: "The square grid bearing a cosmic figure, governing the plan of an Indian temple." },
      { term: "Qibla", gloss: "The direction of Mecca, fixed in a mosque by the mihrab niche." },
    ],
  },

  related: [
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/topics/symbolism-and-sacred-architecture", label: "Symbolism and Sacred Architecture", kind: "Topic" },
    { href: "/topics/hidden-history", label: "Hidden History", kind: "Topic" },
    { href: "/topics/metaphysics", label: "Metaphysics", kind: "Topic" },
  ],
};
