/**
 * Single source of truth for the canonical origin.
 *
 * Previously the apex was written out by hand in five places (metadataBase,
 * the Organization JSON-LD, openGraph.url, public/robots.txt and
 * public/sitemap.xml). They happened to agree, but nothing enforced it — and
 * the page metadata pointing at one host while robots.txt points at another is
 * the classic way a duplicate-domain split gets locked in.
 *
 * No trailing slash: every consumer appends its own path.
 */
export const SITE_URL = "https://excavatorfoot.com";

/** The inbox that licensing and contact-form mail lands in. */
export const CONTACT_EMAIL = "info@excavatorfoot.com";
