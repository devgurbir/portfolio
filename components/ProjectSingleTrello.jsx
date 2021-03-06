import React from "react";
import styles from "../styles/Projects.module.css";
import TechStackPills from "./TechStackPills";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://trello-clone.com"
          >
            <div className={styles.singleLinkIcon}>
              <FaLink />
              <span>Website</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/devgurbir/trello-clone-solo"
          >
            <div className={styles.singleLinkIcon}>
              <FaGithub />
              <span>Github</span>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.rightProjectSingle + " " + styles.trello}></div>
    </div>
  );
};

export default ProjectSingleTrello;
