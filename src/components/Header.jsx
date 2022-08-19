import React from "react";

const Header = () => {
  return (
  <div>
    <h1>Hello, <span>I'm Vitaly</span></h1>
    <i>Frontend Developer</i>
    <i>Translator</i>

    <img alt="avatar-of-me" />

    <p>Some text about me</p>

    <button>LinkedIn</button>
    <button>Github</button>
    <button>Email</button>

    {/* some github stats */}
  </div>
  );
}

export default Header;
