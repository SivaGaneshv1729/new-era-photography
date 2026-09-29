import React from 'react';

const categories = [
  'Product Photography',
  'Wedding',
  'Wildlife',
  'Fashion',
  'Editorial',
  'Portrait',
  'Automotive',
  'Architecture'
];

const PromoMarquee = () => {
  return (
    <div className="promo-container">
      <div className="promo-marquee">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {categories.map((cat, idx) => (
                <React.Fragment key={idx}>
                  <span className="marquee-title">{cat}</span>
                  <span className="marquee-sep">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoMarquee;
