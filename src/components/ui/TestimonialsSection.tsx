// src/components/ui/TestimonialsSection.tsx
"use client";

import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative min-h-screen py-40 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 06 — TESTIMONIALS</p>
        <h2 className="text-5xl md:text-7xl font-black mb-16 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE WORDS
        </h2>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-cyan-400/40 transition"
            >
              <div className="absolute top-4 left-8 text-8xl text-cyan-400/10 font-serif leading-none">
                "
              </div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}