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
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
