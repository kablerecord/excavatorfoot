import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Wrench, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
              <span className="text-yellow-400 font-semibold text-sm">Patent Application: 18/594,097</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Revolutionary</span><br />
              <span className="gradient-text">Excavator Stabilization</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced ground performance technology designed for Caterpillar mini excavators.
              Engineered to transform stability, precision, and efficiency on the job site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#products"
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 glow-yellow-hover"
              >
                View Products <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact?inquiry=licensing"
                className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all inline-flex items-center gap-2"
              >
                Licensing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See It In <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch how the Excavator Foot transforms ground performance
            </p>
          </div>

          <div className="video-container glow-yellow">
            <iframe
              src="https://www.youtube.com/embed/erD8sqSalJY"
              title="Excavator Foot Sell Sheet"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Excavator Foot</span>?
            </h2>
            <p className="text-xl text-gray-400">
              Engineered innovation for the modern construction site
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Enhanced Stability</h3>
              <p className="text-gray-400">
                Revolutionary design distributes weight evenly, reducing ground pressure and preventing sinking in soft terrain.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Increased Efficiency</h3>
              <p className="text-gray-400">
                Minimize repositioning and maximize productivity. Get the job done faster with superior ground contact.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Easy Installation</h3>
              <p className="text-gray-400">
                Designed specifically for Cat 302, 305, and 308 models. Simple integration with your existing equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Available <span className="gradient-text">Models</span>
            </h2>
            <p className="text-xl text-gray-400">
              Precision-engineered for Caterpillar mini excavators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cat 302 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400 transition-all group">
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 302.jpeg"
                  alt="Cat 302 Mini Excavator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Cat 302</h3>
                <p className="text-gray-400 mb-4">
                  Compact powerhouse for tight spaces and precise work.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Optimized for 2-ton class
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Enhanced maneuverability
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Perfect for residential jobs
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all"
                  >
                    Contact for Availability
                  </Link>
                </div>
              </div>
            </div>

            {/* Cat 305 */}
            <div className="bg-gray-900/50 border border-yellow-400 rounded-xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  POPULAR
                </span>
              </div>
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 305.jpeg"
                  alt="Cat 305 Mini Excavator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Cat 305</h3>
                <p className="text-gray-400 mb-4">
                  The perfect balance of power and versatility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Ideal for 5-ton operations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Superior ground pressure distribution
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    All-terrain performance
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all"
                  >
                    Contact for Availability
                  </Link>
                </div>
              </div>
            </div>

            {/* Cat 308 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400 transition-all group">
              <div className="relative h-64 bg-gray-800">
                <Image
                  src="/images/Cat 308.jpeg"
                  alt="Cat 308 Mini Excavator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Cat 308</h3>
                <p className="text-gray-400 mb-4">
                  Maximum performance for demanding applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Heavy-duty 8-ton class
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Maximum stability under load
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Commercial-grade performance
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all"
                  >
                    Contact for Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in <span className="gradient-text">Licensing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us to bring this revolutionary technology to market.
            Contact us to discuss licensing opportunities with Caterpillar and other manufacturers.
          </p>
          <Link
            href="/contact?inquiry=licensing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all glow-yellow-hover"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
