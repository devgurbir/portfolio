import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import styles from "../styles/AboutMe.module.css";
import Link from "next/link";
const AboutMeLinks = () => {
  return (
    <div className={styles.aboutMeIcons}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/gurbir-singh-20641a157/"
      >
        <div className={styles.aboutMeIconsDiv}>
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/devgurbir">
        <div className={styles.aboutMeIconsDiv}>
          <FaGithub />
          <span>Github</span>
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1JKRDqIoW-ksBZqY5u6QJU48UtIa-46p3/view?usp=sharing"
      >
        <div className={styles.aboutMeIconsDiv}>
          <FaFile />
          <span>Resume</span>
        </div>
      </a>
    </div>
  );
};

export default AboutMeLinks;
