import React from "react";
import { a, useSpring } from "react-spring";

const Burger = ({ isMenuOpen, set }) => {
  const style = {
    width: 32,
    height: 3,
    background: "var(--primary-color)",
  };

  const config = {
    mass: 1,
    tension: 160,
    friction: 16,
  };

  const topSpring = useSpring({
    y: isMenuOpen ? 7 : 0,
    rotate: isMenuOpen ? 225 : 0,
    config,
  });

  const bottomSpring = useSpring({
    y: isMenuOpen ? -7 : 0,
    rotate: isMenuOpen ? -405 : 0,
    config,
  });

  return (
    <button
      type="button"
      onClick={() => set(!isMenuOpen)}
      style={{
        position: "relative",
        padding: 0,
        width: 32,
        height: 18,
      }}
    >
      <a.div style={{ ...topSpring, ...style, marginBottom: "0.75rem" }} />
      <a.div style={{ ...bottomSpring, ...style, top: "unset", bottom: 0 }} />
    </button>
  );
};

export default Burger;
