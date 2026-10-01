import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NotchLeftWing = ({ className, style }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', right: '100%', top: 0, fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 0 0 C 11.046 0 20 8.954 20 20 H 21 V -1 H 0 Z" />
  </svg>
);

const NotchRightWing = ({ className, style }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', left: '100%', top: 0, fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 20 0 C 8.954 0 0 8.954 0 20 H -1 V -1 H 20 Z" />
  </svg>
);

const NotchCornerLeftWing = ({ className, style }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', left: 0, top: '100%', fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 0 0 H 20 C 8.954 0 0 8.954 0 20 V 0 Z" />
  </svg>
);

const NotchCornerRightWing = ({ className, style }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', right: 0, top: '100%', fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 20 0 H 0 C 11.046 0 20 8.954 20 20 V 0 Z" />
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (id, href) => {
    setActiveId(id);
    setIsDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const activeItem = navItems.find(item => item.id === activeId) || navItems[0];

  return (
    <div style={{ zIndex: 1000, position: 'relative' }}>
      
      {/* ========================================================================= */}
      {/* DESKTOP VIEW (> 1280px): 3 SEPARATE NOTCHES                               */}
      {/* ========================================================================= */}
      {!isMobile && (
        <>
          {/* 1. Desktop Left Logo Notch */}
          <aside
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              height: '50px',
              padding: '0 24px',
              backgroundColor: 'var(--bg-black)',
              borderBottomRightRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              zIndex: 1000
            }}
          >
            <div className="display-text" style={{ fontSize: '20px', letterSpacing: '2px', color: 'white', fontWeight: 'bold' }}>
              NEW ERA
            </div>
            <NotchRightWing />
            <NotchCornerLeftWing />
          </aside>

          {/* 2. Desktop Center Menu Notch */}
          <header
            style={{
              position: 'fixed',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              height: '55px',
              padding: '0 16px',
              backgroundColor: 'var(--bg-black)',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              zIndex: 1000
            }}
          >
            <NotchLeftWing />
            <NotchRightWing />

            <LayoutGroup>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id, item.href)}
                    style={{
                      position: 'relative',
                      background: 'transparent',
                      border: 'none',
                      color: activeId === item.id ? 'var(--bg-black)' : 'var(--text-muted)',
                      padding: '10px 18px',
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
              </div>
            </LayoutGroup>
          </header>

          {/* 3. Desktop Right Action Notch */}
          <aside
            style={{
              position: 'fixed',
              right: 0,
              top: 0,
              height: '50px',
              padding: '0 24px',
              backgroundColor: 'var(--bg-black)',
              borderBottomLeftRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              zIndex: 1000
            }}
          >
            <NotchLeftWing />
            <NotchCornerRightWing />
            
            <a 
              href="#contact"
              style={{
                color: 'white',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              Book Now
            </a>
          </aside>
        </>
      )}

      {/* ========================================================================= */}
      {/* TABLET & MOBILE VIEW (<= 1280px): SINGLE COMPACT NOTCH ISLAND             */}
      {/* ========================================================================= */}
      {isMobile && (
        <>
          <div
            style={{
              position: 'fixed',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--bg-black)',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
              padding: '12px 20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              zIndex: 1000,
              width: '90%',
              maxWidth: '400px'
            }}
          >
            <NotchLeftWing />
            <NotchRightWing />

            {/* Unified Horizontal Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="display-text" style={{ fontSize: '16px', letterSpacing: '2px', color: 'white', fontWeight: 'bold' }}>
                NEW ERA
              </div>

              {/* Center Dropdown Trigger */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {activeItem.label}
                {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <a href="#contact" style={{ color: 'var(--primary-red)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', textDecoration: 'none' }}>
                Book
              </a>
            </div>

            {/* Expandable Dropdown Drawer */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id, item.href)}
                      style={{
                        background: activeId === item.id ? 'white' : 'transparent',
                        border: 'none',
                        color: activeId === item.id ? 'var(--bg-black)' : 'white',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        textAlign: 'left',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background 0.3s, color 0.3s',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      {item.label}
                      {activeId === item.id && (
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-red)' }} />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Fullscreen Overlay for Mobile Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 999
                }}
                onClick={() => setIsDropdownOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default DynamicNotch;
