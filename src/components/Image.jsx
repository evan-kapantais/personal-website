import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useSpring } from "react-spring";

import * as styles from "./styles/image.module.css";

const Image = ({ project, details }) => {
  const isOdd = project.id % 2 !== 0;

  const spring = useSpring({
    to: {
      x: details ? "0%" : isOdd ? "-100%" : "100%",
      y: "-50%",
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 15,
    },
  });

  return (
    <a.div
      className={`${styles.imageWrapper} ${isOdd ? styles.odd : ""}`}
      style={spring}
    >
      <GatsbyImage
        image={project.image.gatsbyImageData}
        alt={project.title}
        title={project.title}
        className={styles.image}
      />
      {/* {project.mobileImage && (
        <GatsbyImage
          image={project.mobileImage.gatsbyImageData}
          alt={project.title}
          title={project.title}
          className={styles.mobileImage}
        />
      )} */}
    </a.div>
  );
};

export default Image;
