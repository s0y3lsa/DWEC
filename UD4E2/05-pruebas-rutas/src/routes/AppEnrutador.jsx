import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AppEnrutador() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index /* path="/" */ element={<HomePage />} />
                    <Route path="/listado" element={<ListaPage />} />
                    <Route path="/detalles" element={<DetallesPage />} />
                    <Route path="administracion" element={<AdminstracionPage />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );   
}
export default AppEnrutador;