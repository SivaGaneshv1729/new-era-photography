import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteSlider } from './InfiniteSlider';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Art Director",
    testimonial: "The visual storytelling and cinematography are completely breathtaking. It transformed the way we perceive our own brand.",
    avatar: "https://cdn.21st.dev/assets/mirror/f7/f72a5321d9c055324b83d9aca5fa248af5f99213b63da015c188955f8b5f0223.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Creative Lead",
    testimonial: "Every shot feels meticulously crafted. The attention to detail in lighting and composition is truly world-class.",
    avatar: "https://cdn.21st.dev/assets/mirror/57/57501d26f0a1500d35e3feb532be175cda3d4ad5d9ab7dd2ddbc346a81687641.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Editor in Chief",
    testimonial: "An amazing eye for emotion. The resulting portfolio speaks volumes and requires almost zero retouching.",
    avatar: "https://cdn.21st.dev/assets/mirror/55/55053b4b68b2e6eb9cd8d3057617e989f97b0fccf54eb0d46ab3f2907d2c27bb.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    testimonial: "I've seen a massive spike in user engagement since we incorporated these visuals into our campaigns.",
    avatar: "https://cdn.21st.dev/assets/mirror/e1/e1e565477a93abaec6a4ffd6a6745e3620bba9e5c0c88418e4b7113667370d65.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Film Producer",
    testimonial: "The best investment we've made this year. Professional, creative, and insanely talented behind the camera.",
    avatar: "https://cdn.21st.dev/assets/mirror/7d/7d79089c6788e8d582fe1b03158a3520f2bc805983362f52b8df1558f91577ad.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Brand Manager",
    testimonial: "A visionary approach to modern photography. The team brings an unparalleled energy to every single set.",
    avatar: "https://cdn.21st.dev/assets/mirror/9a/9a06193c1865e5fc792d78adc02dfec25f0473e69596efd694f24d29916b59e4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '120px 0', backgroundColor: 'var(--bg-black)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
        
        {/* Header Section */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', padding: '0 20px' }}
        >
          <div style={{ 
            padding: '6px 16px', 
            border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '30px', 
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--text-secondary)'
          }}>
            Feedback
          </div>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0 }}>
            Success Stories
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', margin: 0, maxWidth: '600px', lineHeight: '1.6' }}>
            Real stories from people who have experienced our unique approach to visual storytelling.
          </p>
        </motion.div>

        {/* Marquee Section using existing InfiniteSlider */}
        <div style={{ width: '100%', position: 'relative', marginTop: '20px' }}>
          
          {/* Gradient Masks for smooth fading edges */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-black), transparent)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-black), transparent)', zIndex: 10, pointerEvents: 'none' }} />

          <InfiniteSlider gap={30} duration={60} durationOnHover={200}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
                style={{
                  width: '380px',
                  padding: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Pattern */}
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
                  <Quote size={120} />
                </div>

                {/* Rating / Quote Icon */}
                <div style={{ color: 'var(--primary-red)' }}>
                  <Quote size={28} fill="currentColor" />
                </div>

                {/* Testimonial Text */}
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)', margin: 0, zIndex: 1 }}>
                  "{testimonial.testimonial}"
                </p>

                {/* User Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', zIndex: 1 }}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 className="display-text" style={{ margin: '0 0 4px 0', fontSize: '1.2rem', letterSpacing: '1px' }}>
                      {testimonial.name}
                    </h4>
                    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteSlider>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
