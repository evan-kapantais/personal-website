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
      <Header set={set} isMenuOpen={isMenuOpen} />
      <main>{children}</main>
      <Footer />
      <Social />
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Layout;
