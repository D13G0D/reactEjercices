import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage, RegisterPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/Auto" element={<AutoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;