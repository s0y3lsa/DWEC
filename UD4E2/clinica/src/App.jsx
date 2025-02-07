import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts.jsx";
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
      <AppProvider>
          <Router>
              <Layout>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/pacientes" element={<Pacientes />} />
                      <Route path="/expedientes" element={<Expedientes />} />
                      <Route path="/usuarios" element={<Usuarios />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </Layout>
          </Router>
      </AppProvider>
  );
}

export default App
