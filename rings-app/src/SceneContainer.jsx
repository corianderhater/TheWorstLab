import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { ModelBoids } from "./ModelBoids";
import { ModelBoids3 } from "./ModelBoids3";
import { ModelNoise } from "./ModelNoise";

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment background={true} files={process.env.PUBLIC_URL + "textures/gradientHDRI.hdr"}/>
            {/* <Environment background={false} files={process.env.PUBLIC_URL + "textures/envmap.hdr"} /> */}
            <ambientLight intensity={0.5} />
            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1,5,0]} maxPolarAngle={Math.PI * 1} />
            <ModelBoids3/>
            <ModelNoise position={[10, 15, 10]}/>
        </Suspense>
    );
}