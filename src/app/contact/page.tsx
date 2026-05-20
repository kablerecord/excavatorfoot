"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Send, Download, FileSignature, Calendar } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const inquiryType = searchParams.get("inquiry") || "general";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    inquiry: inquiryType === "licensing" ? "licensing" : inquiryType === "demo" ? "demo" : "general",
    ndaStatus: "not-yet",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(data?.error || "Submission failed. Please try again or email info@excavatorfoot.com directly.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        title: "",
        inquiry: "general",
        ndaStatus: "not-yet",
        message: "",
        honeypot: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setErrorMessage("Network error. Please email info@excavatorfoot.com directly.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showNdaSection = formData.inquiry === "licensing";

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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Director of Product"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Caterpillar / Bobcat / Kubota / etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-300 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Demo Request</option>
                    <option value="licensing">Licensing / Technical Package</option>
                    <option value="partnership">Partnership / Co-development</option>
                  </select>
                </div>

                {showNdaSection && (
                  <div>
                    <label htmlFor="ndaStatus" className="block text-sm font-semibold text-gray-300 mb-2">
                      NDA Status
                    </label>
                    <select
                      id="ndaStatus"
                      name="ndaStatus"
                      value={formData.ndaStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="not-yet">Have not yet downloaded — will get to it</option>
                      <option value="downloaded">Downloaded — will sign and return</option>
                      <option value="signed-attached">Signed — emailing executed copy separately</option>
                      <option value="alternate">Will use our own NDA template</option>
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your interest, evaluation timeline, or any specific questions..."
                  />
                </div>

                {/* Honeypot — hidden from real users, filled by bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed glow-yellow-hover"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    Thank you. Expect a reply within 5 business days.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    {errorMessage || "Something went wrong. Please email info@excavatorfoot.com directly."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 pb-20">
          <div className="text-center text-gray-400">Loading...</div>
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
}
