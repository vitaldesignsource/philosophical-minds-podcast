import { signIn, signOut, syncRss, isAdminSession } from "./actions";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Admin",
  description: "Owner-only administration entry point for Philosophical Minds.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage({ searchParams }: Props) {
  const params = await searchParams;
  const unlocked = await isAdminSession();
  const status = typeof params.status === "string" ? params.status : "";
  const sync = typeof params.sync === "string" ? params.sync : "";
  const configured = Boolean(process.env.PM_ADMIN_PASSCODE_HASH && process.env.PM_ADMIN_SESSION_SECRET);

  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Owner Console</p>
        <h1>Administration</h1>
        <p>
          A protected control room for RSS synchronization, featured content, guests, topics, transcripts, quotes, articles,
          library entries, navigation, SEO, and support links.
        </p>
      </section>

      <section className="route-section">
        {!unlocked ? (
          <div className="admin-panel">
            <h2>Protected Admin Route</h2>
            {!configured ? (
              <p>
                The owner console is locked until environment secrets are configured. Add a SHA-256 passcode hash and a
                session secret before enabling sign-in.
              </p>
            ) : (
              <p>Enter the owner passcode to unlock administrative controls. Sessions expire automatically.</p>
            )}
            {status === "denied" && <p className="guest-line">That passcode was not accepted.</p>}
            {status === "setup-required" && <p className="guest-line">Admin secrets are not configured yet.</p>}
            <form className="admin-form" action={signIn}>
              <label>
                <span>Owner passcode</span>
                <input name="passcode" type="password" autoComplete="current-password" disabled={!configured} required />
              </label>
              <button className="button button--primary" type="submit" disabled={!configured}>
                Unlock Console
              </button>
            </form>
          </div>
        ) : (
          <div className="admin-panel">
            <div className="meta-line">
              <span>Server protected</span>
              <span>Session expires in 8 hours</span>
              {sync === "complete" && <span>RSS sync requested</span>}
            </div>
            <h2>Editorial Controls</h2>
            <ul>
              <li>Sync the RSS feed and refresh public episode pages.</li>
              <li>Feature or unfeature conversations for the homepage.</li>
              <li>Curate guest profiles without inventing biographies or credentials.</li>
              <li>Edit topic, library, journal, and quote surfaces.</li>
              <li>Upload future transcripts, chapters, quotations, books, and references.</li>
              <li>Review SEO titles, descriptions, support links, newsletter settings, and navigation labels.</li>
            </ul>
            <div className="hero__actions">
              <form action={syncRss}>
                <button className="button button--primary" type="submit">
                  Sync RSS Feed
                </button>
              </form>
              <form action={signOut}>
                <button className="button" type="submit">
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
