import React from "react";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li>Home</li>
                <li>Web</li>
                <li><a href="#about">About</a></li>
                <li>Resume</li>
            </ul>
        </nav>
    );
}

export default Navbar;