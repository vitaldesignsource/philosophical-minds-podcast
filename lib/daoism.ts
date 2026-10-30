import type { Shelf } from "./library";

export const daoismShelf: Shelf = {
  slug: "daoism",
  number: "07",
  title: "Daoism",
  eyebrow: "The Way and Its Power",
  cardDescription:
    "Classical texts, revealed scriptures, the alchemical lineages, and the body as a country to be governed.",
  summary:
    "Not a philosophy that later acquired a religion, but a continuous tradition of revelation, ritual and self-cultivation in which the classical texts are one voice among many.",

  facts: [
    { label: "Origin", value: "Warring States China, with roots in older shamanic and medical practice" },
    { label: "Span", value: "c. 400 BCE to the present, institutionally unbroken" },
    { label: "Canon", value: "The Daozang, some 1,400 titles, closed in 1445" },
    { label: "First organised movement", value: "The Celestial Masters, 142 CE" },
    { label: "Living lineages", value: "Zhengyi (hereditary priests) and Quanzhen (monastic)" },
  ],

  overview: [
    "Western readers usually meet Daoism as two books and a mood: the Daodejing, the Zhuangzi, and a vague sense that one ought to go with the flow. That picture is not wrong so much as radically incomplete, and the incompleteness has a history. Nineteenth-century scholarship split the tradition into a respectable philosophical Daoism and a degenerate religious Daoism, assigned the classics to the former and everything else to superstition, and then wrote the history of the former. Chinese sources recognise no such division.",
    "What the tradition actually contains is a continuous lineage of revealed scripture, liturgy, ordination, internal cultivation and alchemy, running from the second century to a priesthood still operating today. The classical texts are treasured within it, but they are read through fifteen centuries of commentary and are not its charter. The Celestial Masters, who received a revelation from the deified Laozi in 142, built a church with parishes, registers and a confessional ritual for healing. Everything afterward is in conversation with that.",
    "The central Daoist move is to take the cosmos and the person as the same kind of thing, governed by the same processes, so that the body can be described as a country with offices and ministers and the state can be described as a body requiring circulation. This is not a simile. It licenses a technology: what works on one scale should work on the other, which is why Daoist practice runs seamlessly from political advice to breathing exercises to the compounding of elixirs.",
    "Its relationship with Buddhism is the other thing the standard account mishandles. The two traditions spent centuries in polemic, in mutual borrowing, and occasionally in forged scripture — the claim that Laozi went west and became the Buddha was a live and bitterly contested piece of Daoist apologetic. Chan Buddhism's debt to Daoist vocabulary is real; so is Daoism's debt to Buddhist monastic organisation and cosmology. Neither tradition is intelligible with the other removed.",
    "Much of what reaches English is filtered through two distortions worth naming: a nineteenth-century Protestant preference for texts over ritual, and a twentieth-century countercultural reading that found in the Daodejing a convenient anti-authoritarianism. Both produce a Daoism with no priests, no liturgy and no gods, which is a Daoism no Chinese practitioner would recognise.",
  ],

  traditions: {
    heading: { eyebrow: "The Lineages", title: "Movements and Schools" },
    entries: [
      {
        region: "Warring States",
        name: "The Classical Texts",
        span: "4th–3rd century BCE",
        description:
          "The Daodejing and the Zhuangzi, joined later by the Liezi and parts of the Huainanzi. Not the scriptures of a movement but writings from a period of intense argument about how to live and govern, which were retrospectively made foundational. The Guodian manuscripts, excavated in 1993, show the Daodejing circulating in shorter and differently ordered versions, which complicates any claim about an original text.",
        markers: ["Daodejing", "Zhuangzi", "Liezi", "Guodian finds", "Wu wei"],
      },
      {
        region: "Han and after",
        name: "The Celestial Masters",
        span: "142 CE – present",
        description:
          "Zhang Daoling receives a covenant from the deified Laozi and founds the first organised Daoist church, with twenty-four parishes, libationers, household registers and a ritual of confession for curing illness understood as the consequence of moral fault. It survives as the Zhengyi lineage of married, hereditary priests, and it is the institutional backbone of Daoism to this day.",
        markers: ["Zhang Daoling", "Zhengyi", "Libationers", "Confession", "Covenant"],
      },
      {
        region: "Jiangnan",
        name: "Shangqing — Highest Clarity",
        span: "364–370 CE onward",
        description:
          "A body of scripture revealed to the medium Yang Xi by perfected beings over six years, and the most literary current in the tradition. Its practice is overwhelmingly visionary and interior: the adept visualises the gods who inhabit the body, travels to the stars, and courts the perfected in writing of remarkable beauty. It made Daoism attractive to the southern aristocracy and set the pattern for later internal practice.",
        markers: ["Yang Xi", "Tao Hongjing", "Visualisation", "Body gods", "Zhen'gao"],
      },
      {
        region: "Jiangnan",
        name: "Lingbao — Numinous Treasure",
        span: "c. 400 CE onward",
        description:
          "The liturgical tradition, and the one that absorbed most from Buddhism: universal salvation, cosmic kalpas, merit transferred to ancestors, and a large-scale communal ritual. Where Shangqing perfects an individual, Lingbao saves everybody. Its rites, codified by Lu Xiujing, are the direct ancestors of the jiao offering ceremonies still performed in Chinese communities.",
        markers: ["Lu Xiujing", "Jiao ritual", "Universal salvation", "Kalpas", "Merit"],
      },
      {
        region: "China",
        name: "Waidan — the Laboratory",
        span: "2nd century BCE – 10th century CE",
        description:
          "The compounding of elixirs in a vessel, aimed at transcendence rather than gold. Cinnabar is the master material because it yields mercury on heating and can be recovered again, a visible death and return. Ge Hong's Baopuzi is its great defence. The practice declined partly because it worked as poison: several Tang emperors died of it. Treated at length on the Alchemies shelf.",
        markers: ["Ge Hong", "Baopuzi", "Cinnabar", "Taiqing", "Transcendence"],
      },
      {
        region: "China",
        name: "Neidan — the Internal Elixir",
        span: "8th century – present",
        description:
          "The furnace moved inside the practitioner. Essence, breath and spirit are refined into one another on a schedule of heating borrowed intact from the external art, in cinnabar fields located in the body. Zhang Boduan's Awakening to Reality is its central poem. The entire technical vocabulary of the laboratory survives and is read as physiology — a reinterpretation, not a retreat into metaphor.",
        markers: ["Zhang Boduan", "Wuzhen pian", "Jing-qi-shen", "Dantian", "Firing times"],
      },
      {
        region: "North China",
        name: "Quanzhen — Complete Perfection",
        span: "1170 – present",
        description:
          "Wang Chongyang founds a celibate monastic order that combines internal alchemy with Chan meditation and Confucian ethics, explicitly syncretic from the outset. His disciple Qiu Chuji travelled to meet Chinggis Khan in Central Asia and returned with imperial protection, which made Quanzhen the dominant northern school. It still administers major monasteries, including Beijing's White Cloud Temple.",
        markers: ["Wang Chongyang", "Qiu Chuji", "Monasticism", "Seven Perfected", "White Cloud Temple"],
      },
      {
        region: "China",
        name: "Ritual, Medicine and the Everyday",
        span: "Throughout",
        description:
          "The layer most invisible to text-based accounts and most present in practice: talismans, exorcism, spirit-writing, divination, the household gods, the temple festival. Daoist priests have always been ritual specialists hired for specific occasions as much as contemplatives. Much of Chinese medicine, qigong and martial practice draws on the same cosmology without being institutionally Daoist at all.",
        markers: ["Talismans", "Exorcism", "Spirit-writing", "Qigong", "Temple festival"],
      },
    ],
  },

  texts: {
    heading: { eyebrow: "Primary Sources", title: "The Core Texts" },
    entries: [
      {
        title: "Daodejing",
        meta: "Attributed to Laozi · c. 4th century BCE",
        description:
          "Eighty-one short chapters on the Way that cannot be named, the virtue of yielding, and the ruler who governs by not interfering. The most translated Chinese book and among the most mistranslated; its compression leaves enormous latitude, and most English versions tell you more about their translator than about the text.",
      },
      {
        title: "Zhuangzi",
        meta: "Zhuang Zhou and later hands · c. 3rd century BCE",
        description:
          "Stories, jokes, impossible dialogues and a butterfly. It argues that our categories are perspectival and that skill arrives when deliberation stops, and it argues this by narrative and absurdity rather than by proof. The inner chapters are generally taken as the earliest layer. Funnier and stranger than its reputation.",
      },
      {
        title: "Cantong qi",
        meta: "Attributed to Wei Boyang · c. 142 CE",
        description:
          "The Token for the Joining of the Three, welding the cosmology of the Book of Changes to Daoist cosmogony and the elixir. Dense enough in its verse to sustain both an external and later an internal reading, and so heavily commented that the commentaries constitute a literature of their own.",
      },
      {
        title: "Baopuzi Neipian",
        meta: "Ge Hong · c. 320",
        description:
          "The Master Who Embraces Simplicity: a sustained argument that transcendence is attainable by technique rather than granted by fate, with a catalogue of elixirs, talismans and practices. The single most informative source on what fourth-century Daoist practice actually involved.",
      },
      {
        title: "Zhen'gao",
        meta: "Compiled by Tao Hongjing · c. 500",
        description:
          "Declarations of the Perfected, Tao Hongjing's edition of the Shangqing revelations with his own scholarly apparatus — including notes on which manuscripts he judged forgeries. Simultaneously a visionary scripture and a work of textual criticism, which is a combination worth noticing.",
      },
      {
        title: "Wuzhen pian",
        meta: "Zhang Boduan · 1075",
        description:
          "Awakening to Reality, the founding poem of southern internal alchemy. Eighty-one verses that relocate furnace, tripod, lead and mercury inside the body with a deliberate ambiguity the commentators have been unpacking for nine centuries.",
      },
      {
        title: "Taishang Ganying Pian",
        meta: "Song dynasty · c. 1100s",
        description:
          "The Treatise on Action and Response, a short morality text on how deeds attract their consequences through cosmic and bureaucratic machinery. Enormously popular, printed and distributed as merit for centuries, and the best single window onto Daoism as ordinary people practised it.",
      },
      {
        title: "The Daozang",
        meta: "Canon closed 1445, with a 1607 supplement",
        description:
          "The Daoist canon: roughly 1,400 texts in a tripartite arrangement reflecting the Shangqing, Lingbao and older revelation streams. Barely studied in the West before the twentieth century, and still the main reason most of this tradition remains unfamiliar.",
      },
    ],
  },

  caution: {
    eyebrow: "A Necessary Caution",
    body:
      "The division between a pure philosophical Daoism and a corrupt religious Daoism is a Western scholarly invention of the nineteenth century, reinforced by Chinese reformers who found the ritual tradition embarrassing. No premodern Chinese source operates with it. Treat any book that organises Daoism around that split as telling you about its own period. The second caution concerns translation: the Daodejing's compression means a translator supplies most of the meaning, and a great many popular versions are not translations at all but paraphrases of other English versions by people who do not read Classical Chinese. Check the translator's credentials before trusting a reading, and prefer editions that show you where the text is genuinely ambiguous.",
  },

  principles: {
    heading: { eyebrow: "Doctrine", title: "Central Ideas" },
    entries: [
      {
        term: "Dao",
        title: "The Way",
        description:
          "The source and course of things, which the Daodejing opens by saying cannot be named without ceasing to be itself. Not a deity and not a substance, but the pattern by which everything arises and returns. Every attempt to define it further is, by the text's own account, already a falling away.",
      },
      {
        term: "De",
        title: "Power or Virtue",
        description:
          "What the Way becomes in a particular thing: its specific capacity, the grain of it, how it is apt to act. A ruler's de is the efficacy that makes compulsion unnecessary. Translating it as virtue imports a moral sense the Chinese does not quite carry.",
      },
      {
        term: "Wu Wei",
        title: "Effortless Action",
        description:
          "Acting with the grain rather than against it, so the action costs nothing and leaves no residue. Neither passivity nor mere technique, and the hardest Daoist idea to render without collapsing into one of those. The cook in the Zhuangzi cuts the ox by following the spaces that are already there.",
      },
      {
        term: "Ziran",
        title: "Self-So",
        description:
          "What is the case of itself, without being made to be. Usually translated as nature or spontaneity, and meaning something closer to uncoerced self-arising. The Way models itself on ziran, which is as close to a first principle as the tradition gets.",
      },
      {
        term: "Qi",
        title: "Vital Breath",
        description:
          "The stuff that everything is a configuration of, condensing into the solid and dispersing into the rarefied. Life is a temporary gathering of it. Medicine, alchemy, geomancy, martial practice and ritual all operate on the assumption that it can be guided.",
      },
      {
        term: "Yin and Yang",
        title: "Complementary Phases",
        description:
          "Not opposed forces but the two aspects of any process, each producing the other and each carrying the other's seed. The model is the shaded and sunlit faces of a hill, which are not in conflict and cannot exist separately. Misread as dualism almost universally.",
      },
      {
        term: "Shen",
        title: "The Gods of the Body",
        description:
          "The body is populated by divinities with names, offices and appearances, and keeping them in residence is a condition of health and longevity. Visualising them is the core of Shangqing practice. The inner landscape is literally a landscape, with palaces, passes and officials.",
      },
      {
        term: "Xian",
        title: "The Transcendent",
        description:
          "The goal: not a disembodied soul in an afterlife but a transformed person who has refined the body itself into something lasting. Accounts range from physical ascent in daylight to the deliverance of a corpse that leaves only clothing or a staff behind.",
      },
      {
        term: "Guan",
        title: "Inner Observation",
        description:
          "Turning perception inward to watch the processes of one's own body and mind, as a practice rather than an introspective mood. It underwrites both the visionary tradition and the internal alchemical one, and it is what makes the Daoist body an object of knowledge.",
      },
    ],
  },

  figures: {
    heading: { eyebrow: "Lives", title: "Figures to Know" },
    entries: [
      {
        name: "Laozi",
        dates: "Traditionally 6th century BCE",
        school: "The classical texts",
        description:
          "Probably not a historical individual, and certainly not the author of a single-handed Daodejing. More important as what he became: by the second century CE he had been deified as Lord Lao, who descends to reveal scripture and correct the age.",
      },
      {
        name: "Zhuang Zhou",
        dates: "c. 369–286 BCE",
        school: "The classical texts",
        description:
          "Dreamt he was a butterfly and could not afterwards say which way round it went. Declined office on the grounds that he would rather drag his tail in the mud than be a sacred tortoise in a box. The inner chapters are generally accepted as his.",
      },
      {
        name: "Zhang Daoling",
        dates: "2nd century CE",
        school: "Celestial Masters",
        description:
          "Received the covenant from the deified Laozi in 142 and founded the first organised Daoist church. His descendants held the office of Celestial Master in unbroken succession for most of two millennia, which makes it one of the longest hereditary religious lineages anywhere.",
      },
      {
        name: "Ge Hong",
        dates: "283–343",
        school: "Waidan",
        description:
          "Official, physician and alchemist, and the great systematiser of elixir practice. Scathing about practitioners who lacked the texts or the discipline, and insistent — against the fatalists of his day — that transcendence is a technical achievement available to those who work for it.",
      },
      {
        name: "Yang Xi",
        dates: "330–386",
        school: "Shangqing",
        description:
          "The medium through whom the Highest Clarity scriptures were revealed over six years, in writing of such quality that it was prized as calligraphy and literature independently of its content. The visions came largely at night, and were recorded immediately.",
      },
      {
        name: "Tao Hongjing",
        dates: "456–536",
        school: "Shangqing",
        description:
          "Polymath, pharmacologist and imperial adviser who collected and edited the scattered Shangqing revelations, annotating which manuscripts he considered forged. Both a believer in the visions and a rigorous textual critic, without apparent difficulty.",
      },
      {
        name: "Lu Xiujing",
        dates: "406–477",
        school: "Lingbao",
        description:
          "Codified the Lingbao liturgy and produced the first systematic catalogue of Daoist scripture, establishing the threefold structure the canon still uses. The tradition's great liturgist and its first librarian.",
      },
      {
        name: "Zhang Boduan",
        dates: "987–1082",
        school: "Neidan",
        description:
          "Author of Awakening to Reality and founder of the southern lineage of internal alchemy. Insisted on the primacy of refining essence and breath over doctrinal speculation, and wrote in a verse dense enough to require the commentaries it duly received.",
      },
      {
        name: "Wang Chongyang",
        dates: "1113–1170",
        school: "Quanzhen",
        description:
          "Founded the Complete Perfection school after a reported encounter with two immortals, and gathered the seven disciples remembered as the Seven Perfected. Combined internal alchemy, Chan sitting and Confucian ethics into a monastic rule that still governs major temples.",
      },
      {
        name: "Qiu Chuji",
        dates: "1148–1227",
        school: "Quanzhen",
        description:
          "Travelled across Central Asia in his seventies to meet Chinggis Khan, reportedly advised him against slaughter, and returned with tax exemption and imperial protection for his order. The single most consequential piece of diplomacy in Daoist history.",
      },
    ],
  },

  eras: {
    heading: { eyebrow: "Transmission", title: "Twenty-Four Centuries" },
    entries: [
      {
        period: "4th–3rd c. BCE",
        title: "The Classical Writings",
        description:
          "The Daodejing and Zhuangzi take shape amid the argument of the Warring States, alongside Confucian, Mohist and Legalist rivals. The Guodian finds show the Daodejing still fluid in the late fourth century.",
      },
      {
        period: "2nd c. BCE",
        title: "Han Syntheses",
        description:
          "The Huainanzi assembles a comprehensive cosmology under imperial patronage; court-sponsored searches for elixirs and the isles of the immortals begin in earnest. Correlative cosmology — qi, yin-yang, the five phases — becomes the shared framework of Chinese thought.",
      },
      {
        period: "142",
        title: "The Covenant",
        description:
          "Zhang Daoling receives the revelation of Orthodox Unity from Lord Lao and organises the Celestial Masters. Daoism acquires a church, a priesthood and a liturgy, and ceases to be only a literature.",
      },
      {
        period: "364–400",
        title: "The Southern Revelations",
        description:
          "Shangqing scriptures are revealed to Yang Xi; the Lingbao corpus follows within a generation. Between them they supply the tradition's visionary interior and its public liturgy, and both absorb substantial Buddhist material.",
      },
      {
        period: "5th–7th c.",
        title: "Canon and Competition",
        description:
          "Lu Xiujing catalogues the scriptures; Tao Hongjing edits the revelations. Daoism and Buddhism contend for imperial favour through debate, polemic and occasional persecution, each borrowing heavily from the other while denying it.",
      },
      {
        period: "7th–9th c.",
        title: "Tang Ascendancy",
        description:
          "The Tang imperial house claims descent from Laozi and makes Daoism a state religion. External alchemy reaches its height and then its crisis: elixir poisoning kills several emperors, and the practice loses credibility.",
      },
      {
        period: "9th–12th c.",
        title: "The Internal Turn",
        description:
          "Neidan reinterprets the whole alchemical vocabulary as a map of the body. Zhang Boduan's Awakening to Reality founds the southern lineage, and internal practice becomes the tradition's main contemplative road.",
      },
      {
        period: "1170–1250",
        title: "Quanzhen",
        description:
          "Wang Chongyang founds a celibate monastic order and Qiu Chuji secures Mongol protection for it. Daoism acquires the institutional form — monasteries, ordination ranks, a rule — that it largely retains.",
      },
      {
        period: "1445",
        title: "The Canon Closed",
        description:
          "The Daozang is compiled and printed under the Ming, fixing roughly 1,400 titles. A supplement follows in 1607. Most of it would remain unread outside the priesthood for five hundred years.",
      },
      {
        period: "17th–19th c.",
        title: "Contraction and Caricature",
        description:
          "Daoism loses elite patronage and is increasingly dismissed by Confucian officials as superstition. Jesuit and later Protestant observers inherit that verdict and transmit it to Europe, where the split between philosophical and religious Daoism is formalised.",
      },
      {
        period: "20th c.",
        title: "Rupture",
        description:
          "Republican reformers and then the Cultural Revolution devastate the institutions: temples closed, priests laicised, texts destroyed. Lineages survive in Taiwan, Hong Kong and the diaspora, which is why so much fieldwork was done there.",
      },
      {
        period: "1980–present",
        title: "Revival and Recovery",
        description:
          "Temples reopen on the mainland and ordinations resume. In parallel, Schipper, Strickmann, Robinet and the Daozang project make the canon scholarly accessible for the first time, and the nineteenth-century picture of Daoism finally starts to give way.",
      },
    ],
  },

  reading: {
    heading: { eyebrow: "Where to Start", title: "A Reading Path" },
    entries: [
      {
        stage: "Begin here",
        title: "The Taoist Body",
        author: "Kristofer Schipper",
        note: "Written by a scholar who was himself ordained a Daoist priest in Taiwan, and the best single book for understanding the tradition as practised rather than as anthologised. Changes what you think Daoism is.",
      },
      {
        stage: "For the classics",
        title: "Chuang-tzu: The Inner Chapters",
        author: "A. C. Graham, translator",
        note: "Graham could hear the jokes and the philosophy at once, and his reconstruction of the text's layers is still authoritative. The best entry to the Zhuangzi in English.",
      },
      {
        stage: "For the Daodejing",
        title: "Dao De Jing: A Philosophical Translation",
        author: "Roger T. Ames and David L. Hall",
        note: "Shows its working, explains the interpretive choices, and incorporates the excavated manuscripts. Use it to see where the text is genuinely ambiguous rather than where a translator has smoothed it.",
      },
      {
        stage: "For the history",
        title: "Taoism: Growth of a Religion",
        author: "Isabelle Robinet",
        note: "The clearest narrative account of how the movements actually developed, from the Celestial Masters through Shangqing and Lingbao to internal alchemy. Robinet is the indispensable guide to the medieval material.",
      },
      {
        stage: "For internal alchemy",
        title: "Taoist Meditation",
        author: "Isabelle Robinet",
        note: "How visualisation, body gods and the inner landscape actually work in Shangqing practice, and how that practice feeds into neidan. Dense and worth it.",
      },
      {
        stage: "For the alchemical texts",
        title: "The Seal of the Unity of the Three",
        author: "Fabrizio Pregadio, translator",
        note: "Pregadio's Cantong qi, with the apparatus needed to follow it. His translations and his encyclopedia are the standard route into Chinese alchemy in English.",
      },
      {
        stage: "For the ritual",
        title: "Daoist Ritual in Chinese Society and History",
        author: "John Lagerwey",
        note: "Fieldwork-based account of what Daoist priests do, by someone who watched them do it. The corrective to any text-only picture of the tradition.",
      },
      {
        stage: "For reference",
        title: "The Encyclopedia of Taoism",
        author: "Fabrizio Pregadio, editor",
        note: "Two volumes, authoritative, and the place to check any term, text, figure or lineage you meet elsewhere. Expensive; worth finding in a library.",
      },
    ],
  },

  glossary: {
    heading: { eyebrow: "Vocabulary", title: "Terms of the Tradition" },
    entries: [
      { term: "Dao", gloss: "The Way; the source and course of things, which naming already distorts." },
      { term: "De", gloss: "Power, virtue; what the Way becomes as a particular thing's own capacity." },
      { term: "Wu wei", gloss: "Non-forcing action, effective because it follows the grain of a situation." },
      { term: "Ziran", gloss: "Self-so; what is the case of itself, without being compelled." },
      { term: "Qi", gloss: "Vital breath; the stuff all things are temporary configurations of." },
      { term: "Yin and yang", gloss: "The shaded and sunlit aspects of any process, each generating the other." },
      { term: "Wuxing", gloss: "The five phases — wood, fire, earth, metal, water — as a cycle of transformation." },
      { term: "Xian", gloss: "A transcendent; one who has refined the body into something that lasts." },
      { term: "Shen", gloss: "Spirit, and the gods who inhabit the body's offices and palaces." },
      { term: "Jing", gloss: "Essence; the generative substance that internal alchemy refines first." },
      { term: "Dantian", gloss: "Cinnabar field; one of the body's three centres of refinement." },
      { term: "Waidan", gloss: "External alchemy; the elixir compounded in a vessel over fire." },
      { term: "Neidan", gloss: "Internal alchemy; the elixir compounded in the body from its own substances." },
      { term: "Huohou", gloss: "Fire times; the cosmologically scheduled tempo of heating." },
      { term: "Fu", gloss: "Talisman; a written form whose power lies in its correspondence, not its legibility." },
      { term: "Jiao", gloss: "The great communal offering ritual, renewing the bond between a community and the gods." },
      { term: "Zhai", gloss: "Retreat or purification rite, often penitential, preceding major liturgy." },
      { term: "Daozang", gloss: "The Daoist canon, closed in 1445 at roughly 1,400 titles." },
      { term: "Zhengyi", gloss: "Orthodox Unity; the Celestial Masters lineage of married, hereditary priests." },
      { term: "Quanzhen", gloss: "Complete Perfection; the celibate monastic order founded in 1170." },
    ],
  },

  related: [
    { href: "/library/alchemies", label: "Alchemies", kind: "Shelf" },
    { href: "/library/philosophies", label: "Philosophies", kind: "Shelf" },
    { href: "/library/hermeticism", label: "Hermeticism", kind: "Shelf" },
    { href: "/topics/metaphysics", label: "Metaphysics", kind: "Topic" },
    { href: "/topics/consciousness", label: "Consciousness", kind: "Topic" },
  ],
};
