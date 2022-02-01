import React, { useEffect, useRef, useState, forwardRef } from "react";
import * as styles from "./styles/video.module.css";

import arrow from "../images/chevron-right.svg";
import play from "../images/play.svg";
import pause from "../images/pause.svg";
import { a, useSpring } from "react-spring";

const Video = ({ project, set, details }) => {
  const [paused, setPaused] = useState(false);

  const videoWrapperRef = useRef();
  const videoRef = useRef();

  // Play / pause the video
  useEffect(() => {
    paused ? videoRef.current.play() : videoRef.current.pause();
  }, [paused]);

  const spring = useSpring({
    to: { x: details ? "100%" : "0%" },
    config: {
      mass: 1,
      tension: 120,
      friction: 15,
    },
  });

  return (
    <a.div className={styles.videoWrapper} ref={videoWrapperRef} style={spring}>
      <video muted loop ref={videoRef}>
        <source src={project.video.file.url} type="video/mp4" />
        <source src={project.video.file.url} type="video/ogg" />
      </video>
      <div className={styles.videoOverlay}>
        <button
          type="button"
          className={styles.pauseButton}
          onClick={() => setPaused(!paused)}
        >
          <img
            src={pause}
            alt="play icon"
            width={32}
            style={{
              transform: paused ? "scale(0)" : "scale(1)",
            }}
          />
          <img
            src={play}
            alt="play icon"
            width={32}
            style={{
              transform: paused ? "scale(1)" : "scale(0)",
            }}
          />
        </button>
      </div>
      <button
        type="button"
        className={styles.details}
        onClick={() => set(true)}
      >
        <img src={arrow} alt="view details" width={32} />
      </button>
    </a.div>
  );
};

export default Video;
