import { Canvas } from "@react-three/fiber";
import { SceneContainer } from './pages/Home';
import './index.scss';
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import { Home } from "./pages/Home";
import Collections from "./pages/Collections";
import Collection2 from "./pages/Collection2";
import { Home2 } from "./pages/Home2";
import Header from "./Header";

function App() {
    return (
        <>
            <Header/>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collections' element={<Home2 />} />
            </Routes>
         </>
    );
}

export default App;