import React from "react";
import { Link } from "gatsby";
import { a, useSpring } from "react-spring";
import * as styles from "./styles/smallmenu.module.css";

import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import codepen from "../images/codepen.svg";

const SmallMenu = ({ isOpen, set }) => {
  const spring = useSpring({
    x: isOpen ? "0%" : "-120%",
    config: {
      mass: 1,
      tension: 180,
      friction: 16,
    },
  });

  return (
    <a.div role="menu" style={spring} className={styles.menu}>
      <nav>
        <ul>
          <li className={styles.menuItem}>
            <Link to="#home" onClick={() => set(false)}>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#about" onClick={() => set(false)}>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#projects" onClick={() => set(false)}>
              Projects
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#wip" onClick={() => set(false)}>
              In Progress
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#contact" onClick={() => set(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className={styles.social}>
        <ul>
          <li className={styles.socialItem}>
            <a href="https://github.com/evan-kapantais">
              <img src={github} alt="github" width={24} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://instagram.com/evan.json">
              <img src={instagram} alt="instagram" width={24} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://codepen.io/Camp_Evan/">
              <img src={codepen} alt="codepen" width={24} />
            </a>
          </li>
        </ul>
      </section>
    </a.div>
  );
};

export default SmallMenu;
