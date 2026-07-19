import { GlobalPlayer } from "@/components/GlobalPlayer";
import { SiteFooter } from "@/components/SiteFooter";
import { getPodcastFeed } from "@/lib/rss";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Philosophical Minds Podcast",
    template: "%s | Philosophical Minds",
  },
  description:
    "A cinematic podcast and knowledge platform for philosophy, metaphysics, consciousness, religion, alchemy, hidden history, and the love of wisdom.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://philosophicalmindspodcast.com"),
  openGraph: {
    title: "Philosophical Minds Podcast",
    description:
      "Long-form conversations exploring philosophy, metaphysics, consciousness, religion, alchemy, hidden history, and the architecture of human thought.",
    images: [
      {
        url: "/og.png",
        width: 1600,
        height: 900,
        alt: "Philosophical Minds hero with classical sculpture, books, and antique instruments.",
      },
    ],
    siteName: "Philosophical Minds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophical Minds Podcast",
    description: "The Love of Wisdom: a living archive of philosophical and esoteric inquiry.",
    images: ["/og.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const feed = await getPodcastFeed(1);

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        <SiteFooter />
        <GlobalPlayer initialEpisode={feed.episodes[0]} />
      </body>
    </html>
  );
}
