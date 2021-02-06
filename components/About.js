import React from "react";
import HeaderTitle from "./HeaderTitle";

const About = () => {
  return (
    <div className="about" id="about">
      <HeaderTitle title="Who am I?" />
      <p>
        I'm Giuseppe, a 25 y/o web developer based in <strong>Milan</strong>. My
        specialization is <strong>front-end</strong> development and my
        favourite framework to work with is React. I also love{" "}
        <strong>UX/UI design</strong> and I make sure their principles are
        integrated to recreate the best possible experience.
      </p>
      <p>
        After a bechelor degree in Language Mediation and Intercultural
        Communication I decided to change the course and feed my big passion for{" "}
        <strong>technolgy and visual design</strong>, so I enrolled in Scuola
        Mohole in Milan for a two years course in{" "}
        <strong>Web & Digital Media</strong>.
      </p>
    </div>
  );
};

export default About;
