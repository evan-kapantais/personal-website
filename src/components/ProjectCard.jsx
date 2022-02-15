import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import github from "../images/github.svg";
import link from "../images/link.svg";
import Stack from "./Stack";
import * as styles from "../styles/project.module.css";

const ProjectCard = ({ project }) => {
  const isEven = project.id % 2 !== 0;

  return (
    <li className={`${styles.project} ${isEven && styles.even}`}>
      <GatsbyImage
        image={project.image.gatsbyImageData}
        alt={project.title}
        title={project.title}
        className={`${styles.image} ${isEven ? styles.even : ""}`}
      />
      <article className={`${styles.text} ${isEven ? styles.even : ""}`}>
        <header className={styles.header} data-aos="fade-right">
          <span>{project.type} Project</span>
          <h3 className={styles.title}>{project.title}</h3>
        </header>
        <main>
          <section>
            <p data-aos="fade-up" className={styles.description}>
              {project.description}
            </p>
          </section>
        </main>
        <footer data-aos="fade-up" data-aos-delay="100">
          <Stack stack={project.stack} />
          <div>
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
    </li>
  );
};

export default ProjectCard;
