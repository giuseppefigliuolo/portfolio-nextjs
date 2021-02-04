import React from "react";
import styles from "./styleCta.module.scss";
import { motion } from "framer-motion";

const CallToAction = ({ text, link, btnFunction }) => {
  return (
    <a href={link} target="_blank">
      <motion.button
        className={styles.ctaBtn}
        onClick={btnFunction}
        // initial={{ backgroundColor: "rgba(255,0,0,0)" }}
        whileHover={{
          backgroundColor: "#f5f397",
          color: "#07192f",
        }}
      >
        {text}
      </motion.button>
    </a>
  );
};

export default CallToAction;
