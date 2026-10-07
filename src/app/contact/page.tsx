import { Suspense } from "react";
import { Mail, Download, FileSignature, Calendar } from "lucide-react";

import { ContactForm } from "./ContactForm";

// Server component: everything a crawler needs (heading, both paths, the NDA
// offer, the email address, the licensing paragraph) is in the HTML the
// server sends. Only the form itself hydrates on the client — see
// ContactForm.tsx for why.
export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start the <span className="gradient-text">conversation</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Two paths forward — pick the one that matches where you are.
            Detailed technical materials are NDA-gated; a live demo is not.
          </p>
        </div>
      </section>

      {/* The Two Paths */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-yellow-400" size={22} />
              <h3 className="text-xl font-bold text-white">Schedule a Demo</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Walk through the mechanism in person, see a prototype operate, and ask engineering
              questions live. No NDA required — what you see in person is what we already show
              publicly in the demo video.
            </p>
            <p className="text-gray-500 text-xs">
              Use the form below — select &quot;Demo Request&quot; as the inquiry type.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileSignature className="text-yellow-400" size={22} />
              <h3 className="text-xl font-bold text-white">Request the Technical Package</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              NDA-gated access to engineering drawings, claim chart, prior-art analysis, royalty
              model, and manufacturing cost analysis. Required for serious evaluation work.
            </p>
            <p className="text-gray-500 text-xs">
              Download the mutual NDA below, sign it, and select &quot;Licensing / Technical Package&quot; in the form.
            </p>
          </div>
        </div>
      </section>

      {/* NDA Download */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 border border-yellow-400/30 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <FileSignature className="text-yellow-400 flex-shrink-0 mt-1" size={28} />
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Mutual NDA — Download to Begin</h2>
                <p className="text-gray-300 leading-relaxed">
                  This is the standard mutual non-disclosure agreement used to gate the Excavator Foot
                  technical package. Mutual obligations, 5-year term, governed by Arizona law.
                  If your legal team prefers a different template, that&apos;s fine — note it in the form
                  below and we&apos;ll work from yours.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/nda/Excavator-Foot-Mutual-NDA.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all glow-yellow-hover"
              >
                <Download size={18} /> Download NDA (PDF)
              </a>
              <a
                href="/nda/Excavator-Foot-Mutual-NDA.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all"
              >
                <Download size={18} /> Download NDA (Editable Word)
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-4 italic">
              Sign and email the executed copy to info@excavatorfoot.com along with your form
              submission. The technical package will be released upon countersignature.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Direct contact</h2>
              <p className="text-lg text-gray-300 mb-8">
                For everything else — questions, partnership ideas, contractor inquiries, press —
                use this form or email directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@excavatorfoot.com"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      info@excavatorfoot.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <h3 className="text-lg font-bold mb-3 text-white">For OEM evaluators</h3>
                <p className="text-gray-300 text-sm mb-3">
                  We are actively engaging with manufacturers in the tracked-excavator and
                  compact-construction segments. The fastest path is to download the NDA, send
                  it executed alongside this form, and we will respond with the technical package
                  and proposed evaluation timeline within 5 business days.
                </p>
                <p className="text-gray-400 text-xs">
                  Exclusive territory and field-of-use options available; please indicate interest
                  in the message field below.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <Suspense
                fallback={
                  <p className="text-gray-400 text-sm">
                    Loading the form. You can also email info@excavatorfoot.com directly.
                  </p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
