import React from 'react';
import Header from "../header/Header";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoMobile from "./BackgroundVideoMobile";
import MobileMenu from "../header/MobileMenu";

const HeroContainer = ({ isDarkTheme, toggleTheme , toggleMenu}) => {


    return (
        <div className="hero_container">
            <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} toggleMenu={toggleMenu}  />
            <BackgroundVideo/>
            <div className="overlay_video"></div>
            <BackgroundVideoMobile/>

        </div>
    );
};

export default HeroContainer;