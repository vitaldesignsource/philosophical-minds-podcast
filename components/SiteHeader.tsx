import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="brand-mark" href="/" aria-label="Philosophical Minds home">
        <img src="/phiminds.png" alt="" />
        <span>Philosophical Minds</span>
      </Link>
      <div>
        <Link href="/episodes">Episodes</Link>
        <Link href="/guests">The Minds</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/appearances">Appearances</Link>
        <Link href="/library">Library</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
