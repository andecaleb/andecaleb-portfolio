// src/components/ui/OriginSection.tsx
"use client";

const timeline = [
  { year: "2026", label: "MIT — Applied AI & Data Science", note: "Professional Education" },
  { year: "2026", label: "Rome Business School — M.Sc. Data Science & ML", note: "Master's" },
  { year: "—", label: "FUT Minna — B.Eng. Computer Engineering", note: "Foundation" },
];

export default function OriginSection() {
  return (
    <section id="origin" className="relative min-h-screen py-40 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 01 — ORIGIN</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          THE FOUNDATION
        </h2>
        <p className="text-white/50 max-w-2xl mb-20 text-sm md:text-base leading-relaxed">
          A decade of engineering, from electrical foundations to applied AI research at MIT.
          Each layer compounds — hardware thinking, software craft, data science rigor, and
          modern AI engineering.
        </p>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 hover:border-cyan-400/40 transition group"
            >
              <div className="text-cyan-300 text-3xl md:text-4xl font-black w-32 shrink-0 group-hover:text-pink-400 transition">
                {item.year}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white">{item.label}</h3>
                <p className="text-xs tracking-[0.2em] text-white/40 mt-1 uppercase">{item.note}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:border-pink-400/50 transition">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}