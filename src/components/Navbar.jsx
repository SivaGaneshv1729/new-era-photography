import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo display-text" style={{ fontSize: '24px', letterSpacing: '2px', cursor: 'pointer' }}>
          NEW ERA
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Team</a>
          <a href="#testimonials">Feedback</a>
        </div>
        
        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Search size={20} style={{ cursor: 'pointer' }} className="nav-search-icon" />
          <div className="nav-book-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: 'var(--primary-red)', padding: '8px 16px', borderRadius: '30px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <Phone size={16} /> <span className="nav-book-text">Book a Call</span>
          </div>
          <div className="nav-hamburger" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 5, 5, 0.98)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-red)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={28} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', fontSize: '28px', textTransform: 'uppercase', letterSpacing: '4px' }} className="display-text">
              <a href="#home" onClick={() => setIsMenuOpen(false)} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>About</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Gallery</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Team</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Feedback</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
