import React from 'react';
import '../../app/globals.css';
import HamburgerMenu from "../header/HamburgerMenu";
import Image from "next/image";

const ContactHeader = ({isDarkTheme, toggleTheme, toggleMenu}) => {
    return (
        <div className="header">
            <div className="wrapper header_wrapper">
                <div className="heading_top">
                    <h1 className="heading contact">CONTACT</h1>
                </div>
                <div className="header_menu">
                    <div className="splitter"></div>
                    <div className="menu">
                        <div className="grid_menu">
                            <div className="div-block">
                                <a href="/" className="logo_header_mobile w-inline-block">
                                    {/*<div className="text_logo">c23</div>*/}
                                    <Image alt="brand_icon"
                                           width={50}
                                           height={50}
                                           className="logo"
                                           src="img/Lensly_icon_white.svg">

                                    </Image>
                                    <div className="logo_line"></div>
                                    <div className="text_logo _02">Lensly</div>
                                </a>
                            </div>
                            <div className="column_01">
                                <a href="/" className="link underline-trail w-inline-block">
                                    <div className="header_link">Index</div>
                                </a>
                                <a href="/about" className="link underline-trail w-inline-block">
                                    <div className="header_link_2">About</div>
                                </a>
                            </div>
                            <div className="column_02">
                                <a href="/contact" aria-current="page"
                                   className="link underline-trail w-inline-block w--current">
                                    <div className="header_link">Page</div>
                                </a>
                            </div>
                            <div className="appointments_menu">
                                <a href="/Contact" aria-current="page"
                                   className="appointments_link w-inline-block w--current">
                                    <div className="header-txt">Join Waitlist</div>
                                </a>
                            </div>
                            {/*<div className="theme">*/}
                            {/*    <div className="toogletheme w-embed">*/}
                            {/*        <label htmlFor="toggleTheme" title="Toggle theme">*/}
                            {/*            <input*/}
                            {/*                id="toggleTheme"*/}
                            {/*                name="theme"*/}
                            {/*                type="checkbox"*/}
                            {/*                value="1"*/}
                            {/*                checked={isDarkTheme}*/}
                            {/*                onChange={toggleTheme}*/}
                            {/*            />*/}
                            {/*            <span className="toggleTheme"></span>*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="div-block-4">
                                <a href="#" target="_blank" className="link_block_2 w-inline-block">
                                    <div className="labs_link">Labs</div>
                                    <div className="arrow_labs">
                                        <img
                                            src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398af468c5737168014f6e0_Arrow%201.svg"
                                            loading="lazy" alt=""/>
                                    </div>
                                </a>
                            </div>
                            <HamburgerMenu onClick={toggleMenu}/>
                            {/*<div className="hamburger_menu">*/}
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


export default ContactHeader;