// src/components/ui/Navbar.tsx
"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Origin", href: "#origin" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const menuOpen = useStore((s) => s.menuOpen);
  const toggleMenu = useStore((s) => s.toggleMenu);
  const closeMenu = useStore((s) => s.closeMenu);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05060a]/85 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between">
          <a href="#top" className="font-black text-lg tracking-tight text-white">
            AC<span className="text-[#00d9ff]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-[#00d9ff] transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:inline-flex btn btn-ghost !py-2 !px-5 !text-[10px]">
            Hire Me
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-white transition-all ${
                menuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
              }`}
            />
            <span className={`block h-[1.5px] bg-white w-4 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-[1.5px] bg-white transition-all ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05060a]/97 md:hidden flex flex-col items-center justify-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="text-white/70 hover:text-[#00d9ff] text-lg tracking-[0.2em] uppercase transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}