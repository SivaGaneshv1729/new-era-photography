import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'testimonials', label: 'Feedback', href: '#testimonials' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const handleSelect = (id, href) => {
    setActiveId(id);
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar" style={{ padding: '20px 40px' }}>
        {/* Left: Logo */}
        <div className="nav-logo display-text" style={{ fontSize: '24px', letterSpacing: '2px', cursor: 'pointer', zIndex: 100 }}>
          NEW ERA
        </div>

        {/* Center: Black Pill Background with White Active States */}
        <div 
          className="nav-links-container"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'black', 
            padding: '6px', 
            borderRadius: '40px',
            gap: '4px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}
        >
          <LayoutGroup>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id, item.href)}
                style={{
                  position: 'relative',
                  background: 'transparent',
                  border: 'none',
                  color: activeId === item.id ? 'black' : 'rgba(255,255,255,0.7)',
                  padding: '10px 20px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  zIndex: 1,
                  transition: 'color 0.3s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => { if (activeId !== item.id) e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { if (activeId !== item.id) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                {activeId === item.id && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'white',
                      borderRadius: '30px',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </LayoutGroup>
        </div>
        
        {/* Right: Icons & White Book Button */}
        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 100 }}>
          <Search size={20} style={{ cursor: 'pointer' }} className="nav-search-icon" />
          
          <div 
            className="nav-book-btn" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              backgroundColor: 'white', 
              color: 'black',
              padding: '10px 20px', 
              borderRadius: '30px', 
              fontSize: '14px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
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
              onMouseEnter={(e) => e.currentTarget.style.background = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={28} color="black" style={{ transition: 'color 0.3s' }} className="mobile-close-icon" />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', fontSize: '28px', textTransform: 'uppercase', letterSpacing: '4px' }} className="display-text">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  onClick={() => handleSelect(item.id, item.href)} 
                  style={{ 
                    transition: 'color 0.3s',
                    color: activeId === item.id ? 'white' : 'rgba(255,255,255,0.5)'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'} 
                  onMouseLeave={(e) => e.currentTarget.style.color = activeId === item.id ? 'white' : 'rgba(255,255,255,0.5)'}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
