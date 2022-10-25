import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import { ModelBoids3 } from "../ModelBoids3";
import { ModelNoise } from "../ModelNoise";
import { ModelSzerszen } from "../ModelSzerszen";
import { EffectComposer, BrightnessContrast } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

export function Home() {
    const scaleAll = 0.9;
    return (
        <Canvas>
            <Suspense fallback={null}>

                {/* environment */}
                <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/>
                <Environment background={false} files={process.env.PUBLIC_URL + "textures/neon.hdr"} />
                <ambientLight intensity={0.5} />
                <PerspectiveCamera makeDefault fov={50} position={[-100, 0, 0]} />
                <OrbitControls target={[1,5,0]} maxPolarAngle={Math.PI * 0.5} minPolarAngle={Math.PI * 0.5} enableZoom={false}/>
                

                {/* models */}
                <ModelBoids3 position={[0,35,0]} scale={scaleAll}/>
                <ModelNoise position={[0,10,0]} scale={scaleAll}/>
                <Float speed={4} rotationIntensity={4} floatIntensity={10}>
                    <ModelSzerszen position={[0,-15,0]} scale={scaleAll}/>
                </Float>


                {/* effects */}
                <EffectComposer stencilBuffer={false}>
                    <BrightnessContrast brightness={0.0} contrast={0.035} />
                </EffectComposer>


            </Suspense>
        </Canvas>
    );
}