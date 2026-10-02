import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useScroll, useMotionValueEvent } from 'framer-motion';

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
  const [isHidden, setIsHidden] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 1024 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true); // Hide when scrolling down
    } else {
      setIsHidden(false); // Show when scrolling up
    }
  });

  const handleSelect = (id, href) => {
    setActiveId(id);
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        className="navbar" 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ 
          padding: '20px 40px', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pointerEvents: isHidden ? 'none' : 'auto'
        }}
      >
        {/* Left: Logo */}
        <div className="nav-logo display-text" style={{ fontSize: '24px', letterSpacing: '2px', cursor: 'pointer', zIndex: 100, flex: 1 }}>
          KARNA
        </div>

        {/* Center: Exactly middle, Black Pill Background with White Active States (Hidden on Mobile) */}
        {!isMobile && (
          <div 
            className="nav-links-container"
          style={{ 
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'black', 
            padding: '6px', 
            borderRadius: '40px',
            gap: '4px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            zIndex: 100
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
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
        )}
        
        {/* Right: Icons & Expandable White Book Button */}
        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 100, flex: 1, justifyContent: 'flex-end' }}>
          
          {!isMobile && (
            <motion.div 
              className="nav-book-btn" 
              onMouseEnter={() => setIsBookHovered(true)}
            onMouseLeave={() => setIsBookHovered(false)}
            animate={{
              padding: isBookHovered ? "10px 24px" : "12px",
              borderRadius: isBookHovered ? "30px" : "50%",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              backgroundColor: 'white', 
              color: 'black',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <Phone size={18} style={{ flexShrink: 0 }} /> 
            <AnimatePresence>
              {isBookHovered && (
                <motion.span
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: "8px" }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: 'bold', 
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Book a Call
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          )}

          <div className="nav-hamburger" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </motion.nav>

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
