import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Hammer, Lightbulb, Target, Award } from "lucide-react";

import { PATENT } from "@/lib/patent";

export const metadata = {
  title:
    "About — The Contractor Who Patented a Fix for Excavator Turf Damage | Excavator Foot",
  description:
    "How a working contractor tired of tearing up customers' lawns designed, prototyped and patented a mechanism that lets a tracked excavator turn in place. Three prototypes, 2- to 8-ton class, U.S. Patent No. 12,679,457.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            From a jobsite problem<br />
            to a <span className="gradient-text">patented mechanism</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            How a contractor who got tired of tearing up customers&apos; lawns built and patented
            a way for a tracked excavator to turn in place.
          </p>
        </div>
      </section>

      {/* The Origin */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <Target size={16} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm">The Frustration</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Every contractor knows the moment.
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                You finish a precise dig on a customer&apos;s property. The job is done. Now the machine
                has to come off the lawn — but to drive it out, the tracks have to swivel. And every
                swivel grinds two parallel scars into the grass.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Either you accept the damage and eat the restoration cost, or you spend hours laying
                plywood and matting to protect the surface. Either way, you&apos;re paying for a flaw
                in the machine.
              </p>
              <p className="text-lg text-gray-300">
                After enough jobs like that, the question stops being &quot;how do I avoid this&quot; and
                starts being &quot;why hasn&apos;t anyone fixed this on the equipment itself?&quot;
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden glow-yellow">
              <Image
                src="/images/excavator ground performance.jpg"
                alt="Track damage on jobsite"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Build */}
      <section className="px-4 py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden border border-yellow-400/30">
              <Image
                src="/images/foot in the street.jpg"
                alt="Excavator Foot prototype in use"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                <Hammer size={16} className="text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">The Build</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Three prototypes. Three machine classes.
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                The first prototype was built and operated on a 2-ton Cat 302 to validate the
                core geometry. The second on a 5-ton Cat 305 to confirm that the load math
                and hydraulic timing scaled properly. Both work — and the public demonstration
                video shows the 305 cycling through the full operational sequence.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The third prototype, on a Cat 308 (8-ton class), is in final assembly. At that
                size, the mechanism is no longer compact-equipment scale — it&apos;s the size used
                by right-of-way contractors, urban infill builders, and infrastructure crews.
                That&apos;s the size that matters to the OEM conversation.
              </p>
              <div className="inline-flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
                  <span className="text-gray-400 text-sm">U.S. Patent:</span>
                  <a
                    href={PATENT.usptoPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-mono font-semibold hover:text-yellow-300 transition-colors"
                  >
                    {PATENT.number}
                  </a>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <span className="text-yellow-400 text-sm font-semibold">
                    Granted July 14, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The IP */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <Award size={16} className="text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">The IP Position</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            What the patent protects.
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            U.S. Patent No. {PATENT.number} issued on {PATENT.grantDateDisplay} with{" "}
            {PATENT.claimCount} claims — two independent claims (the apparatus itself, and
            the excavator-plus-apparatus combination) plus nine dependents. With patent term
            adjustment, protection runs into early 2045.
          </p>

          {/* The full bibliographic record, verbatim off the face of the grant.
              An evaluator's first move is to confirm this thing exists, so give
              them every field they need to look it up independently rather than
              making them take our word for it. Both links resolve today — the
              Google Patents entry is the pre-grant publication, because the
              grant itself is not indexed yet. */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold mb-6 text-white">
              Verify it yourself
            </h3>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm mb-6">
              {[
                ["Official title", PATENT.title],
                ["Patent number", `US ${PATENT.number} ${PATENT.kindCode}`],
                ["Granted", PATENT.grantDateDisplay],
                ["Application no.", PATENT.applicationNumber],
                ["Filed", PATENT.filingDateDisplay],
                ["Pre-grant publication", PATENT.publicationNumber],
                ["Provisional", `${PATENT.provisionalNumber} — ${PATENT.provisionalDateDisplay}`],
                ["Inventor", PATENT.inventor],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-gray-500">{label}</dt>
                  <dd className="text-gray-200 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={PATENT.usptoPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold rounded-lg hover:bg-yellow-400/20 transition-all"
              >
                Granted patent (USPTO PDF)
              </a>
              <a
                href={PATENT.googlePatentsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 text-sm font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
              >
                Read on Google Patents
              </a>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Apparatus claim</h3>
              <p className="text-gray-300">
                The hydraulic plate-and-turntable mechanism: frame-mounted attachment plate,
                parallel-linkage hydraulic lift, and ground-engaging turntable assembly that
                allows free rotation under load.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-yellow-400/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">
                Combination claim — the moat
              </h3>
              <p className="text-gray-300 mb-3">
                The full operational system: excavator (cabin, boom, bucket, main frame, tracks,
                rotary motor) <em>plus</em> the apparatus, used in the four-step sequence
                (anchor → lift → rotate → retract).
              </p>
              <p className="text-gray-300">
                This claim is what catches anyone who builds a working version of this idea using
                the host machine&apos;s existing rotary motor — which is the only economically viable way to do it.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Design-around tested — by the inventor</h3>
              <p className="text-gray-300">
                Alternate architectures were prototyped and stress-tested, including bucket-free
                stabilization. Every workable configuration converges on the same sequence the
                patent claims: anchor with the bucket, lift from under the frame, rotate on a
                ground-engaging foot. The combination claim covers that sequence independent of
                how the lift itself is built — a swinging boom throws the balance point, and
                forward-projecting stabilizers foul the tracks the moment the house rotates.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <FileText className="text-yellow-400 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Detailed IP package available under NDA</h3>
                <p className="text-gray-300 leading-relaxed">
                  The full claim chart, prosecution history, prior art analysis, and design-around study
                  are available to qualified evaluators under a mutual NDA. Engineering drawings, hydraulic
                  schematics, load analysis, and royalty model are released on the same path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Inventor */}
      <section className="px-4 py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Lightbulb size={16} className="text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">The Inventor</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-white">
            Kable Record
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Kable Record is a construction entrepreneur and inventor based in the United States.
            The Excavator Foot grew out of years of running heavy equipment on residential, ROW,
            and commercial jobsites — and the simple observation that the most expensive moments
            on a jobsite are often the ones the equipment can&apos;t avoid.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            In addition to this work, Kable is the founder of <strong className="text-white">OSQR</strong>,
            an AI operating system for small businesses, and the author of the
            <strong className="text-white"> Fourth Gen Formula</strong> — a framework for generational
            wealth-building that he develops alongside his invention work.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            His operating preference is to license patented mechanical inventions to OEMs who
            can integrate them into existing manufacturing programs, rather than build a parallel
            aftermarket business around them. That&apos;s the path being pursued for this technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact?inquiry=licensing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all glow-yellow-hover"
            >
              Begin the Licensing Conversation <ArrowRight size={18} />
            </Link>
            <a
              href="https://kablerecord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              kablerecord.com
            </a>
            <a
              href="https://osqr.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              OSQR
            </a>
            <a
              href="https://fourthgenformula.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Fourth Gen Formula
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
