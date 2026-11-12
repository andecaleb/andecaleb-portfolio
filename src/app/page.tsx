// src/app/page.tsx
"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import HeroOverlay from "@/components/ui/HeroOverlay";
import OriginSection from "@/components/ui/OriginSection";
import CapabilitiesSection from "@/components/ui/CapabilitiesSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import AILabSection from "@/components/ui/AILabSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import CredentialsSection from "@/components/ui/CredentialsSection";
import ContactSection from "@/components/ui/ContactSection";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative bg-[#02030a] text-white">
      <Scene />
      <Navbar />
      <ScrollProgressBar />
      <div className="relative z-10">
        <HeroOverlay />
        <OriginSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <ProjectsSection />
        <AILabSection />
        <TestimonialsSection />
        <CredentialsSection />
        <ContactSection />
      </div>
    </main>
  );
}