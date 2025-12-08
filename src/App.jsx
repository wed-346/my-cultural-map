import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemPage from "./components/ItemPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemPage />} />
    </Routes>

  );
}

export default App;
