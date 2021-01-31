import React from "react";
import { motion } from "framer-motion";
import { transition } from "../utils/fm-transitions";

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.24,
    },
  },
};

const childVariants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition: { duration: 3, ...transition },
  },
};

const BannerText = () => {
  return (
    <div className="lp__text">
      <div className="lp__text__container">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={childVariants}>Welcome!</motion.span>
          <motion.span variants={childVariants}>
            I'm <strong className="accent">Giuseppe Figliuolo</strong>,
          </motion.span>
          <motion.span variants={childVariants}>
            a front-end developer.
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
};

export default BannerText;
