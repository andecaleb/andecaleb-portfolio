// src/components/ui/CredentialsSection.tsx
"use client";

import { credentials } from "@/lib/data";

const typeColor = (type: string) => {
  switch (type) {
    case "degree":
      return "text-pink-300 border-pink-400/30";
    case "certification":
      return "text-cyan-300 border-cyan-400/30";
    default:
      return "text-white/60 border-white/15";
  }
};

export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative min-h-screen py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 07 — CREDENTIALS</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE RECEIPTS
        </h2>
        <p className="text-white/50 max-w-2xl mb-16 text-sm md:text-base leading-relaxed">
          Formal training, degrees, and certifications — the paper trail behind the work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((c, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 hover:border-cyan-400/40 transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-[10px] tracking-[0.2em] uppercase ${typeColor(c.type).split(" ")[0]}`}>
                  {c.type}
                </span>
                <span className="text-[10px] text-white/30">{c.year}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition leading-snug">
                {c.name}
              </h3>
              <p className="text-white/40 text-xs">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}