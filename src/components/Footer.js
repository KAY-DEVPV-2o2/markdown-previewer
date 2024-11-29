import React from 'react';
import reactLogo from '../assets/react-logo.svg'; // Ensure this path is correct
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer">
    <p>
        Developed with <span role="img" aria-label="love">❤️</span> by K-Devp-V-2o2.
    </p>
    <img
        src={reactLogo}
        alt="React Logo"
        className="react-logo"
    />
    </footer>
);
};

export default Footer;
