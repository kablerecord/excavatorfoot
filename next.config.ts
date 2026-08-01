import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
