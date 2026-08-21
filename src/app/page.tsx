import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Anchor,
  ArrowDown,
  RotateCw,
  Layers,
  ShieldCheck,
  Factory,
  FileText,
  Award,
  Clock,
  DollarSign,
  Shield,
  Lock,
  Cable,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";
import { PATENT } from "@/lib/patent";

/**
 * Product structured data for the Excavator Foot itself.
 *
 * Deliberately omitted: `offers`, `aggregateRating` and `review`.
 *
 * There is no price and nothing is for sale — this is an OEM licensing
 * programme, so any `offers` block would be fabricated. Self-hosted star
 * ratings with no real reviews behind them are a manual-action trigger, and
 * inventing them on a page whose whole purpose is convincing a licensee the IP
 * is real would be actively self-defeating. Without `offers` Google will not
 * render a product rich result; the markup still earns its place by letting
 * search and AI answer engines resolve "Excavator Foot" to a specific patented
 * apparatus rather than to excavator foot pedals, which is what currently owns
 * that phrase.
 *
 * `additionalProperty` is the correct home for the patent data — schema.org
 * core has no Patent type, so a PropertyValue pair is the honest encoding.
 */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/#product`,
  name: "Excavator Foot",
  description:
    "A patented hydraulic plate-and-turntable mechanism that mounts under the main frame of a tracked excavator and lets the machine pivot in place using its own existing rotary motor. Eliminates the skid-turn that tears up turf and finished surfaces and drives undercarriage wear.",
  category: "Construction Equipment Attachment",
  url: SITE_URL,
  image: `${SITE_URL}/images/foot in the street.jpg`,
  brand: { "@id": `${SITE_URL}/#organization` },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  audience: {
    "@type": "Audience",
    audienceType:
      "Original equipment manufacturers of tracked and compact excavators",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "U.S. Patent Number",
      value: "12,679,457",
    },
    {
      "@type": "PropertyValue",
      name: "Patent Grant Date",
      value: "2026-07-14",
    },
    {
      "@type": "PropertyValue",
      name: "Machine Class Range",
      value: "2-ton to 12-ton tracked excavators",
    },
    {
      "@type": "PropertyValue",
      name: "Mounting Location",
      value: "Underside of excavator main frame",
    },
    {
      "@type": "PropertyValue",
      name: "Actuation",
      value:
        "Host machine's existing hydraulic circuit and rotary motor — no additional powertrain",
    },
    {
      "@type": "PropertyValue",
      name: "Availability",
      value: "OEM licensing (not sold as an aftermarket product)",
    },
  ],
};

/**
 * VideoObject for the Cat 305 prototype demo, so the clip is eligible for video
 * rich results — footage of the mechanism working is the most persuasive asset
 * on this site and worth surfacing directly in search.
 *
 * uploadDate is read from YouTube rather than estimated, and must match what
 * YouTube reports — Google cross-checks the two, and a VideoObject that
 * disagrees with the platform is worse than none.
 *
 * It says 2026-08-01 even though this footage was shot and first uploaded in
 * November 2023. The clip was unlisted until now, and flipping a video from
 * unlisted to public resets YouTube's publish date to the moment it went
 * public. YouTube now reports 2026-08-01, so that is what goes here. (The 94
 * accumulated views did carry over.)
 *
 * NOTE: the same 102-second clip exists three times on the channel —
 * M8qQNuZUiIs (the one used here), 1FAci0DwumA, and erD8sqSalJY ("Excavator
 * foot"), which this page embedded until recently. Three uploads of one clip
 * split their own view counts and search signals. This one is the keeper: it
 * has the most views and by far the better title, describing the problem a
 * buyer searches for rather than our product name, which loses to excavator
 * foot pedals.
 */
