import React, { useState } from "react";
import { a, useSpring } from "react-spring";

import Stack from "./Stack";

import * as styles from "../styles/index.module.css";

import link from "../images/link.svg";
import github from "../images/github.svg";

const WipProject = ({ project }) => {
  const [hover, set] = useState(false);

  const spring = useSpring({
    to: { scale: hover ? 1.05 : 1 },
    config: {
      mass: 1,
      tension: 180,
      friction: 10,
    },
  });

  return (
    <a.li
      className={styles.wipItem}
      style={spring}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
    >
      <article>
        <div>
          <header>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{project.title}</h3>
              <div>
                {project.siteUrl && (
                  <a href={project.siteUrl} style={{ marginRight: "1rem" }}>
                    <img src={link} alt="website" width={20} />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl}>
                    <img src={github} alt="github" width={20} />
                  </a>
                )}
              </div>
            </div>
            <div
              style={{
                fontSize: "var(--fontSize-0)",
                color: "var(--color-text-light)",
                textTransform: "capitalize",
              }}
            >
              {project.type} Project
            </div>
          </header>
          <main>
            <p>{project.description}</p>
          </main>
        </div>
        <footer>
          <Stack stack={project.stack} />
        </footer>
      </article>
    </a.li>
  );
};

export default WipProject;
