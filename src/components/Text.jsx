import React, { useRef } from "react";
import { a, useSpring } from "react-spring";

import * as styles from "./styles/text.module.css";
import arrow from "../images/chevron-right-white.svg";
import github from "../images/github.svg";
import link from "../images/link.svg";
import Stack from "./Stack";

const Text = ({ project, setShowRepo, details, set }) => {
  const isOdd = project.id % 2 !== 0;

  return (
    <article className={`${styles.text} ${isOdd ? styles.odd : ""}`}>
      <header className={styles.header}>
        <span>{project.type} Project</span>
        <h3 className={styles.title}>{project.title}</h3>
      </header>
      <main>
        <section>
          <p className={styles.description}>{project.description}</p>
        </section>
      </main>
      <footer>
        <Stack stack={project.stack} />
        <div className={styles.links}>
          <a
            href={project.siteUrl}
            className={styles.link}
            style={{ marginRight: 16 }}
          >
            <img src={link} width={20} alt="project link" />
            <span className={styles.tooltip}>{project.siteUrl}</span>
          </a>
          <a href={project.repoUrl} className={styles.link}>
            <img src={github} width={20} alt="project github" />
            <span className={styles.tooltip}>{project.repoUrl}</span>
          </a>
        </div>
      </footer>
    </article>
  );
};

export default Text;
