import React from 'react';
import { Search, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo display-text" style={{ fontSize: '24px', letterSpacing: '2px', cursor: 'pointer' }}>
        NEW ERA
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Search size={20} style={{ cursor: 'pointer' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: 'var(--primary-red)', padding: '8px 16px', borderRadius: '30px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          <Phone size={16} /> Book a Call
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
