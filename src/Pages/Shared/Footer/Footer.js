import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
        <div className="l-footer">
        <p>
        Beyond bicycles, a local bicycle shop may offer clothing and other accessories, spare and replacement parts, tools, and a variety of services. Services may include expert fitting and custom bike building or ordering, maintenance and repairs from experienced bicycle mechanics, and organized group rides and classes.</p>
        </div>
        <ul className="r-footer">
        <li>
          <h2 className="text-light">
        Social</h2>
        <ul className="box">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">Dribbble</a></li>
        </ul>
        </li>
        <li className="features">
          <h2 className="text-light">
        Information</h2>
        <ul className="box h-box">
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Certifications</a></li>
        </ul>
        </li>
        <li>
          <h2 className="text-light">
        Legal</h2>
        <ul className="box">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Contract</a></li>
        </ul>
        </li>
        </ul>
        <div className="b-footer">
        <p>
        All rights reserved by ©CompanyName 2021 </p>
        </div>
        </footer>
        
 
    );
};

export default Footer;