import React from "react";
import style from "./socialLogo.module.scss";
import { motion } from "framer-motion";

const SocialLogo = ({ link, img }) => {
  return (
    <a href={link} target="_blank">
      <motion.img
        className={style.logo}
        src={img}
        alt="logo Giuseppe Figliuolo Social Networks"
        whileHover={{ opacity: 0.6 }}
      />
    </a>
  );
};

export default SocialLogo;
