import React from "react";
import "./index.scss";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./Header";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </>
  );
}

export default App;
