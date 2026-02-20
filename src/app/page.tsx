import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, RotateCcw, DollarSign, Shield } from "lucide-react";

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
              <span className="text-white">Turn Your Excavator</span><br />
              <span className="gradient-text">Without Damaging Ground</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Patented pivot system for Caterpillar mini excavators that eliminates ground damage during turns,
              reduces equipment wear and tear, and makes your jobsite safer while saving time and money.
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
              Watch how the Excavator Foot lets you turn without tearing up the ground
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
                <RotateCcw className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Turn Without Ground Damage</h3>
              <p className="text-gray-400">
                Patented pivot system allows excavators to turn in place without tearing up grass, pavement, or delicate surfaces—protecting your jobsite and client property.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Save Time & Money</h3>
              <p className="text-gray-400">
                Dramatically reduces wear and tear on tracks and undercarriage components. Less maintenance, longer equipment life, and faster job completion.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Safer Jobsite</h3>
              <p className="text-gray-400">
                Improved operator control and reduced equipment stress means fewer accidents, less damage to surrounding areas, and a safer working environment.
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
                    Optimized for 2-ton class excavators
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Turn in place without ground damage
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Perfect for residential and landscaping
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
                    Ideal for 5-ton class excavators
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Pivot without tearing up surfaces
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Reduces track wear significantly
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
                    Heavy-duty 8-ton class excavators
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Maximum wear reduction on larger machines
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    Commercial and industrial applications
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
