import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MasonryGrid from "./MasonryGrid";

const allImages = [
  "/Cover/Short films.png",
  "/Cover/product.jpg.jpeg",
  "/Cover/fashion.jpg.jpeg",
  "/Cover/food.jpg.jpeg",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&h=800&fit=crop", 
  "/Cover/Documentary.jpg.jpeg",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&h=500&fit=crop",
  "/Cover/interior architecture.jpg.jpeg",
  "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=600&h=600&fit=crop",
  "/Cover/sports.WEBP",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=700&h=1000&fit=crop",
  "/Cover/wildlife.jpg.jpeg",
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&h=600&fit=crop", 
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&h=750&fit=crop", 
  "https://images.unsplash.com/photo-1502982720700-baf97d422079?q=80&w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&h=500&fit=crop",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&h=900&fit=crop"
];

const FullGallery = ({ isOpen, onClose }) => {
  const [enlargedImage, setEnlargedImage] = React.useState(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen || enlargedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, enlargedImage]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="masonry-modal-overlay"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-black)',
              zIndex: 1000,
              overflowY: 'auto',
              padding: '40px 20px',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative' }}>
              
              <button
                onClick={onClose}
                style={{
                  position: 'fixed',
                  top: '40px',
                  right: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1500,
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-red)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <X size={28} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '80px', marginTop: '40px' }}>
                <motion.h2
                  className="display-text"
                  style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: '0 0 10px 0' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  ALL PHOTOS
                </motion.h2>
                <motion.p
                  style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', fontSize: '14px', margin: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  A unified collection of our work
                </motion.p>
              </div>

              <MasonryGrid
                items={allImages}
                gap="16px"
                staggerDelay={0.1}
                renderItem={(img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden', borderRadius: '12px' }}
                  >
                    <img
                      src={img}
                      alt={`Full gallery image ${i}`}
                      style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                      onClick={() => setEnlargedImage(img)}
                    />
                  </motion.div>
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Single Image Modal (Double nested) */}
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
              alt="Enlarged gallery view"
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
    </>
  );
};

export default FullGallery;
