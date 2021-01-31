import React from "react";
import style from "./socialLogo.module.scss";

const SocialLogo = ({ link, img }) => {
  return (
    <a href={link} target="_blank">
      <img className={style.logo} src={img} />
    </a>
  );
};

export default SocialLogo;
