import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./firstpage";
import Movement1 from "./movement/movement_1"; 
import Movement2 from "./movement/movement_2";
import Movement3 from "./movement/movement_3";
import Deleting1 from "./deleting/deleting1";
import Chalange1 from "./chalange/chalange1";
import Chalange2 from "./chalange/chalange2";
import Chalange3 from "./chalange/chalange3";
import Level2 from "./pasting_selecting/level2";
import Level3 from "./pasting_selecting/level3";
import Level4 from "./pasting_selecting/level4";
import Level5 from "./pasting_selecting/level5";
import TestSuits from "./test_suites";
import End from "./end";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/welcome" element={<WelcomePage />} />
        <Route exact path="/level1" element={<Movement1 />} />
        <Route exact path="/movement2" element={<Movement2 />} />
        <Route exact path="/movement3" element={<Movement3 />} />
        <Route exact path="/deleting1" element={<Deleting1 />} />
        <Route exact path="/chalange1" element={<Chalange1 />} />
        <Route exact path="/chalange2" element={<Chalange2 />} />
        <Route exact path="/chalange3" element={<Chalange3 />} />
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
