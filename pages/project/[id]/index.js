import { server } from "../../../config";
import Image from "next/image";
import Meta from "../../../components/Meta";
import HeaderTitle from "../../../components/HeaderTitle";
import Tilt from "react-tilt";
import CallToAction from "../../../components/CallToAction/CallToAction";
import { motion, AnimatePresence } from "framer-motion";
import { transition } from "../../../utils/fm-transitions";

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.24,
    },
  },
  exit: {
    opacity: 0,
    transition: { ...transition },
  },
};

const mainDivVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: { duration: 3, ...transition },
  },
};

const childVariants = {
  hidden: {
    x: -400,
  },
  visible: {
    x: 0,
    transition: { duration: 1, ...transition },
  },
};

const goingUpVariants = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: { ...transition },
  },
};

const projectSwitchVariants = {
  hidden: {
    x: 600,
  },
  visible: {
    x: 0,
    transition: { ...transition },
  },
  exit: {
    x: -300,
    transition: { ...transition },
  },
};

const project = ({ project }) => {
  return (
    <motion.section
      id="project"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Meta title={project.title} description={project.title} />
      <motion.div className="project" variants={projectSwitchVariants}>
        <HeaderTitle title={project.title} />
        <div className="project__content">
          <div className="project__tilt">
            <a href={project.link}>
              <Tilt options={{ reverse: true, max: 13, scale: 1.05 }}>
                <motion.div className="tilt_img" variants={mainDivVariants}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </motion.div>
              </Tilt>
            </a>
          </div>
          <div className="project__implementations">
            <h3>
              <motion.span variants={goingUpVariants}>
                Tech implementations
              </motion.span>
            </h3>
            <motion.div className="tech-ul">
              <ul>
                {project.techs.map((el, i) => (
                  <motion.li key={i} variants={childVariants}>
                    - {el}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="button-cta">
              <motion.span variants={goingUpVariants}>
                <CallToAction text="Give it a look" link={project.link} />
              </motion.span>
            </div>
            <div className="project__github">
              <a href={project.linkRepo}>
                <motion.span variants={goingUpVariants}>
                  <Image
                    src="/img/logos/social/orange-github.svg"
                    width={50}
                    height={50}
                  />
                  <p>GitHub repo here</p>
                </motion.span>
              </a>
            </div>
          </div>
          <div className="project__concept">
            <h3>Project concept</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export async function getStaticProps(context) {
  let project = [];
  let error = "";
  try {
    const res = await fetch(`${server}/api/projects/${context.params.id}`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    project = await res.json();
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      project,
      error,
    },
  };
}

export const getStaticPaths = async () => {
  let paths = [];
  let error = "";
  try {
    const res = await fetch(`${server}/api/projects`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    const projects = await res.json();
    const ids = projects.map((project) => project.id);
    paths = ids.map((id) => ({ params: { id: id.toString() } }));
  } catch (e) {
    error = e.toString();
  }

  return {
    paths,
    fallback: false,
  };
};

export default project;
