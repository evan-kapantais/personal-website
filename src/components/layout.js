import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import Footer from "./Footer";

import * as styles from "../styles/layout.module.css";

const Layout = ({ location, title, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wireframe, set] = useState(false);

  // Toggle wireframe
  useEffect(() => {
    const all = [...document.querySelectorAll("body *")].filter(
      elem => elem.tagName !== "body" && elem.tagName !== "html"
    );

    if (wireframe) {
      all.forEach(elem => {
        const border = `1px solid rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.4)`;

        elem.style.border = border;
      });
    } else {
      all.forEach(elem => (elem.style.border = "none"));
    }
  }, [wireframe]);

  return (
    <div className={styles.layout}>
      <button
        type="button"
        className={styles.admin}
        onClick={() => set(!wireframe)}
      >
        Wireframe
      </button>
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
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Layout;
