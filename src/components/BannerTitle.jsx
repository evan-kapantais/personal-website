import React from "react";
import { a, useSpring, useChain, config } from "react-spring";

import * as styles from "../styles/index.module.css";

const BannerTitle = () => {
  const evan = useSpring({
    from: { opacity: 0, y: -300 },
    to: { opacity: 1, y: 0 },
    config: config.wobbly,
  });

  const kapantais = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: config.wobbly,
    delay: 300,
  });

  return (
    <h1 className={styles.bannerTitle}>
      <a.span style={evan}>Evan</a.span>{" "}
      <a.span style={kapantais}>Kapantais</a.span>
    </h1>
  );
};

export default BannerTitle;
