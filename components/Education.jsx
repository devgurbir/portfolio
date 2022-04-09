import React from "react";
import styles from "../styles/Education.module.css";

const Education = () => {
  return (
    <div id="education" style={{ backgroundColor: "#1E1A1D" }}>
      <div className={styles.container}>
        <h2>EDUCATION</h2>
        <div className={styles.box}>
          <h3>Masai School</h3>
          <span>April 2021 - May 2022</span>
          <p>
            Masai School has helped me to kickstart my coding career by helping
            me gain solid fundamentals in Data Structures & Algorithms along
            with becoming a proficient full stack web developer able to work in
            a collaborative environment.
          </p>
          <p>Here are some highlights from my time at Masai:</p>
          <ul>
            <li>
              Solved 100s of problems around Data Structures & Algorithms that
              helped me develop problem-solving skills
            </li>
            <li>
              Started from learning the building blocks of web development -
              HTML, CSS & Javascript and went on to become proficient in the
              MERN stack.
            </li>
            <li>
              Created multiple projects & mini-projects as part of construct
              week(similar to hackathons) & assignments
            </li>
            <li>
              Helped my teams get the #2 & #3 position in different construct
              weeks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
