import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Mini Session',
    price: '€75',
    description: '30-minute session. Perfect for quick portraits. Help with preparation and 40+ edited photos included.',
    features: ['1 person', '1 outfit', 'Online Gallery', 'Fast Delivery']
  },
  {
    id: 2,
    title: 'Individual Portrait',
    price: '€120',
    description: 'Up to 1-hour session. Comprehensive guidance on posing, location, and looks.',
    features: ['Up to 2 outfits', '70+ edited photos', 'Online Gallery', 'Retouching'],
    isPopular: true
  },
  {
    id: 3,
    title: 'Wedding Ceremony',
    price: '€250',
    description: 'Up to 3 hours — ceremony and couple session. Reportage style capturing genuine emotions.',
    features: ['150+ edited photos', 'Pre-consultation', 'High-Res Gallery', 'Print Rights']
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Investment</h2>
        <p className="section-subtitle">Transparent pricing for timeless memories.</p>
      </motion.div>

      <div className="pricing-grid">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id} 
            className={`pricing-card ${service.isPopular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {service.isPopular && <div className="popular-badge">Most Booked</div>}
            <h3>{service.title}</h3>
            <div className="price-tag">
              <span className="currency">€</span>
              <span className="amount">{service.price.replace('€', '')}</span>
            </div>
            <p className="pricing-desc">{service.description}</p>
            <ul className="feature-list">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`btn-pricing ${service.isPopular ? 'btn-pricing-primary' : 'btn-pricing-outline'}`}>
              Book Session
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
