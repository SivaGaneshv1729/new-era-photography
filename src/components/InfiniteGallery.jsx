import React, { useState } from 'react';
import { InfiniteSlider } from './InfiniteSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import FullGallery from './FullGallery';

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
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <>
      <section id="infinite-gallery" style={{ paddingBottom: '60px', paddingTop: '120px', overflow: 'hidden' }}>
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
        {/* Set durationOnHover to a huge number to effectively pause it */}
        <InfiniteSlider gap={1} duration={40} durationOnHover={100000}>
          {images.map((src, idx) => (
            <div key={idx} style={{ height: '220px', width: '330px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={src} 
                alt={`Gallery preview ${idx}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s' }}
                onClick={() => setEnlargedImage(src)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </InfiniteSlider>

        <div style={{ height: '24px' }} />

        {/* Slider 2 - Right to left (reversed) */}
        <InfiniteSlider gap={1} duration={45} reverse durationOnHover={100000}>
          {[...images].reverse().map((src, idx) => (
            <div key={idx} style={{ height: '220px', width: '330px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={src} 
                alt={`Gallery preview reverse ${idx}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s' }}
                onClick={() => setEnlargedImage(src)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* View More Down Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <div onClick={() => setShowFullGallery(true)}>
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.1, color: 'var(--primary-red)' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', marginBottom: '8px', fontWeight: 'bold' }}>
                View More
              </span>
              <ChevronDown size={32} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enlarged Single Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
          >
            <button
              onClick={() => setEnlargedImage(null)}
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-red)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={28} />
            </button>
            <motion.img
              src={enlargedImage}
              alt="Enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                objectFit: 'contain'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFullGallery && (
          <FullGallery onClose={() => setShowFullGallery(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default InfiniteGallery;
