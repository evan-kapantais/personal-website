import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import Footer from "./Footer";

import * as styles from "../styles/layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Social from "./Social";

const Layout = ({ location, title, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <header
        className={`${styles.header} ${title === "Home" && styles.headerHome}`}
      >
        {title !== "Home" && (
          <h1>
            <Link to="/">Evan Kapantais</Link>
          </h1>
        )}
        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div></div>
          <div></div>
        </button>
      </header>
      <main>{children}</main>
      <Footer />
      <Social />
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Layout;
