import { createContext, useState } from "react";
import negocio from "../negocio/negocio";
 const AppContext = createContext();
 
function AppProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [mensaje, setMensaje] = useState(null);
    const [preferencias, setPreferencias] = useState({ paginacion: 10 });
    const logIn = async (username, password) => {
        const user = await negocio.validarUsuario(username, password);
        if (user) {
            setUsuario(user);
            setMensaje({ tipo: "success", texto: "Inicio de sesión exitoso" });
        } else {
            setMensaje({ tipo: "error", texto: "Credenciales incorrectas" });
        }
    };
    const logOut = () => {
        setUsuario(null);
        setMensaje({ tipo: "info", texto: "Has cerrado sesión" });
    };
    return (
        <AppContext.Provider value={{ usuario, logIn, logOut, mensaje, setMensaje, preferencias, setPreferencias, negocio }}>
            {children}
        </AppContext.Provider>
    );
}
export { AppContext, AppProvider };
 
 