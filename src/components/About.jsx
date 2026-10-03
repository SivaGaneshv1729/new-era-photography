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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AboutText = (
    <div style={{ maxWidth: isMobile ? '100%' : '650px', textAlign: isMobile ? 'center' : 'left' }}>
      <motion.p
        style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc', marginBottom: '20px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Karna was born from a simple belief: every fleeting moment holds a story worth preserving. Founded as a bold creative startup by BFA (Bachelor of Fine Arts) students, we have evolved into an experienced team backed by a rich portfolio of work.
      </motion.p>

      <motion.p
        style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        To us, visual storytelling is far more than just pressing a shutter. Driven by ultimate creativity, we craft high-impact commercials, narrative short films, sleek product showcases, high-energy fashion shoots, and compelling documentaries—delivering whatever our clients need with unwavering dedication, true to our name, Karna. We’d rather let our craft speak for itself—scroll down to experience our work.
      </motion.p>
    </div>
  );

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-black)', paddingTop: '150px' }}>
      
      {/* Massive Background Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(6rem, 25vw, 35rem)',
        color: 'rgba(255, 255, 255, 0.03)',
        textAlign: 'center',
        lineHeight: '0.75',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        ORIGIN
      </div>

      {/* Centered Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
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
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0, lineHeight: 1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          WHY WE DO WHAT WE DO
        </motion.h2>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <HaloReel 
          items={galleryImages}
          centerLabel={isMobile ? null : AboutText}
          centerXRatio={isMobile ? 0.5 : 0}
          cardWidth={isMobile ? 120 : 160}
          cardHeight={isMobile ? 170 : 230}
          holdDuration={0}
          stepDuration={3000}
          style={{ height: isMobile ? '400px' : '100dvh' }}
        />
        
        {isMobile && (
          <div style={{ padding: '0 30px', paddingBottom: '80px', marginTop: '20px' }}>
            {AboutText}
          </div>
        )}
      </div>

    </section>
  );
};

export default About;
