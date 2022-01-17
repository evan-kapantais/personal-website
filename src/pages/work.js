import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { a, useSpring } from "react-spring";

import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

import * as styles from "../styles/work.module.css";

import repoData from "../utils/repoData";

const WorkPage = ({ data }) => {
  // Fix this
  const [repos, setRepos] = useState(repoData);

  const projects = data.allContentfulProject.nodes;

  // useEffect(() => {
  //   fetch("https://api.github.com/users/evan-kapantais/repos")
  //     .then(res => res.json())
  //     .then(data => setRepos(data));
  // }, []);

  if (repos) {
    projects.forEach(project => {
      project.repoInfo = repos.find(repo => repo.html_url === project.repoUrl);
    });
  }

  return (
    <Layout title="Work">
      <section className={`banner`}>
        <h1>
          <span>Work</span> : an assortment of client and personal projects.
        </h1>
      </section>
      <section className={styles.section}>
        <h1>In Progress</h1>
        <ul className={styles.wipList}>
          <li>
            <a href="https://github.com/evan-kapantais/get-me-books">
              A webscraping app
            </a>{" "}
            that checks book availability based on Goodreads lists.
          </li>
          <li>
            Working my way through the{" "}
            <a href="https://freecodecamp.com">Free Code Camp</a> curriculum
            from where I left off ages ago.
          </li>
          <li>
            <a href="#">A CSS Generator</a> for box shadows, gradients and
            radii.
          </li>
          <li>
            <a href="#"> A fullstack home finances app</a> to organise
            month-to-month expenses, savings and stock positions.
          </li>
        </ul>
      </section>
      <section className={`${styles.projects} ${styles.section}`}>
        <h1>Completed Projects</h1>
        <ol className={styles.projectsList}>
          {projects.map(project => (
            <ProjectCard key={project.contentful_id} project={project} />
          ))}
        </ol>
      </section>
      <section className={styles.section}>
        <h1>Minis</h1>
        <div className={styles.miniWrapper}>
          <iframe
            src="https://codesandbox.io/embed/spring-text-animation-hfwm5?fontsize=14&hidenavigation=1&theme=dark&view=preview"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: 20,
              overflow: "hidden",
            }}
            title="spring-text-animation"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
        <div className={styles.miniWrapper}>
          <iframe
            src="https://codesandbox.io/embed/bitter-tdd-9j8gu?fontsize=14&hidenavigation=1&theme=dark&view=preview"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: 20,
              overflow: "hidden",
            }}
            title="bitter-tdd-9j8gu"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
      </section>
    </Layout>
  );
};

export default WorkPage;

export const query = graphql`
  query WorkPageQuery {
    allContentfulProject {
      nodes {
        contentful_id
        video {
          file {
            contentType
            url
          }
        }
        image {
          gatsbyImageData(width: 800)
        }
        repoImage {
          gatsbyImageData(width: 800)
        }
        title
        description
        stack
        siteUrl
        repoUrl
      }
    }
  }
`;
