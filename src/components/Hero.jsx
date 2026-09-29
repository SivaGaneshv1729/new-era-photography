import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-black)' }}>
      
      {/* Brand Name Text (Revealed when video fades) */}
      <motion.div 
        style={{ position: 'absolute', zIndex: 1, textAlign: 'center' }}
      >
        <motion.h1 
          className="display-text" 
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)', 
            color: 'white', 
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '5px',
            lineHeight: '1.1'
          }}
          animate={{ scale: [0.98, 1.05] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
        >
          New Era<br/>Photography
        </motion.h1>
      </motion.div>

      {/* Looping Hero Video */}
      <motion.video 
        autoPlay 
        loop 
        muted 
        playsInline
        src="/hero-video.mp4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 2
        }}
        // 16-second animation cycle starting with text
        // 0s to 1s: Video hidden (Text revealed)
        // 1s to 2.5s: Fades in
        // 2.5s to 14.5s: Video is fully visible
        // 14.5s to 16s: Fades out
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ 
          duration: 16, 
          times: [0, 0.0625, 0.15625, 0.90625, 1], 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Top Gradient Overlay to ensure Navbar is visible */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '25%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
        zIndex: 3,
        pointerEvents: 'none'
      }} />

      {/* Bottom Gradient Overlay for smooth transition to gallery section */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20%',
        background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
        zIndex: 3,
        pointerEvents: 'none'
      }} />

    </section>
  );
};

export default Hero;
