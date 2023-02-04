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
          👦🏻 I'm a recent graduate from The Bridge Digital Talent Accelerator 🎓where I specialized in the MERN stack (MongoDB, Express, React, Node.js). <br /><br />

💻 Ever since I was a child, I've been fascinated by technology and how it can improve people's lives. This interest led me study web development and later, to join The Bridge. <br /><br />

🔧 During my training, I acquired valuable programming and problem-solving skills, and participated in team projects that allowed me to put my learning into practice. <br /> <br />

💬 I'm available to work on both remote and office projects, and I'm always open to listen and learn from more experienced developers.
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
