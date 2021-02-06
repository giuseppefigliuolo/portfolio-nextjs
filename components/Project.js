import React from "react";
import Image from "next/image";
import Tilt from "react-tilt";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "./Footer";
import gitHubLogo from "../imgs/logos/social/orange-github.svg";

const Project = ({ title, img, link = "#", techs, description, linkRepo }) => {
  return (
    <>
      <section id="project">
        <div className="project">
          <h1>{title}</h1>
          <div className="project__content">
            <div className="project__tilt">
              <a href={link}>
                <Tilt options={{ reverse: true, max: 13, scale: 1.05 }}>
                  <Image src={img} alt={title} />
                </Tilt>
              </a>
            </div>
            <div className="project__implementations">
              <h3>Tech implementations</h3>
              <div className="tech-ul">
                <ul>
                  {techs.map((el, i) => (
                    <li key={i}>- {el}</li>
                  ))}
                </ul>
              </div>
              <div className="button-cta">
                <CallToAction text="Give it a look" link={link} />
              </div>
              <div className="project__github">
                <a href={linkRepo}>
                  <img src={gitHubLogo} alt="github logo" />
                  <p>GitHub repo here</p>
                </a>
              </div>
            </div>
            <div className="project__concept">
              <h3>Project concept</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project;
