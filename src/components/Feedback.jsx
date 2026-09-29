import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to <span className="text-gradient">get started?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start creating for free today. No credit card required.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#" className="btn btn-light btn-md">Create Free Account</a>
          <a href="#" className="btn btn-glass btn-md">View Pricing</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
