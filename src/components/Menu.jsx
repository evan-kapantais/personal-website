import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/menu.module.css";

const Menu = ({ isMenuOpen }) => {
  return (
    <aside className={`${styles.menu} menu`}>
      <nav>
        <div className={`${styles.scrollbar} nav-scrollbar`} />
        <ul>
          <li data-aos="fade-left" data-aos-delay="1000">
            <Link className="nav-link" to="#home">
              Home
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="1100">
            <Link className="nav-link" to="#about">
              About
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="1200">
            <Link className="nav-link" to="#projects">
              Projects
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="1300">
            <Link className="nav-link" to="#wip">
              In Progress
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="1400">
            <Link className="nav-link" to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
