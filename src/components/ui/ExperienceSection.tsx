// src/components/ui/ExperienceSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".fade-up");
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">03 — EXPERIENCE</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          The path.
          <br />
          <span className="display-accent">Ten years deep.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={exp.company} className="card fade-up p-6 md:p-8 group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3">
                <div className="text-[10px] tracking-[0.25em] text-[#00d9ff]/70 mb-2">
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00d9ff] transition">
                  {exp.company}
                </h3>
                <p className="text-xs text-white/40 mt-1">{exp.location}</p>
              </div>

              <div className="md:col-span-9">
                <p className="text-sm text-[#ff2d75]/80 mb-4 tracking-wide">{exp.role}</p>
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-white/60 flex gap-3 leading-relaxed">
                      <span className="text-[#00d9ff] mt-1.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip chip-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}