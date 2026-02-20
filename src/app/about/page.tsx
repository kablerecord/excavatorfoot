import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react";

export const metadata = {
  title: "About - Excavator Foot",
  description: "Learn about the innovation behind the Excavator Foot patented stabilization system",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Story Behind the <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400">
            How a real-world problem led to a patented solution
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <Target size={16} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm">The Challenge</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ground Instability Costs Time and Money
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Mini excavators are essential tools for construction, landscaping, and utility work. But on soft or uneven terrain, they face a critical challenge: ground pressure that causes sinking, tipping, and constant repositioning.
              </p>
              <p className="text-lg text-gray-300">
                This instability doesn't just slow down the job—it increases operator fatigue, reduces precision, and can even pose safety risks. The industry needed a better solution.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden glow-yellow">
              <Image
                src="/images/excavator ground performance.jpg"
                alt="Excavator ground performance challenge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Innovation */}
      <section className="px-4 py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden border border-yellow-400/30">
              <Image
                src="/images/foot in the street.jpg"
                alt="Excavator Foot patent pending"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                <Lightbulb size={16} className="text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">The Solution</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                A Revolutionary Stabilization System
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                The Excavator Foot is a patented ground stabilization system that fundamentally changes how mini excavators interact with terrain. By intelligently distributing weight and increasing surface area contact, it dramatically reduces ground pressure.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The result? Enhanced stability, improved precision, increased productivity, and safer operation—even in challenging conditions.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
                <span className="text-gray-400 text-sm">Patent Application:</span>
                <span className="text-yellow-400 font-mono font-semibold">18/594,097</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <BookOpen size={16} className="text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm">The Mission</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Bringing Innovation to Market
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              The Excavator Foot represents more than just a product—it's part of a broader commitment to solving real-world problems through thoughtful engineering and innovation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              As featured in my book and across my body of work, this project exemplifies the "Fourth Gen Formula" approach: identifying genuine needs, developing practical solutions, and pursuing paths to bring them to those who can benefit most.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              My goal is to license this technology to Caterpillar or other major manufacturers who can integrate it into their product lines, making it accessible to contractors, landscapers, and operators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?inquiry=licensing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all"
              >
                Licensing Opportunity <ArrowRight size={20} />
              </Link>
              <a
                href="https://fourthgenformula.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
              >
                Learn More About My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Creator */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About the Inventor
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Hi, I'm <span className="text-yellow-400 font-semibold">Kable Record</span>—an entrepreneur, author, and innovator focused on building systems and solutions that create lasting value. The Excavator Foot is one of several projects I've developed to address real problems with practical, engineered solutions.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Beyond this innovation, I'm the creator of <strong className="text-white">OSQR</strong>, an AI operating system for capability, and author of the <strong className="text-white">Fourth Gen Formula</strong>, a framework for generational wealth-building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://kablerecord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Visit My Website
            </a>
            <a
              href="https://osqr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Explore OSQR
            </a>
            <a
              href="https://fourthgenformula.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Fourth Gen Formula
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
