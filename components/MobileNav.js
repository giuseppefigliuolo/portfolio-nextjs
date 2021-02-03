import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoSvg from "../public/img/logo-white-fg.svg";
import menuSvg from "../public/img/hamb-menu.svg";
import SocialLogo from "./SocialLogo/SocialLogo";
import closeMenu from "../public/img/close-menu.svg";
import githubLogo from "../public/img/logos/social/orange-github.svg";
import linkedInLogo from "../public/img/logos/social/orange-linkedin.svg";
import instagramLogo from "../public/img/logos/social/orange-instagram.svg";
import { server } from "../config/index";
import { motion } from "framer-motion";
import { debounce } from "../utils/debounce";

const MobileNav = () => {
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
          <div className="hamb-menu">
            <img src={menuSvg} />
          </div>
        </div>
        <div className="inner-menu">
          <div className="close-menu">
            <img src={closeMenu} />
          </div>
          <div className="logo">
            <img src={logoSvg} />
          </div>
          <div className="inner-menu__links">
            <div className="container">
              <Link href={`/#about`}>
                <a>About</a>
              </Link>
              <Link href={`/#works`}>
                <a>Works</a>
              </Link>
              <Link href={`/#skills`}>
                <a>Skills</a>
              </Link>
              <Link href={`/#contact`}>
                <a>Contact Me</a>
              </Link>
            </div>
          </div>
          <div className="inner-menu__social">
            <div className="container">
              <SocialLogo
                link="https://github.com/giuseppefigliuolo"
                img={githubLogo}
              />
              <SocialLogo
                link="https://www.linkedin.com/in/giuseppe-figliuolo-51103818a/"
                img={linkedInLogo}
              />
              <SocialLogo
                link="https://www.instagram.com/giu_figliuolo/"
                img={instagramLogo}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
