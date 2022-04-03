import React from "react";
import styles from "../styles/Projects.module.css";
import TechStackPills from "./TechStackPills";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectSingleSugarCosmetics = () => {
  return (
    <div
      className={styles.projectSingle}
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
          <Link href="https://sugar-cosm.netlify.app/">
            <FaLink />
          </Link>
          <Link href="https://github.com/devgurbir/sugarCosmetics">
            <FaGithub />
          </Link>
        </div>
      </div>
      <div className={styles.rightProjectSingle + " " + styles.sugarcosm}></div>
    </div>
  );
};

export default ProjectSingleSugarCosmetics;
