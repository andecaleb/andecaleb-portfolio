// src/components/canvas/Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Preload, AdaptiveDpr } from "@react-three/drei";
import CameraRig from "./CameraRig";
import ParticlesField from "./ParticlesField";
import HeroGlobe from "./HeroGlobe";
import ExperienceTunnel from "./ExperienceTunnel";
import Effects from "./Effects";
import { useStore } from "@/store/useStore";

export default function Scene() {
  const setMouse = useStore((s) => s.setMouse);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setMouse(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [setMouse]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#02030a"]} />
        <fog attach="fog" args={["#02030a", 10, 40]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ff2d75" />

        <Suspense fallback={null}>
          <CameraRig />
          <ParticlesField />
          <HeroGlobe />
          <ExperienceTunnel />
          <Preload all />
        </Suspense>

        <Effects />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}