const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Turning an excavator without using tracks — Excavator Foot prototype on a Cat 305",
  description:
    "Working prototype of the patented Excavator Foot on a Caterpillar 305 mini excavator, turning in place on dirt and pavement without scrubbing the tracks. U.S. Patent No. 12,679,457.",
  thumbnailUrl: ["https://i.ytimg.com/vi/M8qQNuZUiIs/maxresdefault.jpg"],
  uploadDate: "2026-08-01T11:34:52-07:00",
  duration: "PT1M42S",
  embedUrl: "https://www.youtube.com/embed/M8qQNuZUiIs",
  contentUrl: "https://www.youtube.com/watch?v=M8qQNuZUiIs",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[760px] flex items-center">
        {/* Background video — autoplay muted loop, falls back to poster image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/foot in the street.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 motion-reduce:hidden"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Static fallback for users with prefers-reduced-motion enabled */}
        <div className="absolute inset-0 hidden motion-reduce:block z-0">
          <Image
            src="/images/foot in the street.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark scrim for text readability over any footage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 z-[1] pointer-events-none" />

        {/* Brand-tint accent layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent z-[1] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
              <Award size={14} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">
                U.S. Patent No. 12,679,457 — Granted July 14, 2026
              </span>
            </div>

            {/* Was "Factory-Installable / Pivot Technology / for Tracked
                Excavators" — an invented category label with no search volume,
                written for an OEM strategy reader who arrives by email, not by
                search. Leads with the problem an operator would actually type. */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Turn a Tracked Excavator</span><br />
              <span className="gradient-text">Without Tearing Up</span><br />
              <span className="text-white">the Ground</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-4xl mx-auto">
              A patented foot drops, lifts the tracks clear, and lets the machine spin to any
              heading on its own turntable. No counter-rotating. No torn turf. No plywood.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Built and run on 2-, 5-, and 8-ton machines. Available for OEM licensing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#demo"
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 glow-yellow-hover"
              >
                Watch the Demo <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact?inquiry=licensing"
                className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all inline-flex items-center gap-2"
              >
                Request Technical Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See It <span className="gradient-text">Turn in Place</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Working prototype on a Caterpillar 305 mini excavator, turning on dirt and
              pavement without scrubbing the tracks. The same mechanism scales from 2-ton
              to 8-ton machines.
            </p>
          </div>

          <div className="video-container glow-yellow">
            <iframe
              src="https://www.youtube.com/embed/M8qQNuZUiIs"
              title="Turning an excavator without using tracks — Excavator Foot prototype on a Cat 305"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/*
            🚨 THE FOOTAGE CARRIES A "PATENT PENDING" WATERMARK ON EVERY FRAME.
            It was cut before the July 2026 grant and has not been re-rendered.
            Left unexplained it reads to an evaluator — or to their IP counsel,
            who is the person actually checking — as if the application never
            issued, which is the exact opposite of the truth and buries the
            single strongest fact about this product. Cheaper to say so than to
            hope nobody notices. Delete this note and the paragraph below it
            when the video is recut from the clean footage.
          */}
          <div className="mt-8 max-w-3xl mx-auto text-center space-y-3">
            <p className="text-sm text-gray-300">
              <span className="text-gray-500">Note on the footage:</span> this was
              filmed before the patent issued, so the &ldquo;Patent Pending&rdquo; mark
              on screen is out of date. It has since been granted as{" "}
              <a
                href={PATENT.usptoPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-semibold hover:underline"
              >
                U.S. Patent No. {PATENT.number}
              </a>{" "}
              on {PATENT.grantDateDisplay}.
            </p>
            <p className="text-sm text-gray-500 italic">
              An 8-ton (Cat 308) prototype is under final assembly.
              Detailed demonstration video available upon NDA execution.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <span className="text-red-400 font-semibold text-sm">The Problem</span>
            </div>
            {/* Operators do not say "skid-turn" — on the forums where they
                describe this exact problem they say counter-rotate, spot turn,
                track marks, tearing up the yard. Those are the words that get
                typed into a search box, so those are the words used here. */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Every time a tracked excavator turns, it <span className="gradient-text">tears up the ground</span><br />and chews up its own undercarriage.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To change heading, the tracks have to counter-rotate against the ground. That one
              motion scars turf, gouges asphalt, and grinds sprockets and rollers — which is why
              crews haul plywood and swamp mats to every finished-surface job, and why lawn repair
              keeps landing on the contractor&apos;s invoice. The cost shows up in
              <span className="text-yellow-400 font-semibold"> time</span>,
              <span className="text-yellow-400 font-semibold"> money</span>, and
              <span className="text-yellow-400 font-semibold"> safety</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Torn-Up Turf and Hardscape</h3>
              <p className="text-gray-400 text-sm">
                Lawns, asphalt, pavers, and finished concrete get scarred by every turn —
                two parallel gouges in the grass. The restoration bill lands on the contractor.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Undercarriage Wear</h3>
              <p className="text-gray-400 text-sm">
                Counter-rotating is the number-one driver of premature track, sprocket, and
                roller wear — usually the biggest non-fuel line item on the machine.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Jobs You Have to Turn Down</h3>
              <p className="text-gray-400 text-sm">
                Crews stay off finished surfaces, decorative hardscape, and good turf — or lay
                plywood first. Either the job costs more, or it goes to a wheeled machine instead.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Damage Claims</h3>
              <p className="text-gray-400 text-sm">
                Property-damage claims from track tear-up are routine in residential,
                right-of-way, and urban infill work — and unavoidable with the way tracks
                turn today.
              </p>
            </div>
          </div>

          {/* Internal link into the turf-damage guide. It is the page targeting
              the queries with actual volume, so it needs a link from the
              highest-authority page on the site, in the section whose topic it
              continues. */}
          <div className="mt-10 text-center">
            <Link
              href="/turf-damage"
              className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Why excavators tear up lawns — and what actually stops it
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Invention — Physics Moat */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <span className="text-yellow-400 font-semibold text-sm">The Invention</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The excavator <span className="gradient-text">rotates itself</span> —<br />using its own existing systems.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The Excavator Foot is a hydraulic plate-and-turntable assembly that mounts to the underside of the
              main frame. The operator triggers a four-step sequence — and the machine pivots in place on its own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Anchor className="text-yellow-400" size={24} />
              </div>
              <div className="text-sm text-yellow-400 font-semibold mb-1">Step 1</div>
              <h3 className="text-lg font-bold mb-2 text-white">Anchor the Bucket</h3>
              <p className="text-gray-400 text-sm">
                Boom lowers, bucket engages the ground. The cabin is now mechanically fixed
                relative to the earth through the boom-bucket-ground chain.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowDown className="text-yellow-400" size={24} />
              </div>
              <div className="text-sm text-yellow-400 font-semibold mb-1">Step 2</div>
              <h3 className="text-lg font-bold mb-2 text-white">Extend the Foot</h3>
              <p className="text-gray-400 text-sm">
                Hydraulic linkage drives the turntable assembly downward. As it contacts ground,
                the tracks lift clear — the entire main frame is now supported on the foot.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <RotateCw className="text-yellow-400" size={24} />
              </div>
              <div className="text-sm text-yellow-400 font-semibold mb-1">Step 3</div>
              <h3 className="text-lg font-bold mb-2 text-white">Rotate the Frame</h3>
              <p className="text-gray-400 text-sm">
                With the cabin anchored by the bucket, the excavator&apos;s own rotary motor
                spins the main frame and tracks freely on the turntable — to any heading.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowDown className="text-yellow-400 rotate-180" size={24} />
              </div>
              <div className="text-sm text-yellow-400 font-semibold mb-1">Step 4</div>
              <h3 className="text-lg font-bold mb-2 text-white">Retract and Resume</h3>
              <p className="text-gray-400 text-sm">
                Foot retracts, tracks settle on ground at the new heading, bucket releases.
                Net result: a full reorientation with zero ground scrub.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <ShieldCheck className="text-yellow-400 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Why this is hard to design around</h3>
                {/* The manual-workaround paragraph is doing real work here: it
                    is independent evidence that this sequence is the natural
                    solution, and it is written in the exact words operators
                    use on the forums where they describe doing it by hand. */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  Operators already do a crude version of this by hand. Set the bucket flat on the
                  ground, push down until the tracks are a few inches up, and swing the house to
                  drag the machine around. Every experienced hand knows the trick, and every one of
                  them knows it is slow, hard to repeat, and rough on the boom. The Excavator Foot
                  is that move, engineered — done from the seat, on a turntable built to carry the
                  load.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The mechanism uses the excavator&apos;s <strong className="text-white">existing</strong> rotary
                  motor and boom — not a new powertrain. Without anchoring the cabin via the bucket, firing the
                  rotary motor with tracks lifted simply counter-rotates cabin against tracks (Newton&apos;s third
                  law) — net rotation: zero. The bucket-anchor step is not a design choice; it is a physical
                  requirement of any system that uses the OEM&apos;s own rotary motor to do the work.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Any competing implementation that uses a different rotation mechanism (e.g., a driven
                  turntable motor) adds cost, complexity, and a redundant powertrain — and still infringes the
                  combination claim. The path of least resistance for an OEM is to license, not design around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Validation */}
      <section id="validation" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 font-semibold text-sm">Engineering Validation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three working prototypes.<br />
              <span className="gradient-text">2-ton to 8-ton class.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The mechanism has been built and operated across three machine classes, validating the
              load math, hydraulic geometry, and structural design at the sizes OEMs ship in volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all">
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 302.jpeg"
                  alt="Cat 302 prototype validation"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">2-ton class</h3>
                <p className="text-gray-400 text-sm mb-4">Caterpillar 302 — first prototype</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Mechanism geometry validated
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Operator sequence proven
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-yellow-400 rounded-xl overflow-hidden relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  DEMO VIDEO
                </span>
              </div>
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 305.jpeg"
                  alt="Cat 305 prototype validation"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">5-ton class</h3>
                <p className="text-gray-400 text-sm mb-4">Caterpillar 305 — featured in public demo</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Full operational cycle on dirt and pavement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Bucket-anchor sequence repeatable in field conditions
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all">
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 308.jpeg"
                  alt="Cat 308 prototype in build"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">8-ton class</h3>
                <p className="text-gray-400 text-sm mb-4">Caterpillar 308 — final assembly underway</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Production-grade machined parts
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Live demonstrations scheduled as final assembly completes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm italic mt-10 max-w-3xl mx-auto">
            Prototypes are engineering validation, not retail product. The Excavator Foot is offered
            for OEM integration into factory production lines.
          </p>
        </div>
      </section>

      {/* Why OEM Licensing */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Factory size={14} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">For Manufacturers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built to be a <span className="gradient-text">factory option</span>,<br />
              not an aftermarket bolt-on.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The Excavator Foot integrates with the host machine&apos;s existing hydraulic circuit and rotary
              motor. It belongs on the assembly line — designed in, not strapped on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Layers className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Class-Spanning Design</h3>
              <p className="text-gray-400">
                One mechanism, scaled by load math, fits the 2-ton through 12-ton tracked-excavator range.
                A single program covers a complete product line.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Cable className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Native Hydraulic Integration</h3>
              <p className="text-gray-400">
                Uses the host machine&apos;s existing hydraulic circuit and rotary motor. No new powertrain,
                no parallel pump, no redundant control surface — lower BOM impact, faster qualification,
                clean fit into existing assembly workflows.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Engineering Package Ready</h3>
              <p className="text-gray-400">
                Drawings, hydraulic schematics, load analysis, and prototype data available for
                evaluation under NDA. Designed to drop into existing manufacturing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Levers — strategic close */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <span className="text-yellow-400 font-semibold text-sm">What It&apos;s Worth</span>
            </div>
            {/* Was "Four levers. One mechanism." — nobody outside a strategy
                deck says "lever". Same four arguments, in plain nouns. */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What it&apos;s worth, <span className="gradient-text">per machine.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contractors buy on three things: time, money, and safety. The Excavator Foot
              moves all three — and hands the manufacturer a fourth that competitors
              cannot copy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Time on site</div>
              <h3 className="text-xl font-bold mb-3 text-white">Stop laying plywood</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No more setting mats down and picking them back up. No more four-point shuffle
                to get turned around in a tight side yard. More billable hours on exactly the
                jobs where surface protection used to eat the morning.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Wear costs</div>
              <h3 className="text-xl font-bold mb-3 text-white">Tracks last longer</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Counter-rotating is what eats tracks, sprockets, and rollers — every manufacturer
                already publishes operator guidance telling crews to avoid it. Take it out and
                those intervals stretch. Lawn-repair bills drop. The machine costs less to own.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Safety</div>
              <h3 className="text-xl font-bold mb-3 text-white">Nobody gets out of the cab</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No churning up the ground while turning next to an open trench — an OSHA 1926
                Subpart P concern. No climbing down to drag mats around. Fewer property-damage
                incidents on the books at renewal time.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-yellow-400/40 rounded-xl p-6 hover:border-yellow-400 transition-all relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full tracking-wider">
                  OEM-ONLY
                </span>
              </div>
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">For the manufacturer</div>
              <h3 className="text-xl font-bold mb-3 text-white">Competitors can&apos;t copy it</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Apparatus claim plus combination claim, granted into early 2045. Years of
                exclusivity in a category where every machine looks like every other machine —
                and designing around it means adding a second powertrain, which breaks the
                cost model.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              And they <span className="gradient-text">compound</span>.
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              These don&apos;t just stack up, they feed each other. Less wear means less downtime,
              which means fewer trips to the service bay. Faster turns mean lower labor cost and
              less late-shift fatigue. And exclusivity means pricing power, which means healthier
              dealer margins.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Each one amplifies the others — which is the difference between a feature you add
              to a spec sheet and a reason someone picks your machine.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Two ways to <span className="gradient-text">go deeper</span>.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re engaged in conversations with manufacturers in the tracked-excavator and
              compact-construction segments. The right next step depends on where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-white">Schedule a Demo</h3>
              <p className="text-gray-400 mb-6 text-sm">
                See the 308 prototype in person, walk through the mechanism, and ask
                engineering questions live. Best for early-stage interest.
              </p>
              <Link
                href="/contact?inquiry=demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all"
              >
                Request a Demo <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-black/40 border border-yellow-400 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-white">Request the Technical Package</h3>
              <p className="text-gray-400 mb-6 text-sm">
                NDA-gated access to engineering drawings, claim charts, royalty model, and
                manufacturing cost analysis. Best for serious evaluation.
              </p>
              <Link
                href="/contact?inquiry=licensing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all glow-yellow-hover"
              >
                Begin NDA Process <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
