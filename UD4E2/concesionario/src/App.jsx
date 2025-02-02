import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Coches from "./pages/coches";
import CocheDetalle from "./pages/cocheDetalle";
import Error404 from "./pages/error404";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import App from "/App.css";

function App() {
  

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coches" element={<Coches />} />
        <Route path="/coches/:id" element={<CocheDetalle />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App;
