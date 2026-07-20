import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Philosophical Minds and host Sky Mathis, an author, independent researcher, publisher, and creator working across philosophy, esotericism, and the Western mystery traditions.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">The Love of Wisdom</p>
        <h1>About Philosophical Minds</h1>
        <p>
          The Philosophical Minds Podcast is a thought-provoking exploration of Western esotericism, alchemy, and occult
          traditions.
        </p>
      </section>
      <section className="route-section about-section">
        <div className="about-layout">
          <article className="about-mission">
            <p className="eyebrow">The Inquiry</p>
            <h2>Mission</h2>
            <p>
              Featuring conversations with leading practitioners and experts, the show delves into ancient wisdom,
              metaphysical concepts, and transformative spiritual practices. With a strong emphasis on Theurgic,
              Neoplatonic, Gnostic, and Rosicrucian traditions, the podcast also explores esoteric mystery traditions
              both past and present.
            </p>
            <p>
              Ranging from the psycho-spiritual to the material-chemical nature of existence, Philosophical Minds boldly
              inquires into the liminality of mind and matter, uncovering insights from those dedicated to exploring the
              deeper mysteries of consciousness.
            </p>
          </article>

          <article className="about-host">
            <header className="about-host__header">
              <div>
                <p className="eyebrow">Host / Author / Publisher</p>
                <h2>Sky Mathis</h2>
              </div>
              <p className="about-host__descriptor">Modern philosopher-magician</p>
            </header>

            <div className="about-host__roles" aria-label="Sky Mathis roles">
              <span>Author</span>
              <span>Independent Researcher</span>
              <span>Publisher</span>
              <span>Podcast Host</span>
              <span>Creator</span>
            </div>

            <div className="about-host__profile">
              <figure className="about-host__portrait">
                <Image
                  src="/sky-mathis.jpg"
                  alt="Sky Mathis standing within a monumental stone interior"
                  width={1320}
                  height={1752}
                  sizes="(max-width: 760px) 100vw, 38vw"
                />
                <figcaption>Sky Mathis · Philosophical Minds</figcaption>
              </figure>

              <div className="about-host__prose">
                <p>
                  Sky Mathis is an author, independent researcher, publisher, podcast host, and creator working at the
                  intersection of philosophy, esotericism, symbolism, and the Western mystery traditions. Describing his
                  approach as that of a “modern philosopher-magician,” his work explores how ancient systems of
                  metaphysics, ritual, cosmology, and spiritual transformation can be understood and applied within the
                  modern world.
                </p>
                <p>
                  He is the creator and host of the <em>Philosophical Minds Podcast</em> and the co-host and producer of{" "}
                  <a href="https://aethericapodcast.com" target="_blank" rel="noreferrer">
                    <em>Aetherica Podcast</em>
                  </a>{" "}
                  alongside author and ceremonialist Ike Baker. Through long-form conversations with scholars, authors,
                  practitioners, researchers, and cultural commentators, Sky investigates subjects ranging from
                  Hermeticism, Neoplatonism, theurgy, alchemy, Kabbalah, and ceremonial magic to consciousness, natural
                  philosophy, hidden history, and the philosophical crises of contemporary culture.
                </p>
                <p>
                  Sky is also the founder of{" "}
                  <a href="https://threemagipress.com" target="_blank" rel="noreferrer">
                    3 Magi Press
                  </a>
                  , an independent publishing platform dedicated to serious works of philosophy, esotericism, symbolism,
                  traditional wisdom, and spiritual practice. Through its publishing projects and{" "}
                  <em>The Third Lamp</em> digital magazine, he works to create a meeting place for established authors,
                  emerging researchers, artists, and practitioners who are contributing to the continuing development
                  of the esoteric tradition.
                </p>
                <p>
                  His primary writing project, <em>The Architecture of Hidden Forces</em>, planned for release in
                  September 2027, examines the relationships between force, form, essence, virtue, consciousness, and
                  the living structures underlying manifestation. Drawing upon Greek philosophy, Hermeticism, alchemy,
                  elemental theory, planetary cosmology, subtle-body traditions, and symbolic systems, his work seeks to
                  recover a coherent language for realities that modern culture often dismisses, fragments, or
                  overlooks.
                </p>
                <p>
                  Across his writing, publishing, design, and media work, Sky is concerned with the return of the
                  invisible: the recovery of meaning, interiority, imagination, sacred knowledge, and direct
                  participation in a living cosmos. His guiding aim is not merely to preserve the esoteric traditions of
                  the past, but to help articulate what they may become in the present.
                </p>
              </div>
            </div>

            <div className="social-strip social-strip--inline about-host__links">
              <a href="https://www.youtube.com/@philosophicalmindspodcast" target="_blank" rel="noreferrer">
                YouTube
              </a>
              <a href="https://www.instagram.com/philosophicalmindspodcast/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.patreon.com/philosophicalminds" target="_blank" rel="noreferrer">
                Patreon
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
