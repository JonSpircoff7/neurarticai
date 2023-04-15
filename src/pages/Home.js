import React from 'react';

import ImageGrid from '../components/ImageGrid';
import Carousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';
import styled from 'styled-components';
import { BsArrowDown } from 'react-icons/bs'; 
import BulbaSaur from "../assets/images/BulbasaurGiant.png"
import GirlAsh from "../assets/images/GirlAsh.png"
import Spoon from "../assets/images/wooden-spoons.jpg"

const HeroContainer = styled.div`
  height: 90vh;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: linear-gradient(rgba(26, 35, 60, 0.8), rgba(26, 35, 60, 0.8)), url('/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 0px 2%;
`;
const HeroHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 65px;
  color: #ffefd3;
  margin: 0;
  line-height: 120%;
`;

const ScrollDownIcon = styled(BsArrowDown)`
  font-size: 2rem;
  margin: 50px auto;
  animation: bounce 2s infinite;
  color: #ffefd3;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const Subheader = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  margin-top: 10px;
  line-height: 150%;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: left;
`;

const CTAButton = styled.button`
  background-color: #ffc49b;
  color: #1A233C;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-right: 5%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa16a;
    cursor: pointer;
  }
`;

const Section = styled.section`
  height: ${({ height }) => height || '100vh'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
`;

const Space = styled.div`
  flex: 1;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3% 0%;

  @media (max-width: 768px) {
    margin: 3% 5%;
  }
`;
const ParallaxDiv = styled.div`
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  &:nth-child(1) {
    background-image: url(${BulbaSaur});
  }

  &:nth-child(2) {
    background-image: url(${GirlAsh});
  }

  &:nth-child(3) {
    background-image: url(${Spoon});
  }

  @media (max-width: 768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      background-attachment: initial;
      background-image: none;
    }
  }
`;


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3% 10%;
  height: 400px;

  @media (max-width: 768px) {
    margin: 3% 0;
    flex-direction: column;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  box-shadow: ${({ boxShadow }) => boxShadow};

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const ContactWrapper = styled.div`
  max-width: 75%;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.5;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;

  a {
    color: inherit;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      color: #777;
    }
  }
