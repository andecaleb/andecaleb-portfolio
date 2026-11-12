// src/components/ui/ExperienceSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      experiences.forEach((_, i) => {
        gsap.from(`.exp-card-${i}`, {
          scrollTrigger: {
            trigger: `.exp-card-${i}`,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="relative min-h-screen py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 03 — EXPERIENCE</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE PATH
        </h2>
        <p className="text-white/40 tracking-widest text-sm mb-20">
          A DECADE OF BUILDING DATA-DRIVEN SYSTEMS
        </p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`exp-card-${i} glass rounded-2xl p-6 md:p-8 hover:border-cyan-400/40 transition group`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition">
                  {exp.company}
                </h3>
                <span className="text-cyan-400/70 text-xs tracking-[0.2em] mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-pink-300/80 mb-5 text-sm tracking-wide">
                {exp.role} · {exp.location}
              </p>
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="text-white/60 text-sm flex gap-3">
                    <span className="text-cyan-400 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[11px] rounded-full border border-cyan-400/20 text-cyan-300/80"
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