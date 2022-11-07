import React, { useRef, useState } from "react";
import { useGLTF, Html, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import ModelDescription from "./ModelDescription";
import "../index.scss";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { NotEqualStencilFunc, SphereGeometry } from "three";

export function ModelCard({
  modelData,
  setIsDragging,
  floorPlane,
  position,
  isOpen,
  scale,
  onClick,
}) {
  const { nodes } = useGLTF(import.meta.env.BASE_URL  + modelData.url);
  const ref = useRef();
  const [hovered, hover] = useState(false);
  var hitMat = new THREE.MeshBasicMaterial({ visible: false });
  let planeIntersectPoint = new THREE.Vector3();
  //const { scale } = useSpring({ scale: active ? 1.5 : 1 });

  //dragging

  const [pos, setPos] = useState([0, 1, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, api] = useSpring(() => ({
    //position: [0, 0, 0],
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  const bind = useDrag(
    ({ active, movement: [x, y], timeStamp, event }) => {
      if (active) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        setPos([planeIntersectPoint.x, 1.5, planeIntersectPoint.z]);
      }

      setIsDragging(active);

      api.start({
        // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
        position: pos,
        scale: active ? 1.2 : 1,
        rotation: [y / aspect, x / aspect, 0],
      });
      return timeStamp;
    },
    { delay: true }
  );

  function handleClick() {
    onClick();
  }

  // rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = (Math.PI * t) / 40;
    ref.current.rotation.y = Math.sin(t / 5);
  });

  const ringGeometry = nodes.mesh_0.geometry;

  return (
    <>
      <animated.mesh {...spring} {...bind()} castShadow>
        <group
          position={isOpen ? [-60, 5, 0] : position}
          scale={scale}
          dispose={null}
        >
          <mesh
            geometry={
              new SphereGeometry(ringGeometry.boundingSphere.radius, 5, 5)
            }
            material={hitMat}
            onClick={handleClick}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
          />

          <mesh ref={ref} geometry={ringGeometry}>
            {/* <MeshWobbleMaterial factor={0.04} speed={2}></MeshWobbleMaterial> */}
            <meshPhysicalMaterial
              color={hovered ? "gold" : "white"}
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
