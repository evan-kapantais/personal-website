import React from "react";
import { a, useSpring } from "react-spring";

import * as styles from "../styles/project.module.css";

const Repo = ({ project }) => {
  // function formatRepoText(json) {
  //   const rows = [];

  //   for (const key in json) {
  //     rows.push(`${key}: ${json[key]}`);
  //   }

  //   return rows;
  // }
  // const arr = [];

  for (const key in project.repoInfo) {
    arr.push({ key, value: JSON.stringify(project.repoInfo[key]) });
  }

  return (
    <a.div className={styles.repoWrapper}>
      <a.pre className={styles.repo}>
        {arr.map(str => (
          <p key={str.key}>
            <b>{str.key}</b> : <span>{str.value}</span>
          </p>
        ))}
      </a.pre>
    </a.div>
  );
};

export default Repo;
