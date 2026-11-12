// src/components/ui/ProjectsSection.tsx
"use client";

import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 04 — PROJECTS</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE WORK
        </h2>
        <p className="text-white/50 max-w-2xl mb-20 text-sm md:text-base leading-relaxed">
          Real systems, real constraints, real scale. National fiscal planning, enterprise
          banking compliance, and platform infrastructure across governments and financial
          institutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="glass rounded-2xl p-6 hover:border-pink-400/40 transition group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-cyan-400/60">
                {p.category.toUpperCase()}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-white/30 mb-3">
                PROJECT 0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition">
                {p.name}
              </h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{p.description}</p>
              <p className="text-cyan-300/70 text-xs mb-4 tracking-wide">▸ {p.impact}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 text-white/50"
                  >
                    {t}
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