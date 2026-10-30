import type { Shelf } from "./library";

export const philosophiesShelf: Shelf = {
  slug: "philosophies",
  number: "06",
  title: "Philosophies",
  eyebrow: "The Love of Wisdom",
  cardDescription:
    "Schools, texts and figures from Ionia to the Kyoto School — including the esoteric currents that the standard histories leave out.",
  summary:
    "Philosophy has never been one conversation. This shelf sets out the major traditions in their own terms, and gives the esoteric currents the same serious treatment as the academic ones — without pretending they all say the same thing.",

  facts: [
    { label: "Span", value: "c. 600 BCE to the present" },
    { label: "Independent beginnings", value: "Ionia, the Ganges basin, the Yellow River — within roughly two centuries" },
    { label: "Languages", value: "Greek, Sanskrit, Pali, Classical Chinese, Arabic, Persian, Hebrew, Latin, German" },
    { label: "Recurring question", value: "What is really there, and what must a person become to know it" },
    { label: "Shelf bias", value: "Weighted toward the metaphysical and esoteric currents" },
  ],

  overview: [
    "Something happened between roughly 600 and 400 BCE in three places that had almost no contact with each other. In Ionia, thinkers began asking what everything is made of without answering in the language of myth. In the Ganges basin, the authors of the Upaniṣads turned from sacrifice to the self that performs it. In the Yellow River valley, Confucius and the Daoists asked how a person and a society should be ordered, and what the order of things even is. Karl Jaspers called this the Axial Age, and the term has been criticised for tidying up a messy period, but the convergence is real enough to need explaining and nobody has explained it.",
    "What followed in each place was not one philosophy but a field of rival schools, and the rivalry is the point. Indian philosophy is conducted as formal debate between six orthodox darśanas and their Buddhist and Jain opponents, with rules of engagement and an obligation to state your adversary's position before refuting it. Greek philosophy runs on the same combative energy, from Parmenides against the obvious to the Sceptics against everyone. Chinese philosophy argues about what the Way is and whether it can be named. Reading any tradition as a single doctrine misses the argument that gave it its shape.",
    "This shelf is weighted deliberately. The standard survey histories — the ones that run Plato to Aristotle to Descartes to Kant — treat the metaphysical and esoteric currents as detours: Neoplatonic theurgy, Hermetic cosmology, Kabbalah, Illuminationist angelology, tantric non-dualism, Böhme's theosophy. Those currents were not detours. They were central to the people who made them and they carried the questions that academic philosophy dropped — what it would mean to know by becoming rather than by arguing, whether the cosmos is the kind of thing that can be addressed, and what the intermediate world between sense and intellect is.",
    "Taking them seriously does not mean taking them uncritically. A great deal of what circulates as perennial wisdom is nineteenth and twentieth-century construction with a claimed ancient pedigree, and the scholarship that has grown up since the 1990s — Faivre, Hanegraaff, Versluis — is very good at distinguishing the two. The esoteric is a legitimate object of philosophical attention precisely because it can be studied carefully, and careful study is what most of it has never received.",
    "The deepest divisions do not run where the textbooks put them. The real fault lines are between those who hold that reality is ultimately one and those who hold it is irreducibly many; between those for whom the world emanates and those for whom it is created; between those who think the highest thing can be spoken and those who think it can only be approached by negation. On each of these a Greek, an Indian and a Muslim thinker may stand on the same side against their own countrymen. That is a better map of philosophy than a map by geography.",
    "Each tradition below is given in its own vocabulary first. The cross-tradition claims come afterward, in the principles, where they can carry the qualifications they need.",
  ],

  traditions: {
    heading: { eyebrow: "The Field", title: "Schools and Currents" },
    entries: [
      {
        region: "Ionia and Magna Graecia",
        name: "The Presocratics",
        span: "c. 600–400 BCE",
        description:
          "The first attempt to say what there is without telling a story about gods. Thales proposed water, Anaximander an unbounded something, Heraclitus a world of fire and ceaseless exchange governed by logos. Parmenides argued that change is strictly impossible and that what is simply is, which forced everyone afterward to account for appearance. Pythagoras founded something between a school and an order, with number as the structure of reality and a rule of life attached.",
        markers: ["Arche", "Logos", "Apeiron", "Number", "Parmenides"],
      },
      {
        region: "Athens",
        name: "Platonism",
        span: "c. 400 BCE – 6th century CE",
        description:
          "The most consequential philosophy ever written, and the one that absorbs the esoteric most readily. Plato's forms, the soul's recollection of what it knew before birth, the ascent of the Symposium and the cosmology of the Timaeus gave every later mystic a vocabulary. The Academy ran for most of a millennium and changed position repeatedly — sceptical for two centuries, then increasingly religious — so that invoking Plato alone never settles what is meant.",
        markers: ["Forms", "Anamnesis", "Timaeus", "Methexis", "The Good"],
      },
      {
        region: "Athens",
        name: "Aristotle and the Peripatetics",
        span: "c. 350 BCE – present",
        description:
          "The counterweight. Aristotle brought the forms down into the things themselves, invented formal logic, and built a framework — substance and accident, matter and form, the four causes, potency and act — that became the common technical language of philosophy in Greek, Arabic, Hebrew and Latin for two thousand years. Even traditions that reject his conclusions think in his categories, which is a deeper kind of influence.",
        markers: ["Hylomorphism", "Four causes", "Substance", "Nous poietikos", "Syllogism"],
      },
      {
        region: "The Hellenistic world",
        name: "Stoics, Epicureans, Sceptics",
        span: "c. 300 BCE – 200 CE",
        description:
          "Philosophy reconceived as a therapy and a way of life rather than a theory. The Stoics held that the cosmos is a rational living whole and that freedom lies in aligning one's judgements with it. The Epicureans held that it is atoms and void, that the gods are indifferent, and that this is excellent news. The Sceptics held that suspending judgement altogether is what actually produces tranquillity. All three agreed philosophy's job was to change how you live.",
        markers: ["Logos", "Ataraxia", "Apatheia", "Epoche", "Prohairesis"],
      },
      {
        region: "Late antiquity",
        name: "Neoplatonism and Theurgy",
        span: "3rd–6th century",
        description:
          "Plotinus built the great hierarchy — the One, Intellect, Soul, cosmos — in which everything flows from a source beyond being and strains to return. Iamblichus then argued that contemplation alone cannot complete the ascent and that ritual action, theurgy, is required, which changed philosophy into something closer to a sacramental practice. Proclus systematised it all. This is the hinge on which almost all later Western esotericism turns, and it has a shelf of its own.",
        markers: ["The One", "Emanation", "Henosis", "Theurgy", "Proclus"],
      },
      {
        region: "Late antiquity",
        name: "Gnosis",
        span: "1st–4th century",
        description:
          "A family of movements rather than a school, united by the conviction that the world is the botched work of a lesser power and that salvation comes through knowledge of one's true origin rather than through faith or works. Valentinus and Basilides built systems of great subtlety; the Nag Hammadi find of 1945 let us read them in their own words for the first time instead of through their enemies. Whether gnosticism is one thing at all is now seriously contested.",
        markers: ["Demiurge", "Pleroma", "Sophia", "Nag Hammadi", "Valentinus"],
      },
      {
        region: "The Islamicate world",
        name: "Falsafa and Ishrāq",
        span: "9th–17th century",
        description:
          "Falsafa took the Greek inheritance and made it systematic: al-Fārābī on the ordered cosmos and the virtuous city, Ibn Sīnā on the distinction between essence and existence that still does work in metaphysics today. Then Suhrawardī broke with it, replacing Aristotelian substance with gradations of light and populating the cosmos with intermediate intelligences, founding the Illuminationist school. Mullā Ṣadrā later fused the two with Ibn ʿArabī's mysticism into one of philosophy's great syntheses.",
        markers: ["Wujūd", "Ishrāq", "Ālam al-mithāl", "Waḥdat al-wujūd", "Mullā Ṣadrā"],
      },
      {
        region: "The Jewish world",
        name: "From Maimonides to Kabbalah",
        span: "10th–18th century",
        description:
          "Two currents in tension. Maimonides pushed a rigorous negative theology in Aristotelian dress, arguing that nothing positive can truly be said of God. The kabbalists, from the Bahir and the Zohar onward, did the opposite — mapping the divine life in ten sefirot and making the structure of the godhead the central object of contemplation. Lurianic Kabbalah's account of divine contraction, shattering and repair is among the most original cosmologies anyone has produced. The Kabbalah shelf treats it at length.",
        markers: ["Negative theology", "Sefirot", "Ein Sof", "Tzimtzum", "Tikkun"],
      },
      {
        region: "India",
        name: "The Six Darśanas",
        span: "c. 200 BCE – present",
        description:
          "Six orthodox systems, conducted as a formal debate that has never really stopped. Sāṃkhya counts up the constituents of reality and separates pure consciousness from nature; Yoga supplies the practice to realise the distinction; Nyāya builds a formidable logic and epistemology; Vaiśeṣika an atomism; Mīmāṃsā a theory of ritual language; Vedānta, in Śaṅkara's hands, argues that the self and the absolute are without difference and that plurality is superimposition.",
        markers: ["Ātman", "Brahman", "Puruṣa and prakṛti", "Pramāṇa", "Māyā"],
      },
      {
        region: "India and Tibet",
        name: "Buddhist Philosophy",
        span: "c. 400 BCE – present",
        description:
          "The most sustained anti-essentialist project in the history of thought. Nāgārjuna's Madhyamaka argues that nothing whatever possesses intrinsic existence, including emptiness itself, and does so by dismantling opponents rather than by asserting a position. Yogācāra turns to the structure of experience and the storehouse consciousness. The debates were carried into Tibet and systematised in monastic curricula that still run, which makes it a living philosophical tradition with continuous institutional memory.",
        markers: ["Śūnyatā", "Pratītyasamutpāda", "Anātman", "Madhyamaka", "Yogācāra"],
      },
      {
        region: "Kashmir and the Tantric world",
        name: "Tantra and Kashmir Śaivism",
        span: "9th–13th century",
        description:
          "The strongest philosophical statement of a non-dualism that affirms the world rather than dissolving it. Where Śaṅkara treats plurality as appearance to be seen through, Abhinavagupta treats it as the free self-expression of a consciousness that is identical with Śiva, and therefore as real and worth having. Recognition, pratyabhijñā, is the method: not acquiring something new but recognising what one already is. Philosophically rigorous and esoteric in the full sense, with initiation and ritual attached.",
        markers: ["Pratyabhijñā", "Spanda", "Śiva and Śakti", "Abhinavagupta", "Tantrāloka"],
      },
      {
        region: "China",
        name: "Dao, Ru and Li",
        span: "c. 500 BCE – present",
        description:
          "The Daoists argue that the Way cannot be named and that effective action is non-forcing; the Zhuangzi is additionally one of the funniest philosophical books ever written and uses the humour argumentatively. Confucius and his successors build an ethics on ritual propriety and cultivated humaneness. A millennium later the Neo-Confucians, having absorbed Buddhist metaphysics, erect a synthesis around principle and vital force that governed East Asian intellectual life until the twentieth century.",
        markers: ["Dao", "Wu wei", "Ren and li", "Qi", "Zhu Xi"],
      },
      {
        region: "The Christian West",
        name: "Negative Theology and the Mystics",
        span: "5th–16th century",
        description:
          "The current in Christian thought that says the most important thing cannot be said. Dionysius the Areopagite transplanted Proclus into Christian theology and gave the West its vocabulary of ascent and unknowing. Eriugena translated him and built a cosmology bold enough to be condemned. Eckhart preached a ground of the soul identical with the ground of God, in German, to lay audiences, and was tried for it. Cusanus made learned ignorance a method and the coincidence of opposites a principle.",
        markers: ["Via negativa", "Dionysius", "Eriugena", "Eckhart", "Docta ignorantia"],
      },
      {
        region: "Renaissance Italy",
        name: "The Platonic Revival",
        span: "15th–17th century",
        description:
          "Ficino translated the whole of Plato and the Corpus Hermeticum into Latin and persuaded Europe that Hermes Trismegistus was an Egyptian sage contemporary with Moses — an error, corrected in 1614, that had already reshaped European thought. Pico proposed to defend nine hundred theses drawn from every tradition he could find and invented Christian Kabbalah. Bruno pushed to an infinite universe with innumerable worlds and a magical cosmology, and was burned for it in 1600.",
        markers: ["Prisca theologia", "Corpus Hermeticum", "Christian Kabbalah", "Pico", "Bruno"],
      },
      {
        region: "Germany",
        name: "Böhme and the Theosophic Current",
        span: "17th–19th century",
        description:
          "A shoemaker in Görlitz, without formal education, produced an account of how a groundless divine will comes to know itself by generating its own opposition — evil included — in a strange, torsional German that influenced almost everyone who read it. The line runs through Pietism and the Cambridge Platonists to Oetinger, Saint-Martin and Baader, and from there directly into German Idealism. Philosophy's most consequential autodidact.",
        markers: ["Ungrund", "Theosophy", "Oetinger", "Saint-Martin", "Signatura rerum"],
      },
      {
        region: "Germany",
        name: "Idealism and Naturphilosophie",
        span: "1780–1850",
        description:
          "After Kant argued that we know appearances rather than things in themselves, his successors refused the limit. Fichte made the self the ground of everything; Schelling made nature a visible spirit and absorbed Böhme wholesale into a philosophy of divine freedom and the ground of existence; Hegel made the whole of history the self-knowing of the absolute. Naturphilosophie, long dismissed as romantic excess, is now read as a serious attempt to think organism and polarity.",
        markers: ["Thing-in-itself", "Absolute", "Polarity", "Schelling", "Potenzen"],
      },
      {
        region: "The twentieth century",
        name: "Traditionalism and the Perennial Philosophy",
        span: "1920–present",
        description:
          "René Guénon argued that a single primordial tradition underlies all orthodox religions, that modernity is a measurable decline from it, and that only an initiatic line gives real access. Coomaraswamy brought formidable scholarship in Indian art and metaphysics; Schuon built a systematic version. The school has shaped how esotericism is discussed far beyond its own membership — and it has a political wing, most notoriously Julius Evola, that readers should know about before they read far.",
        markers: ["Primordial tradition", "Initiation", "Kali Yuga", "Guénon", "Coomaraswamy"],
      },
      {
        region: "Japan",
        name: "The Kyoto School",
        span: "1911–present",
        description:
          "The first sustained attempt to do philosophy in Japanese using Western methods without abandoning Buddhist premises. Nishida began from pure experience prior to the split between subject and object, and developed a logic of place in which things are located rather than predicated. Nishitani pressed the Buddhist notion of emptiness against European nihilism and argued it is the answer rather than an instance of it. The school's wartime entanglement with Japanese nationalism is genuine and still argued over, and should be known rather than skirted.",
        markers: ["Pure experience", "Basho", "Zettai mu", "Nishida", "Nishitani"],
      },
      {
        region: "The twentieth century",
        name: "Re-enchantments",
        span: "1900–present",
        description:
          "Several attempts to recover what mechanism discarded, from within academic philosophy. Whitehead rebuilt metaphysics around process and experience rather than inert matter. Corbin recovered the Islamic imaginal world and argued it names a real order of being between sense and intellect, not fantasy. Jung built a psychology from alchemical and gnostic material. More recently, panpsychism has become a respectable position in philosophy of mind, which would have astonished everyone in 1950.",
        markers: ["Process", "Mundus imaginalis", "Archetype", "Panpsychism", "Corbin"],
      },
    ],
  },

  texts: {
    heading: { eyebrow: "Primary Sources", title: "Books to Have Met" },
    entries: [
      {
        title: "The Republic and the Timaeus",
        meta: "Plato · Greek · 4th century BCE",
        description:
          "The Republic for the cave, the divided line and the Good beyond being; the Timaeus for the cosmos as a made, living, ensouled thing. The Timaeus was for a thousand years the Plato the West actually had, and almost every cosmology in this shelf is downstream of it.",
      },
      {
        title: "Metaphysics",
        meta: "Aristotle · Greek · 4th century BCE",
        description:
          "The investigation of being as such, and the source of the technical vocabulary that every subsequent tradition in Greek, Arabic, Hebrew and Latin had to use or argue against. Book Lambda's unmoved mover, thinking itself thinking, is the ancestor of a long line of first principles.",
      },
      {
        title: "The Enneades",
        meta: "Plotinus · Greek · 3rd century",
        description:
          "Fifty-four treatises arranged by Porphyry, on the One beyond being, the Intellect that contemplates it, the Soul that orders the world, and the ascent back. Difficult, repetitive and unlike anything else; the single most important text for Western mysticism. Treated at length on the Neoplatonism shelf.",
      },
      {
        title: "Mūlamadhyamakakārikā",
        meta: "Nāgārjuna · Sanskrit · c. 2nd century",
        description:
          "Fundamental Verses on the Middle Way: twenty-seven chapters dismantling every candidate for intrinsic existence — motion, time, causation, the self, the Buddha, and finally emptiness itself. Argues entirely by showing that opponents' positions collapse, and declines to replace them with one.",
      },
      {
        title: "The Principal Upaniṣads",
        meta: "Sanskrit · c. 800–200 BCE",
        description:
          "The turn from ritual to the self that performs it, in dialogues of startling compression. The great statements — that thou art, I am the absolute, the self is the ground — are not arguments but recognitions, and the entire Vedānta tradition is a dispute about how to read them.",
      },
      {
        title: "Daodejing and Zhuangzi",
        meta: "Chinese · c. 4th–3rd century BCE",
        description:
          "The Daodejing in eighty-one short chapters on the Way that cannot be spoken and the virtue of yielding. The Zhuangzi in stories, jokes and impossible dialogues that use humour to dislodge the certainty the argument could not reach. Read together; they are doing different jobs.",
      },
      {
        title: "Ḥikmat al-Ishrāq",
        meta: "Suhrawardī · Arabic · 1186",
        description:
          "The Philosophy of Illumination, which replaces Aristotelian substance with light admitting of degrees, reinstates the Platonic forms as living intelligences, and posits a world of suspended images between intellect and sense. Its author was executed at thirty-eight, and his school outlived him by centuries.",
      },
      {
        title: "Fuṣūṣ al-ḥikam",
        meta: "Ibn ʿArabī · Arabic · 1229",
        description:
          "The Bezels of Wisdom: twenty-seven chapters, each attached to a prophet, working out the doctrine that being is one and that creation is the self-disclosure of that being in infinite forms. The most influential work of Islamic mysticism, and among the most demanding.",
      },
      {
        title: "The Mystical Theology",
        meta: "Dionysius the Areopagite · Greek · c. 500",
        description:
          "A few pages that gave the West negative theology. God is not any of the things we affirm, nor any of the things we deny, but beyond both assertion and negation — approached by stripping away rather than by adding. Shorter than its influence would suggest by several orders of magnitude.",
      },
      {
        title: "De Docta Ignorantia",
        meta: "Nicholas of Cusa · Latin · 1440",
        description:
          "On Learned Ignorance, arguing that knowing precisely how and why the infinite exceeds us is itself the highest knowledge available, and that in the infinite all opposites coincide. Uses mathematics to make the point, and anticipates far more of later cosmology than it has credit for.",
      },
      {
        title: "Tantrāloka",
        meta: "Abhinavagupta · Sanskrit · c. 1000",
        description:
          "The Light on the Tantras, a vast synthesis of the Śaiva tantric traditions that is simultaneously ritual manual, philosophical treatise and aesthetic theory. Its account of recognition — that liberation is realising what was never absent — is one of the high points of Indian thought.",
      },
      {
        title: "Aurora and Signatura Rerum",
        meta: "Jacob Böhme · German · 1612, 1622",
        description:
          "The groundless will coming to self-knowledge through its own self-opposition, written by a shoemaker in language he partly had to invent. Nearly unreadable in places and worth the struggle: Schelling, Hegel, Blake and the whole theosophic current come through here.",
      },
      {
        title: "Process and Reality",
        meta: "Alfred North Whitehead · English · 1929",
        description:
          "A complete metaphysical system built on the premise that the ultimate units of reality are events rather than substances, and that experience goes all the way down. Formidably technical, and the most serious twentieth-century attempt to rebuild what the mechanical philosophy demolished.",
      },
    ],
  },

  caution: {
    eyebrow: "A Necessary Caution",
    body:
      "The most attractive idea on this shelf is also the most suspect: that all these traditions are saying the same thing in different idioms. They are not. Śaṅkara holds that the self is identical with an absolute that alone is real; Nāgārjuna holds that there is no such absolute and no such self, and explicitly refutes positions like Śaṅkara's; Abhinavagupta holds that the world is fully real as the free play of a divine consciousness, against both. These are incompatible claims by people who argued about them. The perennialist reading — that one primordial truth underlies every tradition — is itself a historically locatable position, formulated by Ficino as the prisca theologia, revived by the Theosophical Society, and systematised by Guénon and Schuon in the twentieth century. It deserves study as a philosophy. It should not be mistaken for a neutral description of the others, and the Traditionalist school in particular carries political commitments — explicit and ugly in Evola — that are not incidental to it. Read comparatively by all means; let the disagreements stay sharp.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Questions That Recur" },
    entries: [
      {
        term: "Hen kai Pan",
        title: "The One and the Many",
        description:
          "Whether reality is ultimately single or irreducibly plural, and if single, how the appearance of multiplicity arises. Nearly every system on this shelf is an answer to this, and the answers divide thinkers far more reliably than geography does.",
      },
      {
        term: "Ousia",
        title: "Being and Becoming",
        description:
          "Parmenides held that what is cannot change and that the world of flux is opinion. Heraclitus held that process is what there is. Plato tried to give each a domain; Aristotle put becoming inside substance; Whitehead abolished substance in favour of events. The argument is unresolved and still live.",
      },
      {
        term: "Emanatio",
        title: "Emanation or Creation",
        description:
          "Does the world flow necessarily from its source as light from a lamp, or is it made freely by a will that could have done otherwise? Neoplatonism and much of Indian and Islamic metaphysics take the first road; the Abrahamic theologies officially take the second; and a great many thinkers spent careers trying to hold both.",
      },
      {
        term: "Methexis",
        title: "Participation",
        description:
          "Plato's answer to how particular things relate to the forms they resemble, and a problem he himself attacked in the Parmenides without solving. It remains the standard way of saying that something derivative genuinely shares in what grounds it rather than merely copying it.",
      },
      {
        term: "Via Negativa",
        title: "Negative Theology",
        description:
          "The claim that the highest principle can only be approached by denying what it is not, because every affirmation drags it down into the class of things. Dionysius, Maimonides, the Upaniṣads and Nāgārjuna arrive at structurally similar moves from entirely different starting points.",
      },
      {
        term: "Nous",
        title: "Intellect",
        description:
          "Not reasoning but direct intellectual seeing — the faculty that grasps first principles without inference. Its demotion in modern philosophy, where reason became calculation, is the single largest difference between this shelf and a contemporary philosophy department.",
      },
      {
        term: "Gnosis",
        title: "Knowing by Becoming",
        description:
          "The recurring claim that some truths are available only to someone transformed enough to receive them, so that the preparation of the knower is part of the epistemology rather than a preliminary to it. Theurgy, tantric initiation and Stoic askesis are all versions of this.",
      },
      {
        term: "Ātman-Brahman",
        title: "Self and Absolute",
        description:
          "The Upaniṣadic identification of the innermost self with the ground of everything, and the long dispute over whether the identity is strict, qualified, or a devotional relation. Among the most consequential sentences ever written, and still contested in its own tradition.",
      },
      {
        term: "Śūnyatā",
        title: "Emptiness",
        description:
          "The Buddhist claim that nothing has intrinsic existence, that things are what they are only in dependence on conditions and conceptual imputation — including emptiness, which is not a hidden substrate. Frequently and badly confused with Western nothingness and with monism; it is neither.",
      },
      {
        term: "Correspondentia",
        title: "As Above, So Below",
        description:
          "That the structure of the whole is repeated in its parts, so the human being is a small cosmos and the cosmos a large human being. The organising assumption of almost all esoteric thought, with real explanatory ambitions — it is what makes astrology, theurgy and signature-based medicine coherent rather than arbitrary.",
      },
      {
        term: "Mundus Imaginalis",
        title: "The Imaginal",
        description:
          "Corbin's rendering of the ālam al-mithāl, a world of subsistent forms between sense and intellect, where spirits take body and bodies become spirit. His point is terminological and serious: imaginal is not imaginary, and visionary experience was held to disclose a real order rather than to invent one.",
      },
      {
        term: "Wu Wei",
        title: "Effortless Action",
        description:
          "Acting in accordance with the grain of a situation rather than imposing on it, so that the action costs nothing and leaves no trace. Neither passivity nor technique, and the hardest Daoist idea to render without making it sound like one or the other.",
      },
    ],
  },

  figures: {
    heading: { eyebrow: "Lives", title: "Figures to Know" },
    entries: [
      {
        name: "Pythagoras",
        dates: "c. 570–495 BCE",
        school: "Pythagorean brotherhood",
        description:
          "Wrote nothing, founded a community with dietary rules, silence requirements and a doctrine of rebirth, and left the conviction that number is the structure of reality. Almost everything attributed to him is later, which has not reduced his influence by a single degree.",
      },
      {
        name: "Heraclitus",
        dates: "c. 540–480 BCE",
        school: "Ionian",
        description:
          "Survives in roughly a hundred fragments of deliberate difficulty. Fire as the basic stuff, strife as the father of all things, a logos ordering the exchange, and the river that is never twice the same. Called the Obscure in antiquity, and happy to be.",
      },
      {
        name: "Parmenides",
        dates: "c. 515–450 BCE",
        school: "Eleatic",
        description:
          "Wrote a hexameter poem in which a goddess tells him that what is, is, and that coming-to-be is unthinkable. The argument is short, valid-looking and monstrous in its consequences; every subsequent Greek philosopher is in some sense responding to it.",
      },
      {
        name: "Plato",
        dates: "c. 428–348 BCE",
        school: "The Academy",
        description:
          "Wrote dialogues rather than treatises and never appears in them, which has kept the question of what he actually held permanently open. Forms, recollection, the tripartite soul, the Good beyond being, and a cosmos that is a living creature — the source material for two and a half millennia.",
      },
      {
        name: "Aristotle",
        dates: "384–322 BCE",
        school: "The Lyceum",
        description:
          "Invented formal logic, systematic biology and the habit of surveying predecessors before advancing a position. Brought the forms into things, made substance the central category, and supplied the technical language in which later Islamic, Jewish and Christian philosophy would be conducted.",
      },
      {
        name: "Plotinus",
        dates: "204–270",
        school: "Neoplatonism",
        description:
          "Reportedly ashamed of having a body, and the author of the most influential mystical metaphysics in the West. The One beyond being, Intellect, Soul, and the ascent by which the soul returns; four times in Porphyry's account he reached union, and declined to make much of it.",
      },
      {
        name: "Nāgārjuna",
        dates: "c. 150–250",
        school: "Madhyamaka",
        description:
          "Dismantled intrinsic existence with a method of exhaustive refutation and refused to put a thesis in its place, on the grounds that having one would be the error. Revered across Mahāyāna Buddhism; not to be confused with the later alchemical Nāgārjuna of the Sanskrit mercurial texts.",
      },
      {
        name: "Zhuangzi",
        dates: "c. 369–286 BCE",
        school: "Daoism",
        description:
          "Dreamt he was a butterfly and could not afterwards say which way round it went. Argued through parable, absurdity and jokes at the expense of Confucians, making a serious case that our categories are perspectival and that the Way is reached by unlearning.",
      },
      {
        name: "Śaṅkara",
        dates: "c. 700–750",
        school: "Advaita Vedānta",
        description:
          "Argued that the self and the absolute are without any difference whatever, that plurality is superimposed by ignorance, and that liberation is recognition rather than attainment. Organised monastic orders that still exist, and did it all in about thirty-two years.",
      },
      {
        name: "Ibn Sīnā",
        dates: "980–1037",
        school: "Falsafa",
        description:
          "Avicenna to the Latins. Distinguished essence from existence in a way that set the terms for metaphysics in three languages, wrote a medical canon used in Europe for six hundred years, and devised the floating-man argument for the self's immediate self-awareness.",
      },
      {
        name: "Suhrawardī",
        dates: "1154–1191",
        school: "Illuminationism",
        description:
          "Replaced substance with light in degrees, restored the Platonic forms as living intelligences, and claimed to be reviving the wisdom of the ancient Persians and Greeks alike. Executed at Aleppo at thirty-seven, and the founder of a school that shaped Persian thought thereafter.",
      },
      {
        name: "Ibn ʿArabī",
        dates: "1165–1240",
        school: "Sufi metaphysics",
        description:
          "The Greatest Master. Worked out the unity of being — that there is only one reality, disclosing itself in endless forms — across an output of extraordinary volume and difficulty, and gave Islamic mysticism the conceptual apparatus it has used since.",
      },
      {
        name: "Meister Eckhart",
        dates: "c. 1260–1328",
        school: "Rhineland mysticism",
        description:
          "Preached in German to lay audiences that there is a ground of the soul uncreated and identical with the ground of God, and that one should pray God to be rid of God. Tried for heresy, died before judgement, and remains among the boldest speakers in the Christian tradition.",
      },
      {
        name: "Nicholas of Cusa",
        dates: "1401–1464",
        school: "Christian Platonism",
        description:
          "Cardinal, canon lawyer and mathematician who argued that the infinite is knowable only as unknowable, that in it all opposites coincide, and that the universe has its centre everywhere. Anticipated a surprising amount of later cosmology from inside a thoroughly medieval framework.",
      },
      {
        name: "Marsilio Ficino",
        dates: "1433–1499",
        school: "Florentine Platonism",
        description:
          "Translated all of Plato, Plotinus and the Corpus Hermeticum into Latin and set Europe's intellectual agenda for a century. Believed he was recovering an ancient theology running from Hermes through Pythagoras to Plato; the chronology was wrong and the consequences enormous.",
      },
      {
        name: "Giordano Bruno",
        dates: "1548–1600",
        school: "Hermetic cosmology",
        description:
          "Argued for an infinite universe with innumerable inhabited worlds, an immanent divine soul, and a magical art of memory. Burned in the Campo de' Fiori after seven years of imprisonment — for his theology rather than his astronomy, though the two were not separable in his own mind.",
      },
      {
        name: "Jacob Böhme",
        dates: "1575–1624",
        school: "Theosophy",
        description:
          "A shoemaker who, after a vision occasioned by light on a pewter dish, spent twenty years describing how a groundless will generates its own opposition in order to know itself. Untrained, nearly unreadable, and the hinge between Renaissance esotericism and German philosophy.",
      },
      {
        name: "F. W. J. Schelling",
        dates: "1775–1854",
        school: "German Idealism",
        description:
          "Made nature visible spirit and spirit invisible nature, then turned to the dark ground in God and the reality of human freedom, reading Böhme closely as he went. The Idealist who took evil, contingency and the irrational seriously, which is why he is being read again.",
      },
      {
        name: "Henry Corbin",
        dates: "1903–1978",
        school: "Phenomenology of the imaginal",
        description:
          "Scholar of Suhrawardī and Ibn ʿArabī who coined the imaginal to name a real order of being between sense and intellect, against a modern vocabulary that offered only fact or fantasy. The bridge by which Islamic philosophy entered Western esoteric discussion.",
      },
      {
        name: "Nishida Kitarō",
        dates: "1870–1945",
        school: "The Kyoto School",
        description:
          "Began from an experience prior to the division of subject and object and built a logic of place around it, bringing Zen premises into argument with German philosophy. The founder of the first school of philosophy to emerge outside the Western and classical Asian lineages alike.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "Twenty-Six Centuries" },
    entries: [
      {
        period: "c. 800–400 BCE",
        title: "The Axial Turn",
        description:
          "Within roughly four centuries and with little contact, the Upaniṣads turn from ritual to the self, the Ionians ask what things are made of, and Confucius and the Daoists ask how to live and what the order of things is. Nobody has satisfactorily explained the simultaneity.",
      },
      {
        period: "4th c. BCE",
        title: "The Schools",
        description:
          "Plato founds the Academy and Aristotle the Lyceum; in India the darśanas take recognisable form and the Buddhist and Jain traditions develop their own rigorous schools. Philosophy becomes an institution with curricula, successions and rivalries.",
      },
      {
        period: "3rd c. BCE – 2nd c. CE",
        title: "Philosophy as a Way of Life",
        description:
          "Stoicism, Epicureanism and Scepticism dominate the Mediterranean, each offering a complete regimen for living rather than a theory to hold. Their letters and handbooks are still the most immediately usable philosophical writing in existence.",
      },
      {
        period: "2nd–4th c.",
        title: "Gnosis and the Hermetica",
        description:
          "Gnostic systems, the Corpus Hermeticum and the Chaldean Oracles appear in the same Mediterranean milieu, sharing a vocabulary of descent, ignorance and saving knowledge. Nāgārjuna, in a wholly separate world, is writing at the same moment.",
      },
      {
        period: "3rd–6th c.",
        title: "Neoplatonism",
        description:
          "Plotinus, then Iamblichus's theurgic turn, then Proclus's systematisation. Justinian closes the Athenian school in 529, which ends an institution rather than a tradition: the texts and the hierarchy pass into Christian, Islamic and Jewish thought intact.",
      },
      {
        period: "8th–12th c.",
        title: "The Arabic Centuries",
        description:
          "Greek philosophy is translated into Arabic on a massive scale and then advanced. Al-Fārābī, Ibn Sīnā and Ibn Rushd build systems that Latin Europe will receive as authoritative, and al-Ghazālī's critique forces everyone to sharpen their position.",
      },
      {
        period: "8th–11th c.",
        title: "Vedānta and Tantra",
        description:
          "Śaṅkara systematises non-dualist Vedānta; the Śaiva tantric traditions reach philosophical maturity in Kashmir with Abhinavagupta. Two non-dualisms with opposite verdicts on whether the world is worth having.",
      },
      {
        period: "12th–14th c.",
        title: "Scholasticism and Kabbalah",
        description:
          "Aristotle returns to Latin Europe through Arabic and reorganises its universities. In the same centuries the Zohar appears in Castile and the Rhineland mystics preach a ground of the soul beyond all distinction — the scholastic and the mystical growing together.",
      },
      {
        period: "15th–16th c.",
        title: "The Renaissance Recovery",
        description:
          "Ficino translates Plato, Plotinus and the Hermetica; Pico proposes nine hundred theses and invents Christian Kabbalah; Agrippa systematises magic. Europe believes it has recovered an ancient theology older than Moses, and builds remarkable things on the mistake.",
      },
      {
        period: "1614",
        title: "The Dating of the Hermetica",
        description:
          "Isaac Casaubon demonstrates on linguistic grounds that the Corpus Hermeticum is a late antique composition, not Egyptian scripture. The prisca theologia loses its historical warrant, and esoteric thought begins the long shift from ancient authority to inner experience.",
      },
      {
        period: "17th–18th c.",
        title: "The Mechanical Turn",
        description:
          "Nature is reconceived as matter in motion, and the qualities, sympathies and living powers that the older cosmologies depended on are read out of it. Böhme and the theosophic current continue underground, and Newton writes a million words of alchemy in private.",
      },
      {
        period: "1781–1850",
        title: "Kant and the Idealist Reply",
        description:
          "Kant limits knowledge to appearances; Fichte, Schelling and Hegel refuse the limit and build the last great systems in the European tradition. Schelling takes Böhme into philosophy proper, and Naturphilosophie attempts to think nature as living.",
      },
      {
        period: "1875–1945",
        title: "Occult Revival and Traditionalism",
        description:
          "The Theosophical Society makes comparative esotericism a mass phenomenon; Guénon and Coomaraswamy formulate Traditionalism against it and against modernity; Jung builds a psychology from alchemical material. Much of what now circulates as ancient wisdom is fixed in this period.",
      },
      {
        period: "1950–present",
        title: "Scholarship Catches Up",
        description:
          "Nag Hammadi is published, Corbin opens the Illuminationist corpus, Frances Yates reframes the Renaissance, and from the 1990s Faivre and Hanegraaff establish Western esotericism as an academic field. For the first time these currents can be studied with the same tools as anything else.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "The Dream of Reason / The Dream of Enlightenment",
        author: "Anthony Gottlieb",
        note: "The best narrative history of Western philosophy for a general reader — sceptical, funny, and unusually good at saying what was actually at stake rather than cataloguing positions.",
      },
      {
        stage: "For philosophy as practice",
        title: "What Is Ancient Philosophy?",
        author: "Pierre Hadot",
        note: "The book that re-established the ancient schools as regimens for living rather than systems of propositions. It changes how you read every Greek and Roman text afterward.",
      },
      {
        stage: "For India",
        title: "Indian Philosophy: A Very Short Introduction",
        author: "Sue Hamilton",
        note: "Genuinely compressed and genuinely accurate, which is rare. Follow it with Richard King's Indian Philosophy for the schools in detail and the debates between them.",
      },
      {
        stage: "For Buddhism",
        title: "The Fundamental Wisdom of the Middle Way",
        author: "Nāgārjuna, translated by Jay Garfield",
        note: "Garfield's translation and commentary make Madhyamaka tractable without domesticating it. The clearest route into the most rigorous anti-essentialism anyone has written.",
      },
      {
        stage: "For China",
        title: "Disputers of the Tao",
        author: "A. C. Graham",
        note: "Still the finest account of classical Chinese philosophical argument in English, by a translator who could hear the jokes. Pair with his Zhuangzi.",
      },
      {
        stage: "For Islamic philosophy",
        title: "Philosophy in the Islamic World",
        author: "Peter Adamson",
        note: "Comprehensive, readable and fair to the mystical and Illuminationist currents that older surveys skipped. His podcast covers the same ground in digestible pieces.",
      },
      {
        stage: "For the esoteric as a field",
        title: "Western Esotericism: A Guide for the Perplexed",
        author: "Wouter J. Hanegraaff",
        note: "The indispensable orientation. Hanegraaff explains how the category was constructed, why it was excluded from standard histories, and how to study it without either debunking or believing.",
      },
      {
        stage: "For the Renaissance",
        title: "Giordano Bruno and the Hermetic Tradition",
        author: "Frances A. Yates",
        note: "The book that forced historians to take Hermeticism seriously as a force in European thought. Its central thesis has been substantially revised since 1964; read it for the reframing and check the details against Hanegraaff.",
      },
      {
        stage: "For the imaginal",
        title: "Alone with the Alone",
        author: "Henry Corbin",
        note: "Corbin on Ibn ʿArabī and the creative imagination, and the clearest statement of what he meant by the imaginal world. Difficult, beautiful, and the entry point to his whole project.",
      },
      {
        stage: "For German Idealism",
        title: "Philosophical Investigations into the Essence of Human Freedom",
        author: "F. W. J. Schelling",
        note: "Eighty pages on evil, freedom and the ground in God that compress Böhme into philosophical argument. The most approachable major work of Idealism and the strangest.",
      },
      {
        stage: "For the perennialist case",
        title: "The Crisis of the Modern World",
        author: "René Guénon",
        note: "Read the Traditionalists in their own words rather than through admirers or opponents, and read the caution above first. Guénon is lucid, absolutely confident, and worth understanding whether or not you are persuaded.",
      },
      {
        stage: "For the modern recovery",
        title: "Process and Reality",
        author: "Alfred North Whitehead",
        note: "Hard going, and the most serious attempt to rebuild a metaphysics of living process after mechanism. Approach through Whitehead's own Science and the Modern World first.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Traditions" },
    entries: [
      { term: "Archē", gloss: "Greek; the origin or first principle from which everything else proceeds." },
      { term: "Logos", gloss: "Greek; word, account, ratio, ordering principle — all at once, and never only one." },
      { term: "Nous", gloss: "Greek; intellect as direct seeing of first principles, not reasoning step by step." },
      { term: "Ousia", gloss: "Greek; substance or essence, what a thing most fundamentally is." },
      { term: "Methexis", gloss: "Greek; participation, how a particular shares in the form that grounds it." },
      { term: "Anamnēsis", gloss: "Greek; recollection, learning as the soul remembering what it already knew." },
      { term: "Henōsis", gloss: "Greek; union with the One, the term of the Neoplatonic ascent." },
      { term: "Theurgia", gloss: "Greek; divine work, ritual action held to complete what contemplation cannot." },
      { term: "Ataraxia", gloss: "Greek; untroubledness, the goal shared by Epicureans and Sceptics alike." },
      { term: "Epochē", gloss: "Greek; suspension of judgement, the Sceptics' method and their therapy." },
      { term: "Pleroma", gloss: "Greek; fullness, the divine totality from which the gnostic cosmos has fallen away." },
      { term: "Demiurgos", gloss: "Greek; craftsman — the world's maker, benign in Plato and malign in the gnostics." },
      { term: "Via negativa", gloss: "Latin; approach to the highest by denial, since every affirmation falls short." },
      { term: "Prisca theologia", gloss: "Latin; the supposed ancient theology running from Hermes to Plato." },
      { term: "Docta ignorantia", gloss: "Latin; learned ignorance, knowing precisely how the infinite exceeds knowing." },
      { term: "Ungrund", gloss: "German; Böhme's groundless abyss, prior to all distinction including God's own." },
      { term: "Ātman", gloss: "Sanskrit; the innermost self, which the Upaniṣads identify with the absolute." },
      { term: "Brahman", gloss: "Sanskrit; the absolute, the ground of everything that is." },
      { term: "Māyā", gloss: "Sanskrit; the power by which the one appears as many; not illusion in the dismissive sense." },
      { term: "Śūnyatā", gloss: "Sanskrit; emptiness, the absence of intrinsic existence in anything whatever." },
      { term: "Pratītyasamutpāda", gloss: "Sanskrit; dependent origination, that things arise only in reliance on conditions." },
      { term: "Pratyabhijñā", gloss: "Sanskrit; recognition, liberation as realising what was never actually absent." },
      { term: "Pramāṇa", gloss: "Sanskrit; a valid means of knowledge — perception, inference, testimony and their rivals." },
      { term: "Dao", gloss: "Chinese; the Way, which the Daodejing opens by saying cannot be named." },
      { term: "Wu wei", gloss: "Chinese; non-forcing action, effective because it goes with the grain of things." },
      { term: "Li and qi", gloss: "Chinese; pattern or principle, and vital force — the Neo-Confucian pair." },
      { term: "Wujūd", gloss: "Arabic; being or existence, and in Ibn ʿArabī the one reality there is." },
      { term: "Ishrāq", gloss: "Arabic; illumination, Suhrawardī's name for knowledge as light rather than form." },
      { term: "Ālam al-mithāl", gloss: "Arabic; the imaginal world of suspended forms between sense and intellect." },
      { term: "Ein Sof", gloss: "Hebrew; the limitless, the godhead before any self-disclosure in the sefirot." },
      { term: "Zettai mu", gloss: "Japanese; absolute nothingness, the Kyoto School's ground beyond being and non-being." },
    ],
  },

  related: [
    { href: "/library/neoplatonism", label: "Neoplatonism", kind: "Shelf" },
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/library/qabalah-and-kabbalah", label: "Qabalah and Kabbalah", kind: "Shelf" },
    { href: "/library/alchemies", label: "Alchemies", kind: "Shelf" },
    { href: "/library/sacred-architecture", label: "Sacred Architecture", kind: "Shelf" },
    { href: "/topics", label: "All Topics", kind: "Topics" },
  ],
};
