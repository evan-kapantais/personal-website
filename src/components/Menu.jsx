import React from "react";
import { a, useSpring } from "react-spring";
import { Link } from "gatsby";

import * as styles from "../styles/menu.module.css";

const Menu = ({ isMenuOpen }) => {
  const anim = useSpring({
    from: { y: -120 },
    to: { y: isMenuOpen ? 32 : -120 },
    config: { mass: 1, tension: 170, friction: 12 },
  });

  return (
    <a.div className={styles.menu}>
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
