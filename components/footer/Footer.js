import React from 'react';
// import './Footer.css'; // Make sure to create and import a CSS file for styling

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper footer">
                <div className="splitter_footer"></div>
                <div className="div-block-8">
                    <div className="middle_reserved left">
                        <div className="text-block-14">2023 Lensly™</div>
                    </div>
                    <div className="social_links middle">
                        <div>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                               className="link underline-trail w-inline-block">
                                <div className="text-block-12">instagram</div>
                            </a>
                        </div>
                    </div>
                    <div className="all_rights_reserved">
                        <div className="text-block-13 only_mobile">2023 Lensly™</div>
                        <div className="text-block-13">All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
