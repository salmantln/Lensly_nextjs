"use client"

import React, {useEffect, useState} from 'react';
import ContactHeader from "../../components/contact/ContactHeader";
// import '../globals.css';
import AboutFirst from "../../components/contact/AboutFirst";
import FullScreenMobileMenu from "@/components/header/FullScreenMobileMenu";

const Page = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const isThemeDark = isThemeSelected();
        setIsDarkTheme(isThemeDark);
        // Update the cookie if necessary
        // document.cookie = 'theme=' + (isThemeDark ? 'dark' : 'light') + '; path=/';
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        // document.cookie = 'theme=' + (!isDarkTheme ? 'dark' : 'light') + '; path=/';
    };

    function isThemeSelected() {
        return document.cookie.match(/theme=dark/i) != null;
    }

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>

            <FullScreenMobileMenu isVisible={menuVisible} onClose={toggleMenu}/>
            <div id="content" className={isDarkTheme ? 'dark-mode' : 'light-mode'}>
                <ContactHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} toggleMenu={toggleMenu}/>
                <AboutFirst/>

                {/*<HeroContainer isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />*/}
            </div>
        </>

    );
};


export default Page;
