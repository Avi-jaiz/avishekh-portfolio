import React from "react";
import "./about.css";
import ProfilePic from "../Files/Profile_pic.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdLibraryAddCheck } from "react-icons/md";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfilePic} alt="pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0 yrs </small>
            </article>

            <article className="about_card">
              <MdLibraryAddCheck className="about__icon" />
              <h5>Projects</h5>
              <small>02</small>
            </article>

            <article className="about_card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>No Clients till now</small>
            </article>
          </div>
          <p>
            I'm a self taught Front end developer, skilled in HTML, CSS , JavaScript, GIT and React JS. Willingness to learn more and more and apply all my efforts in my work..
          </p>
          <a href='#contact' className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
