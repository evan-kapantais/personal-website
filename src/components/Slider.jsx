import React, { useEffect, useState, useRef } from "react";
import * as s from "./styles/slider.module.css";

import tech from "../utils/tech";

const Slider = () => {
  const ref = useRef();
  const [paused, setPaused] = useState(false);

  // Handle animation state on hover
  useEffect(() => {
    const list = ref.current;

    list.style.animationPlayState = paused ? "paused" : "running";
  }, [paused]);

  return (
    <div className={s.slider}>
      <ul
        className={s.list}
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ "--length": tech.length * 2 }}
      >
        {tech.concat(tech).map((item, i) => (
          <li className={s.item} key={i}>
            <a href={item.url}>
              <img src={item.src} alt={item.name} width="250" height="100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
