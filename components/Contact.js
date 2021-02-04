import React from "react";
import CallToAction from "./CallToAction/CallToAction";
import HeaderTitle from "./HeaderTitle";
import SocialLogo from "./SocialLogo/SocialLogo";
import { motion } from "framer-motion";
import { transition } from "../utils/fm-transitions";
import { useInView } from "react-intersection-observer";

//logos
import githubLogo from "../public/img/logos/social/orange-github.svg";
import linkedInLogo from "../public/img/logos/social/orange-linkedin.svg";
import instagramLogo from "../public/img/logos/social/orange-instagram.svg";

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

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div id="contact" className="contact" ref={ref}>
      <div className="contact__header">
        <HeaderTitle title="Contact Me" />
        <div className="email-btn">
          <CallToAction
            text="figliuologiuseppe@gmail.com"
            link="mailto:figliuologiuseppe@gmail.com"
          />
        </div>
      </div>
      <motion.div
        className="contact__inner"
        variants={containerVariants}
        initial="hidden"
        animate={inView && "visible"}
      >
        <div className="contact__email">
          <motion.p className="contact__paragraph">
            <motion.span variants={childVariants}>
              Do you want to know more about me and my skills? Just{" "}
              <strong>send me an email</strong>, I would love to reply!
            </motion.span>
          </motion.p>
          <div className="email-btn"></div>
        </div>
        <div className="contact__cv">
          <motion.p>
            <motion.span variants={childVariants}>
              Or give a look to <strong>my resume</strong> for more information.
            </motion.span>
          </motion.p>
          <CallToAction
            text="Open resume"
            link="https://drive.google.com/file/d/1MK-C8toNxAGqvEZHOyIsk95vRfVtLrVG/view"
          />
        </div>
        <div className="contact__looking">
          <motion.p>
            <motion.span variants={childVariants}>
              I'm always looking for new and <strong>creative projects</strong>
            </motion.span>
          </motion.p>
        </div>
        <div className="contact__social">
          <p className="sans-serif">You can also find me on:</p>
          <div className="contact__social__icons">
            <motion.p>
              <motion.span variants={childVariants}>
                <SocialLogo
                  link="https://github.com/giuseppefigliuolo"
                  img={githubLogo}
                />
              </motion.span>
              <motion.span variants={childVariants}>
                <SocialLogo
                  link="https://www.linkedin.com/in/giuseppe-figliuolo-51103818a/"
                  img={linkedInLogo}
                />
              </motion.span>
              <motion.span variants={childVariants}>
                <SocialLogo
                  link="https://www.instagram.com/giu_figliuolo/"
                  img={instagramLogo}
                />
              </motion.span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
