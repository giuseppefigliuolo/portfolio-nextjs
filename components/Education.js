import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const transition = { duration: 0.8, ease: [0.6, 0.1, -0.05, 0.9] };

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
    transition: { ...transition },
  },
};

const Education = ({ title, location, description, date, schoolLink }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      className="education"
      variants={containerVariants}
      initial="hidden"
      animate={inView && "visible"}
    >
      <div className="education__title-container">
        <a className="education__title" href={schoolLink} target="_blank">
          <motion.h3 variants={childVariants}>{title}</motion.h3>
        </a>
        <motion.p variants={childVariants} className="education__date">
          {date}
        </motion.p>
      </div>
      <motion.p variants={childVariants} className="education__paragraph">
        <span>{location}</span> - {description}
      </motion.p>
    </motion.div>
  );
};

export default Education;
