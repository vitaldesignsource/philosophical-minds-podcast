import { DIRECT_LIBSYN_RSS_URL } from "@/lib/rss";

/**
 * The site has always advertised its feed at /rss — lib/rss.ts reports that
 * URL as the feed's source, and the podcast's structured data points at it —
 * but the route did not exist and returned 404.
 *
 * This redirects to the authoritative feed rather than re-serialising it.
 * Anything that subscribes here follows the redirect to the real feed, so a
 * bug in this codebase can never break someone's subscription, and the feed
 * stays the one the hosting platform publishes.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.redirect(DIRECT_LIBSYN_RSS_URL, 308);
}
