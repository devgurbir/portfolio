import React from "react";
import styles from "../styles/SoftSkills.module.css";
const Contact = () => {
  return (
    <div id="contact" style={{ backgroundColor: "#303036" }}>
      <div className={styles.container}>
        <h2>Contact</h2>
        <div className={styles.box}>
          <div>
            <h4>Phone Number</h4>
            <span>
              <a href="tel:+916280263283">+91 6280263283</a>
            </span>
          </div>

          <div>
            <h4>Email</h4>
            <span>
              <a href="mailto:devgurbir@gmail.com">devgurbir@gmail.com</a>
            </span>
          </div>

          <div>
            <h4>LinkedIn</h4>
            <span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gurbir-singh-20641a157/"
              >
                Link
              </a>
            </span>
          </div>

          <div>
            <h4>Github</h4>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/devgurbir"
              >
                Link
              </a>
            </span>
          </div>
        </div>
        {/* <div className={styles.getInTouchLinkedin}>
          <p>
            Or feel free to drop me a DM on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gurbir-singh-20641a157/"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className={styles.madeinNext}>
          <p>
            Made in <a href="https://nextjs.org/">Next.js</a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
