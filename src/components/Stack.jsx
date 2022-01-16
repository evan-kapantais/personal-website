import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { a, useSpring } from "react-spring";

import * as styles from "../styles/stack.module.css";

const Stack = () => {
  const stack = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    loop: { reverse: true },
    config: {
      duration: 4000,
    },
  });

  return (
    <div className={styles.stack}>
      <ul className={styles.stackList}>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/gatsby.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/react.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/netlify.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/cloudinary.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/heroku.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/strapi.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/graphql.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StaticImage
              src="../images/icons/postgresql.png"
              alt="gatsby"
              className={styles.stackImage}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Stack;
