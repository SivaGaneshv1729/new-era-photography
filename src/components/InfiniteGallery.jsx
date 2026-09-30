import React from 'react';
import { InfiniteSlider } from './InfiniteSlider';
import { motion } from 'framer-motion';

const images = [
  "/Cover/Short films.png",
  "/Cover/product.jpg.jpeg",
  "/Cover/fashion.jpg.jpeg",
  "/Cover/food.jpg.jpeg",
  "/Cover/Documentary.jpg.jpeg",
  "/Cover/interior architecture.jpg.jpeg",
  "/Cover/sports.WEBP",
  "/Cover/wildlife.jpg.jpeg",
];

const InfiniteGallery = () => {
  return (
    <section id="infinite-gallery" style={{ paddingBottom: '120px', paddingTop: '120px', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <motion.h2
          className="display-text"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 10px 0' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          GALLERY
        </motion.h2>
        <motion.p
          style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', fontSize: '14px', margin: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A continuous flow of moments
        </motion.p>
      </div>

      {/* Slider 1 - Left to right */}
      <InfiniteSlider gap={24} duration={35} durationOnHover={150}>
        {images.map((src, idx) => (
          <div key={idx} style={{ height: '220px', width: '330px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src={src} 
              alt={`Gallery preview ${idx}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </InfiniteSlider>

      <div style={{ height: '24px' }} />

      {/* Slider 2 - Right to left (reversed) */}
      <InfiniteSlider gap={24} duration={40} reverse durationOnHover={150}>
        {[...images].reverse().map((src, idx) => (
          <div key={idx} style={{ height: '220px', width: '330px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src={src} 
              alt={`Gallery preview reverse ${idx}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </InfiniteSlider>
      
    </section>
  );
};

export default InfiniteGallery;
