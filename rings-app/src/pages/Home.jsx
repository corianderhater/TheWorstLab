import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import {
  EffectComposer,
  BrightnessContrast,
  DepthOfField,
} from "@react-three/postprocessing";
import { Canvas, useThree } from "@react-three/fiber";
import { ModelCard } from "../Components/ModelCard";
import data from "../modelsData.json";
import * as THREE from "three";
import { CollipsableText } from "../Components/CollapsibleText";

export function Home() {
  const scaleAll = 0.7;
  const [isDragging, setIsDragging] = useState(false);
  const [selectedRing, setSelectedRing] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isHorizontal = window.innerWidth > window.innerHeight ? true : false;

  function handleClick(index) {
    setSelectedRing(data[index]);
    setIsOpen(true);
  }

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
          <div className="modal-item">
            <CollipsableText text={selectedRing.description} />
          </div>
          <div className="modal-item">
            <button>Buy</button>
          </div>
        </div>
      )}

      <Canvas>
        <Suspense fallback={null}>
          {/* environment */}
          <Environment
            background={true}
            files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}
          />
          {/* <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/> */}
          <Environment
            background={false}
            files={process.env.PUBLIC_URL + "textures/neon.hdr"}
          />
          <ambientLight intensity={0.5} />

          <PerspectiveCamera makeDefault fov={50} position={[-100, 0, 0]} />

          <OrbitControls
            target={[0, 0, 0]}
            maxPolarAngle={Math.PI * 0.5}
            minPolarAngle={Math.PI * 0.5}
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
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
      </Canvas>
    </>
  );
}
