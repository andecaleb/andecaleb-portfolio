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
    <section id="contact" className="relative min-h-screen py-40 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 08 — CONTACT</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          LET'S BUILD<br />SOMETHING
        </h2>
        <p className="text-white/50 max-w-2xl mb-16 text-sm md:text-base leading-relaxed">
          AI systems, enterprise platforms, or data-driven products — if it needs to think, scale,
          and ship, let's talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-cyan-400/60 mb-2">EMAIL</p>
              <a
                href="mailto:andecaleb.01@gmail.com"
                className="text-white hover:text-cyan-300 transition text-lg"
              >
                andecaleb.01@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-cyan-400/60 mb-2">PHONE</p>
              <p className="text-white text-lg">+234 081 7457 0037</p>
              <p className="text-white text-lg">+234 080 8656 3449</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-cyan-400/60 mb-2">LOCATION</p>
              <p className="text-white text-lg">Abuja, Nigeria</p>
            </div>
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.3em] text-cyan-400/60 mb-3">FOCUS</p>
              <div className="flex flex-wrap gap-2">
                {["AI Engineering", "LLM Apps", "RAG", "LangGraph", "Enterprise Systems", "Data Science"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] rounded-full border border-cyan-400/20 text-cyan-300/80"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
            <div>
              <label className="text-[10px] tracking-[0.3em] text-white/40 block mb-2">NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-white/40 block mb-2">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-white/40 block mb-2">MESSAGE</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition text-xs tracking-[0.2em]"
            >
              {sent ? "MESSAGE READY — CHECK YOUR MAIL" : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.3em] text-white/30">
          <p>© 2026 ANDE CALEB — ALL RIGHTS RESERVED</p>
          <p>BUILT WITH NEXT.JS · R3F · GSAP</p>
        </div>
      </div>
    </section>
  );
}