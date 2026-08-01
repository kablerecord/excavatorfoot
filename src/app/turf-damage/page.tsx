import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  Wrench,
  Info,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";
import { PATENT } from "@/lib/patent";

/**
 * TURF DAMAGE — the site's first page written for the person with the problem
 * rather than the person who would license the solution.
 *
 * The other three pages (home, about, contact) all assume the reader already
 * knows who we are; they convert people who arrived from an email. Nothing on
 * the site caught someone searching the problem cold, which is most of the
 * available search volume and effectively all of the search volume we can
 * realistically win — "excavator turf damage" has real query volume and
 * almost no competent commercial answer, while "excavator pivot technology"
 * has none because we invented the phrase.
 *
 * Two rules held throughout:
 *
 * 1. The genuinely useful answers come first, including the ones that have
 *    nothing to do with us (mats, track choice, technique, timing). A page
 *    that answers the question badly in order to hurry to a pitch does not
 *    hold a ranking, because it does not deserve one.
 *
 * 2. It never implies the Excavator Foot can be bought. It cannot — it is
 *    licensed to manufacturers. Sending an operator down a funnel that dead
 *    ends in "you can't have this" would be both dishonest and, in ranking
 *    terms, self-defeating.
 */

export const metadata = {
  title:
    "Why Excavators Tear Up Lawns — and What Actually Stops It | Excavator Foot",
  description:
    "Track marks, torn turf and gouged sod come from one thing: counter-rotating to change heading. Here is what actually causes it, what operators do about it today — mats, track choice, technique, the bucket-lift trick — and what each one really costs.",
  alternates: { canonical: "/turf-damage" },
};

