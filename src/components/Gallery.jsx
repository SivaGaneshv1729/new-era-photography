import * as React from "react";
import {
  Heart,
  Video,
  Gift,
  Camera,
  Mountain,
  ArrowLeft,
  Building,
  Target,
  Leaf,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MasonryGrid from "./MasonryGrid";
import '../index.css';

const items = [
  {
    id: 1,
    title: "Short Films",
    description: "Cinematic moments capturing your special day.",
    imgSrc: "/Cover/Short films.png",
    icon: <Heart size={24} />,
    linkHref: "#",
  },
  {
    id: 2,
    title: "Product",
    description: "Stunning visuals and professional product cinematography.",
    imgSrc: "/Cover/product.jpg.jpeg",
    icon: <Video size={24} />,
    linkHref: "#",
  },
  {
    id: 3,
    title: "Fashion",
    description: "Vibrant photography elevating your fashion identity.",
    imgSrc: "/Cover/fashion.jpg.jpeg",
    icon: <Gift size={24} />,
    linkHref: "#",
  },
  {
    id: 4,
    title: "Food",
    description: "Mouthwatering culinary visuals for your brand.",
    imgSrc: "/Cover/food.jpg.jpeg",
    icon: <Camera size={24} />,
    linkHref: "#",
  },
  {
    id: 5,
    title: "Documentaries",
    description: "Raw and authentic real-world storytelling.",
    imgSrc: "/Cover/Documentary.jpg.jpeg",
    icon: <Mountain size={24} />,
    linkHref: "#",
  },
  {
    id: 6,
    title: "Architecture",
    description: "Striking structural photography highlighting modern design.",
    imgSrc: "/Cover/interior architecture.jpg.jpeg",
    icon: <Building size={24} />,
    linkHref: "#",
  },
  {
    id: 7,
    title: "Sports",
    description: "Dynamic action shots freezing perfect moments.",
    imgSrc: "/Cover/sports.WEBP",
    icon: <Target size={24} />,
    linkHref: "#",
  },
  {
    id: 8,
    title: "Wildlife",
    description: "Breathtaking glimpses capturing untamed natural beauty.",
    imgSrc: "/Cover/wildlife.jpg.jpeg",
    icon: <Leaf size={24} />,
    linkHref: "#",
  }
];

// Dummy images with explicitly different aspect ratios (tall, wide, square) to create a dynamic grid
const dummyImages = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&h=800&fit=crop", // Tall
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&h=500&fit=crop", // Ultra Wide
  "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=600&h=600&fit=crop", // Square
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=700&h=1000&fit=crop", // Very Tall
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&h=600&fit=crop", // Wide
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&h=750&fit=crop", // Tall
  "https://images.unsplash.com/photo-1502982720700-baf97d422079?q=80&w=800&h=800&fit=crop", // Square
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&h=500&fit=crop", // Ultra Wide
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&h=900&fit=crop"  // Tall
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [selectedGallery, setSelectedGallery] = React.useState(null);
  const [enlargedImage, setEnlargedImage] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};

    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const openGallery = (index) => {
    setSelectedGallery(items[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="gallery" style={{ paddingBottom: '120px', paddingTop: '120px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2
            className="display-text"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 10px 0' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            OUR WORKS
          </motion.h2>
          <motion.p
            style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', fontSize: '14px', margin: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our visual journeys
          </motion.p>
        </div>
        <ul
          className="expanding-cards-container"
          style={{
            ...gridStyle,
            ...(isDesktop
              ? { gridTemplateRows: '1fr' }
              : { gridTemplateColumns: '1fr' }
            )
          }}
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              className="expanding-card"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => openGallery(index)}
              tabIndex={0}
              data-active={activeIndex === index}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="expanding-card-img"
              />
              <div className="expanding-card-gradient" />

              <article className="expanding-card-content">
                <h3 className="expanding-card-title-vertical display-text">
                  {item.title}
                </h3>

                <div className="expanding-card-icon">
                  {item.icon}
                </div>

                <h3 className="expanding-card-title display-text">
                  {item.title}
                </h3>

                <p className="expanding-card-desc">
                  {item.description}
                </p>

                {/* Visual hint to click to open gallery */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ marginTop: '10px', fontSize: '12px', color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}
                  >
                    Click to open gallery →
                  </motion.div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Fullscreen Masonry Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            className="masonry-modal-overlay"
            data-lenis-prevent="true"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="masonry-modal-header" style={{ alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <motion.h2
                  className="display-text"
                  style={{ fontSize: '4rem', margin: 0, lineHeight: 1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedGallery.title}
                </motion.h2>
                <motion.p
                  style={{ color: 'var(--primary-red)', marginTop: '15px', fontSize: '15px', maxWidth: '600px', letterSpacing: '1px', textTransform: 'uppercase' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedGallery.description}
                </motion.p>
              </div>
              <button
                onClick={closeGallery}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-red)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <X size={28} />
              </button>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <MasonryGrid
                items={dummyImages}
                gap="10px"
                staggerDelay={0.1}
                renderItem={(img, i) => (
                  <img
                    src={img}
                    alt={`Gallery image ${i}`}
                    style={{ width: '100%', display: 'block', borderRadius: '8px', cursor: 'pointer' }}
                    onClick={() => setEnlargedImage(img)}
                  />
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandingCards;
