import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;

const LargeImageContainer = styled.div`
  height: 500px;
  background-color: #f5f5f5;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    top: 0;
    left: 0;
    border-width: 0 20px 30px 0;
    border-color: transparent #f5f5f5 transparent transparent;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-width: 30px 0 0 20px;
    border-color: transparent transparent transparent #f5f5f5;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SmallImageItem = styled.div`
  height: 240px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    top: 0;
    left: 0;
    border-width: 0 20px 30px 0;
    border-color: transparent #f5f5f5 transparent transparent;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-width: 30px 0 0 20px;
    border-color: transparent transparent transparent #f5f5f5;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .hover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }

    p {
      font-size: 14px;
      margin: 0;
    }
  }

  &:hover .hover-content {
    opacity: 1;
  }
`;

const ImageGrid = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <ImageGridContainer>
      <LargeImageContainer>
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
      </LargeImageContainer>
      <SmallImagesContainer>
        <SmallImageItem>
          <img src={images[(currentImageIndex + 1) % images.length].src} alt={images[(currentImageIndex + 1) % images.length].alt} />
        </SmallImageItem>
        <SmallImageItem>
          <img src={images[(currentImageIndex + 2) % images.length].src} alt={images[(currentImageIndex + 2) % images.length].alt} />
        </SmallImageItem>
      </SmallImagesContainer>
    </ImageGridContainer>
  );
};

export default ImageGrid;
