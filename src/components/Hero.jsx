import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-bg-text"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        INSTA
      </motion.div>
      
      <div className="hero-content">
        <motion.img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
          alt="Camera" 
          className="hero-camera"
          style={{ mixBlendMode: 'screen', borderRadius: '20px' }} // Placeholder style until real transparent camera
          initial={{ y: 50, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="hero-floating-card"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src="https://images.unsplash.com/photo-1532712938736-5e153ce26c69?q=80&w=400&auto=format&fit=crop" alt="Floating couple" />
        </motion.div>

        <motion.div 
          className="hero-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          our cutting-edge cameras ensure every moment perfection.
        </motion.div>

        <motion.div 
          className="hero-gallery-btn"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero-gallery-avatars">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="avatar1" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="avatar2" />
            <div className="more">+</div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Our Gallery</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
