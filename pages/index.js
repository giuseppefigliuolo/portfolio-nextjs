import Meta from "../components/Meta";
import BannerText from "../components/BannerText";
import WorksSection from "../components/WorksSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import BackgroundHome from "../components/BackgroundHome/BackgroundHome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [bgrRef, inView] = useInView({
    threshold: 0,
  });
  return (
    <motion.div className="lp" exit={{ opacity: 0 }}>
      <Meta />
      <div className="entry-banner">
        {!inView && <BackgroundHome />}
        <BannerText />
      </div>
      <About />
      <div ref={bgrRef}>
        <WorksSection />
        <Skills />
        <Contact />
      </div>
    </motion.div>
  );
}
