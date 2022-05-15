import React from "react";
import styles from "../styles/Projects.module.css";
import TechStackPills from "./TechStackPills";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectSingleSugarCosmetics = () => {
  return (
    <div
      className={styles.projectSingle  + " " + styles.reverseRow}
      //   style={{ flexDirection: "row-reverse" }}
    >
      <div className={styles.leftProjectSingle}>
        <h3>Sugar Cosmetics Clone</h3>
        <p>An ecommerce web app for a makeup brand.</p>
        <span>Core Responsibilities</span>
        <ul>
          <li>Implemented end-to-end cart functionality</li>
          <li>
            Implemented functionality for users to add/remove products directly
            from the cart
          </li>
          <li>
            Implemented functionality for users to add discount directly from
            the cart
          </li>
        </ul>
        <div className={styles.techStack}>
          <TechStackPills text="HTML5" />
          <TechStackPills text="CSS" />
          <TechStackPills text="React" />
          <TechStackPills text="Redux" />
        </div>
        <div className={styles.linkIcons}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://sugar-cosm.netlify.app/"
          >
            <div className={styles.singleLinkIcon}>
              <FaLink />
              <span>Website</span>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/devgurbir/sugarCosmetics"
            className={styles.singleLinkIcon}
          >
            <div className={styles.singleLinkIcon}>
              <FaGithub /> <span>Github</span>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.rightProjectSingle + " " + styles.sugarcosm}></div>
    </div>
  );
};

export default ProjectSingleSugarCosmetics;
