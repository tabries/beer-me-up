import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeerBoard from "./views/BeerBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeerBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;