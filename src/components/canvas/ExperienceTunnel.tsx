// src/components/canvas/ExperienceTunnel.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import * as THREE from "three";
import { experiences } from "@/lib/data";

export default function ExperienceTunnel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.rotation.z = t * 0.2 + i * 0.5;
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = 0.15 + Math.sin(t * 2 + i) * 0.1;
    });
  });

  return (
    <group ref={group} position={[0, 0, -8]}>
      {experiences.map((exp, i) => (
        <Torus
          key={exp.company}
          args={[4 + i * 0.4, 0.02, 16, 100]}
          position={[0, 0, -i * 6]}
          rotation={[0, 0, i * 0.3]}
        >
          <meshBasicMaterial
            color={i % 2 === 0 ? "#00e5ff" : "#ff2d75"}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </Torus>
      ))}
    </group>
  );
}