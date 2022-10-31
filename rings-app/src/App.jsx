import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./pages/Home";
import "./index.scss";
import Navbar from "./Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  UNSAFE_RouteContext,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Collections from "./pages/Collections";
import Collection2 from "./pages/Collection2";
import { Home2 } from "./pages/Home2";
import Header from "./Header";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
