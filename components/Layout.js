import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

// Questo componente Layout è il componente che wrapperà tutti i nostri componenti nelle pagine -> quindi in _app.js andrà a wrappare i componenti

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [isMobile]);
  return (
    <>
      <Meta />
      {isMobile ? <MobileNav /> : <Nav />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
