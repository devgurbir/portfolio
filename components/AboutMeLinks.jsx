import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import styles from "../styles/AboutMe.module.css";
import Link from "next/link";
const AboutMeLinks = () => {
  return (
    <div className={styles.aboutMeIcons}>
      <Link href="https://www.linkedin.com/in/gurbir-singh-20641a157/">
        <div className={styles.aboutMeIconsDiv}>
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </Link>
      <Link href="https://github.com/devgurbir">
        <div className={styles.aboutMeIconsDiv}>
          <FaGithub />
          <span>Github</span>
        </div>
      </Link>
      <Link href="https://drive.google.com/file/d/1PL0rYXeRavLXAPO4YuiLK0lhh6G_ICU-/view">
        <div className={styles.aboutMeIconsDiv}>
          <FaArchive />
          <span>Resume</span>
        </div>
      </Link>
    </div>
  );
};

export default AboutMeLinks;
