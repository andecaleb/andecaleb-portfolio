// src/components/canvas/Effects.tsx
"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.35}
        luminanceSmoothing={0.85}
        mipmapBlur
      />
    </EffectComposer>
  );
}
