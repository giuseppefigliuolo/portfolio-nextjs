import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const home = router.pathname === "/";
  return (
    <footer className="footer">
      <p>
        React Made with <span>React</span> and &#x1F497;
      </p>
      {home && <p>Thank you for scrolling so far</p>}
    </footer>
  );
};

export default Footer;
