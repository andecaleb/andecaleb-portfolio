// src/components/ui/CredentialsSection.tsx
"use client";

import { credentials } from "@/lib/data";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">07 — CREDENTIALS</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          The
          <br />
          <span className="display-accent">receipts.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {credentials.map((c, i) => (
          <div key={i} className="card p-5 group">
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-[10px] tracking-[0.25em] uppercase ${
                  c.type === "degree"
                    ? "text-[#ff2d75]/80"
                    : c.type === "certification"
                    ? "text-[#00d9ff]/80"
                    : "text-white/40"
                }`}
              >
                {c.type}
              </span>
              <span className="text-[10px] text-white/25 font-mono">{c.year}</span>
            </div>
            <h3 className="text-sm font-semibold text-white leading-snug mb-1 group-hover:text-[#00d9ff] transition">
              {c.name}
            </h3>
            <p className="text-white/40 text-xs">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}