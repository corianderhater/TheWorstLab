import { Canvas } from "@react-three/fiber";
import { SceneContainer } from './SceneContainer';
import Header from "./Header";
import './index.css';
import { Navbar } from "./Navbar";

function App() {
    return (
    <>
        <Header/>
        <Canvas>
            <SceneContainer/>
        </Canvas>
    </>

    );
}

export default App;