import React from "react";
import HeaderTitle from "./HeaderTitle";

const About = () => {
  return (
    <div className="about" id="about">
      <HeaderTitle title="Who am I?" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        <span> veniam</span>, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu <span>fugiat</span> nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt{" "}
        <span>mollit</span> anim id est laborum.
      </p>
    </div>
  );
};

export default About;
