import React, { useState, useRef } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useSpring, animated, config } from "react-spring";

import * as styles from "../styles/project.module.css";

const LinkIcon = () => (
  <StaticImage
    src="../images/link.png"
    alt="link"
    title="link"
    className={styles.icon}
  />
);

const ProjectCard = ({ project }) => {
  const [showRepo, setShowRepo] = useState(false);
  // function formatRepoText(json) {
  //   const rows = [];

  //   for (const key in json) {
  //     rows.push(`${key}: ${json[key]}`);
  //   }

  //   return rows;
  // }

  console.log(project.video);
  console.log(project.image.gatsbyImageData);

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const codeRef = useRef(null);

  const arr = [];

  for (const key in project.repoInfo) {
    arr.push({ key, value: JSON.stringify(project.repoInfo[key]) });
  }

  function moveCard(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const card = e.currentTarget;
    const img = card.querySelector(`.${styles.imageWrapper}`);

    img.style.transition = "none";

    const imgRect = img.getBoundingClientRect();

    const rotateY = Math.round(
      (e.clientX - imgRect.left - imgRect.width / 2) / 45
    );

    const rotateX = Math.round(
      (e.clientY - imgRect.top - imgRect.height / 2) / 30
    );

    img.style.transform = `perspective(1000px) scale(1.1) rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
  }

  function resetCard(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const card = e.currentTarget;
    const img = card.querySelector(`.${styles.imageWrapper}`);

    img.style.transition = "all 500ms";
    img.style.transform = "none";
  }

  function hoverRepoLink(e) {
    const item = e.currentTarget.closest(`.${styles.project}`);
    const title = titleRef.current;
    const image = item.querySelector(".image");
    const pre = item.querySelector(`.${styles.repo}`);

    // title.textContent = project.repoUrl.slice(8);
    // title.classList.add(`${styles.link}`);

    if (image) {
      image.style.transition = "all 200ms";
      image.style.opacity = 0;
      image.style.pointerEvents = "none";
    }

    pre.classList.add(`${styles.scrolling}`);
  }

  function hoverSiteLink(e) {
    const title = titleRef.current;

    // title.textContent = project.siteUrl.slice(8, -1);
    // title.classList.add(`${styles.link}`);
  }

  const repoProps = useSpring({
    from: { y: 0, opacity: 0 },
    to: {
      y: showRepo
        ? -codeRef.current.scrollHeight +
          codeRef.current.getBoundingClientRect().height
        : 0,
      opacity: showRepo ? 1 : 0,
    },
    config: config.wobbly,
  });

  const imageProps = useSpring({
    to: {
      opacity: showRepo ? 0 : 1,
      rotateY: showRepo ? 30 : 0,
    },
    config: config.wobbly,
  });

  return (
    <li
      className={styles.project}
      onMouseMove={moveCard}
      onMouseLeave={resetCard}
    >
      <section className={styles.text}>
        <header>
          <h3 className={styles.title} ref={titleRef}>
            {project.title}
          </h3>
          <ul>
            {project.stack.map(tag => {
              if (project.stack.indexOf(tag) < project.stack.length - 1) {
                return <span key={tag}>{tag} • </span>;
              } else {
                return <span key={tag}>{tag}</span>;
              }
            })}
          </ul>
        </header>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          <a
            href={project.siteUrl}
            className={styles.link}
            onMouseEnter={() => setShowRepo(false)}
          >
            <span>Live Site</span>
            <LinkIcon />
          </a>
          <a
            href={project.repoUrl}
            className={styles.link}
            onMouseEnter={() => setShowRepo(true)}
            // onMouseLeave={() => setShowRepo(false)}
          >
            <span>Repo</span>
            <LinkIcon />
          </a>
        </div>
      </section>
      <section className={styles.imageWrapper}>
        <div className={styles.repoWrapper}>
          <animated.pre ref={codeRef} className={styles.repo} style={repoProps}>
            {arr.map(str => (
              <p key={str.key}>
                <b>{str.key}</b> : <span>{str.value}</span>
              </p>
            ))}
          </animated.pre>
        </div>
        {project.image && (
          <animated.div style={imageProps}>
            <GatsbyImage
              image={project.image.gatsbyImageData}
              alt="project image"
              title={project.title}
            />
          </animated.div>
        )}
      </section>
    </li>
  );
};

export default ProjectCard;
