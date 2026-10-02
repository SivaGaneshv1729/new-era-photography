import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LinkedinIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team01)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const teamData = [
  {
    name: "Logan Dang",
    role: "Lead Cinematographer",
    image: "https://cdn.21st.dev/assets/localized/a15173e6535b3403cf75d3a251b152b66cb158540ae6fe0cef584477d25c296d.png",
    socials: { website: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Ana Belić",
    role: "Art Director",
    image: "https://cdn.21st.dev/assets/localized/642c6a86e5fbd3b161614c1493159ed72ba9f28fd64bbd3dac1aaf902841acbb.png",
    socials: { website: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Brian Hanley",
    role: "Creative Producer",
    image: "https://cdn.21st.dev/assets/localized/16f617e9aa4511f685dd437418d90bcb53817ed5031cd822d60db98848ad536f.png",
    socials: { website: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Darko Stanković",
    role: "Lead Photographer",
    image: "https://cdn.21st.dev/assets/localized/90f8eb479a4a56a4da83ebf6be45a9ff73515b0af2cff481f665ea40189a8137.png",
    socials: { website: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Elena Rostova",
    role: "Lead Editor",
    image: "https://cdn.21st.dev/assets/localized/a15173e6535b3403cf75d3a251b152b66cb158540ae6fe0cef584477d25c296d.png",
    socials: { website: "#", linkedin: "#", instagram: "#" },
  },
];

const Team = () => {
  return (
    <section id="team" style={{ padding: '120px 20px', backgroundColor: 'var(--bg-black)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
        
        {/* Header Section */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}
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
            Our Team
          </div>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0 }}>
            Meet the Creative Minds
          </h2>
          <p style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', margin: 0, fontWeight: 'bold' }}>
            The visionaries behind the lens
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="team-grid" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {teamData.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
              className="team-card"
            >
              {/* Image Container */}
              <div style={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
                <img
                  src={value.image}
                  alt={value.name}
                  style={{ width: '100%', height: 'auto', display: 'block', transition: 'filter 0.5s ease', filter: 'grayscale(100%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>

              {/* Info Container */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 className="display-text" style={{ fontSize: '1.8rem', letterSpacing: '1px', margin: '0 0 5px 0' }}>
                    {value.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {value.role}
                  </p>
                </div>

                {/* Socials */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={value.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                    style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-red)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href={value.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                    style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-red)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={value.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                    style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-red)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <InstagramIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
