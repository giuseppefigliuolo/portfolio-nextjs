import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoSvg from "../public/img/logo-white-fg.svg";
import menuSvg from "../public/img/hamb-menu.svg";
import { useRouter } from "next/router";
import { server } from "../config/index";
import { motion, AnimatePresence } from "framer-motion";
import { transition } from "../utils/fm-transitions";
import NextProject from "./NextProject/NextProject";

const menuVariants = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: { ...transition },
  },
  exit: {
    y: -300,
    transition: { ...transition },
  },
};

const MobileNav = () => {
  const router = useRouter();
  const home = router.pathname === "/";
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <div>
      <nav className="mobile">
        <div className="mobile-nav">
          <div className="logo">
            <Link href="/">
              <a>
                <img src={logoSvg} />
              </a>
            </Link>
          </div>
          {home ? (
            <div className="hamb-menu" onClick={() => setShowMenu(!showMenu)}>
              <img src={menuSvg} />
            </div>
          ) : (
            <NextProject />
          )}
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="inner-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="inner-menu__links">
                <div className="container">
                  <Link href={`${server}/#about`}>
                    <a onClick={closeMenu}>About</a>
                  </Link>
                  <Link href={`${server}/#works`}>
                    <a onClick={closeMenu}>Works</a>
                  </Link>
                  <Link href={`${server}/#skills`}>
                    <a onClick={closeMenu}>Skills</a>
                  </Link>
                  <Link href={`${server}/#contact`}>
                    <a onClick={closeMenu}>Contact Me</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default MobileNav;
