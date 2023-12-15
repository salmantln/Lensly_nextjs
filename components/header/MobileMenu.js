import React, { useState } from 'react';
import '../../app/globals.css'; // Make sure to include your CSS file

const MobileMenu = ({ isVisible }) => {
    // const [isVisible, setIsVisible] = useState(false);
    //
    // const toggleMenu = () => {
    //     setIsVisible(!isVisible);
    // };

    const menuStyle = { display: isVisible ? 'block' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: `translate3d(${isVisible ? '0%' : '100%'}, 0px, 0px)`,

        transformStyle: 'preserve-3d'
    };

    return (
        <div className="mobile_menu" style={menuStyle}>
            <div className="wrapper mobile_menu">
                <div className="div-block-42">
                    <div className="div-block-40">
                        <div className="text-block-26">c23 Studio</div>
                        <a  className="link-block-7 w-inline-block">
                            <div className="div-block-41">
                                <img src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639b5a53adde9a37f8df6904_x.svg" alt="" className="image-9" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="div-block-12">
                    {/* Links here */}
                </div>
                <div className="div-block-14">
                    {/* More content here */}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
