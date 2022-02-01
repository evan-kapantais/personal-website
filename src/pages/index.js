import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";

import * as styles from "../styles/index.module.css";
import arrow from "../images/chevron-right-yellow.svg";
import ProjectCard from "../components/ProjectCard";
import WipProject from "../components/WipProject";
import GithubCard from "../components/GithubCard";
import Polaroids from "../components/Polaroids";

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

  return (
    <Layout title="Home">
      <Seo title="Home" />
      <section className={`${styles.indexSection} ${styles.banner}`}>
        <div className={styles.bannerContainer}>
          <p>{greeting}, I'm</p>
          <h1>Evan Kapantais.</h1>
          <h2>I build exciting stuff for the modern web.</h2>
        </div>
      </section>
      <section className={`${styles.indexSection} ${styles.bio}`}>
        <h2 className={styles.sectionHeading}>
          <img src={arrow} alt="arrow" width={48} /> whoami
        </h2>
        <div className={styles.bioWrapper}>
          <section>
            <article>
              <h3 className={styles.articleHeading}>A Brief</h3>
              <p>
                I am a web developer from Greece based somewhere between Athens
                and Barcelona.
              </p>
              <p>
                I specialise in creating interactive experiences and minimal UI
                with React. I primarily work on client-side-rendered
                applications with a heavy emphasis on responsive design,
                performance and animation.
              </p>
            </article>
            <article>
              <h3 className={styles.articleHeading}>Tech I Use</h3>
              <ul className={styles.techList}>
                <li className={styles.techItem}>
                  JavaScript <div data-type="front" />
                </li>
                <li className={styles.techItem}>
                  React <div data-type="front" />
                </li>
                <li className={styles.techItem}>
                  Gatsby <div data-type="front" />
                </li>
                <li className={styles.techItem}>
                  Strapi <div data-type="cms" />
                </li>
                <li className={styles.techItem}>
                  Contentful <div data-type="cms" />
                </li>
                <li className={styles.techItem}>
                  Node.js <div data-type="back" />
                </li>
                <li className={styles.techItem}>
                  Express <div data-type="back" />
                </li>
                <li className={styles.techItem}>
                  Puppeteer <div data-type="back" />
                </li>
                <li className={styles.techItem}>
                  Sass <div data-type="style" />
                </li>
                <li className={styles.techItem}>
                  Styled Components <div data-type="style" />
                </li>
                <li className={styles.techItem}>
                  React Spring <div data-type="animation" />
                </li>
                <li className={styles.techItem}>
                  Mongo DB <div data-type="back" />
                </li>
              </ul>
            </article>
          </section>
          <Polaroids />
          <GithubCard />
        </div>
      </section>
      <section className={styles.indexSection}>
        <h2 className={styles.sectionHeading}>
          <img src={arrow} alt="arrow" width={48} /> projects
        </h2>
        <ul className={styles.projectsList}>
          {projects.map(project => (
            <ProjectCard key={project.contentful_id} project={project} />
          ))}
        </ul>
      </section>
      <section className={styles.indexSection}>
        <h2 className={styles.sectionHeading}>
          <img src={arrow} alt="arrow" width={48} /> in progress
        </h2>
        <ul className={styles.wipList}>
          {inProgress.map((project, i) => (
            <WipProject key={i} project={project} />
          ))}
        </ul>
      </section>
      <section className={styles.indexSection}>
        <h2 className={styles.sectionHeading}>
          <img src={arrow} alt="arrow" width={48} /> contact
        </h2>
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
