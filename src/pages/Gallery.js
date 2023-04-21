import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const images = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);

const HeaderContainer = styled.header`
  color: #ffefd3;
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
  width: 65%;
  margin-top: 40px;
  margin-bottom: 40px;
  grid-auto-flow: row;
  grid-gap: 15px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(70%);
  }
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;
const DownloadButton = styled.a`
  position: absolute;
  bottom: 25px;
  right: 25px;
  color: black;
  background-color: white;
  border: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1em;
  height: 1em;
`;

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  const allImages = images.keys().map((imagePath) => {
    return {
      src: images(imagePath),
      alt: imagePath.slice(2, -4),
    };
  });

  // Randomize the order of images
  const shuffledImages = allImages.sort(() => Math.random() - 0.5);
  const [visibleImages, setVisibleImages] = useState(shuffledImages);
  const [loadedImages, setLoadedImages] = useState(shuffledImages.length > 15 ? 15 : shuffledImages.length);
  

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        loadedImages < shuffledImages.length
      ) {
        showMoreImages();
      }
    };
  
    const handleOpacity = () => {
      const imageContainers = document.querySelectorAll(".image-container");
      let row = 0;
      let rowTop = null;
      let timeline = null;
      
      imageContainers.forEach((imageContainer, index) => {
        const rect = imageContainer.getBoundingClientRect();
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          !imageContainer.classList.contains("visible")
        ) {
          // Calculate the row number and top position of the row
          if (rowTop === null || rect.top >= rowTop) {
            row++;
            rowTop = rect.top;
            timeline = gsap.timeline();
          }
    
          // Add the image to the timeline with a delay based on its index
          timeline.to(imageContainer, {
            duration: 1,
            opacity: 1,
            x: 0,
            delay: index * 0.1,
          });
    
          // Mark the image container as visible
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
  }, [loadedImages, [shuffledImages.length]]);
  

  const showMoreImages = () => {
    const nextImages = shuffledImages.slice(
      loadedImages,
      loadedImages + 10
    );
    setVisibleImages([...visibleImages, ...nextImages]);
    setLoadedImages(loadedImages + 10);
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
    }}
  >
    <Image src={image.src} alt={image.alt} />
    <DownloadButton href={image.src} download={`${image.alt}.jpg`}>
  <Icon icon={faDownload} />
</DownloadButton>
  </ImageContainer>
))}

      </GridContainer>
    </main>
  );
};

export default Gallery;
