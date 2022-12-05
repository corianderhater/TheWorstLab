import React from "react";
import "./index.scss";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
