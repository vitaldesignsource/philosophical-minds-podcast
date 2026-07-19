import { SiteHeader } from "@/components/SiteHeader";
import { getGuestProfile, guestProfiles } from "@/lib/guests";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guestProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = getGuestProfile(slug);

  if (!profile) {
    return {
      title: "Guest Profile",
      description: "A Philosophical Minds podcast guest profile.",
    };
  }

  return {
    title: profile.name,
    description: profile.summary,
  };
}

export default async function GuestProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = getGuestProfile(slug);

  if (!profile) notFound();

  const profileNumber = guestProfiles.findIndex((entry) => entry.slug === profile.slug) + 1;

  return (
    <main>
      <section className="page-hero guest-profile-hero">
        <SiteHeader />
        <p className="eyebrow">Guest Profile</p>
        <h1>{profile.name}</h1>
        <p className="guest-profile-hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <Link className="button" href="/guests">
            Back to Guest Index
          </Link>
        </div>
      </section>

      <section className="guest-profile-section">
        <div className="guest-profile-layout">
          <aside className="guest-profile-rail" aria-label="Guest archive position">
            <p className="eyebrow">The Minds</p>
            <strong>{String(profileNumber).padStart(2, "0")}</strong>
            <span>Guest archive</span>
            <div className="guest-profile-rail__rule" aria-hidden="true">
              <i />
            </div>
          </aside>

          <article className="guest-profile">
            <header className="guest-profile__header">
              <p className="eyebrow">Biography</p>
              <h2>{profile.name}</h2>
              <span aria-hidden="true" />
            </header>

            <div className="guest-profile__body">
              {profile.paragraphs.map((paragraph, index) =>
                paragraph.startsWith("On Philosophical Minds Podcast") ? (
                  <aside className="guest-profile__podcast-note" key={paragraph}>
                    <p className="eyebrow">On the Podcast</p>
                    <p>{paragraph}</p>
                  </aside>
                ) : (
                  <p className={index === 0 ? "guest-profile__lead" : undefined} key={paragraph}>
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            {profile.closingQuestion && (
              <blockquote>
                <span>At the center of her work is a profound question:</span>
                {profile.closingQuestion}
              </blockquote>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
