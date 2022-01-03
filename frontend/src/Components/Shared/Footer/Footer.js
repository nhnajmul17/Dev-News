import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='social__links'>
                <div className='logo__social'>
                    <h3>Dev News</h3>
                </div>
                <div className='social__media'>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                </div>
            </div>
            <hr />
            <div className="footer-style">
                <div className="footer-part">
                    <h4>News</h4>
                    <p>Publish news</p>
                    <p>Dev News</p>
                    <p>Premium</p>
                    <p>About</p>
                    <p>Offers</p>
                </div >
                <div className="footer-part">
                    <h4>Quick Links</h4>
                    <p>Latest news</p>
                    <p>Specifics lan</p>
                    <p>join</p>
                    <p>Share question</p>
                    <p>get update</p>
                    
                </div>
                <div className="footer-part">
                    <h4>Help</h4>
                    <p>FAQs</p>
                    <p>Customer Care</p>
                    <p>Barrel Guide</p>
                    <p>Price Promise</p>
                    <p>Report</p>
                </div>
                <div className="footer-part">
                    <h4>Address</h4>
                    <p>123, New Lenox</p>
                    <p>Chicago, IL 60608-4567</p>
                    <h4>Phone</h4>
                    <p>+1(123)567-8901</p>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <h5>Dev News &#169;2021 All Rights Reserved</h5>
            </div>
        </div>
    );
};

export default Footer;