import React from "react";
import style from "./socialLogo.module.scss";

const SocialLogo = ({ link, img }) => {
  return (
    <a href={link} target="_blank">
      <img
        className={style.logo}
        src={img}
        alt="logo Giuseppe Figliuolo Social Networks"
      />
    </a>
  );
};

export default SocialLogo;
