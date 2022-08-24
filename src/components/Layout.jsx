import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import Footer from "./Footer";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);



  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const closeSidebar = (e) => {
      console.log(e)
      if (
        e.target.tagName !== "A" &&
        e.target.tagName !== "svg" &&
        e.target.tagName !== "path"
      ) {
        setSidebar(false);
      }

    }

    document.body.addEventListener("click", closeSidebar)

    return () => document.body.removeEventListener("click", closeSidebar);
  }, [])

  return (
    <>
      <div className="navbar">
        <Link className={show ? "menu-bars active" : "menu-bars hidden"} to={window.location} onClick={showSidebar}>
          <FaIcons.FaBars className="navbar-show" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-links">
          <li className="navbar-toggle">
            <Link className="menu-bars" to={window.location} onClick={showSidebar}>
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


      <Footer />
    </>
  );
};

export { Layout };
