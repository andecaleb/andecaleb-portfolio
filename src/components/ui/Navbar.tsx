// src/components/ui/Navbar.tsx
"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "ORIGIN", href: "#origin" },
  { label: "CAPABILITIES", href: "#capabilities" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "AI LAB", href: "#ai-lab" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const menuOpen = useStore((s) => s.menuOpen);
  const toggleMenu = useStore((s) => s.toggleMenu);
  const closeMenu = useStore((s) => s.closeMenu);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
          scrolled ? "bg-[#02030a]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-black tracking-[0.2em] text-lg text-cyan-300 hover:text-white transition"
        >
          AC<span className="text-pink-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] text-white/60">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan-300 transition">
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-cyan-300 transition-all ${
              menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
            }`}
          />
          <span className={`block h-[2px] bg-cyan-300 w-4 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] bg-cyan-300 transition-all ${
              menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#02030a]/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="text-white/70 hover:text-cyan-300 text-xl tracking-[0.25em] transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}