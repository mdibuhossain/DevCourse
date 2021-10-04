import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-icon">
                <i class="fab fa-twitter"></i>&nbsp;&nbsp;
                <i class="fab fa-facebook"></i>&nbsp;&nbsp;
                <i class="fab fa-github"></i>
            </div>
            <div>&copy;All right reserved by DevCourse, 2021</div>
        </div>
    );
};

export default Footer;