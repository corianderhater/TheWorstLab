import React from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import {
  EffectComposer,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ModelCard } from "../Components/ModelCard";
import data from "../modelsData.json";

export default function Home3D({
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
    <>
      {/* <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/> */}
      <Environment
        background={false}
        files={import.meta.env.BASE_URL + "textures/neon.hdr"}
      />
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
    </>
  );
}
