import React, { useEffect } from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";

import * as styles from "../styles/index.module.css";
import ProjectCard from "../components/ProjectCard";
import WipProject from "../components/WipProject";
import Slider from "../components/Slider";

import { setupMenu, handleScroll } from "../utils/window";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes;
  const wip = data.allContentfulWipProject.nodes;

  projects.forEach(project => (project.id = projects.indexOf(project)));

  const time = new Date().getHours();
  const day = new Date().getDay();

  const greeting =
    time < 13 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";

  const farewell =
    day > 4 ? "Have a nice weekend!" : `Have an awesome ${days[day]}!`;

  // Setup menu scrollbar
  useEffect(() => {
    setupMenu();

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      {/* Banner */}
      <section
        className={`${styles.indexSection} ${styles.banner} section`}
        id="home"
      >
        <div className={styles.bannerContainer}>
          <p data-aos="fade-down">{greeting}, I'm</p>
          <h1 data-aos="fade-left" data-aos-delay="300">
            Evan Kapantais.
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="700">
            I build stuff for the modern web.
          </h2>
        </div>
      </section>
      {/* About */}
      <section className={`${styles.indexSection} section`} id="about">
        <h2
          className={styles.sectionHeading}
          data-aos="zoom-in"
          data-aos-offset="0"
        >
          <span className="headingTarget" data-text="whoami">
            whoami
          </span>
          <span className={styles.cursor}>_</span>
        </h2>
        <section>
          <article className={styles.brief}>
            <p data-aos="fade-up" data-aos-duration="1000">
              I am a web developer from Greece based somewhere between Athens
              and Barcelona.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              I specialise in creating interactive experiences and minimal UI
              with React. I primarily work on client-side-rendered applications
              with a heavy emphasis on responsive design, performance and
              animation.
            </p>
          </article>
        </section>
        <section>
          <article className={styles.tech}>
            <h2 className={`${styles.articleHeading} ${styles.techHeading}`}>
              My favourite tech
            </h2>
            <Slider />
          </article>
        </section>
      </section>
      {/* Projects */}
      <section className={`${styles.indexSection} section`} id="projects">
        <h2
          className={styles.sectionHeading}
          data-aos="zoom-in"
          data-aos-offset="0"
        >
          <span className="headingTarget" data-text="projects">
            projects
          </span>
          <span className={styles.cursor}>_</span>
        </h2>
        <ul>
          {projects.map(project => (
            <ProjectCard key={project.contentful_id} project={project} />
          ))}
        </ul>
      </section>
      {/* Wip */}
      <section className={`${styles.indexSection} section`} id="wip">
        <h2
          className={styles.sectionHeading}
          data-aos="zoom-in"
          data-aos-offset="0"
        >
          <span className="headingTarget" data-text="inProgress">
            inProgress
          </span>
          <span className={styles.cursor}>_</span>
        </h2>
        <ul className={styles.wipList}>
          {wip.map((project, i) => (
            <WipProject key={i} project={project} />
          ))}
        </ul>
      </section>
      {/* Contact */}
      <section className={`${styles.indexSection} section`} id="contact">
        <h2
          className={styles.sectionHeading}
          data-aos="zoom-in"
          data-aos-offset="0"
        >
          <span className="headingTarget" data-text="contact">
            contact
          </span>
          <span className={styles.cursor}>_</span>
        </h2>
        <p
          style={{
            fontSize: "var(--fontSize-8)",
            fontWeight: "var(--fontWeight-black)",
            lineHeight: "var(--lineHeight-tight)",
            marginBottom: "4rem",
          }}
          data-aos="fade-left"
        >
          If you have an exciting project in mind or just want to say hi, feel
          free to send me an email at{" "}
          <a
            href="mailto:evankapantais@gmail.com"
            className="link"
            style={{ wordWrap: "break-word" }}
          >
            evankapantais@gmail.com
          </a>{" "}
          or visit my social media.
        </p>
        <p
          style={{
            fontSize: "var(--fontSize-8)",
            fontWeight: "var(--fontWeight-black)",
            lineHeight: "var(--lineHeight-tight)",
          }}
          data-aos="fade-right"
        >
          {farewell}
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ProjectsQuery {
    allContentfulProject {
      nodes {
        contentful_id
        image {
          gatsbyImageData(width: 1200)
        }
        title
        description
        stack
        siteUrl
        repoUrl
        type
      }
    }
    allContentfulWipProject {
      nodes {
        contentful_id
        title
        description
        stack
        repoUrl
        type
      }
    }
  }
`;
