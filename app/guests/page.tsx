import { SiteHeader } from "@/components/SiteHeader";
import { getGuestIndex, hasGuestProfile } from "@/lib/guests";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Minds",
  description: "A future guest encyclopedia for Philosophical Minds contributors.",
};

export default function GuestsPage() {
  const guests = getGuestIndex();
  const groupedGuests = groupGuestsByInitial(guests);

  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">The Minds</p>
        <h1>Guest Index</h1>
        <p>
          A searchable encyclopedia of philosophers, authors, alchemists, historians, researchers, practitioners, and
          cultural voices connected to the podcast archive.
        </p>
      </section>
      <section className="route-section guest-index-section">
        <div className="section-heading">
          <p className="eyebrow">Living Index</p>
          <h2>{guests.length} Names in the Archive</h2>
          <p>
            An evolving directory drawn from the podcast archive, with biographical entries appearing as each profile
            is completed.
          </p>
        </div>

        <div className="guest-index">
          {groupedGuests.map(([initial, entries]) => (
            <div className="guest-letter-section" key={initial}>
              <div className="guest-letter-section__marker" aria-hidden="true">
                {initial}
              </div>
              <div className="guest-name-grid">
                {entries.map((guest) =>
                  hasGuestProfile(guest.slug) ? (
                    <Link className="guest-name-card guest-name-card--linked" href={`/guests/${guest.slug}`} key={guest.slug}>
                      <h3>{guest.name}</h3>
                      <span>Guest profile</span>
                    </Link>
                  ) : (
                    <article className="guest-name-card" key={guest.slug}>
                      <h3>{guest.name}</h3>
                    </article>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function groupGuestsByInitial(guests: ReturnType<typeof getGuestIndex>) {
  const groups = new Map<string, typeof guests>();

  for (const guest of guests) {
    const initial = guest.name[0]?.toUpperCase() ?? "#";
    const current = groups.get(initial) ?? [];
    current.push(guest);
    groups.set(initial, current);
  }

  return Array.from(groups.entries());
}
