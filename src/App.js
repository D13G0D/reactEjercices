import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoListaPage, AutoPage, RegisterPage, UsuarioListaPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/Auto" element={<AutoPage/>} />
        <Route path="/ListaUsuarios" element={<UsuarioListaPage/>} />
        <Route path="/ListaAutos" element={<AutoListaPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;