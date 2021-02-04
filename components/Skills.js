import React from "react";
import Education from "./Education";
import HeaderTitle from "./HeaderTitle";
import SkillsLogo from "./SkillsLogo";

//logos Img
import cssLogo from "../public/img/logos/css.svg";
import gitHubLogo from "../public/img/logos/github.svg";
import illustratorLogo from "../public/img/logos/illustrator.svg";
import javascriptLogo from "../public/img/logos/javascript.svg";
import nodejsLogo from "../public/img/logos/nodejs.svg";
import phpLogo from "../public/img/logos/php.svg";
import reactLogo from "../public/img/logos/react.svg";
import wordpressLogo from "../public/img/logos/wordpress.svg";
import figma from "../public/img/logos/figma.svg";
import nextLogo from "../public/img/logos/next.svg";

const Skills = () => {
  return (
    <section id="skills">
      <HeaderTitle title="Skills & Education" />
      <div className="skills-inner">
        <div className="skills-inner__education">
          <Education
            title="Scuola Mohole"
            location="Milan"
            description="Academic course in Web & Digital Media."
            date="2019-2021"
            schoolLink="https://scuola.mohole.it/"
          />
          <Education
            title="Università per Stranieri di Siena"
            location="Siena"
            description="Bachelor’s degree in “Linguistic and cultures mediation“ in touristic sector and
        entrepreneurship."
            date="2016-2019"
            schoolLink="https://www.unistrasi.it/"
          />
          <Education
            title="Latvijas Kultūras Akadēmija"
            location="Riga"
            description="Erasmus Plus student programme for one semester."
            date="2018"
            schoolLink="https://lka.edu.lv/en/"
          />
          <Education
            title="Blue Valley West High School"
            location="Kansas City"
            description="Exchange student for a year in an American high school."
            date="2013-2014"
            schoolLink="https://www.bluevalleyk12.org/bvw"
          />
        </div>
        <div className="skills__logos">
          <SkillsLogo
            img={wordpressLogo}
            width={4}
            top={2}
            left={11}
            alt="logo wordpress"
          />
          <SkillsLogo
            img={phpLogo}
            alt="logo php"
            width={3.3}
            top={5.6}
            left={10}
            zIndex={20}
          />
          <SkillsLogo
            img={cssLogo}
            alt="logo css"
            width={5.5}
            top={8.7}
            left={12}
          />
          <SkillsLogo
            img={gitHubLogo}
            alt="logo github"
            width={3.3}
            top={8}
            left={7}
          />
          <SkillsLogo
            img={nodejsLogo}
            alt="logo nodejs"
            width={2}
            top={11}
            left={3}
          />
          <SkillsLogo
            img={javascriptLogo}
            alt="logo javascript"
            width={6}
            top={14}
            left={5}
          />
          <SkillsLogo
            img={reactLogo}
            alt="logo react"
            width={5.4}
            top={19}
            left={1}
          />
          <SkillsLogo
            img={illustratorLogo}
            alt="logo illustrator"
            width={2.8}
            top={19}
            left={13}
            zIndex={3}
          />
          <SkillsLogo
            img={figma}
            alt="logo figma"
            width={5}
            zIndex={2}
            top={20}
            left={14}
          />
          <SkillsLogo
            img={nextLogo}
            alt="logo next"
            width={6}
            zIndex={2}
            top={23}
            left={6}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
