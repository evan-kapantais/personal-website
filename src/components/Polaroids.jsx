import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Polaroids = () => {
  return (
    <section
      style={{
        float: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <StaticImage
        src="../images/bio-11.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px" }}
      />
      <StaticImage
        src="../images/bio-09.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px" }}
      />
      <StaticImage
        src="../images/bio-10.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px" }}
      />
    </section>
  );
};

export default Polaroids;
