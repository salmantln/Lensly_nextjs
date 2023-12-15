import React from 'react';
import './FullScreenMobileMenu.css';
import Image from "next/image"; // Assuming you have a CSS file for styles

const FullScreenMobileMenu = ({isVisible, onClose}) => {
    if (!isVisible) return null;


    const visibleStyle = {
        display: 'flex',
        opacity: 1,
        transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d'
    };

    const hiddenStyle = {
        display: 'none',
        opacity: 0,
        transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d'
    };

    // Apply the correct style based on the isVisible prop
    const style = isVisible ? visibleStyle : hiddenStyle;

    return (
        <div className="full-screen-mobile-menu" style={style}>
            <div className="wrapper mobile_menu" style={style}>
                <div className="div-block-42">
                    <div className="div-block-40">
                        <div className="text-block-26">c23 Lensly</div>
                        {/*<a href="" className="link-block-7 w-inline-block">*/}
                            <div className="div-block-41" onClick={onClose}>
                                <Image
                                    width={50}
                                    height={50}
                                    src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639b5a53adde9a37f8df6904_x.svg"
                                    loading="lazy" alt="" className="image-9"/>
                            </div>
                        {/*</a>*/}
                    </div>
                </div>
                <div className="div-block-12">
                    <a href="/" aria-current="page" className="mobile_link w-inline-block w--current">
                        <div className="text-block-15">home</div>
                        <div className="div-block-13">
                            <div className="text-block-16">01</div>
                        </div>
                    </a>
                    <a href="/about" className="mobile_link w-inline-block">
                        <div className="text-block-15 _02">about</div>
                        <div className="div-block-13">
                            <div className="text-block-16">02</div>
                        </div>
                    </a>
                    <a href="/contact" className="mobile_link w-inline-block">
                        <div className="text-block-15">contact</div>
                        <div className="div-block-13">
                            <div className="text-block-16">03</div>
                        </div>
                    </a>
                </div>
                <div className="div-block-14">
                    <a href="mailto:info@c23.io?subject=Contact%20Us" className="link-block-5 w-inline-block">
                        <div className="text-block-17">info@c23.io</div>
                    </a>
                    <div className="div-block-15">
                        <a href="https://instagram.com/c23_nyc/" target="_blank"
                           className="link-block-5 w-inline-block">
                            <div className="text-block-17">instagram</div>
                        </a>
                    </div>
                </div>
            </div>
            {/*<div className="">*/}
            {/*    /!*<button className="close-btn" onClick={onClose}>Close</button>*!/*/}
            {/*    /!* Add your menu items here *!/*/}

            {/*    <div>*/}

            {/*        <div className="div-block-42">*/}
            {/*            <div className="div-block-40">*/}
            {/*                <div className="text-block-26">c23 Studio</div>*/}

            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <nav>*/}
            {/*        <ul>*/}
            {/*            <li><a href="/">Home</a></li>*/}
            {/*            <li><a href="/about">About</a></li>*/}
            {/*            <li><a href="/contact">Page</a></li>*/}
            {/*            /!* More menu items *!/*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </div>
    );
};

export default FullScreenMobileMenu;
