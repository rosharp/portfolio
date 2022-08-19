import { NavLink, Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Layout = () => {
    return (
        <>
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#web">Web</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>

        <div className="App">
            <Outlet />
        </div>

        <footer>2022</footer>
        </>
    );
}

export { Layout };