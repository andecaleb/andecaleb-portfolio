// src/components/providers/LenisProvider.tsx
"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/store/useStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const setScrollProgress = useStore((s) => s.setScrollProgress);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      ScrollTrigger.update();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) setScrollProgress(scroll / max);
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [setScrollProgress]);

  return <>{children}</>;
}