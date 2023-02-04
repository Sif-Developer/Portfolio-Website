import React from "react";
import "./About.css";
import ME from "../../assets/images/Sif-profile-picture1.jpg";
import { FaMedal, FaUsers } from "react-icons/fa";
import { RiFoldersFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Experience</h5>
              <small>5 Month Learning</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Clients</small>
            </article>

            <article className="about__card">
              <RiFoldersFill className="about__icon" />
              <h5>Projects</h5>
              <small>
                15+ Completed <br /> Projects
              </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            voluptatem sapiente delectus inventore cupiditate magni enim dolores
            repellendus eius rem, cum ad eaque, natus eos. Architecto incidunt
            aliquam quos! Ratione?
          </p>
            
          <a href="#contact" className="btn btn-primary about__btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
