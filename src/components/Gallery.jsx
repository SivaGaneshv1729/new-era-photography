import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: "ULTRA HD LENS",
    desc: "Experience unmatched clarity with 8K resolution for professional-grade photos and videos.",
    btn: "Capture Yours Now"
  },
  {
    title: "FAST AUTOFOCUS",
    desc: "Never miss a moment - intelligent tracking and ultra-fast precise focus on every perfect shot.",
    btn: "Order Now"
  },
  {
    title: "LONG BATTERY LIFE",
    desc: "Stay powered through every adventure with up to 48 hours of uninterrupted, reliable continuous shooting.",
    btn: "Create Without Limits"
  }
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <motion.div 
        className="features-bg-text"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        PHOTOGRAPHY
      </motion.div>

      <div className="features-content">
        <motion.h2 
          className="features-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          CAPTURE EVERY<br/>MOMENT WITH CUTTING<br/>EDGE TECHNOLOGY
        </motion.h2>

        <div className="features-cameras">
          <motion.img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" 
            alt="Camera Back" 
            className="camera-back"
            style={{ mixBlendMode: 'screen', borderRadius: '20px' }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600&auto=format&fit=crop" 
            alt="Camera Front" 
            className="camera-front"
            style={{ mixBlendMode: 'screen', borderRadius: '20px' }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="features-cards">
          {featuresData.map((item, index) => (
            <motion.div 
              className="feature-card" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              whileHover={{ y: -10 }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <button className="btn btn-white">{item.btn}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
