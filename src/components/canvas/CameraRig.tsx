// src/components/canvas/CameraRig.tsx
"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/store/useStore";

type Keyframe = {
  pos: [number, number, number];
  look: [number, number, number];
};

const KEYFRAMES: Keyframe[] = [
  { pos: [0, 0, 12], look: [0, 0, 0] },       // Hero
  { pos: [0, 2, 6], look: [0, 0, 0] },         // Origin
  { pos: [6, 0, 2], look: [0, 0, -4] },        // Capabilities
  { pos: [0, 0, -6], look: [0, 0, -14] },      // Experience
  { pos: [8, 3, -14], look: [0, 0, -24] },     // Projects
  { pos: [0, -2, -24], look: [0, 0, -34] },    // AI Lab
  { pos: [-6, 2, -34], look: [0, 0, -44] },    // Testimonials
  { pos: [0, 0, -44], look: [0, 0, -54] },     // Credentials
  { pos: [0, 0, -52], look: [0, 0, -60] },     // Contact
];

export default function CameraRig() {
  const { camera } = useThree();
  const scroll = useStore((s) => s.scrollProgress);
  const mouse = useStore((s) => s.mouse);

  const smooth = useRef({ x: 0, y: 0, z: 12 });
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const total = KEYFRAMES.length - 1;
    const t = Math.min(scroll, 0.9999) * total;
    const i = Math.floor(t);
    const f = t - i;
    const a = KEYFRAMES[i];
    const b = KEYFRAMES[Math.min(i + 1, total)];
    const ease = f * f * (3 - 2 * f);

    const targetPos = new THREE.Vector3(
      THREE.MathUtils.lerp(a.pos[0], b.pos[0], ease),
      THREE.MathUtils.lerp(a.pos[1], b.pos[1], ease),
      THREE.MathUtils.lerp(a.pos[2], b.pos[2], ease)
    );

    targetPos.x += mouse.x * 0.6;
    targetPos.y += mouse.y * 0.4;

    smooth.current.x = THREE.MathUtils.damp(smooth.current.x, targetPos.x, 3, delta);
    smooth.current.y = THREE.MathUtils.damp(smooth.current.y, targetPos.y, 3, delta);
    smooth.current.z = THREE.MathUtils.damp(smooth.current.z, targetPos.z, 3, delta);

    camera.position.set(smooth.current.x, smooth.current.y, smooth.current.z);

    const targetLook = new THREE.Vector3(
      THREE.MathUtils.lerp(a.look[0], b.look[0], ease),
      THREE.MathUtils.lerp(a.look[1], b.look[1], ease),
      THREE.MathUtils.lerp(a.look[2], b.look[2], ease)
    );
    lookTarget.current.lerp(targetLook, 0.08);
    camera.lookAt(lookTarget.current);
  });

  return null;
}