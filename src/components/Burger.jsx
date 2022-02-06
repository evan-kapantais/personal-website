import React from "react";

const Burger = ({ isMenuOpen, set }) => {
  const style = {
    width: 40,
    height: 3,
    background: "var(--primary-color)",
  };

  return (
    <button
      type="button"
      style={
        {
          // display: "none",
        }
      }
      onClick={() => set(!isMenuOpen)}
    >
      <div style={{ ...style, marginBottom: "0.75rem" }} />
      <div style={style} />
    </button>
  );
};

export default Burger;
