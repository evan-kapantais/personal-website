import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useSpring } from "react-spring";

import * as styles from "./styles/image.module.css";

const Image = ({ project, details }) => {
  const isOdd = project.id % 2 !== 0;

  return (
    <a.div className={`${styles.imageWrapper} ${isOdd ? styles.odd : ""}`}>
      <GatsbyImage
        image={project.image.gatsbyImageData}
        alt={project.title}
        title={project.title}
        className={styles.image}
      />
    </a.div>
  );
};

export default Image;
