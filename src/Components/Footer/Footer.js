import React from 'react';

import './styleFooter.scss'

const Footer = () => {
    return (
        <div class="footer">
            <span class="text-one">
                &copy; 2020 &nbsp;&nbsp;
                <span class="fertical-line_before">
                </span>&nbsp;&nbsp; All
                Rights Reserved &nbsp;&nbsp;
                <span class="fertical-line_after"></span>&nbsp;&nbsp;
            </span>
            &nbsp;
            <span class="text-two">
                Developed with &nbsp;
            </span>
            &#129505;
            &nbsp;
            <span>by</span>
            &nbsp;
            <span class="footer__our-students">
                GoIT Students
            </span>
        </div>
    );
};

export default Footer;



