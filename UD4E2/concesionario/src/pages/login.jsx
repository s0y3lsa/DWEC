
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import $negocio from "../services/negocio";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuario = $negocio.validarUsuario(username, password);
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/coches"); // Redirige a la página de coches
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
