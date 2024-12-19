import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HalamanSatu from "./Halaman_satu";
import HalamanDua from "./Halaman_dua";
import HalamanTiga from "./Halaman_tiga";
import HalamanEmpat from "./Halaman_empat";
import HalamanLima from "./Halaman_lima";
import Klikhalaman1 from "./Klik_halaman_1/index";
import Klikhalaman2 from "./Klik_halaman_2/index";
import Klikhalaman3 from "./Klik_halaman_3/index";
import Klikhalaman4 from "./Klik_halaman_4/index";
import Klikhalaman5 from "./Klik_halaman_5/index";
import Klikhalaman6 from "./Klik_halaman_6/index";
import Klikhalaman7 from "./Klik_halaman_7/index";
import Klikhalaman8 from "./Klik_halaman_8/index";
import Klikhalaman9 from "./Klik_halaman_9/index";
import Klikhalaman10 from "./Klik_halaman_10/index";
import Klikhalaman11 from "./Klik_halaman_11/index";
import Klikhalaman12 from "./Klik_halaman_12/index";
import Klikhalaman13 from "./Klik_halaman_13/index";
import Klikhalaman14 from "./Klik_halaman_14/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HalamanSatu />} />
        <Route path="/halaman_dua" element={<HalamanDua />} />
        <Route path="/halaman_tiga" element={<HalamanTiga />} />
        <Route path="/halaman_empat" element={<HalamanEmpat />} />
        <Route path="/halaman_lima" element={<HalamanLima />} />
        <Route path="/Klik_halaman_1" element={<Klikhalaman1 />} />
        <Route path="/Klik_halaman_2" element={<Klikhalaman2 />} />
        <Route path="/Klik_halaman_3" element={<Klikhalaman3 />} />
        <Route path="/Klik_halaman_4" element={<Klikhalaman4 />} />
        <Route path="/Klik_halaman_5" element={<Klikhalaman5 />} />
        <Route path="/Klik_halaman_6" element={<Klikhalaman6 />} />
        <Route path="/Klik_halaman_7" element={<Klikhalaman7 />} />
        <Route path="/Klik_halaman_8" element={<Klikhalaman8 />} />
        <Route path="/Klik_halaman_9" element={<Klikhalaman9 />} />
        <Route path="/Klik_halaman_10" element={<Klikhalaman10 />} />
        <Route path="/Klik_halaman_11" element={<Klikhalaman11 />} />
        <Route path="/Klik_halaman_12" element={<Klikhalaman12 />} />
        <Route path="/Klik_halaman_13" element={<Klikhalaman13 />} />
        <Route path="/Klik_halaman_14" element={<Klikhalaman14 />} />
      </Routes>
    </Router>
  );
}

export default App;
