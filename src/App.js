// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fishes from "./pages/Fishes";
import Weather from "./pages/Weather";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fishes" element={<Fishes />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
