import React from "react";
import "./About.css";
import ME from "../../assets/images/Sif-profile-picture1.jpg";
import { FaMedal, FaUsers } from "react-icons/fa";
import { RiFoldersFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      About
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

            <div className="about__text-and-btn">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio incidunt, unde reiciendis repudiandae dolores
                quisquam, esse quasi obcaecati amet, explicabo voluptatem ullam
                voluptate dignissimos maiores! Aliquam molestiae unde iusto!
                Eius!
              </p>

              <div className="contact__btn-container">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
