import React from "react";

export default function About(props) {
  return (
    <>
      <div className={`container text-${props.textCol} text-center mt-5 fs-1`}>
        Text analyzer is an utility where you can manipulate your text.
      </div>
    </>
  );
}
