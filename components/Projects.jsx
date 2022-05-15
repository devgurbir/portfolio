import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectSingleReqer from "./ProjectSingleReqer";
import ProjectSingleSugarCosmetics from "./ProjectSingleSugarCosmetics";
import ProjectSingleTrello from "./ProjectSingleTrello";
const Projects = () => {
  return (
    <div id="projects" style={{ background: "#303036" }}>
      <div className={styles.container}>
        <h2>PROJECTS</h2>
        <ProjectSingleTrello />
        <ProjectSingleReqer />
        <ProjectSingleSugarCosmetics />
      </div>
    </div>
  );
};

export default Projects;
