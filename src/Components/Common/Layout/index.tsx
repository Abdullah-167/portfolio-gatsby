import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";


const Layout = ({ children }: any) => {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      {children}
      <div className={`overflow-hidden  max-h-[130px] z-[100] ${isHomePage ? 'hidden' : 'lg:block hidden'}`}>
        <StaticImage src="../../../images/waves.png" alt={"waves"} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
