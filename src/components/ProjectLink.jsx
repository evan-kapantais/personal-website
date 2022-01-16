import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import * as styles from "../styles/projectLink.module.css";

const ProjectLink = ({ link, isRepo, hover }) => {
  return (
    <a
      href={link}
      className={styles.link}
      data-target={isRepo ? "repo" : "site"}
      onMouseEnter={hover}
    >
      <span>{isRepo ? "Repo" : "Live Site"}</span>
      <StaticImage
        src="../images/link.png"
        alt="link"
        title="link"
        className={styles.icon}
      />
    </a>
  );
};

export default ProjectLink;
