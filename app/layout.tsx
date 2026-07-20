import { GlobalPlayer } from "@/components/GlobalPlayer";
import { SiteFooter } from "@/components/SiteFooter";
import { getPodcastFeed } from "@/lib/rss";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

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
      <body className={`${inter.variable} ${cinzel.variable} ${cormorant.variable}`}>
        {children}
        <SiteFooter />
        <GlobalPlayer initialEpisode={feed.episodes[0]} />
      </body>
    </html>
  );
}
