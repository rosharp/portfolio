import React, { useLayoutEffect } from "react";
import Slider from "./Slider";

import IntroDesktop from "../images/intro section/intro-desktop.png";
import IntroDesktopToggled from "../images/intro section/intro-desktop-toggled.png";
import IntroMobile from "../images/intro section/intro-mobile.png";
import IntroMobileNav from "../images/intro section/intro-mobile-nav.png";
import IntroNavToggled from "../images/intro section/intro-nav-toggled.png";

const ImagesDesktop = [
  IntroDesktop,
  IntroDesktopToggled,
];

const ImagesMobile = [
  IntroMobile,
  IntroMobileNav,
  IntroNavToggled,
];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="project-page">
      <h1>Intro</h1>
      <p>Intro Section with Dropdown Navigation</p>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />
    </div>
  );
}
