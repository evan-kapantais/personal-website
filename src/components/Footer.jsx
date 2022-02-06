import React from "react";
import heart from "../images/heart.svg";

import * as styles from "../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()}, Evan Kapantais</div>
      <div>
        Made with{" "}
        <img
          src={heart}
          alt="love"
          width={18}
          style={{
            display: "inline",
            verticalAlign: "middle",
            margin: "0 0.2rem",
          }}
        />{" "}
        and Gatsby
      </div>
    </footer>
  );
};

export default Footer;
