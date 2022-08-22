import React, { useLayoutEffect } from "react";

const Resume = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <h2>Vitaly Bekshnev</h2>
      <h3>Frontend Developer</h3>

      <h1>Resume</h1>
      <div>
        <h2>Employment</h2>
        {/* Some content about my experience */}
      </div>

      <div>
        <h2>Skills</h2>
        <div>
          <h3>Development</h3>
          {/* Some content about my development sklils */}
        </div>
        <div>
          <h3>Translation</h3>
          {/* Some content about my translation sklils */}
        </div>
        <div>
          <h3>Education</h3>
          {/* Some content about my education */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
