"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";

/**
 * Only the form is a client component. It needs useSearchParams to preselect
 * the inquiry type from ?inquiry=licensing|demo, and useSearchParams forces
 * everything inside its Suspense boundary to render in the browser only.
 *
 * The whole page used to live inside that boundary, so the server sent
 * "Loading..." in place of the heading, the technical-package offer, the
 * email address and the licensing paragraph. Crawlers that don't run
 * JavaScript (GPTBot, ClaudeBot, PerplexityBot) saw an 81-word page, and
 * Google left /contact "Discovered – currently not indexed". Everything
 * outside the <form> now renders on the server in page.tsx.
 */
export function ContactForm() {
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
  );
}
