import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const ComponenteDiProva = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log("ciaoo");
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      id="prova"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h1>Ciaooo</h1>
      <p>Sono il componente di prova</p>
    </motion.div>
  );
};

export default ComponenteDiProva;
