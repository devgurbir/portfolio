import React from "react";
import styles from "../styles/AboutMe.module.css";
import AboutMeImg from "./AboutMeImg";
import AboutMeText from "./AboutMeText";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AboutMeText />
      </div>
      <div className={styles.right}>
        <AboutMeImg />
      </div>
    </div>
  );
};

export default AboutMe;
