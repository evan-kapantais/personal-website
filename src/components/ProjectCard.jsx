import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

import Video from "./Video";
import Text from "./Text";
import Image from "./Image";

import * as styles from "../styles/project.module.css";

const ProjectCard = ({ project }) => {
  const [details, set] = useState(true);

  const props = {
    project,
    details,
    set,
  };

  return (
    <li className={styles.project}>
      <Image {...props} />
      <Text {...props} />
    </li>
  );
};

export default ProjectCard;
