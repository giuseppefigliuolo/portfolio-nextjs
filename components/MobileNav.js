import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoSvg from "../public/img/logo-white-fg.svg";
import menuSvg from "../public/img/hamb-menu.svg";
import { motion } from "framer-motion";
import { debounce } from "../utils/debounce";

const MobileNav = () => {
  return (
    <div>
      <nav>
        <div className="mobile-nav">
          <div className="logo">
            <Link href="/">
              <a>
                <img src={logoSvg} />
              </a>
            </Link>
          </div>
          <div className="hamb-menu">
            <img src={menuSvg} />
          </div>
        </div>
        <div className="inner-menu">
          <div className="logo">
            <img src={logoSvg} />
          </div>
          <Link>About</Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
