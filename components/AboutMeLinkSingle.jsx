import React from "react";

const AboutMeLinkSingle = ({ text, icon }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default AboutMeLinkSingle;
