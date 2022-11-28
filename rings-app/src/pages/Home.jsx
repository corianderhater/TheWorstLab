import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import data from "../modelsData.json";
import { CollipsableText } from "../Components/CollapsibleText";
import Home3D from "../Components/Home3D";
import Gradient from "../Components/Gradient";
import { Buy } from "./Buy";

export function Home() {
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
          <div className="modal-item">
            <h1 className="modal-title">{selectedRing.name}</h1>
            <h5 className="modal-short-text">
              {selectedRing.shortDescription}
            </h5>
          </div>
          <div className="modal-item modal-collapsible ">
            <CollipsableText modelData={selectedRing} />
          </div>
          <div className="modal-item inside-flex">
            <div className="inside-flex-item">
              <Buy modelData={selectedRing} />
              {/* <button className="button-modal">buy</button> */}
            </div>
            <div className="inside-flex-item">
              <button className="button-close" onClick={() => setIsOpen(false)}>
                &#10006;
              </button>
            </div>
          </div>
        </div>
      )}

      <Canvas>
        <Gradient height={300} />
        <Suspense fallback={null}>
          <Home3D
            isOpen={isOpen}
            selectedRing={selectedRing}
            handleClick={handleClick}
            setIsDragging={setIsDragging}
            scaleAll={0.7}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
