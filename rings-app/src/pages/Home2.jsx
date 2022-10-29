import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense } from "react";
import {
  EffectComposer,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

export function Home2() {
  return (
    <>
      <div className="cContainer">
        <div className="card c1">1</div>
        <div className="card c2">2</div>
        <div className="card c3">3</div>
        <div className="card c4">4</div>
        <div className="card c5">5</div>
      </div>
    </>
  );
}
