import React from 'react';

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-col">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#testimonials">Feedback</a></li>
          </ul>
        </div>
        
        <div className="footer-center">
          <h4 className="display-text" style={{ fontSize: '2.5rem', margin: '0 0 10px 0' }}>KARNA</h4>
          <p style={{ letterSpacing: '1px' }}>+1 (555) 019-8273</p>
          <p style={{ letterSpacing: '1px' }}>HELLO@KARNA.COM</p>
          <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>123 CREATIVE AVE, STUDIO 4,</p>
          <p style={{ color: 'var(--text-muted)' }}>NEW YORK, NY 10001</p>
        </div>
        
        <div className="footer-col" style={{ textAlign: 'right' }}>
          <h5>SOCIAL MEDIA</h5>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Vimeo</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bg-text" style={{ userSelect: 'none' }}>
        KARNA
      </div>
    </footer>
  );
};

export default Contact;
