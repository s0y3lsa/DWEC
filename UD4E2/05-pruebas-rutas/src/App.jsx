import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Coches from "./pages/Coches";
import DetallesCoche from "./pages/DetallesCoche";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { AuthProvider, useAuth } from "./context/AuthContext";
 
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
 
function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/coches"
              element={
                <PrivateRoute>
                  <Coches />
                </PrivateRoute>
              }
            />
            <Route path="/coches/:id" element={<DetallesCoche />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
 
export default App;
 
