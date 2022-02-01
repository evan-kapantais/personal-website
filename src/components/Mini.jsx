import React from "react";
import * as styles from "../styles/project.module.css";

const Mini = ({ link }) => {
  return (
    <div className={styles.miniWrapper}>
      <iframe
        src={link}
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: 10,
          overflow: "hidden",
        }}
        title="spring-text-animation"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default Mini;
