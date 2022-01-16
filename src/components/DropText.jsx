import React, { useState, useRef, useEffect } from "react";
import { a, useSpring } from "react-spring";

import * as styles from "../styles/dropText.module.css";

const DropText = ({ text, link }) => {
  const [hover, set] = useState(null);

  const ref = useRef();

  const host = new URL(link).host;
  const platform = host.substring(0, host.indexOf("."));
  const username = new URL(link).pathname;

  useEffect(() => {
    const target = ref.current;
    const p = target.lastElementChild;
    const link = target.firstElementChild;

    target.style.width = hover ? `${link.scrollWidth}px` : `${p.scrollWidth}px`;
  }, [hover]);

  const config = { mass: 1, tension: 170, friction: 12 };

  const y = 50;

  const linkStyle = useSpring({
    from: { y: -y },
    to: { y: hover ? 0 : -y },
    config,
  });

  const pStyle = useSpring({
    from: { y: 0 },
    to: { y: hover ? y : 0 },
    config,
  });

  return (
    <div
      className={styles.item}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      ref={ref}
    >
      <a.a href={link} style={linkStyle}>
        {link}
      </a.a>
      <a.p style={pStyle}>{text}</a.p>
    </div>
  );
};

export default DropText;
