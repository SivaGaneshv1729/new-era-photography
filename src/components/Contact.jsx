import React from 'react';
import { QrCode, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="contact" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-black)', padding: 0 }}>
      
      {/* Connect Section (QR Codes) */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '120px 20px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: '0 0 15px 0' }}>Connect With Us</h2>
          <p style={{ color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>Scan to start a conversation</p>
        </div>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Instagram QR Card */}
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            padding: '40px', 
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          >
            <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <QrCode size={140} color="#000" strokeWidth={1.2} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <InstagramIcon size={24} color="var(--primary-red)" />
              <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '2px' }}>INSTAGRAM</span>
            </div>
          </div>

          {/* WhatsApp QR Card */}
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            padding: '40px', 
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          >
            <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <QrCode size={140} color="#000" strokeWidth={1.2} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MessageCircle size={24} color="#25D366" />
              <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '2px' }}>WHATSAPP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        paddingTop: '80px', 
        width: '100%', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          padding: '0 40px',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Brand Info */}
          <div>
            <h4 className="display-text" style={{ fontSize: '3rem', margin: '0 0 20px 0', color: 'var(--text-primary)' }}>KARNA</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '14px', maxWidth: '320px' }}>
              Crafting visual narratives through high-impact cinematography and photography. 
              Every fleeting moment holds a story worth preserving.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h5 style={{ fontSize: '16px', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 'bold' }}>Contact</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Phone size={20} color="var(--primary-red)" />
                <span style={{ fontSize: '14px', letterSpacing: '1px' }}>+1 (555) 019-8273</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Mail size={20} color="var(--primary-red)" />
                <span style={{ fontSize: '14px', letterSpacing: '1px' }}>HELLO@KARNA.COM</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <MapPin size={20} color="var(--primary-red)" style={{ marginTop: '2px' }} />
                <span style={{ fontSize: '14px', lineHeight: '1.6', letterSpacing: '0.5px' }}>123 CREATIVE AVE, STUDIO 4<br/>NEW YORK, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ fontSize: '16px', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 'bold' }}>Quick Links</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', letterSpacing: '1px' }}>
              {['Home', 'About', 'Gallery', 'Team', 'Feedback'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-secondary)', transition: 'all 0.3s ease', textTransform: 'uppercase' }} 
                     onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-red)'; e.currentTarget.style.paddingLeft = '8px'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Background Text */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 25vw, 35rem)',
          color: 'rgba(255, 255, 255, 0.03)',
          textAlign: 'center',
          lineHeight: '0.75',
          marginTop: '80px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none'
        }}>
          KARNA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
