import React from "react";
import AboutMeLinks from "./AboutMeLinks";

const AboutMeText = () => {
  return (
    <div>
      <h1>Gurbir Singh</h1>
      <div>
        <span>ABOUT ME</span>
        <h3>Full-stack (MERN) web developer from Chandigarh, India.</h3>
        <p>
          I am a programmer, currently learning and working with the MERN stack.
          With a background in SEO and marketing, I consider myself as a
          product-first developer. I aim to solve real-world problems with my
          dev skills.
        </p>
      </div>
      <AboutMeLinks />
    </div>
  );
};

export default AboutMeText;
