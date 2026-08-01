import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Replaces the hand-written public/robots.txt.
 *
 * Generated rather than static so the host and sitemap URL come from the same
 * SITE_URL constant that metadataBase, the canonicals and the sitemap use.
 * The static file had those hardcoded in a second place, which is exactly how
 * a site ends up declaring the apex in robots.txt while its pages claim www.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The contact form POSTs here. Nothing to index and nothing useful to
        // crawl — it only ever returns JSON.
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
