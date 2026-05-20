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

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
                U.S. Patent Application 18/594,097 — Notice of Allowance Issued — Patent to Grant
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Factory-Installable</span><br />
              <span className="gradient-text">Pivot Technology</span><br />
              <span className="text-white">for Tracked Excavators</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-4xl mx-auto">
              A patented mechanism that turns any tracked excavator in place — without ground damage,
              without skid wear, without leaving the operator&apos;s seat.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Validated across 2-, 5-, and 8-ton classes. Available for OEM licensing.
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
              See It <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Working prototype on a Caterpillar 305 mini excavator.
              The same mechanism scales from 2-ton to 8-ton class machines.
            </p>
          </div>

          <div className="video-container glow-yellow">
            <iframe
              src="https://www.youtube.com/embed/erD8sqSalJY"
              title="Excavator Foot — Working Prototype"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-8 text-center">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tracked excavators <span className="gradient-text">cannot turn</span> without<br />causing damage and consuming themselves.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every skid-turn shears the ground, scrubs the undercarriage, and limits the jobsites the machine
              can be deployed to. The cost shows up across <span className="text-yellow-400 font-semibold">time</span>,
              <span className="text-yellow-400 font-semibold"> money</span>, and
              <span className="text-yellow-400 font-semibold"> safety</span> — on every operator and every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Surface Damage</h3>
              <p className="text-gray-400 text-sm">
                Lawns, asphalt, pavers, and finished concrete are torn up by every rotation.
                Restoration is borne by the contractor.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Undercarriage Wear</h3>
              <p className="text-gray-400 text-sm">
                Skid-turning is the #1 driver of premature track, sprocket, and roller wear —
                often the largest non-fuel operating cost on the machine.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Restricted Sites</h3>
              <p className="text-gray-400 text-sm">
                Operators avoid finished surfaces, decorative hardscape, and sensitive turf —
                shrinking the addressable jobsite and forcing wheeled-equipment substitutes.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-white">Liability Exposure</h3>
              <p className="text-gray-400 text-sm">
                Property damage claims from track-tear are routine in residential, ROW,
                and urban infill work — and unavoidable with current track designs.
              </p>
            </div>
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
                    Live demonstration available Q3 2026
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
              <span className="text-yellow-400 font-semibold text-sm">The Strategic Frame</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Four levers. <span className="gradient-text">One mechanism.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compact-equipment buyers evaluate against three levers: time, money, and safety.
              OEM product strategy teams optimize against a fourth your competitors don&apos;t have.
              The Excavator Foot moves all four.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Lever 1</div>
              <h3 className="text-xl font-bold mb-3 text-white">Time</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Eliminates matting-and-restoration cycles on finished-surface work. Removes the
                multi-point skid turn from tight-quarters jobs. Operators take more billable hours
                per week on the work where surface protection was previously a setup tax.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Lever 2</div>
              <h3 className="text-xl font-bold mb-3 text-white">Money</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Skid-turning is the dominant driver of undercarriage wear — the line item OEMs
                already publish operator guidance on. Eliminating it materially extends track,
                sprocket, and roller intervals. Surface-restoration claims drop. TCO moves down.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Lever 3</div>
              <h3 className="text-xl font-bold mb-3 text-white">Safety</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Eliminates ground destabilization during rotation near excavations — an OSHA 1926
                Subpart P proximity issue. Removes operator dismount-to-mat as a fall hazard.
                Lowers the equipment-related property-damage incidence that drives liability profile.
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
              <div className="text-xs text-yellow-400 font-semibold tracking-wider uppercase mb-1">Lever 4</div>
              <h3 className="text-xl font-bold mb-3 text-white">Defensibility</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The lever your competitors do not have. Apparatus claim plus combination claim plus
                continuation strategy. A multi-year exclusive lever in a commoditized category —
                design-around requires a redundant powertrain and still infringes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              And they <span className="gradient-text">compound</span>.
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              These four levers don&apos;t just stack. Less wear means less downtime means fewer
              service-bay incidents. Faster turns mean less labor cost mean less late-shift
              fatigue. Defensibility means longer pricing power means stronger dealer-network
              economics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Each lever amplifies the others — which is what separates a feature add from a
              category-defining capability.
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
