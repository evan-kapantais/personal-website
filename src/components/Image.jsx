import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./styles/image.module.css";

const Image = ({ project }) => {
  const isEven = project.id % 2 !== 0;

  return (
    <GatsbyImage
      image={project.image.gatsbyImageData}
      alt={project.title}
      title={project.title}
      className={`${styles.image} ${isEven ? styles.even : ""}`}
    />
  );
};

export default Image;
