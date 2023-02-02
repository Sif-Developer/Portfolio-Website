import React from "react";
import CTA from "./CTA/CTA";
import "./Header.css";

const Header = () => {
  return (
    <header className="container container__header">
      <h5>Hello, I'm</h5>
      <h1>Sif Et tabaa</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>

    </header>
  );
};

export default Header;
