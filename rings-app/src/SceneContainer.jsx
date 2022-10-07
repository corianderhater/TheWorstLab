import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import { ModelBoids } from "./ModelBoids";
import { ModelBoids3 } from "./ModelBoids3";
import { ModelNoise } from "./ModelNoise";
import { ModelSzerszen } from "./ModelSzerszen";
import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";


export function SceneContainer() {
    const scaleAll = 0.9;
    return (
        <Suspense fallback={null}>

            //environment
            <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/>
            <Environment background={false} files={process.env.PUBLIC_URL + "textures/neon.hdr"} />
            <ambientLight intensity={0.5} />
            <PerspectiveCamera makeDefault fov={50} position={[-100, 0, 0]} />
            <OrbitControls target={[1,5,0]} maxPolarAngle={Math.PI * 0.5} minPolarAngle={Math.PI * 0.5} enableZoom={true}/>
            

            //models
            <ModelBoids3 position={[0,35,0]} scale={scaleAll}/>
            <ModelNoise position={[0,10,0]} scale={scaleAll}/>
            <Float speed={10} rotationIntensity={10} floatIntensity={10}>
                <ModelSzerszen position={[0,-15,0]} scale={scaleAll}/>
            </Float>


            //effects
            <EffectComposer stencilBuffer={false}>
                {/* <DepthOfField focusDistance={1} focalLength={4} bokehScale={7}/>  */}
                <BrightnessContrast brightness={0.0} contrast={0.035} />
                <ChromaticAberration radialModulation={true} offset={[0.00175, 0.00175]} />
                
            </EffectComposer>


        </Suspense>
    );
}