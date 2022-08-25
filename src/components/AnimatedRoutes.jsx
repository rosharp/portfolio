import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import { Layout } from "./Layout";
import NotFound from "./NotFound";
import Resume from "./Resume";
import Shopit from "./Shopit";
import Intro from "./Intro";
import Rating from "./Rating";
import Space from "./Space";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="resume" element={<Resume />} />
                <Route path="shopit" element={<Shopit />} />
                <Route path="intro" element={<Intro />} />
                <Route path="space" element={<Space />} />
                <Route path="rating" element={<Rating />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes