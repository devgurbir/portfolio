import React from "react";
import styles from "../styles/Projects.module.css";
import TechStackPills from "./TechStackPills";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectSingleReqer = () => {
  return (
    <div className={styles.projectSingle + " " + styles.reverseRow}>
      <div className={styles.leftProjectSingle}>
        <h3>Reqer</h3>
        <p>A web application to support your API development. Currently supports REST APIs.</p>
        <span>Core Responsibilities</span>
        <ul>
          <li>
            Created the entire web app
          </li>
          <li>
            Managed state solely with a combination of the contextAPI & the useReducer hook.
          </li>
          <li>
            Created a resizable component to change height of component on dragging.
          </li>
          
        </ul>
        <div className={styles.techStack}>
          <TechStackPills text="React" />
        </div>
        <div className={styles.linkIcons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://reqer.netlify.app/"
          >
            <div className={styles.singleLinkIcon}>
              <FaLink />
              <span>Website</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/devgurbir/reqer"
          >
            <div className={styles.singleLinkIcon}>
              <FaGithub />
              <span>Github</span>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.rightProjectSingle + " " + styles.reqer}></div>
    </div>
  );
};

export default ProjectSingleReqer
