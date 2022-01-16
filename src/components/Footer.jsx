import React from "react";
import SocialLink from "./SocialLink.jsx";

import * as styles from "../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <SocialLink link="https://github.com/evan-kapantais" />
        <SocialLink link="https://instagram.com/evan.json" />
        <SocialLink link="https://codepen.io/Camp_Evan" />
      </ul>
      <div>© {new Date().getFullYear()}, Evan Kapantais</div>
    </footer>
  );
};

export default Footer;
