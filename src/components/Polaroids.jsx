import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Polaroids = () => {
  return (
    <section>
      <StaticImage
        src="../images/bio-11.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px", marginBottom: "1rem" }}
      />
      <StaticImage
        src="../images/bio-09.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px", marginBottom: "1rem" }}
      />
      <StaticImage
        src="../images/bio-10.jpg"
        alt="Evan Kapantais"
        title="Evan Kapantais"
        style={{ borderRadius: "10px", marginBottom: "1rem" }}
      />
    </section>
  );
};

export default Polaroids;
