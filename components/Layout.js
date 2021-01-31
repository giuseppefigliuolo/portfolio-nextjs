import React from "react";
import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";

// Questo componente Layout è il componente che wrapperà tutti i nostri componenti nelle pagine -> quindi in _app.js andrà a wrappare i componenti

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
