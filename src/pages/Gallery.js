import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import styled from "styled-components";
import Masonry from 'react-masonry-css';

const images = require.context("../assets/images", true, /\.(png|jpe?g|svg|webp)$/);


const HeaderContainer = styled.header`
  color: black;
  font-weight: 600;
  padding: 30px;
  text-align: center;
`;

const Subheader = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-top: 10px;
`;

const GridContainer = styled(Masonry)`
  display: flex;
  margin: 0 auto;
  width: 55%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  opacity: 0;
  padding: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  const allImages = images.keys().map((imagePath) => {
    const imageName = imagePath.slice(2);
    return {
      src: `/api/processImage/${imageName}?format=webp`,
      alt: imageName.slice(0, -4),
    };
  });

  const shuffledImages = allImages.sort(() => Math.random() - 0.5);

  const initialImagesCount = Math.ceil((window.innerHeight * 10) / 250) * 3;
  const [visibleImages, setVisibleImages] = useState(shuffledImages.slice(0, initialImagesCount));

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        showMoreImages();
      }
    };
    console.log("All images:", allImages);
    const handleOpacity = () => {
      const imageContainers = document.querySelectorAll(".image-container");
      imageContainers.forEach((imageContainer, index) => {
        const rect = imageContainer.getBoundingClientRect();
        const halfPage = window.innerHeight / 2;
        if (
          rect.top < window.innerHeight + halfPage &&
          rect.bottom > -halfPage &&
          !imageContainer.classList.contains("visible")
        ) {
          gsap.to(imageContainer, {
            duration: 0.25,
            opacity: 1,
            x: 0,
            delay: index * 0.1,
          });
          imageContainer.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", handleOpacity);
    handleOpacity();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleOpacity);
    };
  }, []);

  const showMoreImages = () => {
  // Check if there are more images to load
  if (visibleImages.length < shuffledImages.length) {
    const nextImages = shuffledImages.slice(
      visibleImages.length,
      visibleImages.length + 10 // Change this number to load more or fewer images
    );
    setVisibleImages([...visibleImages, ...nextImages]);
  }
};


  return (
    <main className="gallery-page">
      <HeaderContainer>
        <Header title="Art Gallery" />
        <Subheader>Explore the Collection</Subheader>
      </HeaderContainer>
      <GridContainer
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {visibleImages.map((image, index) => (
          <ImageContainer
            key={index}
            className="image-container"
            style={{
              gridRowEnd: `span ${Math.ceil(image.height / 10)}`
            }}>
            <Image src={image.src} alt={image.alt} loading="lazy"/>
          </ImageContainer>
        ))}
      </GridContainer>
    </main>
  );
};


export default Gallery;