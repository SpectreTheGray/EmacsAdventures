import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level1 from "./level1"; // Ensure the correct import path
import WelcomePage from "./firstpage";
import Level2 from "./level2";
import Level3 from "./level3";
import Level4 from "./level4";
import Level5 from "./level5";
import End from "./end";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/level1" element={<Level1 />} />
        <Route exact path="/level2" element={<Level2 />} />
        <Route exact path="/level3" element={<Level3 />} />
        <Route exact path="/level4" element={<Level4 />} />
        <Route exact path="/level5" element={<Level5 />} />
        <Route exact path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
