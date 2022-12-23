import React, { useRef, useState } from "react";
import { useGLTF, Html, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import "../index.scss";
import * as THREE from "three";
import { animated, useSpring, config } from "@react-spring/three";
import { SphereGeometry } from "three";
import { Text } from "@react-three/drei";

export function ModelCard({
  modelData,
  positionStart,
  isOpen,
  isAnyOpenButMe,
  scaleStart,
  onClick,
}) {
  //=============================CONST===========================================
  const { nodes } = useGLTF(import.meta.env.BASE_URL + modelData.url);
  const ringGeometry = nodes.mesh_0.geometry;
  const ref = useRef();
  const bbox = useRef();
  const [hovered, hover] = useState(false);
  const { size, viewport } = useThree();
  const aspect = 6 * (size.width / viewport.width);
  var hitMat = new THREE.MeshBasicMaterial({ visible: false });

  //=============================MOVE===========================================
  function handleClick() {
    onClick();
  }

  const { position } = useSpring({
    position: isOpen
      ? [-40, 10, 0]
      : isAnyOpenButMe
      ? [0, 60, 0]
      : positionStart,
    config: config.molasses,
  });

  //=============================DRAG===========================================
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, friction: 40, tension: 800 },
  }));
  const bind = useDrag(({ movement: [x, y], down }) =>
    set({
      config: config.default,
      rotation: down ? [0, x / aspect, y / aspect] : [0, 0, 0],
    })
  );

  //=============================ROTATE======================================
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const a = !isOpen && isAnyOpenButMe ? 70 : 1;
    ref.current.rotation.z = (Math.PI * t) / 40;
    ref.current.rotation.y = Math.sin(t / 5) * a;
  });

  return (
    <>
      <animated.mesh position={position} {...spring} {...bind()}>
        <group scale={scaleStart} dispose={null}>
          <mesh
            ref={bbox}
            geometry={new SphereGeometry(12, 5, 5)}
            material={hitMat}
            onClick={handleClick}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
          />

          <mesh ref={ref} geometry={ringGeometry}>
            {/* <MeshWobbleMaterial factor={0.04} speed={2}></MeshWobbleMaterial> */}
            <meshPhysicalMaterial
              color={hovered ? "pink" : "white"}
              clearcoat={1}
              clearcoatRoughness={1}
              roughness={0}
              metalness={1}
              reflectivity={1}
              emissive="red"
              emissiveIntensity={0.02}
            />
          </mesh>
        </group>
      </animated.mesh>
    </>
  );
}

// useGLTF.preload(process.env.PUBLIC_URL + "/3d/noise.glb");
