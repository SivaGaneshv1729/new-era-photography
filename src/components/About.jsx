import React from 'react';
import { motion } from 'framer-motion';

const arcImages = [
  "https://images.unsplash.com/photo-1526405785089-68bf49298e82?q=80&w=400&auto=format&fit=crop", // surfer
  "https://images.unsplash.com/photo-1541252876615-56f8f533a1e0?q=80&w=400&auto=format&fit=crop", // cyclist
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop", // skier
  "https://images.unsplash.com/photo-1522046429532-a5ecb68ef534?q=80&w=400&auto=format&fit=crop", // hiker
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=400&auto=format&fit=crop"  // golfer
];

const ArcGallery = () => {
  return (
    <section className="arc-gallery" id="gallery">
      <div className="arc-container">
        {arcImages.map((src, index) => (
          <motion.div 
            className="arc-item" 
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <img src={src} alt={`Arc gallery item ${index + 1}`} />
          </motion.div>
        ))}
      </div>
      
      <motion.img 
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
        alt="Main Camera" 
        className="arc-camera"
        style={{ mixBlendMode: 'screen', borderRadius: '30px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ArcGallery;
