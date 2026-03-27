import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Home";
import Services from "./Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />      </Routes>
  <Footer/>
    </Router>
  );
}

export default App;