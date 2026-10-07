import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old store URLs → /turf-damage, permanent (308).
      //
      // The site used to be a storefront, and Google still crawls these three
      // as 404s. The Excavator Foot is licensed to manufacturers and can't be
      // ordered, and /turf-damage says so plainly ("you cannot buy one yet;
      // tell your dealer"), so that's the honest landing for anyone holding an
      // old link. Absolute destination and listed before the www rule, so
      // www.excavatorfoot.com/product-page/... is one hop, not two.
      ...[
        "/product-page/caterpillar-305-foot",
        "/product-page/caterpillar-308-foot",
        "/category/all-products",
      ].map((source) => ({
        source,
        destination: "https://excavatorfoot.com/turf-damage",
        permanent: true,
      })),
      // www → apex, permanent (301).
      //
      // Both hostnames served the full site with a 200 and an identical ETag,
      // so search engines saw two complete copies of excavatorfoot.com and
      // split every inbound link between them. That is the most expensive SEO
      // defect on a site this small: with only three pages there is no
      // internal link volume to compensate for halving the external signal.
      //
      // The apex is the canonical half because robots.txt, the sitemap and the
      // Organization JSON-LD all already declared it — this makes the server
      // agree with what the site was claiming everywhere else.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.excavatorfoot.com" }],
        destination: "https://excavatorfoot.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
