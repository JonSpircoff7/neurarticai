import React from 'react';
import "../styles/components/InfoSection.scss"

const InfoSection = ({ contents }) => {
  return (
    <section className="info-section">
      {contents.map((content, index) => (
        <div key={index} className={`info-section-item ${index % 2 === 0 ? 'text-image' : 'image-text'}`}>
          <div className="info-section-item-text">{content.text}</div>
          <img src={content.image.src} alt={content.image.alt} />
        </div>
      ))}
    </section>
  );
};

export default InfoSection;

