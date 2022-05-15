import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className="container">
          <Link href="/">
            <img src="/logo-1.png" alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.navLinkDiv}>
        <div className="container">
          <ul className={styles.navUl}>
            <li>
              <Link href="#aboutme">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <a
                className={styles.highlighted}
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/14tG-BOq7J9xLLUOJkAO8tkgWkRkEFYGa/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
