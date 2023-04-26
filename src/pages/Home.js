import { React, useRef, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';
import styled from 'styled-components';
import { BsArrowDown } from 'react-icons/bs';
import BulbaSaur from '../assets/images/fun.jpg';
import GirlAsh from '../assets/images/GirlAsh.png';

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = lazy(() => import('../components/ImageGrid'));

const HeroContainer = styled.div`
  height: 100vh;
  width: 650px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
  padding-bottom: 20px;
`;

const CTAButton = styled.button`
  background-color: #ffc49b;
  color: #1A233C;
  border: none;
  border-radius: 50px;
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
  &:nth-of-type(1) {
    height: 90vh;
    background-size: contain;
    background-position: center;
  }
  &:nth-of-type(2) {
    background-color: #ffa16a;
    overflow-x: hidden;
  }
`;

const Space = styled.div`
  flex: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3% 5%;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }

  & > div:nth-child(2) > div:first-child {
    max-width: 20%;
    
  }

  & > div:nth-child(2) > div:last-child {
    max-width: 45%;
    margin-left: 15%;
    
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    margin: 3% 0;
    flex-direction: column;
    height: auto;
  }

  & > div {
    flex: 1;
    height: 75%;
  }

  & > div:first-child {
    max-width: 45%;
    margin-right: 5%;
    line-height: 35px;
  }

  & > div:last-child {
    max-width: 20%;
    margin-left: 15%;
    text-align: left
  }
`
const TextWrapper = styled.div`
  max-width: 20%;
  text-align: left;
  font-size: 18px;
  display:flex;
  align-items: center;
  margin: 0 auto; // Add this line

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }

  max-width: 300px;

  &:nth-child(2) {
    text-align: right;
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
  max-width: 45%;

  @media (max-width: 768px) {
    display: none;
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

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const artStyleRef = useRef(null);
  const carouselRef = useRef(null);
  const contactWrapperRef = useRef(null);
  const landscapeRef = useRef(null);
  const contactRef = useRef(null);
  
  const heroContainerRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(heroContainerRef.current.children, {
      duration: 2,
      opacity: 0,
      y: 20,
      stagger: 0.3,
      ease: "power3.out",
      delay: .5,
    });
    
    gsap.from(image1Ref.current, {
      scrollTrigger: {
        trigger: image1Ref.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      x: '-100%',
      opacity: 0,
    });
  
    gsap.from(image2Ref.current, {
      scrollTrigger: {
        trigger: image2Ref.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      x: '100%',
      opacity: 0,
    });
  
    gsap.from(image3Ref.current, {
      scrollTrigger: {
        trigger: image3Ref.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      x: '-100%',
      opacity: 0,
    });
    gsap.from(text1Ref.current, {
  scrollTrigger: {
    trigger: text1Ref.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  x: '100%',
  opacity: 0,
});

gsap.from(text2Ref.current, {
  scrollTrigger: {
    trigger: text2Ref.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  x: '-100%',
  opacity: 0,
});

gsap.from(text3Ref.current, {
  scrollTrigger: {
    trigger: text3Ref.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  x: '100%',
  opacity: 0,
});
gsap.from(artStyleRef.current, {
  scrollTrigger: {
    trigger: landscapeRef.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  duration: 2.5,
  y: 50,
  opacity: 0,
});

gsap.from(carouselRef.current, {
  scrollTrigger: {
    trigger: carouselRef.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  duration: 2.5, // Increased duration
  y: 20,
  opacity: 0 // Added ease
});

gsap.from(contactWrapperRef.current, {
  scrollTrigger: {
    trigger: contactRef.current,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
  },
  duration: 1.5, // Increased duration
  y: 20,
  opacity: 0, // Added ease
});
  }, []);
  return (
    <>
    <main className="home-page">
      <Section height="90vh">
        <Space />
       <HeroContainer ref={heroContainerRef}>
        <HeroHeader>Discover a New Era of Artistic Innovation</HeroHeader>
          <Subheader>Experience the Magic of AI-Generated Artworks and Redefine Your Perception of Art</Subheader>
          <CTAContainer>
            <CTAButton>View Artwork</CTAButton>
            <CTAButton>Contact Us</CTAButton>
          </CTAContainer>
          <ScrollDownIcon />
        </HeroContainer>
        <Space />
          <Suspense fallback={<div>Loading...</div>}>
            <ImageGrid images={images} />
          </Suspense>
          <Space />
        </Section>
      <Section id="F" height="max-content">
        <ContentWrapper>
          <Row >
            <ImageWrapper ref={image1Ref} bgImage={BulbaSaur} boxShadow="-5px 0px 10px rgba(0, 0, 0, 0.2)" />
            <TextWrapper ref={text1Ref}>
              <p>
                With over a decade of experience in the art world, I've had the opportunity to exhibit my works in galleries and museums around
                the world. I hold a degree in Fine Arts from the University of California, Los Angeles, and I've been fortunate enough to study
                under some of the most talented artists in the field.
              </p>
            </TextWrapper>
       
          </Row>
          <Row>
            <TextWrapper ref={text2Ref}>
              <p>
                the artist behind Neurarticai. I've always been passionate about exploring the intersection of art and technology, and
                that's why I started using the Midjourney AI image generator to create my artworks.
              </p>
            </TextWrapper>
          <ImageWrapper ref={image2Ref} bgImage={GirlAsh} boxShadow="5px 0px 10px rgba(0, 0, 0, 0.2)" />
          </Row>
          <Row>
            <ImageWrapper ref={image3Ref} bgImage={GirlAsh} boxShadow="-5px 0px 10px rgba(0, 0, 0, 0.2)" />
            <TextWrapper ref={text3Ref}>
              <p>
                When I discovered the potential of AI-generated art, I was immediately fascinated by its possibilities. Using the Midjourney AI
                image generator, I've been able to create stunning and thought-provoking artworks that challenge the viewer's perceptions of
                what art can be. My works explore themes of identity, memory, and the human experience, and I'm constantly pushing the
                boundaries of what's possible with this exciting new medium.
              </p>
            </TextWrapper>
          </Row>
        </ContentWrapper>
      </Section>
      <Section
  bgColor="#f5f5f5"
  style={{
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    position: 'relative',
  }}
>
  <div style={{width: '45%',
    maxWidth: '60%',
    textAlign: 'center',
    padding: '5%' }} ref={artStyleRef}>
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
    <h3 ref={landscapeRef}>Portraits</h3>
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
  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'space-around', width: '80%' }} ref={carouselRef}>
    <Carousel images={images} />
    <Carousel images={images} />
    <Carousel images={images} />
  </div>
</Section>

      <Section>
        <ContactWrapper ref={contactWrapperRef}>
          <p>
            Thank you for taking the time to explore my AI-generated artworks on Neurarticai. I hope you enjoyed discovering the possibilities
            of this exciting new medium.
          </p>
          <p ref={contactRef}>
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