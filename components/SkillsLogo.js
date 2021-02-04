import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const transition = { delay: 1, duration: 1.3, ease: [0.6, 0.1, -0.05, 0.9] };

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...transition },
  },
};

const SkillsLogo = ({ img, width = 3, top, left, zIndex, alt }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "250px",
  });
  return (
    <div className="skills-logo" ref={ref}>
      <motion.img
        className="skills-logo__img"
        src={img}
        alt={alt}
        style={{
          width: `${width}rem`,
          top: `${top}rem`,
          left: `${left}rem`,
          zIndex: zIndex,
        }}
        variants={childVariants}
        initial="hidden"
        animate={inView && "visible"}
        drag
      />
    </div>
  );
};

export default SkillsLogo;
