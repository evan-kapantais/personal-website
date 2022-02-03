import React from "react";
import { a, useSpring } from "react-spring";
import { Link } from "gatsby";
import arrow from "../images/chevron-left.svg";

import * as styles from "../styles/menu.module.css";

const Menu = ({ isMenuOpen }) => {
  return (
    <a.div className={`${styles.menu} menu`}>
      <div className={`${styles.scrollbar} nav-scrollbar`} />
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#wip">
              In Progress
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </a.div>
  );
};

export default Menu;
