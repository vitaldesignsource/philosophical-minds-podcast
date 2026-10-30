import type { Shelf } from "./library";

export const gnosticismShelf: Shelf = {
  slug: "gnosticism",
  number: "08",
  title: "Gnosticism",
  eyebrow: "Knowledge and the Alien God",
  cardDescription:
    "Sethian, Valentinian, Thomasine, Marcionite and Mandaean currents — the sources, the systems, and whether the category holds.",
  summary:
    "A family of late antique movements holding that the world is the work of a lesser power and that salvation comes through knowing one's true origin — and a modern scholarly argument about whether they are a family at all.",

  facts: [
    { label: "Period", value: "1st–4th century CE, with Mandaeism continuous to the present" },
    { label: "Setting", value: "Egypt, Syria, Mesopotamia, Rome — the eastern Mediterranean world" },
    { label: "Decisive find", value: "Nag Hammadi, Egypt, December 1945: thirteen codices" },
    { label: "Languages", value: "Greek originals, surviving largely in Coptic; Mandaic for the Mandaeans" },
    { label: "Living descendant", value: "The Mandaeans, chiefly of Iraq and Iran and now largely in diaspora" },
  ],

  overview: [
    "For most of Christian history these movements were known only through the people who wrote to refute them. Irenaeus, Hippolytus, Tertullian and Epiphanius quoted their opponents at length in order to demolish them, and the quotations were all anyone had. The result was a picture assembled entirely from hostile summary, which everyone understood to be unsatisfactory and nobody could do anything about.",
    "That changed in December 1945 near Nag Hammadi in Upper Egypt, when a farmer digging for fertiliser broke open a sealed jar containing thirteen leather-bound papyrus codices. They held some fifty-two texts, most previously unknown, in Coptic translations of Greek originals — gospels, revelations, cosmogonies, a fragment of Plato's Republic, and a treatise that had been quoted by Irenaeus and could now be read whole. For the first time these writers could be heard in their own voices, and the voices turned out to be more varied and more philosophically serious than the heresiologists had let on.",
    "The common thread, where there is one, is a reversal of the usual verdict on the world. The cosmos is not the good creation of a good God but the product of a lesser being — ignorant, often arrogant, sometimes malevolent — who does not know there is anything above him. Human beings contain a spark that originates above and has been trapped below. Salvation is not forgiveness for wrongdoing but gnosis: the recognition of where one is from, which breaks the spell. Faith and works are beside the point if the problem is that you have forgotten what you are.",
    "The philosophical setting matters. These are Platonists of a sort, working with emanation, hierarchy and a transcendent first principle, and sharing a great deal of vocabulary with the Neoplatonists — who disliked them intensely. Plotinus devoted a treatise to refuting them, objecting not to their transcendence but to their contempt for the cosmos, which he found both ungrateful and incoherent. The argument between them is one of the sharpest in ancient philosophy and is worth reading from both sides.",
    "Whether gnosticism names one thing is now genuinely contested. Michael Williams argued in 1996 that the category is a construct built from heresiological polemic, lumping together texts that differ on nearly everything, and proposed abandoning it. Karen King extended the argument historically, showing how the category did work in defining Christian orthodoxy. Others hold that a recognisable Sethian tradition really exists and that the sceptics have overcorrected. The dispute is unresolved, and a reader should know it is going on rather than meet one side's conclusions as settled fact.",
  ],

  traditions: {
    heading: { eyebrow: "The Currents", title: "Movements and Schools" },
    entries: [
      {
        region: "Egypt and Syria",
        name: "Sethian",
        span: "2nd–4th century",
        description:
          "The current with the strongest claim to being a distinct tradition, named for the descendants of Seth as the bearers of the spark. Its texts share a cast — Barbelo as the first emanation, the arrogant Ialdabaoth who declares there is no god beside him, Sophia whose unauthorised act produces him — and a story in which the serpent and Eve's disobedience are read as the beginning of liberation rather than of ruin. Later Sethian texts become heavily Platonising, and some were read in Plotinus's own circle.",
        markers: ["Apocryphon of John", "Barbelo", "Ialdabaoth", "Sophia", "Allogenes"],
      },
      {
        region: "Alexandria and Rome",
        name: "Valentinian",
        span: "c. 140–4th century",
        description:
          "The most sophisticated and most nearly mainstream. Valentinus was a candidate for bishop of Rome, and his followers generally saw themselves as Christians with a deeper reading rather than members of a rival religion, which is precisely what made them dangerous to their opponents. Their system is elaborate — thirty aeons in pairs, a fall within the divine fullness, a cosmos arising from Sophia's grief — and their theology of grace and love is a long way from world-hating caricature.",
        markers: ["Valentinus", "Ptolemy", "Heracleon", "Pleroma", "Gospel of Truth"],
      },
      {
        region: "Syria",
        name: "Thomasine",
        span: "1st–3rd century",
        description:
          "A Syrian stream associated with Judas Thomas, the twin, in which salvation comes through self-knowledge and the recovery of an original undivided state. The Gospel of Thomas, a collection of sayings with no narrative and no passion, is the central text and the one with the strongest claim to preserving early material independent of the canonical gospels. Whether it is gnostic at all is disputed; it lacks a demiurge entirely.",
        markers: ["Gospel of Thomas", "Book of Thomas", "The twin", "Sayings tradition"],
      },
      {
        region: "Pontus and Rome",
        name: "Marcionite",
        span: "c. 144–5th century",
        description:
          "Marcion was not a gnostic by most definitions — no emanations, no secret knowledge, no divine spark — but he reached a comparable conclusion by a sharper road: the god of the Hebrew Bible is a different and lesser being than the father Jesus revealed. He assembled the first known Christian canon, consisting of an edited Luke and ten Pauline letters, and his church was a serious institutional rival for generations. The orthodox canon owes its existence partly to the need to answer his.",
        markers: ["Marcion", "Antitheses", "The alien God", "First canon", "Edited Luke"],
      },
      {
        region: "Persia and beyond",
        name: "Manichaean",
        span: "3rd–14th century",
        description:
          "Mani's deliberate attempt to found a universal religion synthesising Christian, Zoroastrian and Buddhist elements around a cosmic struggle between light and darkness in which particles of light are trapped in matter and progressively liberated. It spread from Rome to China, survived in Central Asia for a thousand years, and briefly claimed Augustine, whose later polemics are the reason much of the West's idea of dualism takes this shape.",
        markers: ["Mani", "Light and darkness", "The Elect", "Augustine", "Central Asia"],
      },
      {
        region: "Mesopotamia",
        name: "Mandaean",
        span: "1st century – present",
        description:
          "The only one of these traditions to survive continuously into the present. Mandaeans venerate John the Baptist, reject Jesus as a false messiah, practise frequent river baptism, and possess their own language, script and substantial scriptural corpus. They are not a reconstruction or a revival. Persecution and war in Iraq and Iran since 2003 have driven most of the community into diaspora and put the tradition at genuine risk.",
        markers: ["Ginza Rabba", "John the Baptist", "Masbuta", "Mandaic", "Diaspora"],
      },
      {
        region: "The eastern Mediterranean",
        name: "Hermetic Neighbours",
        span: "2nd–3rd century",
        description:
          "The Hermetic writings share the milieu, the Platonist vocabulary and the salvation-through-knowledge structure, but differ on the decisive point: the cosmos is generally beautiful and the creator is not an enemy. Nag Hammadi contained Hermetic texts alongside the Christian ones, which tells us the collectors did not police the boundary we would draw. Treated on the Hermeticism shelf.",
        markers: ["Corpus Hermeticum", "Asclepius", "Poimandres", "Nous", "Ascent"],
      },
      {
        region: "Modern Europe and America",
        name: "The Gnostic Revival",
        span: "19th century – present",
        description:
          "From Blake and the Romantics through Theosophy and the occult revival to Jung, who read the gnostics as cartographers of the psyche and wrote his own gnostic text in the Seven Sermons. Later came Hans Jonas's existentialist reading, Philip K. Dick's private revelation, and a steady presence in science fiction and film. Almost all of it predates or ignores the Nag Hammadi evidence, and tells you more about modernity than about late antiquity.",
        markers: ["Blake", "Jung", "Seven Sermons", "Hans Jonas", "Philip K. Dick"],
      },
    ],
  },

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "The Apocryphon of John",
        meta: "Coptic, from Greek · 2nd century",
        description:
          "The fullest Sethian system: the unknowable first principle, Barbelo, the fall of Sophia, the birth of the blind creator Ialdabaoth who boasts that there is no god beside him, and a retelling of Genesis in which almost every verdict is reversed. Survives in four copies, which is a good index of how central it was.",
      },
      {
        title: "The Gospel of Thomas",
        meta: "Coptic, from Greek · 1st–2nd century",
        description:
          "One hundred and fourteen sayings of Jesus with no narrative, no miracles and no crucifixion. Some parallel the canonical gospels, some are unknown elsewhere, and a number are unforgettable. Its date and relationship to the synoptics are among the most argued questions in the field.",
      },
      {
        title: "The Gospel of Truth",
        meta: "Coptic, from Greek · c. 150",
        description:
          "Probably by Valentinus himself: not a gospel in the narrative sense but a meditation on the anguish of ignorance and the joy of being found, written in prose of real beauty. The best single corrective to the idea that these movements were merely cosmological speculation.",
      },
      {
        title: "The Gospel of Philip",
        meta: "Coptic · 3rd century",
        description:
          "A Valentinian collection on sacraments, language and the bridal chamber, including the much-quoted and much-abused passage about Mary Magdalene. Fragmentary and associative rather than systematic, and unusually interested in how religious words mislead.",
      },
      {
        title: "The Hypostasis of the Archons",
        meta: "Coptic · 3rd century",
        description:
          "The Reality of the Rulers: a retelling of Genesis from the perspective of those the rulers oppress, in which Eve is a revealer and the serpent an instructor. Short, strange and the clearest demonstration of what these readers were doing with scripture.",
      },
      {
        title: "The Thunder, Perfect Mind",
        meta: "Coptic · 2nd–3rd century",
        description:
          "A revelation poem spoken by a female voice who asserts every contradiction of herself at once — first and last, honoured and scorned, the whore and the holy one. Not obviously gnostic in doctrine and unlike anything else in ancient literature.",
      },
      {
        title: "Against Heresies",
        meta: "Irenaeus of Lyon · c. 180",
        description:
          "The principal hostile source, and for seventeen centuries the principal source of any kind. Irenaeus summarises Valentinian and Sethian systems in order to refute them, and Nag Hammadi has shown he was often a more accurate reporter than anyone expected — which does not make him a neutral one.",
      },
      {
        title: "Ginza Rabba",
        meta: "Mandaic · redacted by the 7th century",
        description:
          "The Great Treasure, the principal Mandaean scripture, in right and left halves for the living and the dead. The scripture of a surviving community rather than a recovered artefact, and still used liturgically, which makes it a different kind of source from everything above.",
      },
    ],
  },

  caution: {
    eyebrow: "A Necessary Caution",
    body:
      "Two warnings. First, on the category: since Michael Williams's Rethinking Gnosticism in 1996 and Karen King's What Is Gnosticism? in 2003, a substantial body of scholarship has argued that gnosticism is a construct assembled from the rhetoric of its opponents and applied to texts that disagree with each other about nearly everything. Others defend a narrower Sethian category as historically real. Nobody serious now uses the term without qualification, and you should be suspicious of any book that does. Second, on the popular literature: a large and profitable genre presents these texts as suppressed evidence of an original Christianity that the church destroyed — usually resting on a late dating of the canonical gospels, an early dating of Thomas, and silence about the fact that these movements lost the argument as much as the fight. The texts are genuinely remarkable and need no conspiracy to be interesting.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Gnosis",
        title: "Saving Knowledge",
        description:
          "Not information and not belief, but a recognition that changes what the knower is — of one's origin, one's true condition and the way back. It cannot be transmitted by argument alone, which is why these texts so often take the form of revelation dialogue rather than treatise.",
      },
      {
        term: "Demiurge",
        title: "The Lesser Creator",
        description:
          "The craftsman who made this world, borrowed from Plato's Timaeus and then sharply demoted: ignorant of what is above him and convinced he is the only god. Often identified, polemically, with the god of the Hebrew Bible. His boast that there is none beside him is quoted as proof of his blindness.",
      },
      {
        term: "Pleroma",
        title: "The Fullness",
        description:
          "The divine totality of aeons above and beyond the cosmos, from which the spark has fallen and to which it returns. Structured in pairs in the Valentinian systems, with the fall occurring inside it rather than to it — the flaw is internal to the divine, which is a bolder claim than it first looks.",
      },
      {
        term: "Sophia",
        title: "Wisdom and the Fall",
        description:
          "The aeon whose act — variously desire to know the unknowable, or to create alone — produces the deficiency from which the cosmos arises. She is the cause of the problem and a central agent of its repair, and the ambivalence is the point rather than a confusion.",
      },
      {
        term: "Spinther",
        title: "The Spark",
        description:
          "The fragment of the divine trapped in the human being, often unknown to its possessor and sometimes unknown even to the creator who inadvertently passed it on. Its presence is why salvation is recovery rather than acquisition.",
      },
      {
        term: "Archontes",
        title: "The Rulers",
        description:
          "The powers administering the cosmos, usually associated with the planetary spheres, who keep the soul from ascending. Much of the practical material in these texts concerns passing them — names to know, seals to show, answers to give at each gate.",
      },
      {
        term: "Anabasis",
        title: "The Ascent",
        description:
          "The soul's return through the spheres, shedding at each the quality it acquired on the way down. Shared with Hermetism and with Platonism generally; the gnostic versions are distinguished mainly by how hostile the gatekeepers are.",
      },
      {
        term: "Allos Theos",
        title: "The Alien God",
        description:
          "The true god, utterly unrelated to this world and therefore not responsible for it — alien in the strict sense of being from elsewhere. Hans Jonas made this the centre of his reading, and it is the single idea that most sharply divides these movements from both Judaism and orthodox Christianity.",
      },
    ],
  },

  figures: {
    heading: { eyebrow: "Lives", title: "Figures to Know" },
    entries: [
      {
        name: "Simon Magus",
        dates: "1st century",
        school: "Legendary progenitor",
        description:
          "The magician of Acts who tried to buy apostolic power, and whom the heresiologists made the fountainhead of every subsequent heresy. The traditions about him are largely polemical construction, which makes him a good illustration of how this history was written.",
      },
      {
        name: "Marcion",
        dates: "c. 85–160",
        school: "Marcionite",
        description:
          "Shipowner from Sinope who concluded that the creator of the Hebrew Bible and the father of Jesus were different beings, assembled the first Christian canon to prove it, and built a church that rivalled the orthodox one for generations. Excommunicated in 144; his money was returned.",
      },
      {
        name: "Valentinus",
        dates: "c. 100–160",
        school: "Valentinian",
        description:
          "Educated at Alexandria, taught at Rome, and by Tertullian's account nearly became bishop there. The most capable theologian of the movements, and the author — probably — of the Gospel of Truth. His followers considered themselves Christians, not rivals.",
      },
      {
        name: "Ptolemy",
        dates: "2nd century",
        school: "Valentinian",
        description:
          "Valentinus's most influential successor, whose Letter to Flora survives complete and is the most accessible gnostic document of all: a patient, courteous argument to an enquirer that the Law has three distinct sources and must be read accordingly.",
      },
      {
        name: "Basilides",
        dates: "2nd century",
        school: "Alexandrian",
        description:
          "Taught at Alexandria a system of extraordinary abstraction, beginning from a god so transcendent that Hippolytus reports him saying it is not even correct to call it ineffable. Survives only in hostile and mutually inconsistent summaries.",
      },
      {
        name: "Mani",
        dates: "216–274",
        school: "Manichaean",
        description:
          "Raised in a Jewish-Christian baptist sect in Mesopotamia, received revelations from his heavenly twin, and set out deliberately to found a universal religion with its own canon, art and institutional structure. Executed under the Sasanians; his church outlasted him by a millennium.",
      },
      {
        name: "Irenaeus of Lyon",
        dates: "c. 130–202",
        school: "Heresiology",
        description:
          "The principal opponent, and inadvertently the principal preserver. His five books Against Heresies summarise systems he detested in order to refute them, and Nag Hammadi has shown his summaries to be more reliable than his motives.",
      },
      {
        name: "Plotinus",
        dates: "204–270",
        school: "Neoplatonism",
        description:
          "Devoted a treatise to refuting gnostics in his own circle, objecting not to a transcendent first principle — he had one — but to their contempt for a cosmos he regarded as beautiful and as the best possible image of the intelligible.",
      },
      {
        name: "Carl Gustav Jung",
        dates: "1875–1961",
        school: "The modern revival",
        description:
          "Read the gnostics as mapping the psyche's own processes, wrote his Seven Sermons to the Dead in their voice, and acquired a Nag Hammadi codex that bore his name for a time. The main channel by which this material entered twentieth-century culture, and a lens as much as a window.",
      },
      {
        name: "Hans Jonas",
        dates: "1903–1993",
        school: "Interpretation",
        description:
          "Student of Heidegger who read gnosticism as an ancient existentialism — thrownness, alienation, a self estranged from a meaningless world. The reading shaped a generation and has been criticised since for importing twentieth-century categories wholesale.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "From Suppression to Recovery" },
    entries: [
      {
        period: "1st c.",
        title: "Origins",
        description:
          "The matrix forms in the eastern Mediterranean, amid Jewish apocalyptic and wisdom speculation, early Christian diversity, and Middle Platonism. The Mandaean community traces its beginnings to this period and the Jordan baptist movement.",
      },
      {
        period: "c. 144",
        title: "Marcion at Rome",
        description:
          "Marcion is excommunicated and founds a rival church with the first Christian canon. The orthodox effort to answer him is a significant part of why a New Testament canon took the shape it did.",
      },
      {
        period: "2nd c.",
        title: "The Teachers",
        description:
          "Valentinus, Basilides and Ptolemy teach in Alexandria and Rome. The Sethian texts take shape. This is the creative high point, and almost all of it is conducted inside Christianity rather than against it.",
      },
      {
        period: "c. 180",
        title: "Against Heresies",
        description:
          "Irenaeus writes the first systematic refutation, establishing both the genre and the habit of defining orthodoxy by what it excludes. Hippolytus, Tertullian and later Epiphanius extend the project.",
      },
      {
        period: "3rd c.",
        title: "Mani and Plotinus",
        description:
          "Mani founds a universal church that will reach from Rome to China. In Rome, Plotinus argues against gnostics in his own seminar. The movements are at their widest extent and under attack from every side.",
      },
      {
        period: "4th c.",
        title: "Suppression",
        description:
          "With imperial Christianity comes imperial enforcement. Athanasius's festal letter of 367 lists the acceptable books and orders the rest destroyed — which is the likeliest reason a monastery near Nag Hammadi buried a jar of codices rather than burn them.",
      },
      {
        period: "5th–13th c.",
        title: "Survivals and Echoes",
        description:
          "Manichaeism persists in Central Asia for centuries. The Mandaeans endure in the marshes of southern Mesopotamia. In Europe, the Bogomils and then the Cathars are accused of a comparable dualism — whether by genuine descent or by the recurrence of a structure is still argued.",
      },
      {
        period: "19th c.",
        title: "Rediscovery by Fragment",
        description:
          "The Askew, Bruce and Berlin codices surface, giving scholars the first primary gnostic texts. Romantic and occult writers take up the material enthusiastically and on very little evidence.",
      },
      {
        period: "December 1945",
        title: "Nag Hammadi",
        description:
          "Muhammad Ali al-Samman uncovers a sealed jar containing thirteen codices. Their route to publication runs through the antiquities market, a murder, a Zurich auction and Cairo's Coptic Museum, and the complete edition does not appear until 1977.",
      },
      {
        period: "1977–present",
        title: "Publication and Reassessment",
        description:
          "The full library appears in English and transforms the field. Elaine Pagels brings it to a wide readership in 1979; Williams and King then dismantle the category itself in 1996 and 2003. The argument about what these texts collectively are is still open.",
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
        note: "The book that brought Nag Hammadi to a general readership, and still the best short way in. Pagels is especially good on how doctrinal disputes encoded arguments about authority and who gets to hold it.",
      },
      {
        stage: "The sources",
        title: "The Nag Hammadi Scriptures",
        author: "Marvin Meyer, editor",
        note: "The complete library in current translations with solid introductions. Read the Apocryphon of John, the Gospel of Truth and Thunder, Perfect Mind before any secondary account tells you what to think of them.",
      },
      {
        stage: "For the category problem",
        title: "Rethinking Gnosticism",
        author: "Michael A. Williams",
        note: "The argument that gnosticism is a construct built from polemic and should be dismantled. Whether or not it persuades you, you cannot read the field honestly without it.",
      },
      {
        stage: "For how the category was built",
        title: "What Is Gnosticism?",
        author: "Karen L. King",
        note: "Traces how the term was assembled and what work it did in defining Christian orthodoxy and, later, in modern scholarship. The historiographical companion to Williams.",
      },
      {
        stage: "For the classic reading",
        title: "The Gnostic Religion",
        author: "Hans Jonas",
        note: "The existentialist interpretation that shaped the twentieth century's sense of what gnosticism was. Dated in its method and still the most compelling single account of the mood these texts generate.",
      },
      {
        stage: "For the Sethian case",
        title: "Sethian Gnosticism and the Platonic Tradition",
        author: "John D. Turner",
        note: "The detailed argument that a real Sethian tradition exists and developed in close conversation with Platonism. The serious reply to the sceptics.",
      },
      {
        stage: "For the Mandaeans",
        title: "The Mandaeans: Ancient Texts and Modern People",
        author: "Jorunn Jacobsen Buckley",
        note: "Fieldwork and philology on the one surviving community, by the scholar who has done most to document it. A corrective to treating any of this as purely ancient history.",
      },
      {
        stage: "For Manichaeism",
        title: "Manichaeism: An Ancient Faith Rediscovered",
        author: "Nicholas J. Baker-Brian",
        note: "Concise and current, drawing on the Central Asian and Egyptian finds that have reshaped the subject. Good on Augustine's years as a hearer and what he took with him.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Gnosis", gloss: "Knowledge that saves by changing the knower, not information about anything." },
      { term: "Demiurge", gloss: "The craftsman who made this world, ignorant of what lies above him." },
      { term: "Ialdabaoth", gloss: "The demiurge's name in the Sethian texts; lion-faced and convinced he is alone." },
      { term: "Pleroma", gloss: "The fullness; the divine totality of aeons from which the spark has fallen." },
      { term: "Aeon", gloss: "An emanation within the fullness, usually paired, and a stretch of cosmic time." },
      { term: "Sophia", gloss: "Wisdom; the aeon whose act produces the deficiency the cosmos arises from." },
      { term: "Archon", gloss: "A ruler of the cosmos, typically planetary, obstructing the soul's ascent." },
      { term: "Barbelo", gloss: "The first emanation of the unknowable father in the Sethian systems." },
      { term: "Hyle", gloss: "Matter, and the lowest of the three classes of human being." },
      { term: "Psychikos", gloss: "Soul-endowed; capable of salvation by faith but not possessing the spark." },
      { term: "Pneumatikos", gloss: "Spirit-endowed; carrying the spark and saved by recognising it." },
      { term: "Heresiology", gloss: "The genre of cataloguing and refuting heresies, and our main hostile source." },
      { term: "Nag Hammadi", gloss: "The Upper Egyptian site of the 1945 codex find that transformed the field." },
      { term: "Masbuta", gloss: "Mandaic; the repeated river baptism central to Mandaean practice." },
      { term: "Ginza Rabba", gloss: "The Great Treasure; the principal Mandaean scripture, still in liturgical use." },
    ],
  },

  related: [
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/library/philosophies", label: "Philosophies", kind: "Shelf" },
    { href: "/topics/esoteric-christianity", label: "Esoteric Christianity", kind: "Topic" },
    { href: "/topics/religion-and-mysticism", label: "Religion and Mysticism", kind: "Topic" },
  ],
};
