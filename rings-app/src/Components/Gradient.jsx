import * as THREE from "three";
import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";

export function Gradient() {
  const plane = new THREE.PlaneGeometry(1, 1, 300, 300);
  return (
    <>
      <mesh geometry={plane}></mesh>
    </>
  );
}
