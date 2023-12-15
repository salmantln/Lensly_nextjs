import '../../app/globals.css';
import Footer from "../footer/Footer";
import HeroContainer from "../hero/HeroContainer";
import '../header/linkStyles.css';
// import {useEffect, useState} from "react";
import Zigzag from "../hero/Zigzag";
import ContactBlock from "../contact/contactBlock";
import {useEffect, useState} from "react"; // Import the new CSS file
const HomePage = ({ toggleMenu, menuVisible }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const isThemeDark = isThemeSelected();
        setIsDarkTheme(isThemeDark);
        // Update the cookie if necessary
        document.cookie = 'theme=' + (isThemeDark ? 'dark' : 'light') + '; path=/';
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.cookie = 'theme=' + (!isDarkTheme ? 'dark' : 'light') + '; path=/';
    };

    function isThemeSelected() {
        return document.cookie.match(/theme=dark/i) != null;
    }

    // const [isMenuVisible, setIsMenuVisible] = useState(false);
    //
    // const toggleMenu = () => {
    //     setIsMenuVisible(!isMenuVisible);
    // };

    return (
        <div id="content" className={isDarkTheme ? 'dark-mode' : 'light-mode'}>
            {/*<input*/}
            {/*    id="toggleTheme"*/}
            {/*    type="checkbox"*/}
            {/*    checked={isDarkTheme}*/}
            {/*    onChange={toggleTheme}*/}
            {/*/>*/}
            {/*<MobileMenu/>*/}
            {/*<Cursor/>*/}
            <HeroContainer isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} isMenuVisible={menuVisible} toggleMenu={toggleMenu} />
            {/*<MobileMenu isVisible={isMenuVisible} />*/}
            <Zigzag/>
            {/*<PageContent/>*/}
            {/*<Waitlist/>*/}
            <ContactBlock/>
            <Footer/>
        </div>
    );
}

export default HomePage;
