import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

const youtubeAppearances = [
  {
    show: "My Family Thinks I'm Crazy",
    title: "Sky Mathis on My Family Thinks I'm Crazy",
    embedUrl: "https://www.youtube.com/embed/e1uFniZeEzc?si=y5olkV9aLVjYbSSU",
    watchUrl: "https://www.youtube.com/watch?v=e1uFniZeEzc",
  },
  {
    show: "ARCANVM with Ike Baker",
    title: "Sky Mathis on ARCANVM with Ike Baker",
    embedUrl: "https://www.youtube.com/embed/OOmMEjsUzf0?si=cugOKAeVsfWAbvlp",
    watchUrl: "https://www.youtube.com/watch?v=OOmMEjsUzf0",
  },
  {
    show: "Occult Rejects Podcast",
    title: "Sky Mathis on Occult Rejects Podcast",
    embedUrl: "https://www.youtube.com/embed/qmmG8Q9D4yM?si=QZofJMN6LeCGeRxw",
    watchUrl: "https://www.youtube.com/watch?v=qmmG8Q9D4yM",
  },
  {
    show: "The Occult Rejects",
    title: "Sky Mathis on The Occult Rejects",
    embedUrl: "https://www.youtube.com/embed/MfYey0I4p-k?si=IhviBeXtpHGZ_Yzy",
    watchUrl: "https://www.youtube.com/watch?v=MfYey0I4p-k",
  },
];

const linkedAppearances = [
  {
    show: "Tria Prima Podcast",
    title: "Demiurges and Daemons with Special Guests Ike Baker and Skyler Mathis",
    url: "https://triaprima.co/2023/09/24/demiureges-and-daemons-with-special-guests-ike-baker-and-skyler-mathis/",
  },
];

export const metadata: Metadata = {
  title: "Appearances",
  description: "Podcast appearances featuring Sky Mathis from Philosophical Minds.",
};

export default function AppearancesPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Appearances</p>
        <h1>Sky Mathis on Other Shows</h1>
        <p>
          Selected guest conversations, interviews, and external podcast appearances connected to Philosophical Minds.
        </p>
      </section>

      <section className="route-section appearances-section">
        <div className="section-heading">
          <p className="eyebrow">Guest Conversations</p>
          <h2>External Podcast Appearances</h2>
          <p>
            A growing archive of conversations where Sky Mathis appears as a guest across related podcasts and channels.
          </p>
        </div>

        <div className="appearances-grid">
          {youtubeAppearances.map((appearance) => (
            <article className="appearance-card" key={appearance.embedUrl}>
              <div className="appearance-card__video">
                <iframe
                  title={appearance.title}
                  src={appearance.embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="appearance-card__body">
                <p className="appearance-card__source">{appearance.show}</p>
                <h3>{appearance.title}</h3>
                <a className="button button--quiet" href={appearance.watchUrl} target="_blank" rel="noreferrer">
                  Watch on YouTube
                </a>
              </div>
            </article>
          ))}

          {linkedAppearances.map((appearance) => (
            <article className="appearance-card appearance-card--link" key={appearance.url}>
              <div className="appearance-card__body">
                <p className="appearance-card__source">{appearance.show}</p>
                <h3>{appearance.title}</h3>
                <p>External episode page for the Tria Prima Podcast conversation featuring Ike Baker and Skyler Mathis.</p>
                <a className="button button--primary" href={appearance.url} target="_blank" rel="noreferrer">
                  Open Episode
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
