import React, { useRef } from "react";
import * as styles from "./styles/text.module.css";

import arrowYellow from "../images/chevron-right-yellow.svg";
import globe from "../images/globe.svg";

function enter(e) {
  const target = e.currentTarget.querySelector("pre");

  const text = e.currentTarget.dataset.text;
  let i = 0;

  let interval;

  clearInterval(interval);

  const fillText = () => {
    if (i > text.length) clearInterval(interval);

    target.innerText += text.charAt(i);
    i++;
  };

  interval = setInterval(fillText, 30);
}

function leave(e) {
  const target = e.currentTarget.querySelector("pre");

  const text = target.innerText;
  let i = text.length - 1;

  let interval;

  clearInterval(interval);

  const clearText = () => {
    if (i < 0) clearInterval(interval);

    target.innerText = text.substr(0, i);
    i--;
  };

  interval = setInterval(clearText, 30);
}

export const Repo = ({ url }) => {
  return (
    <a
      href={url}
      className={styles.link}
      data-text="Repository /"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <img
        src={arrowYellow}
        style={{ transform: "rotate(180deg)" }}
        alt=""
        width={20}
      />
      <pre></pre>
      <img src={arrowYellow} alt="" width={20} />
    </a>
  );
};

export const Site = ({ url }) => {
  return (
    <a
      href={url}
      className={styles.link}
      data-text="Website"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <img
        src={globe}
        alt=""
        width={20}
        style={{ marginRight: 10 }}
        className={styles.globe}
      />
      <pre></pre>
    </a>
  );
};
