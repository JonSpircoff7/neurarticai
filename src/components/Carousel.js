import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../styles/components/Carousel.scss"

const CustomCarousel = ({ images }) => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
