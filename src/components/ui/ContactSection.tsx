// src/components/ui/ContactSection.tsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:andecaleb.01@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">08 — CONTACT</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          Let's build
          <br />
          <span className="display-accent">something.</span>
        </h2>
        <p className="text-white/50 max-w-xl mt-6 text-sm leading-relaxed">
          AI systems, enterprise platforms, or data-driven products — if it needs to
          think, scale, and ship, let's talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">EMAIL</p>
            <a
              href="mailto:andecaleb.01@gmail.com"
              className="text-white hover:text-[#00d9ff] transition text-lg md:text-xl"
            >
              andecaleb.01@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">PHONE</p>
            <p className="text-white text-base">+234 081 7457 0037</p>
            <p className="text-white text-base">+234 080 8656 3449</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">LOCATION</p>
            <p className="text-white text-base">Abuja, Nigeria</p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-2">
              {["AI Engineering", "LLM Apps", "RAG", "LangGraph", "Enterprise Systems", "Data Science"].map((tag) => (
                <span key={tag} className="chip chip-cyan">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
          <div>
            <label className="text-[10px] tracking-[0.25em] text-white/40 block mb-2">NAME</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d9ff]/50 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.25em] text-white/40 block mb-2">EMAIL</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d9ff]/50 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.25em] text-white/40 block mb-2">MESSAGE</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d9ff]/50 transition resize-none"
              placeholder="What are you building?"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full justify-center">
            {sent ? "Message Ready ✓" : "Send Message →"}
          </button>
        </form>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.3em] text-white/25">
        <p>© 2026 ANDE CALEB</p>
        <p>NEXT.JS · R3F · GSAP</p>
      </div>
    </section>
  );
}