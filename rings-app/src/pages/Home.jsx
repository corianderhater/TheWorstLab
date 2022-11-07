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

import gsap from "gsap";
import Home3D from "../Components/Home3D";
import Gradient from "../Components/Gradient";

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
            <button>Photo Gallery</button>
          </div>
          <div className="modal-item">
            <button>Buy</button>
          </div>
        </div>
      )}

      <Canvas>
        <Gradient height={120} />
        <Suspense fallback={null}>
          <Home3D
            isOpen={isOpen}
            selectedRing={selectedRing}
            handleClick={handleClick}
            setIsDragging={setIsDragging}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
