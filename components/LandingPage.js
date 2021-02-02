import React /* { useRef, useEffect } */ from "react";
// import { useInView } from "react-intersection-observer";
import BannerText from "./BannerText";
// import ComponenteDiProva from "./ComponenteDiProva";
import CanvasComponent from "./CanvasComponent";
import WorksSection from "./WorksSection";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="lp">
      <div className="entry-banner">
        <CanvasComponent />
        <BannerText />
      </div>
      <About />
      <WorksSection />
      <Skills />
      <Contact />
    </div>
  );
};

export default LandingPage;
