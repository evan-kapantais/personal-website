import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

import * as styles from "../styles/work.module.css";

import repoData from "../utils/repoData";

const WorkPage = ({ data }) => {
  // Fix this
  const [repos, setRepos] = useState(repoData);

  const projects = data.allContentfulProject.nodes;

  if (repos) {
    projects.forEach(project => {
      project.repoInfo = repos.find(repo => repo.html_url === project.repoUrl);
    });
  }

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();
    });
  }

  function createObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    return observer;
  }

  // Set up intersection observer
  useEffect(() => {
    const videos = document.querySelectorAll(`video`);

    const observer = createObserver();

    videos.forEach(video => observer.observe(video));
  }, []);

  return (
    <Layout title="Work">
      <section className="banner">
        <h1>
          <span>Work</span> : an assortment of client and personal projects.
        </h1>
      </section>
      <section className={styles.section}>
        <p>
          I am currently working on a <a>webscraping-slash-book-search app</a>,{" "}
          a <a>CSS Generator</a> and a <a>personal budgeting app</a>. I have
          also picked up the <a>Free Code Camp</a> curriculum again from where I
          left off ages ago.
        </p>
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
        <p>
          Have an interesting project in mind? <br /> Feel free to send me an
          email at
          {` `}
          <a href="mailto:evankapantais@gmail.com">evankapantais@gmail.com</a>.
        </p>
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
        mobileImage {
          gatsbyImageData(width: 500)
        }
        title
        description
        stack
        siteUrl
        repoUrl
        type
      }
    }
  }
`;
