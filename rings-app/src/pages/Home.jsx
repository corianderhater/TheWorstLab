import React from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  shaderMaterial,
} from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import {
  EffectComposer,
  BrightnessContrast,
  DepthOfField,
} from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ModelCard } from "../Components/ModelCard";
import data from "../modelsData.json";
import * as THREE from "three";
import { CollipsableText } from "../Components/CollapsibleText";
import fragment from "../shader/fragment.glsl?raw";
import vertex from "../shader/vertex.glsl?raw";
import gsap from "gsap";

export function Home() {
  const scaleAll = 0.7;
  const [isDragging, setIsDragging] = useState(false);
  const [selectedRing, setSelectedRing] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(index) {
    setSelectedRing(data[index]);
    setIsOpen(true);
  }

  // const [ringIndex, setRingIndex] = useState(null);
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-item modal-close">
            <button className="closeButton" onClick={() => setIsOpen(false)}>
              &#10006;
            </button>
          </div>
          <div className="modal-item">
            <div>
              <h1 className="modal-title">{selectedRing.name}</h1>
              <p className="modal-short-desc">
                {selectedRing.shortDescription}
              </p>
            </div>
          </div>
          <div className="modal-item ">
            <CollipsableText
              className="model-long-text"
              text={selectedRing.description}
            />
          </div>
          <div className="modal-item">
            <button>Buy</button>
          </div>
        </div>
      )}

      <Canvas>
        <CanvasContent
          isOpen={isOpen}
          selectedRing={selectedRing}
          handleClick={handleClick}
          setIsDragging={setIsDragging}
        />
      </Canvas>
    </>
  );
}

function CanvasContent({
  isOpen,
  selectedRing,
  handleClick,
  setIsDragging,
  scaleAll,
}) {
  const isHorizontal = window.innerWidth > window.innerHeight ? true : false;

  function calculatePosition(index) {
    const heightLimit = 46.631; //heihgt from (0,0,0) to screen edge if camera is [-100,0,0]
    const widthLimit = (window.innerWidth / window.innerHeight) * heightLimit;
    const topLoc = (heightLimit * 2) / (data.length + 1);
    const horLoc = (widthLimit * 2) / (data.length + 1);
    const spanVer = (topLoc * 2) / (data.length - 1);
    const spanHor = (horLoc * 2) / (data.length - 1);

    return [
      0,
      isHorizontal ? 0 : spanVer * index - spanVer + spanVer / 5,
      isHorizontal ? spanHor * index - spanHor : 0,
    ];
  }

  return (
    <Suspense fallback={null}>
      <BgNoise />

      {/* environment */}
      {/* <Environment
            background={true}
            files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}
          /> */}
      {/* <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/> */}
      <Environment background={false} files={import.meta.env.BASE_URL + "textures/neon.hdr"} />
      <ambientLight intensity={0.5} />

      <PerspectiveCamera makeDefault fov={50} position={[-100, 0, 0]} />

      <OrbitControls
        target={[0, 0, 0]}
        // maxPolarAngle={Math.PI * 0.5}
        // minPolarAngle={Math.PI * 0.5}
        minPolarAngle={Math.PI * 0.5}
        maxPolarAngle={Math.PI * 0.5}
        enableRotate={true}
        enablePan={true}
        enableZoom={true}
      />

      {/* models */}
      {data.map((modelData, index) => {
        return (
          //   <Float speed={4} rotationIntensity={4} floatIntensity={10}>
          <ModelCard
            key={index}
            modelData={modelData}
            isOpen={isOpen && index === selectedRing.index}
            onClick={() => handleClick(index)}
            setIsDragging={setIsDragging}
            position={calculatePosition(index)}
            scale={scaleAll}
          />
          //   </Float>
        );
      })}

      {/* effects */}
      <EffectComposer stencilBuffer={false}>
        <BrightnessContrast brightness={0.0} contrast={0.035} />
      </EffectComposer>
    </Suspense>
  );
}

function BgNoise() {
  const planeGeoRef = useRef();
  const width = 80;
  const height = 80;
  const scale = 1;

  // rotation
  // useFrame((state) => {
  //   const vertices = [];
  //   const t = state.clock.getElapsedTime();
  //   //console.log(t);

  //   for (let x = 0; x <= width / scale; x++) {
  //     const nX = -width / 2 + x * scale;
  //     for (let y = 0; y <= height / scale; y++) {
  //       const nY = -height / 2 + y * scale;
  //       const z = Math.sin(nY * t) / 100;
  //       vertices.push(nX, nY, 1);
  //     }
  //   }
  //   planeGeoRef.current.setAttribute(
  //     "position",
  //     new THREE.Float32BufferAttribute(vertices, 3)
  //   );

  //   planeGeoRef.current.computeVertexNormals();
  // });

  const v = `
        uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vColor;
    uniform vec2 pixels;
    
    void main() {
      vec4 result;
      vUv = uv;
      result = vec4(position.x, position.y, position.z, 1.0);
      gl_Position = projectionMatrix * modelViewMatrix * result;  
    }
  `;

  const SphereShaderMaterial = new THREE.ShaderMaterial({
    wireframe: true,
    side: THREE.DoubleSide,
    uniforms: {
      u_time: { type: "f", value: 0 },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });

  return (
    <mesh
      position={[20, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[1, 1, 1]}
    >
      <planeBufferGeometry
        ref={planeGeoRef}
        attach="geometry"
        args={[80, 80, 80, 80]}
      />
      {/* <meshBasicMaterial color="green" side={THREE.DoubleSide} /> */}
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
}
