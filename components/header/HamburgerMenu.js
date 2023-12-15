import React from 'react';
import '../../app/globals.css'; // Assuming you have a CSS file for styles

const HamburgerMenu = ({ onClick }) => {
    return (
        <div className="hamburger_menu" onClick={onClick}>
            <div className="line_1_hamburger"></div>
            <div className="line_2_hamburger"></div>
            <div className="line_3_hamburger"></div>
        </div>
    );
};

export default HamburgerMenu;
