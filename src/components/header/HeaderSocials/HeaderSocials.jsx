import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sif-ettabaa/" target="_blank"><AiFillLinkedin/></a>
      <a href="https://github.com/sif-developer" target="_blank" ><AiFillGithub/></a>
      <a href="https://www.fiverr.com/sif_dev" target="_blank"><SiFiverr/></a>
    </div>
  );
};

export default HeaderSocials;
