import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Login from "./pages/Login";
import { AppProvider } from "./context/AppContext";
import Expedientes from "./pages/Expedientes";  
import negocio from "./negocio/negocio.js";
import Usuarios from "./pages/Usuarios";  

import NotFound from "./pages/NotFound";  // Asegúrate de tener un componente NotFound

function App() {
  return (
    <>
    <StrictMode> 
    <AppContext> 
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Pacientes" element={<Pacientes/>}></Route>
            <Route path="/Expedientes" element={<Expedientes/>}></Route>
            <Route path="/Usuarios" element={<Usuarios/>}></Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>    
      </Router>
      </AppContext>
      </StrictMode>
    </>
  )
}

export default App
