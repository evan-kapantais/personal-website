import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useSpring, useTrail, animated, config, easings } from "react-spring";

import Seo from "../components/seo";
import Layout from "../components/layout";

import * as styles from "../styles/index.module.css";
import BannerTitle from "../components/BannerTitle";
import Stack from "../components/Stack";

const IndexPage = ({ location }) => {
  const [showProjects, setShowProjects] = useState(false);

  function moveImage(e) {
    const span = e.currentTarget;
    const image = span.firstChild;

    if (typeof image === "undefined") return;

    image.style.transition = "opacity 200ms";

    const spanRect = span.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    image.style.opacity = 1;

    image.style.transform = `translate(${
      e.clientX - spanRect.left - imageRect.width / 2
    }px, ${e.clientY - spanRect.top - imageRect.height - 48}px)`;
  }

  function hideImage(e) {
    const span = e.currentTarget;
    const image = span.firstChild;

    if (typeof image === "undefined") return;

    image.style.transition = "all 400ms";

    image.style.opacity = 0;

    span.removeEventListener("mousemove", moveImage);
  }

  function expand(e) {
    const wrapper = e.currentTarget.lastChild;

    wrapper.style.maxWidth = wrapper.scrollWidth + "px";
    wrapper.style.marginLeft = "1rem";
  }

  function shrink(e) {
    const wrapper = e.currentTarget.lastChild;
    wrapper.style.maxWidth = 0;
    wrapper.style.marginLeft = 0;
  }

  const hand = useSpring({
    loop: { reverse: true },
    to: {
      rotate: 10,
    },
    from: {
      rotate: -5,
    },
    config: { duration: 1000 },
  });

  const bannerP = useSpring({
    from: { opacity: 0, rotateX: -90 },
    to: { opacity: 1, rotateX: 0 },
    delay: 800,
    config: config.wobbly,
  });

  const projectSpring = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: showProjects ? 1 : 0, y: showProjects ? 0 : 200 },
    config: config.wobbly,
  });

  return (
    <Layout title="Home">
      <Seo title="Home" />
      <section className={`${styles.indexSection} ${styles.banner}`}>
        <div className={styles.bannerContainer}>
          {/* <div className={styles.portraitWrapper}>
            <StaticImage
              src="../images/portrait.jpg"
              alt="portrait"
              title="Evan Kapantais"
              className={styles.portrait}
            />
          </div> */}
          <BannerTitle />
          <animated.p style={bannerP} className={styles.bannerP}>
            Designing stuff for the modern web.
          </animated.p>
        </div>
      </section>
      <section className={styles.indexSection}>
        Hey{" "}
        <animated.span style={hand} className={styles.hand}>
          👋
        </animated.span>
        , I'm Evan, a <br />
        <div
          className={styles.hoverSpan}
          onMouseMove={moveImage}
          onMouseLeave={hideImage}
          data-image="sound-designer"
        >
          <div
            className={styles.sectionImageWrapper}
            data-title="sound-designer"
          >
            <StaticImage
              src="../images/sound-designer.jpeg"
              alt="Myself and a shotgun microphone"
              className={styles.sectionImage}
              loading="lazy"
            />
          </div>
          sound-designer
        </div>
        -turned-web-developer based in{" "}
        <div
          className={styles.hoverSpan}
          onMouseMove={moveImage}
          onMouseLeave={hideImage}
          data-image="athens"
        >
          <div className={styles.sectionImageWrapper} data-title="athens">
            <StaticImage
              src="../images/athens.jpeg"
              alt="Athens by night"
              className={styles.sectionImage}
              loading="lazy"
            />
          </div>
          Athens
        </div>
        .
      </section>
      <section className={styles.indexSection}>
        I specialise in creating interactive visual experiences with{" "}
        <div
          className={`${styles.expand} ${styles.react}`}
          onMouseEnter={expand}
          onMouseLeave={shrink}
        >
          React
          <div className={styles.expandImageWrapper}>
            <StaticImage
              src="../images/react.png"
              alt="react"
              className={styles.image}
            />
          </div>
        </div>
        . My go-to technologies include{" "}
        <span className={`${styles.expand} ${styles.gatsby}`}>Gatsby</span>,{" "}
        <span className={`${styles.expand} ${styles.sass}`}>
          Sass<i>💅</i>
        </span>{" "}
        and CSS Modules.
        <Stack />
      </section>
      <section className={`${styles.indexSection} ${styles.letters}`}>
        Some of the topics I’m keen on learning more about include system
        security, cryptography and web services.
      </section>
      <section className={styles.indexSection} id={styles.projectsSection}>
        <p>
          My latest projects include a website I designed and developed for{" "}
          <a
            href="https://wolt-client.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Wolt Greece
          </a>{" "}
          and the portfolio website of photographer{" "}
          <a
            href="https://skamagos.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Konstantinos Skamagos
          </a>
          .
        </p>
        {/* <PageLink link="/work" text="View All Projects" name="projects" /> */}
        <p
          onMouseEnter={() => setShowProjects(true)}
          onMouseLeave={() => setShowProjects(false)}
        >
          Show Projects
        </p>
        <div className={styles.projectsPreview}>
          <animated.div style={projectSpring} className={styles.project}>
            <StaticImage src="../images/skamagos.png" alt="skamagos website" />
          </animated.div>
          <animated.div style={projectSpring} className={styles.project}>
            <StaticImage src="../images/wolt.png" alt="wolt website" />
          </animated.div>
          <animated.div style={projectSpring} className={styles.project}>
            <StaticImage src="../images/rot.png" alt="rot generator" />
          </animated.div>
        </div>
      </section>
      <section className={styles.indexSection}>
        If you have an exciting project in mind or just want to say hi, feel
        free to send me an email at{" "}
        <a href="mailto:evankapantais@gmail.com" className="link">
          evankapantais@gmail.com
        </a>
        , or visit my social media right below.
      </section>
    </Layout>
  );
};

export default IndexPage;
