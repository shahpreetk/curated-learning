import React from "react";

function Title({ title }) {
  return (
    <>
      <h3
        className="mt-2 mb-0"
        style={{
          textAlign: "center",
          fontFamily: "'Bitter', serif",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        {title}
      </h3>
    </>
  );
}

export default Title;
