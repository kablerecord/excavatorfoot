import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { PATENT } from "@/lib/patent";

const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@kablerecord" },
  { label: "Instagram", href: "https://instagram.com/kablerecord" },
  { label: "X", href: "https://twitter.com/kablerecord" },
  { label: "Facebook", href: "https://www.facebook.com/kablerecord" },
  { label: "TikTok", href: "https://www.tiktok.com/@kable.record" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kable-record-4817ab13" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Excavator</span>
              <span className="text-yellow-400">Foot</span>
            </h3>
            {/* Was "Patented ground stabilization technology for excavators."
                — a third, different description of the product (the layout
                said "pivot technology", llms.txt said "pivot mechanism"), and
                the least accurate of the three: the foot stabilises nothing,
                it rotates the machine. Inconsistent self-description across a
                site is both a ranking dilution and, for a licensee reading
                closely, a credibility problem. */}
            <p className="text-gray-400 text-sm mb-4">
              Patented mechanism that turns a tracked excavator in place —
              without tearing up the ground.
            </p>
            {/* Was patents.google.com/patent/US12679457B2 — a 404. Google has
                not indexed the July 2026 grant yet. Points at the USPTO grant
                document instead, which resolves today. See src/lib/patent.ts. */}
            <p className="text-gray-500 text-xs">
              <a
                href={PATENT.usptoPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                U.S. Patent No. {PATENT.number}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* Was href="/#products" — the homepage has no #products
                  section (its anchors are #demo and #validation), so this
                  link silently dropped the visitor at the top of the page. */}
              <li>
                <Link href="/turf-damage" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Excavator Turf Damage
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Watch the Demo
                </Link>
              </li>
              <li>
                <Link href="/#validation" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Prototype Validation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact?inquiry=licensing" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Licensing Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Related Sites */}
          <div>
            <h4 className="text-white font-semibold mb-4">More by Kable Record</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://osqr.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  OSQR <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://fourthgenformula.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Fourth Gen Formula <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://kablerecord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Kable Record <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <nav aria-label="Social media" className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <p>&copy; {currentYear} Excavator Foot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
