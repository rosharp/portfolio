import React from "react";
import Avatar from "../images/avatar.png";

const Header = () => {
  return (
  <div className="header-home">
    <h1>Hello, <span>I'm Vitaly</span></h1>
    <p>Frontend Developer</p>
    <p>Translator</p>

    <img className="avatar-img" src={Avatar} alt="avatar" />

    <p>Some text about me</p>

    <button>LinkedIn</button>
    <button>Github</button>
    <button>Email</button>

    {/* some github stats */}
  </div>
  );
}

export default Header;
