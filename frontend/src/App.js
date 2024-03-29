import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Maps from "./pages/Maps";
import SearchPage from "./pages/SearchPage";

import Test from "./pages/Test";
import ToryElement3D from "./ToryElement3D";

function App() {
  // PWA 적용을 위한 vh변환 함수
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <div className="App" id="App">
      <Canvas>
        <ToryElement3D/>
      </Canvas>
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
