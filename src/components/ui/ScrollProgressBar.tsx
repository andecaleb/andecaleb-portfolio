// src/components/ui/ScrollProgressBar.tsx
"use client";

import { useStore } from "@/store/useStore";

export default function ScrollProgressBar() {
  const progress = useStore((s) => s.scrollProgress);
  return (
    <div
      className="progress-bar"
      style={{ width: `${progress * 100}%` }}
    />
  );
}