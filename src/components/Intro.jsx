import React, { useLayoutEffect } from "react";
import Slider from "./Slider";
import Content from "./Content";

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
      <h1>{Content[4].title}</h1>
      <p>{Content[4].subtitle}</p>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

      <p>{Content[4].text}</p>
    </div>
  );
}
