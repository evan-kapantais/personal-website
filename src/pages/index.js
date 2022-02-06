import React, { useEffect } from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";

import * as styles from "../styles/index.module.css";
import ProjectCard from "../components/ProjectCard";
import WipProject from "../components/WipProject";
import GithubCard from "../components/GithubCard";
import Polaroids from "../components/Polaroids";
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

const inProgress = [
  {
    title: "Get Me Books",
    description:
      "A webscraping app that accepts a Goodreads list link and searches local bookstores for matches. Users will be able to submit bookstore suggestions.",
    stack: ["express", "puppeteer", "react", "css modules"],
    repoUrl: "https://github.com/evan-kapantais/get-me-books",
    siteUrl: "https://getmebooks.com",
    type: "Personal",
  },
  {
    title: "CSS Generator",
    description:
      "A web utility to generate box shadows, radii and text shadows.",
    stack: ["html", "css", "javascript"],
    repoUrl: "https://github.com/evan-kapantais/css-generator",
    type: "Personal",
  },
  {
    title: "Save to Spotify",
    description:
      "Lightweight Chrome extension that saves a Youtube song to a specified Spotify playlist.",
    stack: ["express", "react", "sass"],
    repoUrl: "https://github.com/evan-kapantais/save-to-spotify",
    type: "Personal",
  },
  {
    title: "CSS Generator",
    description:
      "A web utility to generate box shadows, radii and text shadows.",
    stack: ["html", "css", "javascript"],
    repoUrl: "https://github.com/evan-kapantais/css-generator",
    type: "Personal",
  },
  {
    title: "Save to Spotify",
    description:
      "Lightweight Chrome extension that saves a Youtube song to a specified Spotify playlist.",
    stack: ["express", "react", "sass"],
    repoUrl: "https://github.com/evan-kapantais/save-to-spotify",
    type: "Personal",
  },
  {
    title: "CSS Generator",
    description:
      "A web utility to generate box shadows, radii and text shadows.",
    stack: ["html", "css", "javascript"],
    repoUrl: "https://github.com/evan-kapantais/css-generator",
    type: "Personal",
  },
  {
    title: "Save to Spotify",
    description:
      "Lightweight Chrome extension that saves a Youtube song to a specified Spotify playlist.",
    stack: ["express", "react", "sass"],
    repoUrl: "https://github.com/evan-kapantais/save-to-spotify",
    type: "Personal",
  },
];

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes;

  projects.forEach(project => (project.id = projects.indexOf(project)));

  const time = new Date().getHours();
  const day = new Date().getDay();

  const greeting =
    time < 13 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";

  const farewell =
    day > 4 ? "Have a nice weekend!" : `Have an awesome ${days[day]}!`;

  useEffect(() => {
    setupMenu();

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout title="Home">
      <Seo title="Home" />
      <section
        className={`${styles.indexSection} ${styles.banner} section`}
        id="home"
      >
        <div className={styles.bannerContainer}>
          <p>{greeting}, I'm</p>
          <h1>Evan Kapantais.</h1>
          <h2>I build exciting stuff for the modern web.</h2>
        </div>
      </section>
      <section
        className={`${styles.indexSection} ${styles.bio} section`}
        id="about"
      >
        <h2 className={styles.sectionHeading}># whoami</h2>
        <section className={styles.bioTop}>
          <Polaroids />
          <article className={styles.brief}>
            <p>
              I am a web developer from Greece based somewhere between Athens
              and Barcelona.
            </p>
            <p>
              I specialise in creating interactive experiences and minimal UI
              with React. I primarily work on client-side-rendered applications
              with a heavy emphasis on responsive design, performance and
              animation.
            </p>
          </article>
        </section>
        <section className={styles.bioBottom}>
          <article className={styles.tech}>
            <p>My favourite tech</p>
            <p>
              <a href="https://javascript.info/" className={styles.techLink}>
                javascript{" "}
              </a>
              <a href="https://reactjs.org/" className={styles.techLink}>
                react{" "}
              </a>
              <a href="https://www.gatsbyjs.com/" className={styles.techLink}>
                gatsby{" "}
              </a>
              <a href="https://strapi.io/" className={styles.techLink}>
                strapi{" "}
              </a>
              <a href="https://www.contentful.com/" className={styles.techLink}>
                contentful{" "}
              </a>
              <a href="https://nodejs.org/en/" className={styles.techLink}>
                node.js{" "}
              </a>
              <a href="https://expressjs.com/" className={styles.techLink}>
                express{" "}
              </a>
              <a href="https://pptr.dev/" className={styles.techLink}>
                puppeteer{" "}
              </a>
              <a href="https://sass-lang.com/" className={styles.techLink}>
                sass{" "}
              </a>
              <a
                href="https://styled-components.com/"
                className={styles.techLink}
              >
                styled components{" "}
              </a>
              <a href="https://react-spring.io/" className={styles.techLink}>
                react spring{" "}
              </a>
              <a href="https://www.mongodb.com/" className={styles.techLink}>
                mongoDB{" "}
              </a>
              <a href="https://mongoosejs.com/" className={styles.techLink}>
                mongoose
              </a>
            </p>
          </article>
          <GithubCard />
        </section>
      </section>
      <section className={`${styles.indexSection} section`} id="projects">
        <h2 className={styles.sectionHeading}># projects</h2>
        <ul className={styles.projectsList}>
          {projects.map(project => (
            <ProjectCard key={project.contentful_id} project={project} />
          ))}
        </ul>
      </section>
      <section className={`${styles.indexSection} section`} id="wip">
        <h2 className={styles.sectionHeading}># working on</h2>
        <ul className={styles.wipList}>
          {inProgress.map((project, i) => (
            <WipProject key={i} project={project} />
          ))}
        </ul>
      </section>
      <section className={`${styles.indexSection} section`} id="contact">
        <h2 className={styles.sectionHeading}># contact</h2>
        <p
          style={{
            fontSize: "var(--fontSize-8)",
            fontWeight: "var(--fontWeight-black)",
            lineHeight: "var(--lineHeight-tight)",
            marginBottom: "4rem",
          }}
        >
          If you have an exciting project in mind or just want to say hi, feel
          free to send me an email at{" "}
          <a href="mailto:evankapantais@gmail.com" className="link">
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
