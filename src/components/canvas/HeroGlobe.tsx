// src/components/canvas/HeroGlobe.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Ring } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/store/useStore";

export default function HeroGlobe() {
  const group = useRef<THREE.Group>(null);
  const scroll = useStore((s) => s.scrollProgress);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    const fade = Math.max(0, 1 - scroll * 8);
    group.current.scale.setScalar(1 + scroll * 0.5);

    group.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (mat) {
          mat.opacity = fade;
          mat.transparent = true;
        }
      }
    });
  });

  return (
    <group ref={group}>
      <Icosahedron args={[2.2, 1]}>
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.35} />
      </Icosahedron>
      <Icosahedron args={[2.6, 0]}>
        <meshBasicMaterial color="#ff2d75" wireframe transparent opacity={0.15} />
      </Icosahedron>
      <Ring args={[3.2, 3.25, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[3.8, 3.83, 128]} rotation={[Math.PI / 2.5, 0.4, 0]}>
        <meshBasicMaterial color="#ff2d75" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
}