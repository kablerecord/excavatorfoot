/**
 * Bibliographic data for U.S. Patent No. 12,679,457, in one place.
 *
 * WHY THIS FILE EXISTS
 *
 * The site linked to patents.google.com/patent/US12679457B2, which 404s. The
 * kind code was never wrong — the barcode on the grant reads US012679457B2 —
 * Google simply has not indexed a July 2026 grant yet, and there is no way to
 * know when it will. That link is the first thing a licensee's IP counsel
 * clicks to check whether any of this is real, so it cannot be left pointing
 * at a 404 while we wait on a third party's crawler.
 *
 * So the site now links to documents that resolve today:
 *
 *  - USPTO_PDF_URL is the granted patent itself, straight from USPTO. It is
 *    the authoritative document and the one an evaluator actually wants.
 *  - GOOGLE_PATENTS_URL points at the PRE-GRANT PUBLICATION (US 2025/0153770
 *    A1), which Google has indexed because it published in May 2025. Same
 *    disclosure, same claims-as-filed, readable in a browser without a
 *    download.
 *
 * When Google indexes the grant, swap GOOGLE_PATENTS_URL to
 * https://patents.google.com/patent/US12679457B2/en and delete this note.
 *
 * Every field below was read off the face of the granted patent PDF.
 */

export const PATENT = {
  /** As displayed to humans. */
  number: "12,679,457",
  /** No separators — used in URLs and structured data. */
  numberCompact: "12679457",
  kindCode: "B2",
  /** Official USPTO title, which is not the same as our product name. */
  title: "Excavator Rotating Assembly",
  grantDate: "2026-07-14",
  grantDateDisplay: "July 14, 2026",
  applicationNumber: "18/594,097",
  filingDate: "2024-03-04",
  filingDateDisplay: "March 4, 2024",
  publicationNumber: "US 2025/0153770 A1",
  publicationDateDisplay: "May 15, 2025",
  provisionalNumber: "63/598,078",
  provisionalDateDisplay: "November 11, 2023",
  claimCount: 11,
  drawingSheets: 6,
  inventor: "Kable Darren Record",

  /** Authoritative grant document. Serves a PDF. */
  usptoPdfUrl:
    "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12679457",
  /** Pre-grant publication — browser-readable, and currently indexed. */
  googlePatentsUrl: "https://patents.google.com/patent/US20250153770A1/en",
} as const;
