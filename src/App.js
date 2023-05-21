import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages";
import Portraits from "./pages/Portraits";
import Street from "./pages/Street";
import Landscape from "./pages/Landscape";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/street" element={<Street />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
