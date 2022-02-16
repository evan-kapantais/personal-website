import React from "react";

import * as styles from "./styles/social.module.css";

import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import codepen from "../images/codepen.svg";

const Social = () => {
  return (
    <aside className={styles.social}>
      <nav>
        <ul>
          <li
            className={styles.socialItem}
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="400"
          >
            <a href="https://github.com/evan-kapantais">
              <img src={github} alt="github" width={24} />
            </a>
            <span className={styles.tooltip}>/evan-kapantais</span>
          </li>
          <li
            className={styles.socialItem}
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="400"
          >
            <a href="https://instagram.com/evan.json">
              <img src={instagram} alt="instagram" width={24} />
            </a>
            <span className={styles.tooltip}>/evan.json</span>
          </li>
          <li
            className={styles.socialItem}
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="400"
          >
            <a href="https://codepen.io/Camp_Evan/">
              <img src={codepen} alt="codepen" width={24} />
            </a>
            <span className={styles.tooltip}>/Camp_Evan</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Social;
