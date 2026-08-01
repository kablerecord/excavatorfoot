import { ImageResponse } from "next/og";

/**
 * DEFAULT SOCIAL SHARE CARD — 1200×630
 *
 * The site declared `twitter:card = summary_large_image` but never supplied an
 * image, so every excavatorfoot.com link pasted into LinkedIn, Slack, iMessage
 * or an outbound email to an OEM rendered as a bare grey rectangle. For a site
 * whose entire job is looking credible to a licensing contact who was sent the
 * link, that is a real cost, not a cosmetic one.
 *
 * Next.js auto-detects this file and injects both `og:image` and
 * `twitter:image` on every route that does not define its own, so one file
 * covers the whole site.
 *
 * Generated at build time rather than checked in as a PNG — no binary asset to
 * keep in sync when the patent number or tagline changes.
 *
 * Rendered by Satori, which supports only a subset of CSS: flexbox only (no
 * grid/float), and any element with more than one child needs an explicit
 * `display: 'flex'`. Keep edits inside that box.
 */

export const alt =
  "Excavator Foot — patented mechanism that turns a tracked excavator in place without ground damage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #000000 0%, #171717 55%, #000000 100%)",
          padding: "68px 76px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Excavator
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#facc15",
            }}
          >
            Foot
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            Turn a tracked excavator in place. Without tearing up the ground.
          </div>
          <div
            style={{
              fontSize: 29,
              lineHeight: 1.4,
              color: "#9ca3af",
              marginTop: 26,
              maxWidth: 900,
            }}
          >
            No skid-turn, no torn turf, no undercarriage scrub. Proven on 2-,
            5- and 8-ton machines.
          </div>
        </div>

        {/* Footer rule + patent + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 64,
                height: 4,
                background: "#facc15",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                fontSize: 26,
                color: "#d1d5db",
                marginLeft: 20,
                letterSpacing: "0.02em",
              }}
            >
              excavatorfoot.com
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#facc15", fontWeight: 600 }}>
            U.S. Patent No. 12,679,457
          </div>
        </div>
      </div>
    ),
    size,
  );
}
