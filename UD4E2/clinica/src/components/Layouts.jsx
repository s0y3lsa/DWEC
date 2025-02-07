import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Mensaje from "./Mensaje";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Mensaje />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
 
export default Layout;