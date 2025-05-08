import React from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/core/home/Home";
import Navigation from "./components/core/Navbar/Navigation";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
