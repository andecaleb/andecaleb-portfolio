// src/components/ui/HeroOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-letter", {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.06,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".hero-sub", { opacity: 0, y: 20, delay: 1.4, duration: 1 });
      gsap.from(".hero-cta", { opacity: 0, y: 20, delay: 1.8, duration: 1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const name = "ANDE CALEB".split("");

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center px-6 pointer-events-none"
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] text-cyan-400/60">
        // PORTFOLIO v.2026
      </div>

      <h1 className="text-6xl md:text-9xl font-black tracking-tighter flex flex-wrap justify-center">
        {name.map((c, i) => (
          <span
            key={i}
            className="hero-letter inline-block bg-gradient-to-b from-white via-white to-cyan-300 bg-clip-text text-transparent"
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </h1>

      <p className="hero-sub mt-8 text-cyan-300 tracking-[0.3em] text-xs md:text-sm">
        DATA-DRIVEN AI SOLUTIONS EXPERT
      </p>
      <p className="hero-sub mt-3 text-white/50 text-sm max-w-xl text-center px-4">
        AI / ML Engineer · Senior Software Developer · Enterprise Systems Architect
      </p>

      <div className="hero-cta mt-12 flex flex-wrap gap-4 pointer-events-auto">
        <a
          href="#experience"
          className="px-8 py-3 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 transition rounded-full text-xs tracking-[0.2em]"
        >
          EXPLORE WORK
        </a>
        <a
          href="#contact"
          className="px-8 py-3 bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition rounded-full text-xs tracking-[0.2em]"
        >
          GET IN TOUCH
        </a>
      </div>

      <div className="absolute bottom-10 text-white/30 text-[10px] tracking-[0.4em] animate-pulse">
        SCROLL TO NAVIGATE
      </div>
    </section>
  );
}