import React from "react";
import { motion } from "framer-motion";
import { transition } from "../utils/fm-transitions";
import { useInView } from "react-intersection-observer";

const HeaderTitle = ({ title }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <motion.h2 className="header header-title" ref={ref}>
      <motion.span
        initial={{ y: 300 }}
        animate={inView && { y: 0, transition: { ...transition } }}
      >
        {title}
      </motion.span>
    </motion.h2>
  );
};

export default HeaderTitle;