`;


const Home = () => {
  // Replace these sample images with your actual images
  const images = [
    { src: BulbaSaur, alt: 'Image 1' },
    { src: BulbaSaur, alt: 'Image 2' },
    { src: BulbaSaur, alt: 'Image 3' },
    { src: BulbaSaur, alt: 'Image 2' },
    { src: GirlAsh, alt: 'Image 3' },
    { src: GirlAsh, alt: 'Image 2' },
    { src: GirlAsh, alt: 'Image 3' },
  ];

  return (
    <>
    <main className="home-page">
      <Section height="90vh">
        <Space />
        <HeroContainer>
        <HeroHeader>Discover a New Era of Artistic Innovation</HeroHeader>
          <Subheader>Experience the Magic of AI-Generated Artworks and Redefine Your Perception of Art</Subheader>
          <CTAContainer>
            <CTAButton>View Artwork</CTAButton>
            <CTAButton>Contact Us</CTAButton>
          </CTAContainer>
          <ScrollDownIcon />
        </HeroContainer>
        <Space />
        <ImageGrid images={images} />
        <Space />
      </Section>
      <Section id="F" height="max-content">
        <ContentWrapper>
          <Row >
            <TextWrapper>
              <p>
                With over a decade of experience in the art world, I've had the opportunity to exhibit my works in galleries and museums around
                the world. I hold a degree in Fine Arts from the University of California, Los Angeles, and I've been fortunate enough to study
                under some of the most talented artists in the field.
              </p>
            </TextWrapper>
            <ImageWrapper bgImage={BulbaSaur} boxShadow="-5px 0px 10px rgba(0, 0, 0, 0.2)" />
       
          </Row>
          <Row>
         
          <ImageWrapper bgImage={GirlAsh} boxShadow="5px 0px 10px rgba(0, 0, 0, 0.2)" />
            <TextWrapper>
              <h2>Hi there, I'm Jonathan Spircoff</h2>
              <p>
                the artist behind Neurarticai. I've always been passionate about exploring the intersection of art and technology, and
                that's why I started using the Midjourney AI image generator to create my artworks.
              </p>
            </TextWrapper>
          </Row>
          <Row>
            <TextWrapper>
              <p>
                When I discovered the potential of AI-generated art, I was immediately fascinated by its possibilities. Using the Midjourney AI
                image generator, I've been able to create stunning and thought-provoking artworks that challenge the viewer's perceptions of
                what art can be. My works explore themes of identity, memory, and the human experience, and I'm constantly pushing the
                boundaries of what's possible with this exciting new medium.
              </p>
            </TextWrapper>
            <ImageWrapper bgImage={Spoon} boxShadow="-5px 0px 10px rgba(0, 0, 0, 0.2)" />
          </Row>
        </ContentWrapper>
      </Section>
      <Section
        bgColor="#f5f5f5"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ width: '60%', maxWidth: '75%', display:"flex", justifyContent: "space-around" }}>
          <Carousel images={images} />
          <Carousel images={images} />
          <Carousel images={images} />
        </div>
        <div style={{ width: '100%', maxWidth: '60%', padding: '3% 0' }}>
          <p>
          Explore a selection of my latest AI-generated artworks in the gallery section of Neurarticai. Each piece is a unique blend of technology and artistic vision, resulting in stunning and thought-provoking works of art.
          </p>
          <p>
            I've organized the gallery into several categories to help you explore my works in more detail:
          </p>
          <h3>Landscapes</h3>
          <p>
            Experience the beauty of nature through my AI-generated landscapes. Each piece captures the essence of a particular environment, from the rolling hills of the countryside to the majestic mountains of the wilderness.
          </p>
          <h3>Portraits</h3>
          <p>
            Discover the human form through my AI-generated portraits. Each piece is a unique interpretation of the human face, capturing the emotions and expressions of the subject in a way that is both captivating and haunting.
          </p>
          <h3>Abstracts</h3>
          <p>
            Explore the world of abstract art through my AI-generated compositions. Each piece is a mesmerizing blend of color, texture, and form, inviting the viewer to get lost in a world of pure imagination.
          </p>
          <h3>Still Life</h3>
          <p>
            Appreciate the beauty of everyday objects through my AI-generated still life compositions. Each piece captures the details and nuances of the subject in a way that is both realistic and surreal.
          </p>
          <p>
            Each artwork in the gallery is accompanied by a brief description that provides some context and insight into the piece. I hope you enjoy exploring my gallery and discovering the possibilities of AI-generated art.
          </p>
          <p>
            If you're interested in purchasing any of the artworks showcased in the gallery, please don't hesitate to get in touch. I'd be more than happy to provide you with more information about pricing and shipping options.
          </p>
        </div>
      </Section>
      <Section>
        <ContactWrapper>
          <p>
            Thank you for taking the time to explore my AI-generated artworks on Neurarticai. I hope you enjoyed discovering the possibilities
            of this exciting new medium.
          </p>
          <p>
            If you'd like to stay updated on my latest works and news, please consider following me on social media. You can find me on{' '}
            <SocialLinks>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>,
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>.
            </SocialLinks>
            I'm always happy to connect with fellow art enthusiasts and share my passion for AI-generated art.
          </p>
          <p>
            And if you have any questions or would like to learn more about my work, please don't hesitate to get in touch. I'm always open to
            feedback and suggestions, and I'd love to hear from you.
          </p>
          <p>
            Thank you again for visiting Neurarticai. I hope to continue to inspire you with my AI-generated artworks in the future.
          </p>
          <CallToAction title="Get in Touch" buttonText="Contact Me" buttonLink="/contact" />
        </ContactWrapper>
      </Section>
    </main>
    </>
    );
};

export default Home;
