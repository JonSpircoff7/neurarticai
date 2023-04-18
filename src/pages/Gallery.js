import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import styled from "styled-components";
import BulbaSaur from "../assets/images/BulbasaurGiant.png";

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  margin: 40px 15%;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-width: 150px;
  min-height: 150px;
  max-width: 600px;
  max-height: 700px;
  margin: 0 auto;
  overflow: hidden;
  opacity: 0;
  grid-row-end: ${(props) => `span ${props.span}`};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Gallery = () => {
  const allImages = [    { src: BulbaSaur, alt: "Image 1" },    { src: BulbaSaur, alt: "Image 2" },    { src: BulbaSaur, alt: "Image 3" },{ src: BulbaSaur, alt: "Image 1" },    { src: BulbaSaur, alt: "Image 2" },    { src: BulbaSaur, alt: "Image 3" },{ src: BulbaSaur, alt: "Image 1" },    { src: BulbaSaur, alt: "Image 2" },    { src: BulbaSaur, alt: "Image 3" },{ src: BulbaSaur, alt: "Image 1" },    { src: BulbaSaur, alt: "Image 2" },    { src: BulbaSaur, alt: "Image 3" }];

  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 50));

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        showMoreImages();
      }
    };

    const handleOpacity = () => {
      const imageContainers = document.querySelectorAll(".image-container");
      imageContainers.forEach((imageContainer, index) => {
        const rect = imageContainer.getBoundingClientRect();
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
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
    const nextImages = allImages.slice(
      visibleImages.length,
      visibleImages.length + 10
    );
    setVisibleImages([...visibleImages, ...nextImages]);
  };

  return (
    <main className="gallery-page">
      <HeaderContainer>
        <Header title="Art Gallery" />
        <Subheader>Explore the Collection</Subheader>
      </HeaderContainer>
      <GridContainer>
        {visibleImages.map((image, index) => (
          <ImageContainer key={index} className="image-container">
            <Image src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </GridContainer>
    </main>
  );
};

export default Gallery;
