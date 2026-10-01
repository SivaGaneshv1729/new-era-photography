import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NotchLeftWing = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    style={{
      position: 'absolute',
      right: '100%',
      top: 0,
      fill: 'var(--bg-black)',
      pointerEvents: 'none'
    }}
  >
    <path d="M 0 0 C 11.046 0 20 8.954 20 20 H 21 V -1 H 0 Z" />
  </svg>
);

const NotchRightWing = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    style={{
      position: 'absolute',
      left: '100%',
      top: 0,
      fill: 'var(--bg-black)',
      pointerEvents: 'none'
    }}
  >
    <path d="M 20 0 C 8.954 0 0 8.954 0 20 H -1 V -1 H 20 Z" />
  </svg>
);

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'testimonials', label: 'Feedback', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const DynamicNotch = () => {
  const [activeId, setActiveId] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active item based on scroll position could be added here
  
  const handleSelect = (id, href) => {
    setActiveId(id);
    setIsDropdownOpen(false);
    // Smooth scroll if needed
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const activeItem = navItems.find(item => item.id === activeId) || navItems[0];

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div 
          style={{
            backgroundColor: 'var(--bg-black)',
            padding: isMobile ? '8px 16px' : '10px 24px',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <NotchLeftWing />
          <NotchRightWing />

          {!isMobile ? (
            // Desktop Layout
            <LayoutGroup>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div className="display-text" style={{ fontSize: '18px', marginRight: '30px', letterSpacing: '2px', color: 'white' }}>
                  NEW ERA
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id, item.href)}
                    style={{
                      position: 'relative',
                      background: 'transparent',
                      border: 'none',
                      color: activeId === item.id ? 'white' : 'var(--text-muted)',
                      padding: '8px 16px',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      zIndex: 1,
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => { if (activeId !== item.id) e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { if (activeId !== item.id) e.currentTarget.style.color = 'var(--text-muted)'; }}
                  >
                    {activeId === item.id && (
                      <motion.div
                        layoutId="notch-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'var(--primary-red)',
                          borderRadius: '30px',
                          zIndex: -1
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                ))}
              </div>
            </LayoutGroup>
          ) : (
            // Mobile Layout
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px',
                  width: '100%',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {activeItem.label}
                {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '10px' }}
                  >
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id, item.href)}
                        style={{
                          background: activeId === item.id ? 'var(--primary-red)' : 'transparent',
                          border: 'none',
                          color: 'white',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          textAlign: 'left',
                          fontSize: '12px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          cursor: 'pointer',
                          transition: 'background 0.3s'
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Overlay for Mobile Dropdown */}
      <AnimatePresence>
        {isMobile && isDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 999
            }}
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicNotch;
