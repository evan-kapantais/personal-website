import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

import * as styles from "../styles/layout.module.css";
import Social from "./Social";
import Burger from "./Burger";

const Header = ({ set, isMenuOpen }) => {
  return (
    <header className={styles.header}>
      <Burger set={set} isMenuOpen={isMenuOpen} />
    </header>
  );
};

const Layout = ({ location, title, children }) => {
  const [isMenuOpen, set] = useState(false);

  return (
    <div className={styles.layout}>
      <Social />
      <main>
        <Header set={set} isMenuOpen={isMenuOpen} />
        {children}
        <Footer />
      </main>
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Layout;
