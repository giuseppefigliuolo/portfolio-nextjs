import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoSvg from "../public/img/logo-white-fg.svg";
import { motion } from "framer-motion";
import { debounce } from "../utils/debounce";
import { server } from "../config/index";
import { useRouter } from "next/router";
import NextProject from "./NextProject/NextProject";

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
  const router = useRouter();
  const home = router.pathname === "/";
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
                  <img src={logoSvg} alt="Giuseppe Figliuolo's logo" />
                </a>
              </Link>
            </div>
            {home ? (
              <ul className="nav-links">
                <Link href={`${server}/#about`}>
                  <motion.li variants={childVariants}>
                    <a>About</a>
                  </motion.li>
                </Link>

                <Link href={`${server}/#works`}>
                  <motion.li variants={childVariants}>
                    <a>Projects</a>
                  </motion.li>
                </Link>

                <Link href={`${server}/#skills`}>
                  <motion.li variants={childVariants}>
                    <a>Skills</a>
                  </motion.li>
                </Link>

                <Link href={`${server}/#contact`}>
                  <motion.li variants={childVariants}>
                    <a>Contacts</a>
                  </motion.li>
                </Link>
              </ul>
            ) : (
              <NextProject />
            )}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
