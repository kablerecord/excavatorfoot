import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Replaces the hand-written public/sitemap.xml.
 *
 * lastModified is an explicit per-route constant rather than `new Date()`.
 * Stamping build time would tell crawlers all three pages changed on every
 * deploy — including deploys that only touched config — which trains them to
 * stop trusting the signal. Bump the date below when a page's content actually
 * changes.
 */
const LAST_MODIFIED = {
  home: "2026-08-01",
  turfDamage: "2026-10-07",
  about: "2026-07-26",
  contact: "2026-10-07",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      // Priority second only to the homepage: this is the page targeting the
      // queries that actually have search volume.
      url: `${SITE_URL}/turf-damage`,
      lastModified: LAST_MODIFIED.turfDamage,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED.about,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED.contact,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
