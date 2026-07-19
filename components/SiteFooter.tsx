import Link from "next/link";

const exploreLinks = [
  ["Episodes", "/episodes"],
  ["Topics", "/topics"],
  ["Projects", "/projects"],
  ["Appearances", "/appearances"],
  ["Library", "/library"],
  ["Journal", "/journal"],
  ["About", "/about"],
];

const socialLinks = [
  ["YouTube", "https://www.youtube.com/@philosophicalmindspodcast"],
  ["Instagram", "https://www.instagram.com/philosophicalmindspodcast/"],
  ["Patreon", "https://www.patreon.com/philosophicalminds"],
  ["Spotify", "https://open.spotify.com/show/4Ln1tnkAHHNTly7ujKkb1W"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link className="footer-logo" href="/" aria-label="Philosophical Minds home">
            <img src="/phiminds.png" alt="" />
          </Link>
          <p className="eyebrow">Philosophical Minds</p>
          <h2>The Love of Wisdom</h2>
          <p>
            Long-form conversations at the threshold of philosophy, metaphysics, religion, consciousness, alchemy, and
            hidden history.
          </p>
        </div>

        <nav className="footer-group" aria-label="Footer navigation">
          <h3>Explore</h3>
          {exploreLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-group" aria-label="Listening and social links">
          <h3>Listen and Support</h3>
          {socialLinks.map(([label, href]) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>

        <div className="footer-group footer-group--contact">
          <h3>Contact</h3>
          <p>Feedback, guest requests, project notes, and collaboration inquiries are welcome.</p>
          <Link className="footer-action" href="/contact">
            Drop Us a Line
          </Link>
        </div>
      </div>
      <div className="site-footer__bar">
        <span>Philosophical Minds Podcast</span>
        <Link href="/contact">Questions / Concerns</Link>
      </div>
    </footer>
  );
}
