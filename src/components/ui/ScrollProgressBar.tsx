// src/components/ui/ScrollProgressBar.tsx
"use client";

import { useStore } from "@/store/useStore";

export default function ScrollProgressBar() {
  const progress = useStore((s) => s.scrollProgress);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}