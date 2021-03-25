import React from "react";
import TopMenu from "./top-menu";
import Footer from "./footer";


function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <TopMenu />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;