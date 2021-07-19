import React from 'react';

import './styleFooter.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <span className="text-one">
                &copy; 2020 &nbsp;&nbsp;
                <span className="fertical-line_before">
                </span>&nbsp;&nbsp; All
                Rights Reserved &nbsp;&nbsp;
                <span className="fertical-line_after"></span>&nbsp;&nbsp;
            </span>
            &nbsp;
            <span className="text-two">
                Developed with &nbsp;
            </span>
            &#129505;
            &nbsp;
            <span className="text-by">
                <span >by</span>
                &nbsp;
                <span className="footer__our-students">
                    GoIT Students
                </span>
            </span>
        </footer>
    );
};

export default Footer;



