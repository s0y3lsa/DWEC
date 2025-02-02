
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default Error404;
