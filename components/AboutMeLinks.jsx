import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import styles from "../styles/AboutMe.module.css";

const AboutMeLinks = () => {
  return (
    <div className={styles.aboutMeIcons}>
      <a href="https://www.linkedin.com/in/gurbir-singh-20641a157/">
        <div className={styles.aboutMeIconsDiv}>
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </a>
      <a href="https://github.com/devgurbir">
        <div className={styles.aboutMeIconsDiv}>
          <FaGithub />
          <span>Github</span>
        </div>
      </a>
      <a href="#">
        <div className={styles.aboutMeIconsDiv}>
          <FaArchive />
          <span>Resume</span>
        </div>
      </a>
    </div>
  );
};

export default AboutMeLinks;
