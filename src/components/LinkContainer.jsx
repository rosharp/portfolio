import React from 'react'
import * as FaIcons from "react-icons/fa";

const LinkContainer = () => {
    return (
        <div className="link-btn-container">
            <a className="link-btn" href="https://www.linkedin.com/in/vitaliy-bekshnev-8399b4248/"><FaIcons.FaLinkedin className="link-icon" /></a>
            <a className="link-btn" href="https://github.com/rosharp"><FaIcons.FaGithub className="link-icon" /></a>
            <a className="link-btn" href="mailto:vy.bekshnev@gmail.com"><FaIcons.FaMailBulk className="link-icon" /></a>
            <a className="link-btn" href="./downloads/Vitaly Bekshnev CV ENG.pdf" download><FaIcons.FaFileDownload className="link-icon" /></a>
        </div>
    )
}

export default LinkContainer
