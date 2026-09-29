import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-center">
          <h4 className="display-text">OPTIQ</h4>
          <p>+1 (222) 345-6789</p>
          <p>SUPPORT@OPTIQ.COM</p>
          <p>123 LENS AVENUE, TORONTO,</p>
          <p>CANADA</p>
        </div>
        
        <div className="footer-col" style={{ textAlign: 'right' }}>
          <h5>SOCIAL MEDIA</h5>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bg-text">
        INSTA
      </div>
    </footer>
  );
};

export default Footer;
