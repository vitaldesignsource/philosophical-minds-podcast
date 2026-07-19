"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  ["/episodes", "Episodes"],
  ["/guests", "The Minds"],
  ["/topics", "Topics"],
  ["/projects", "Projects"],
  ["/appearances", "Appearances"],
  ["/library", "Library"],
  ["/journal", "Journal"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/admin", "Admin"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
      <Link className="brand-mark" href="/" aria-label="Philosophical Minds home">
        <img src="/phiminds.png" alt="" />
        <span>Philosophical Minds</span>
      </Link>
      <button
        className={`site-nav__toggle ${menuOpen ? "site-nav__toggle--open" : ""}`}
        type="button"
        aria-controls="site-navigation-links"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        title={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="site-nav__toggle-icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      <div
        className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`}
        id="site-navigation-links"
      >
        {NAV_ITEMS.map(([href, label]) => (
          <Link href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
