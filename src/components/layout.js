import React, { useState } from "react";
import Menu from "./Menu";
import SmallMenu from "./SmallMenu";

import * as styles from "../styles/layout.module.css";
import Social from "./Social";
import Burger from "./Burger";

import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import codepen from "../images/codepen.svg";

const Header = ({ set, isMenuOpen }) => {
  return (
    <header className={styles.header}>
      <Burger set={set} isMenuOpen={isMenuOpen} />
    </header>
  );
};

const Layout = ({ children }) => {
  const [isMenuOpen, set] = useState(false);

  return (
    <div className={styles.layout}>
      <Social />
      <main>
        <Header set={set} isMenuOpen={isMenuOpen} />
        {children}
        <footer className={styles.footer}>
          <div>© {new Date().getFullYear()}, Evan Kapantais</div>
          <ul>
            <li>
              <a href="https://github.com/evan-kapantais">
                <img src={github} alt="github" width={20} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/evan.json">
                <img src={instagram} alt="instagram" width={20} />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/Camp_Evan/">
                <img src={codepen} alt="codepen" width={20} />
              </a>
            </li>
          </ul>
        </footer>
      </main>
      <Menu />
      <SmallMenu isOpen={isMenuOpen} set={set} />
    </div>
  );
};

export default Layout;
