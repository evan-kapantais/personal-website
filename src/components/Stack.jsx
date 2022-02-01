import React from "react";

const Stack = ({ stack }) => {
  const isArray = typeof stack === "object";

  if (!isArray) {
    return (
      <p style={{ color: "var(--color-text-light)", margin: 0 }}>{stack}</p>
    );
  } else {
    return (
      <ul>
        {stack.map(item => (
          <li
            key={item}
            style={{
              display: "inline",
              marginRight: "1rem",
              color: "var(--color-text-light)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
};

export default Stack;
