import React from "react";
import CTA from "./CTA/CTA";
import "./Header.css";
import ME from "../../assets/images/sif-profile.png";
import HeaderSocials from "./HeaderSocials/HeaderSocials";

const Header = () => {
  return (
    <header className="container container__header">
      <h5>Hello, I'm</h5>
      <h1>Sif Et tabaa</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="my-profile-picture" />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  );
};

export default Header;
