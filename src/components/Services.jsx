import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="studio-section" id="products">
      <motion.div 
        className="studio-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="studio-title">PROFESSIONAL<br/>PHOTOGRAPHY<br/>STUDIO</h2>
        
        <div className="services-card">
          <h3>OUR SERVICES:</h3>
          <ul className="services-list">
            <li>Wedding Coverage</li>
            <li>Photoshoot</li>
            <li>Fashion Shoot</li>
            <li>Birthday Shoot</li>
            <li>Documentaries</li>
            <li>Personal Photography</li>
          </ul>
          
          <motion.img 
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400&auto=format&fit=crop" 
            alt="Small Camera" 
            className="services-floating-camera"
            style={{ mixBlendMode: 'screen', borderRadius: '15px' }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="studio-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
          alt="Studio Camera on Tripod"
          style={{ mixBlendMode: 'screen', borderRadius: '20px' }}
        />
      </motion.div>
    </section>
  );
};

export default Services;
