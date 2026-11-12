// src/components/ui/OriginSection.tsx
"use client";

const timeline = [
  { year: "2026", school: "MIT", label: "Applied AI & Data Science", note: "Professional Education", accent: false },
  { year: "2026", school: "Rome Business School", label: "M.Sc. Data Science & Machine Learning", note: "Master's Degree", accent: true },
  { year: "—", school: "FUT Minna", label: "B.Eng. Computer Engineering", note: "Foundation", accent: false },
];

export default function OriginSection() {
  return (
    <section id="origin" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="eyebrow mb-6">01 — ORIGIN</div>
          <h2 className="display text-5xl md:text-6xl font-black mb-6">
            The
            <br />
            Foundation
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            A decade of engineering — from electrical foundations to applied AI research at MIT.
            Each layer compounds: hardware thinking, software craft, data rigor, and modern AI.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`${item.accent ? "card-accent" : "card"} p-6 md:p-8 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-4xl md:text-5xl font-black ${item.accent ? "text-[#00d9ff]" : "text-white/80"}`}>
                  {item.year}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase">
                  0{i + 1}
                </span>
              </div>
              <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">
                {item.note}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.school}</h3>
              <p className="text-sm text-white/50">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}