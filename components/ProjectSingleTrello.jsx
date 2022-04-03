import React from "react";
import styles from "../styles/Projects.module.css";
import TechStackPills from "./TechStackPills";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectSingleTrello = () => {
  return (
    <div className={styles.projectSingle + " " + styles.reverseRow}>
      <div className={styles.leftProjectSingle}>
        <h3>Trello Clone</h3>
        <p>Trello is a web-based work management/collaboration tool.</p>
        <span>Core Responsibilities</span>
        <ul>
          <li>
            Implemented user signup and signin flows using OAuth strategies from
            PassportJS
          </li>
          <li>
            Implemented card functionality with features like labels,
            checklists, file uploads
          </li>
          <li>
            Created a REST API with multiple endpoints for CRUD operations
            related to the card & workspace
          </li>
        </ul>
        <div className={styles.techStack}>
          <TechStackPills text="React" />
          <TechStackPills text="Redux" />
          <TechStackPills text="NodeJS" />
          <TechStackPills text="ExpressJS" />
          <TechStackPills text="MongoDB" />
        </div>
        <div className={styles.linkIcons}>
          <Link href="https://trello-clone-gurbir.netlify.app/">
            <FaLink />
          </Link>
          <Link href="https://github.com/devgurbir/trello-clone-solo">
            <FaGithub />
          </Link>
        </div>
      </div>
      <div className={styles.rightProjectSingle + " " + styles.trello}></div>
    </div>
  );
};

export default ProjectSingleTrello;
