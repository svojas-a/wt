// src/BackgroundImage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BackgroundImage.css';

const BackgroundImage = () => {
    return (
        <div className="page-container">
            <div className="image-container">
                {/* Reference the image in the public folder */}
                <img 
                    src={`${process.env.PUBLIC_URL}/pexels-mikhail-nilov-7820326.jpg`} 
                    alt="Background" 
                    className="fullscreen-image"
                />
            </div>
            
            <div className="header-content">
                <h1 className="logo-text">The Viceroy</h1>
                <nav>
                    <ul>
                        <li><Link to="/" aria-label="Destinations">Destinations</Link></li>
                        <li><Link to="/" aria-label="Hotels">Hotels</Link></li>
                        <li><Link to="/contact-us" aria-label="Contact Us">Contact Us</Link></li>
                        <li><Link to="/" aria-label="Membership">Membership</Link></li>
                        <li><Link to="/" aria-label="Login">Login</Link></li>
                        <li className="booknow"><Link to="/" aria-label="Book Now">Book Now</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BackgroundImage;
