import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NotchLeftWing = ({ className, style }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', right: '100%', top: 0, fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 0 0 C 11.046 0 20 8.954 20 20 H 21 V -1 H 0 Z" />
  </svg>
);

const NotchRightWing = ({ className, style }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    className={className}
    style={{ position: 'absolute', left: '100%', top: 0, fill: 'var(--bg-black)', pointerEvents: 'none', ...style }}
  >
    <path d="M 20 0 C 8.954 0 0 8.954 0 20 H -1 V -1 H 20 Z" />
  </svg>
);

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'testimonials', label: 'Feedback', href: '#testimonials' }
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
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, pointerEvents: 'none' }}>
      
      {/* ========================================================================= */}
      {/* DESKTOP VIEW (> 1280px): FLOATING LOGO/BTN & CENTER NOTCH                 */}
      {/* ========================================================================= */}
      {!isMobile && (
        <div style={{ position: 'relative', width: '100%', height: '100px', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '20px' }}>
          
          {/* Left: Floating Logo */}
          <div 
            className="display-text" 
            style={{ 
              fontSize: '28px', 
              letterSpacing: '2px', 
              color: 'white', 
              fontWeight: 'bold', 
              pointerEvents: 'auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            NEW ERA
          </div>

          {/* Center: The Black Notch */}
          <header
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              height: '75px',
              padding: '0 24px',
              backgroundColor: 'var(--bg-black)',
              borderBottomLeftRadius: '28px',
              borderBottomRightRadius: '28px',
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              pointerEvents: 'auto'
            }}
          >
            <NotchLeftWing />
            <NotchRightWing />

            <LayoutGroup>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id, item.href)}
                    style={{
                      position: 'relative',
                      background: 'transparent',
                      border: 'none',
                      color: activeId === item.id ? 'var(--bg-black)' : 'var(--text-muted)',
                      padding: '12px 24px',
                      fontSize: '15px',
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

          {/* Right: Floating Action Button */}
          <a 
            href="#contact"
            style={{
              color: 'white',
              border: '2px solid rgba(255,255,255,0.2)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.backgroundColor = 'white'; 
              e.currentTarget.style.color = 'var(--bg-black)'; 
              e.currentTarget.style.borderColor = 'white';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'; 
              e.currentTarget.style.color = 'white'; 
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            Book Now
          </a>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TABLET & MOBILE VIEW (<= 1280px): SINGLE COMPACT NOTCH ISLAND             */}
      {/* ========================================================================= */}
      {isMobile && (
        <div style={{ position: 'relative', width: '100%', pointerEvents: 'auto' }}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--bg-black)',
              borderBottomLeftRadius: '28px',
              borderBottomRightRadius: '28px',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              zIndex: 1000,
              width: '95%',
              maxWidth: '500px'
            }}
          >
            <NotchLeftWing />
            <NotchRightWing />

            {/* Unified Horizontal Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="display-text" style={{ fontSize: '22px', letterSpacing: '2px', color: 'white', fontWeight: 'bold' }}>
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
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {activeItem.label}
                {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <a href="#contact" style={{ color: 'var(--primary-red)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', textDecoration: 'none' }}>
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
                  style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id, item.href)}
                      style={{
                        background: activeId === item.id ? 'white' : 'transparent',
                        border: 'none',
                        color: activeId === item.id ? 'var(--bg-black)' : 'white',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        textAlign: 'left',
                        fontSize: '15px',
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
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-red)' }} />
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
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  zIndex: 999
                }}
                onClick={() => setIsDropdownOpen(false)}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default DynamicNotch;
