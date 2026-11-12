// src/store/useStore.ts
import { create } from "zustand";

interface AppState {
  scrollProgress: number;
  activeSection: number;
  mouse: { x: number; y: number };
  menuOpen: boolean;
  setScrollProgress: (v: number) => void;
  setActiveSection: (v: number) => void;
  setMouse: (x: number, y: number) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useStore = create<AppState>((set) => ({
  scrollProgress: 0,
  activeSection: 0,
  mouse: { x: 0, y: 0 },
  menuOpen: false,
  setScrollProgress: (v) => set({ scrollProgress: v }),
  setActiveSection: (v) => set({ activeSection: v }),
  setMouse: (x, y) => set({ mouse: { x, y } }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  closeMenu: () => set({ menuOpen: false }),
}));