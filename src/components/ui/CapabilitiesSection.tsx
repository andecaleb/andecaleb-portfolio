// src/components/ui/CapabilitiesSection.tsx
"use client";

import { capabilities } from "@/lib/data";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">02 — CAPABILITIES</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          Four pillars.
          <br />
          <span className="display-accent">One system.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capabilities.map((cap, i) => (
          <div key={cap.title} className="card p-8 group">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-white/30 mb-3">
                  0{i + 1} / 04
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/40 max-w-sm">{cap.description}</p>
              </div>
              <div className="text-3xl text-[#00d9ff]/40">{cap.icon}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {cap.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}