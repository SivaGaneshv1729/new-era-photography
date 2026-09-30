import React from 'react';
import { motion } from 'framer-motion';
import HaloReel from './HaloReel';

const galleryImages = [
  { src: "/Cover/Short films.png", alt: "Short films" },
  { src: "/Cover/product.jpg.jpeg", alt: "Product" },
  { src: "/Cover/fashion.jpg.jpeg", alt: "Fashion" },
  { src: "/Cover/food.jpg.jpeg", alt: "Food" },
  { src: "/Cover/Documentary.jpg.jpeg", alt: "Documentaries" },
  { src: "/Cover/interior architecture.jpg.jpeg", alt: "Architecture" },
  { src: "/Cover/sports.WEBP", alt: "Sports" },
  { src: "/Cover/wildlife.jpg.jpeg", alt: "Wildlife" },
];

const About = () => {
  const AboutText = (
    <div style={{ maxWidth: '650px', textAlign: 'left' }}>
      <motion.p
        style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc', marginBottom: '20px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        New Era Photography was born from a simple belief: every fleeting moment holds a story worth preserving. We started in a small studio with nothing but a vintage lens and an obsession for finding the extraordinary in the everyday.
      </motion.p>

      <motion.p
        style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        To us, photography is more than just pressing a shutter. It is the art of freezing time, capturing raw emotion, and painting with light. Whether it’s the quiet intimacy of a short film or the high-energy pulse of a fashion shoot, we pour our soul into ensuring your legacy is immortalized in its truest, most beautiful form.
      </motion.p>
    </div>
  );

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-black)', paddingTop: '150px' }}>
      
      {/* Centered Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.p
          style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', fontSize: '14px', margin: '0 0 10px 0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          The Origin
        </motion.p>
        
        <motion.h2
          className="display-text"
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: 0, lineHeight: 1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          WHY WE DO WHAT WE DO
        </motion.h2>
      </div>

      <div style={{ position: 'relative' }}>
        <HaloReel 
          items={galleryImages}
          centerLabel={AboutText}
          cardWidth={160}
          cardHeight={230}
          holdDuration={0}
          stepDuration={3000}
        />
      </div>

    </section>
  );
};

export default About;
