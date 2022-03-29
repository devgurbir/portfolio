import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <div
      id="skills"
      style={{ backgroundColor: "#FDFFFC", marginBottom: "3em" }}
    >
      <div className={styles.skillsContainer}>
        <h2>SKILLS</h2>
        <div className={styles.skillsIconStrip}>
          <div>
            <img src="/html5.png" alt="HTML5" />
            <span>HTML5</span>
          </div>
          <div>
            <img src="/css-131-722685.webp" alt="CSS3" />
            <span>CSS3</span>
          </div>
          <div>
            <img src="/js.png" alt="JS" />
            <span>Javascript</span>
          </div>
          <div>
            <img src="/React-icon.png" alt="React" />
            <span>React</span>
          </div>
          <div>
            <img src="/redux.webp" alt="Redux" />
            <span>Redux</span>
          </div>
          <div>
            <img src="/nodejs-icon.svg" alt="Node" />
            <span>NodeJS</span>
          </div>
          <div>
            <img
              src="/express-1.png"
              alt="express"
              style={{ width: "120px", height: "auto" }}
            />
            <span>ExpressJS</span>
          </div>
          <div>
            <img src="/mongodb.png" alt="mongodb" />
            <span>MongoDB</span>
          </div>
          <div>
            <img src="/github.png" alt="Github" />
            <span>Github</span>
          </div>
          {/* <img
            src="/nextjs.png"
            alt="next"
            style={{ width: "120px", height: "auto" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