/**
 * Article markup rather than Product: this page is a guide, not the product
 * page. No FAQPage — Google restricted FAQ rich results to government and
 * health sites in 2023, so the markup would be maintenance with no upside.
 */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/turf-damage#article`,
  headline: "Why Excavators Tear Up Lawns — and What Actually Stops It",
  description:
    "What causes excavator turf damage, what operators do about it today, and what each method actually costs.",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}/turf-damage`,
  inLanguage: "en-US",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
};

const METHODS = [
  {
    icon: Layers,
    name: "Plywood, track mats and swamp mats",
    works: "Genuinely effective. Spreads the load and takes the shear.",
    costs:
      "Time. Sheets have to be hauled, laid, moved as the machine advances, then picked up and cleaned. On a small job the matting can take longer than the digging, and mats are consumable — they split, they get lost, they get stolen.",
  },
  {
    icon: Wrench,
    name: "Turf tracks and wider rubber tracks",
    works:
      "Lowers ground pressure and helps a lot on straight-line travel and soft turf.",
    costs:
      "Does not fix the actual problem. Ground pressure is not what tears sod — sideways shear is. A wider, smoother track still scrubs when the machine counter-rotates; it just leaves a broader scar. Worth having, not a solution.",
  },
  {
    icon: Clock,
    name: "Route planning and turn discipline",
    works:
      "The cheapest real improvement. Plan the approach so the machine makes long, gradual, rolling turns instead of spot turns, and keep both tracks moving.",
    costs:
      "Requires room you often do not have. In a side yard, behind a house, or between a foundation and a fence, there is no space for a wide turn — which is exactly where the finished surfaces are.",
  },
  {
    icon: AlertTriangle,
    name: "The bucket-lift trick",
    works:
      "Set the bucket flat, push down until the tracks are a few inches clear, then swing the house to drag the machine around. Most experienced hands know it, and on the right ground it works.",
    costs:
      "Slow, hard to repeat consistently, and rough on the boom, stick and swing bearing — you are using the work group as a jack and a pivot. It also needs firm ground under the bucket. It is a workaround, not a feature.",
  },
  {
    icon: Info,
    name: "Working with the conditions",
    works:
      "Dry, firm, dormant turf recovers far better than wet turf. Frozen ground is close to bulletproof. Scheduling the finished-surface portion for the right conditions is free.",
    costs:
      "You rarely control the schedule. Wet spring ground is when the damage is worst and when a lot of the work happens anyway.",
  },
];

export default function TurfDamagePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-red-400 font-semibold text-sm">
              The Turf Damage Problem
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Why excavators <span className="gradient-text">tear up lawns</span>
            <br />— and what actually stops it.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Two parallel scars in the grass, every time the machine changes
            heading. It is not the weight and it is not the driving. It is one
            specific motion — and once you see it, the fixes sort themselves
            into the ones that help and the ones that only look like they do.
          </p>
        </div>
      </section>

      {/* The cause */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            The cause: counter-rotation
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                A tracked machine cannot steer the way a wheeled machine does.
                There is nothing to point in a new direction. To change heading,
                one track has to drive forward while the other holds or drives
                back — and the track skids sideways across the ground while it
                happens.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                That sideways skid is the whole problem. The full weight of the
                machine is sitting on the track while it scrubs across the
                surface, so the grousers act like a rasp: they shear the sod
                away from the soil, break the root mat, and leave the two curved
                gouges everyone recognises.
              </p>
              <p className="text-lg text-gray-300">
                The useful consequence is that{" "}
                <strong className="text-white">
                  driving across a lawn is not what wrecks it
                </strong>
                . Straight-line travel on rubber tracks is comparatively gentle
                and often leaves nothing worse than flattened grass. Nearly all
                the damage is concentrated in the turns.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/images/excavator ground performance.jpg"
                alt="Track damage from an excavator turning on turf"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 bg-yellow-400/5 border border-yellow-400/30 rounded-xl p-6">
            <p className="text-gray-300">
              <strong className="text-white">Worth knowing:</strong> this is
              also the single largest driver of undercarriage wear. The same
              scrub that tears turf grinds sprockets, rollers and track links.
              Every major manufacturer publishes operator guidance telling crews
              to minimise counter-rotation — which is a fairly direct admission
              that the machine does something expensive every time it turns.
            </p>
          </div>
        </div>
      </section>

      {/* What operators do today */}
      <section className="px-4 py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What operators do about it today
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl">
            All of these are real and all of them help. None of them is free,
            and it is worth being honest about what each one actually costs.
          </p>

          <div className="space-y-6">
            {METHODS.map(({ icon: Icon, name, works, costs }) => (
              <div
                key={name}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-yellow-400" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">{name}</h3>
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle2
                        className="text-green-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {works}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle
                        className="text-red-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {costs}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3 text-white">
              And when it goes wrong anyway
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Light scarring usually recovers on its own if the root mat is
              intact — rake it flat, topdress with screened soil, seed and keep
              it watered. Where the sod has been torn loose and rolled up, it
              will not knit back down; cut the damaged area out square, fill to
              grade with topsoil and lay new sod. Doing this well on one
              residential job routinely costs more than a full day of machine
              time, which is why it belongs in the bid rather than in the
              apology.
            </p>
          </div>
        </div>
      </section>

      {/* Why none of it solves it */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why none of it actually solves the problem
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Look at that list together and a pattern shows up. Every option is
            one of three things: a consumable you pay for in time (mats), a
            compromise that costs you work (avoid the surface, or hand the job
            to a wheeled machine), or a workaround that is slow and hard on the
            machine (the bucket-lift trick).
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Not one of them changes the underlying fact. The machine still has
            no way to change heading without shearing the ground it is standing
            on. Everything above is a way of managing a limitation that the
            equipment itself has never addressed.
          </p>
          <p className="text-lg text-gray-300">
            Which raises the obvious question — the one that turns out to have
            an answer.
          </p>
        </div>
      </section>

      {/* The engineered fix */}
      <section className="px-4 py-12 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <span className="text-yellow-400 font-semibold text-sm">
              The Engineered Fix
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Take the skid out of the turn.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                The Excavator Foot is the bucket-lift trick, engineered — and
                done properly from the seat. A hydraulic plate-and-turntable
                assembly mounts under the main frame. The bucket anchors, the
                foot extends until the tracks lift clear, and the machine&apos;s
                own rotary motor spins the frame and tracks to any heading on
                the turntable. Then the foot retracts and the tracks settle back
                down.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                The tracks never move across the ground, because while the
                machine is turning they are not touching it. No shear means no
                scarred sod, no gouged asphalt, and none of the undercarriage
                scrub that comes with a counter-rotation.
              </p>
              <p className="text-lg text-gray-300">
                It is covered by U.S. Patent No. {PATENT.number} (
                <em>{PATENT.title}</em>, granted {PATENT.grantDateDisplay}), and
                has been built and run on 2-, 5- and 8-ton machines.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border border-yellow-400/30 glow-yellow">
              <Image
                src="/images/foot in the street.jpg"
                alt="The Excavator Foot prototype extended beneath an excavator"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* The honest status. This page will be found by operators who want
              to buy one, and they cannot. Saying so plainly and immediately is
              the only defensible option — and it gives them something real to
              do instead. */}
          <div className="mt-10 bg-gray-900/50 border border-gray-700 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Straight answer: you cannot buy one yet
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  This is not an aftermarket attachment and there is no order
                  page. The Excavator Foot integrates with the machine&apos;s
                  own hydraulic circuit and rotary motor, which means it belongs
                  on the assembly line rather than bolted on afterwards. It is
                  being licensed to the manufacturers who build these machines.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you want it on your next machine, the most useful thing you
                  can do is tell your dealer you want it. Manufacturers move on
                  what their dealer network keeps hearing, and right now that
                  demand is the argument.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Watch it turn in place
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                A working prototype on a Cat 305, cycling through the full
                sequence on dirt and pavement. Ninety seconds, no narration
                needed.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all glow-yellow-hover"
              >
                See the demo <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                If you build these machines
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Engineering drawings, hydraulic schematics, load analysis, claim
                chart and royalty model are available to qualified evaluators
                under a mutual NDA.
              </p>
              <Link
                href="/contact?inquiry=licensing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all"
              >
                Request the technical package <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
