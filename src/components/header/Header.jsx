import React from "react";
import CTA from "./CTA/CTA";
import "./Header.css";
import ME from "../../assets/images/sif-profile.png";
import HeaderSocials from "./HeaderSocials/HeaderSocials";

const Header = () => {
  return (
    <header className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Sif Et tabaa</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
      <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      <div className="me">
        <img src={ME} className="header__img" alt="my-profile-picture" />
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
