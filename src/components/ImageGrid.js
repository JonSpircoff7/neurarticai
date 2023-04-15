import React from 'react';
import "../styles/components/ImageGrid.scss";

const getRandomSizeValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => {
        const randomWidth = getRandomSizeValue(100, 300);
        const randomHeight = getRandomSizeValue(100, 300);
        return (
          <div key={index} className="image-grid-item" style={{ width: randomWidth, height: randomHeight }}>
            <img src={image.src} alt={image.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
