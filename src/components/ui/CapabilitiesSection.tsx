// src/components/ui/CapabilitiesSection.tsx
"use client";

import { capabilities } from "@/lib/data";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative min-h-screen py-40 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 02 — CAPABILITIES</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE TOOLKIT
        </h2>
        <p className="text-white/50 max-w-2xl mb-20 text-sm md:text-base leading-relaxed">
          Four pillars — intelligence, engineering, science, and infrastructure. Each one informs
          the others. That's the difference between building features and building systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="glass rounded-2xl p-8 hover:border-cyan-400/40 transition group relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl text-white/[0.03] font-black group-hover:text-cyan-400/10 transition">
                0{i + 1}
              </div>
              <div className="text-3xl mb-4 text-cyan-300">{cap.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition">
                {cap.title}
              </h3>
              <p className="text-white/40 text-xs mb-6 tracking-wide">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[11px] rounded-full border border-cyan-400/20 text-cyan-300/80 hover:border-pink-400/40 hover:text-pink-300 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}