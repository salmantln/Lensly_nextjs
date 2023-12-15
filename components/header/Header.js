import React from 'react';
import Image from 'next/image'
// import './App.css';
import './Header.css';
import './ThemeToggle.css'; // Import the theme toggle styles
import './linkStyles.css';
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ isDarkTheme, toggleTheme, toggleMenu  }) => {
    // const [menuVisible, setMenuVisible] = useState(false);
    //
    // const toggleMenu = () => {
    //     setMenuVisible(!menuVisible);
    // };


    return (
        <div className="header home_page">
            <div className="wrapper header_wrapper">
                <div className="heading_top">
                    {/*<img  alt="brand_icon" className="logo" src={lenslyIconWhite}></img>*/}
                    {/*<img src="path_to_your_logo.jpg" alt="Logo" className="logo" />*/}
                    {/*<LenslyIcon  className="logo"/>*/}
                    <h1 className="heading">LENSLY</h1>
                </div>
                <div className="header_menu">
                    <div className="splitter"></div>
                    <div className="menu">
                        <div className="grid_menu">
                            <div className="div-block"><a href="/" aria-current="page"
                                                          className="logo_header_mobile w-inline-block w--current">
                                {/*<div className="text_logo">c23</div>*/}
                                <Image
                                    alt="brand_icon"
                                        width={500}
                                        height={500}
                                      className="logo"
                                      src="img/Lensly_icon_white.svg"
                                >

                                </Image>
                                <div className="logo_line"></div>
                                <div className="text_logo _02">Lensly</div>
                            </a></div>
                            <div className="column_01">
                                <a href="/" aria-current="page"
                                   className="link underline-trail w-inline-block w--current">
                                    <div className="header_link">Index</div>
                                </a>
                                <a href="/about" className="link underline-trail w-inline-block">
                                    <div className="header_link_2">About</div>
                                </a>
                            </div>
                            <div className="column_02">
                            {/*    <a href="/contact" className="link underline-trail w-inline-block">*/}
                            {/*    <div className="header_link">Page</div>*/}
                            {/*</a>*/}
                                <a href="/contact" className="link underline-trail w-inline-block">
                                    <div className="header_link">Contact</div>
                                    <div className="custom-styles w-embed">
                                        {/*<style>*/}
                                        {/*    .underline-trail::before {*/}
                                        {/*    transform-origin: 100% 50%;*/}
                                        {/*    transform: scale3d(0, 1, 1);*/}
                                        {/*    transition: transform 0.5s;*/}
                                        {/*}*/}

                                        {/*    .underline-trail:hover::before {*/}
                                        {/*    transform-origin: 0% 50%;*/}
                                        {/*    transform: scale3d(1, 1, 1);*/}
                                        {/*}*/}
                                        {/*</style>*/}
                                    </div>
                                </a>
                            </div>
                            <div className="appointments_menu">
                                <a href="/contact"  className="appointments_link w-inline-block">
                                <div className="header-txt">Join Waitlist</div>
                                {/*<div className="header-txt">Appointments</div>*/}
                            </a></div>

                            <div className="theme">
                                <label htmlFor="toggleTheme" title="Toggle theme" className="toggletheme">
                                    <input
                                        id="toggleTheme"
                                        type="checkbox"
                                        // checked={isDarkMode}
                                        // // onChange={handleThemeChange}
                                        // onChange=""
                                        checked={isDarkTheme}
                                        onChange={toggleTheme}
                                    />
                                    <span className="toggleTheme"></span>
                                </label>
                            </div>
                            <div class="div-block-4">
                                <a href="#" target="_blank"
                                   class="link_block_2 w-inline-block">
                                    <div class="labs_link">Labs</div>
                                    <div class="arrow_labs">
                                        <Image
                                            alt="stack overflow"
                                               width={50}
                                               height={50}
                                             src="img/6398af468c5737168014f6e0_Arrow 1.svg"
                                             // src={gatsbyIconImage}
                                        >

                                    </Image>
                                    </div>
                                </a>
                            </div>

                            <HamburgerMenu onClick={toggleMenu} />
                            {/*<FullScreenMobileMenu  onClose={toggleMenu} />*/}
                            {/*<div className="hamburger_menu" onClick={toggleMenu}>*/}
                            {/*    <div className="line_1_hamburger"></div>*/}
                            {/*    <div className="line_2_hamburger"></div>*/}
                            {/*    <div className="line_3_hamburger"></div>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Header;