// src/components/ui/ProjectsSection.tsx
"use client";

import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">04 — PROJECTS</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          Real systems.
          <br />
          <span className="display-accent">Real constraints.</span>
        </h2>
        <p className="text-white/50 max-w-xl mt-6 text-sm leading-relaxed">
          National fiscal planning, enterprise banking compliance, and platform
          infrastructure across governments and financial institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div key={p.name} className="card p-6 group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] tracking-[0.3em] text-[#00d9ff]/70 uppercase">
                {p.category}
              </span>
              <span className="text-[10px] text-white/20 font-mono">0{i + 1}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00d9ff] transition leading-snug">
              {p.name}
            </h3>
            <p className="text-sm text-white/50 mb-4 leading-relaxed flex-1">{p.description}</p>
            <div className="text-xs text-[#ff2d75]/70 mb-4">▸ {p.impact}</div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {p.tech.map((t) => (
                <span key={t} className="text-[10px] text-white/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}