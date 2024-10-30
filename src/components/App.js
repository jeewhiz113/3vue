import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Module1 from "./module1/Module1";
import Module2 from "./module2/Module2";
import Header from "./common/Header";
import data from "../data/data.json";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
      </Routes>
    </div>
  );
}
