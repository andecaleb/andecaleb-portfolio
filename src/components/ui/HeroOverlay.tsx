// src/components/ui/HeroOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.8, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-word", {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        delay: 0.4,
        ease: "power4.out",
      });
      gsap.from(".hero-meta > *", {
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out",
      });
      gsap.from(".hero-cta > *", {
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.7,
        delay: 1.6,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 pointer-events-none"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="hero-eyebrow eyebrow mb-8">PORTFOLIO · 2026 · ABUJA</div>

        <h1 className="hero-word text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.85] tracking-[-0.04em] mb-8">
          <span className="display block">ANDE</span>
          <span className="display-accent block">CALEB</span>
        </h1>

        <div className="hero-meta grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8 max-w-3xl">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">ROLE</p>
            <p className="text-sm text-white/80">AI/ML Engineer</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">FOCUS</p>
            <p className="text-sm text-white/80">LLM Systems · RAG · Agents</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 mb-2">EXPERIENCE</p>
            <p className="text-sm text-white/80">14+ years enterprise</p>
          </div>
        </div>

        <p className="mt-10 max-w-xl text-white/50 text-sm md:text-base leading-relaxed">
          Building intelligent, data-driven systems that connect modern AI to real business
          data, APIs, and enterprise workflows.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap gap-4 pointer-events-auto">
          <a href="#experience" className="btn btn-primary">
            Explore Work →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.4em] text-white/30">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}