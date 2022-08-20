import React from "react";
import SpaceRound from "../images/space/Moon-mobile-cropped.png";
import ShopitRound from "../images/shopIT/shopit-main-cropped.png";
import IntroRound from "../images/intro section/intro-mobile-cropped.png";
import RatingRound from "../images/interactive rating component/interactive-rating-component-rating-cropped.png";

const Web = () => {
    return (
        <div id="web">
            <h2>Web</h2>
            <p>Work I've done that resides out there, somewhere in the vast virtual space of the Internet.</p>
            <div className="projects">
                <img className="round-img" alt="shopit" src={ShopitRound} />
                <img className="round-img" alt="space" src={SpaceRound} />
                <img className="round-img" alt="intro" src={IntroRound} />
                <img className="round-img" alt="interactive-rating-component" src={RatingRound} />
            </div>
        </div>
    );
}

export default Web;