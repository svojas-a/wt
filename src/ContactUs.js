// src/ContactUs.js
import React from 'react';
import './ContactUs.css';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';

const ContactUs = () => {
    return (
        <>
            {/* Background Image Section */}
            <div className="background-section">
                <BackgroundImage />
            </div>

            {/* Contact Us content starts after the background image */}
            <div className="contact-page">
                <h2 className="contact-title">GET IN TOUCH</h2>
                <section className="reservation-centre">
                    <h3 className="subsection-title">THE VICERROY SERVICE LOUNGE</h3>
                    <p className="reservation-info">
                        The  SERVICE LOUNGE  is accessible 24/7. Toll-free contact numbers are below.
                    </p>
                    <div className="contact-details">
                        <p><strong>Toll-free India:</strong> 1-800-111-825</p>
                        <p><strong>India Network:</strong> 0091-22-6601-1825</p>
                        <p><strong>USA & Canada:</strong> 1-866-969-1825</p>
                    </div>
                </section>
                <section className="care-section">
                    <h3 className="subsection-title">SERVICELOUNGE@THEVICEROY</h3>
                    <p className="care-info">
                        We take pride in crafting moments that stay with you forever. However, if there is anything we can do to make the time you spend in our care better, please do share your thoughts with us. Ensuring your contentment is at the forefront of our commitment.
                    </p>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default ContactUs;
