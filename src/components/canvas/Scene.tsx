// src/components/canvas/Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Preload } from "@react-three/drei";
import CameraRig from "./CameraRig";
import ParticlesField from "./ParticlesField";
import HeroGlobe from "./HeroGlobe";
import ExperienceTunnel from "./ExperienceTunnel";
import Effects from "./Effects";
import { useStore } from "@/store/useStore";

export default function Scene() {
  const setMouse = useStore((s) => s.setMouse);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setMouse(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [setMouse]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        // 🔥 KEY PERF FIX: cap DPR at 1 on mobile, 1.5 on desktop
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        // 🔥 KEY PERF FIX: 30fps on mobile, 60 on desktop
        frameloop="always"
        performance={{ min: 0.5 }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#05060a"]} />
        <fog attach="fog" args={["#05060a", 15, 50]} />
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          <CameraRig />
          <ParticlesField isMobile={isMobile} />
          <HeroGlobe />
          {!isMobile && <ExperienceTunnel />}
          <Preload all />
        </Suspense>

        {/* 🔥 KEY PERF FIX: only mount post-processing on desktop */}
        {!isMobile && <Effects />}
      </Canvas>
    </div>
  );
}