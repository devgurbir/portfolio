import React from "react";
import styles from "../styles/Projects.module.css";

const TechStackPills = ({ text }) => {
  return <div className={styles.pills}>{text}</div>;
};

export default TechStackPills;
