import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/pageLink.module.css";

const PageLink = ({ link, text, name = "" }) => {
  return (
    <Link to={link} className={styles.link} data-name={name}>
      <span>{text}</span>
      <StaticImage
        src="../images/link.png"
        alt="link"
        title="link"
        className={styles.icon}
      />
    </Link>
  );
};

export default PageLink;
