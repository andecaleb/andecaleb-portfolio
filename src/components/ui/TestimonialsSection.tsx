// src/components/ui/TestimonialsSection.tsx
"use client";

import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">06 — TESTIMONIALS</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          In their
          <br />
          <span className="display-accent">own words.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {testimonials.map((t, i) => (
          <div key={i} className="card p-8 md:p-12 relative group">
            <div className="absolute top-8 right-8 text-[#00d9ff]/10 text-8xl font-serif leading-none select-none">
              &rdquo;
            </div>
            <p className="text-white/85 text-lg md:text-2xl leading-relaxed mb-8 relative z-10 max-w-3xl">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00d9ff]/20 to-[#ff2d75]/20 border border-white/10 flex items-center justify-center text-xs font-bold text-white/80">
                {t.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.author}</p>
                <p className="text-white/40 text-xs">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}