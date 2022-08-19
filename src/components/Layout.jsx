import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className="navbar">
          <Link className="menu-bars" to="#" onClick={showSidebar}>
            <FaIcons.FaBars className="navbar-show" />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">
            <li className="navbar-toggle">
              <Link className="menu-bars" to="#" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      <div className="App">
        <Outlet />
      </div>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
