import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoSvg from "../public/img/logo-white-fg.svg";
import { motion } from "framer-motion";
import { debounce } from "../utils/debounce";

const transition = { duration: 0.8, ease: [0.6, 0.1, -0.05, 0.9] };

const childVariants = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: { ...transition },
  },
};

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      {visible && (
        <motion.div id="main-menu" initial="hidden" animate="visible">
          <nav>
            <div className="logo">
              <Link href="/">
                <a>
                  <img src={logoSvg} />
                </a>
              </Link>
            </div>
            <ul className="nav-links">
              <a href="#">
                <motion.li variants={childVariants}>Start</motion.li>
              </a>

              <a href="#">
                <motion.li variants={childVariants}>Progetti</motion.li>
              </a>

              <a href="#">
                <motion.li variants={childVariants}>About</motion.li>
              </a>

              <a href="#">
                <motion.li variants={childVariants}>Contatti</motion.li>
              </a>
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Nav;