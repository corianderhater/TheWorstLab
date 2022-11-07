import React from "react";
import fragment from "../shader/fragment.glsl?raw";
import vertex from "../shader/vertex.glsl?raw";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Gradient({ height }) {
  const scale = 10;
  const width = (window.innerWidth / window.innerHeight) * height;
  const refMat = useRef();

  const GradientMaterial = new THREE.ShaderMaterial({
    // wireframe: true,
    uniforms: {
      time: { value: 0 },
    },
    side: THREE.DoubleSide,
    vertexShader: vertex,
    fragmentShader: fragment,
  });

  // rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    refMat.current.uniforms.time.value = t / 3;
  });

  return (
    <mesh
      position={[20, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[scale, scale, scale]}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[width / scale, height / scale, width, height]}
      />
      <shaderMaterial
        ref={refMat}
        attach="material"
        args={[GradientMaterial]}
      />
    </mesh>
  );
}
