import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Hammer, Lightbulb, Target, Award } from "lucide-react";

export const metadata = {
  title: "About — Excavator Foot",
  description: "The story behind the Excavator Foot pivot system, the inventor, the IP portfolio, and the licensing strategy.",
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
            How a contractor who got tired of tearing up customers&apos; lawns built and patented a
            factory-installable solution for tracked excavators.
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
                <span className="text-gray-400 text-sm">U.S. Patent Application:</span>
                <span className="text-yellow-400 font-mono font-semibold">18/594,097</span>
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
          <h2 className="text-4xl font-bold mb-8 text-white">
            What the patent protects.
          </h2>

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
              <h3 className="text-xl font-bold mb-3 text-white">Continuation strategy</h3>
              <p className="text-gray-300">
                After the parent application issues, a continuation will be filed to broaden the
                ground-engagement language beyond the specific turntable form — covering equivalent
                rotation mechanisms (bearing rings, caster arrays, etc.) so the IP wall covers the
                full design space.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <FileText className="text-yellow-400 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Detailed IP package available under NDA</h3>
                <p className="text-gray-300 leading-relaxed">
                  The full claim chart, prosecution history, prior art analysis, and continuation strategy
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
