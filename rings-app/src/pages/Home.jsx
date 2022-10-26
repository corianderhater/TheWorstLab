import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { EffectComposer, BrightnessContrast } from "@react-three/postprocessing";
import { Canvas, useThree } from "@react-three/fiber";
import { ModelCard } from "../Components/ModelCard";
import data from '../modelsData.json';


export function Home() {
    const scaleAll = 0.7;
    const topLocation = 30;
    const span = 25;
    return (
        <Canvas>
            <Suspense fallback={null}>

                {/* environment */}
                {/* <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/> */}
                {/* <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/> */}
                <Environment background={false} files={process.env.PUBLIC_URL + "textures/neon.hdr"} />
                <ambientLight intensity={0.5} />
                
                <PerspectiveCamera makeDefault fov={50} position={[-100, 0, 0]}/>

                <OrbitControls target={[0,0,0]} maxPolarAngle={Math.PI * 0.5} minPolarAngle={Math.PI * 0.5} enableRotate={false} enablePan={false} enableZoom={false}/>
                

                {/* models */}
                <ModelCard modelPath={data[0].url} position={[0,topLocation,0]} scale={scaleAll}/>
                <ModelCard modelPath={data[1].url} position={[0,topLocation - span,0]} scale={scaleAll}/>
                <ModelCard modelPath={data[2].url} position={[0,topLocation - span * 2,0]} scale={scaleAll}/>
                {/* <Float speed={4} rotationIntensity={4} floatIntensity={10}>
                </Float> */}


                {/* effects */}
                <EffectComposer stencilBuffer={false}>
                    <BrightnessContrast brightness={0.0} contrast={0.035} />
                </EffectComposer>


            </Suspense>
        </Canvas>
    ); 
}