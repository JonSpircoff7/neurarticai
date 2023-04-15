import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import BulbaSaur from "../assets/images/BulbasaurGiant.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const AboutTitle = styled(Header)`
  margin-bottom: 60px;
  font-size: 48px;
  color: #34495e;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  width: 80%;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  gap: 20px;
  position: relative;
`;
const AboutImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const AboutImageRight = styled(AboutImage)`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
  color: #2c3e50;
`;
const IntroText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 10px;
`;

const About = () => {
  const aboutContents = [    {      text:        "Jonathan Spircoff is an artist and designer based in New York City. With a passion for creating visually striking images, Jonathan has developed a unique style that combines traditional art techniques with digital tools.",      image: { src: BulbaSaur, alt: "Sketchbook" },    },    {      text:        "Jonathan's work is inspired by nature, music, and the beauty of the world around us. He draws on a wide range of influences, from classic painters to modern design trends, to create art that is both timeless and contemporary.",      image: { src: BulbaSaur, alt: "Paintbrush" },    },    {      text:        "In addition to creating art, Jonathan is also passionate about sharing his knowledge and helping others develop their own creative skills. He has taught art classes at the college level and works with local schools and community groups to promote arts education.",      image: { src: BulbaSaur, alt: "Easel" },    },  ];
  const textContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(textContainerRef.current, {
      duration: 1,
      y: 25,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top bottom-=200",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  
    gsap.from(imagesContainerRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imagesContainerRef.current,
        start: "top bottom-=200",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <AboutPage>
      <AboutContent>
        <ImagesContainer ref={imagesContainerRef}>
          <AboutImage
            src={aboutContents[0].image.src}
            alt={aboutContents[0].image.alt}
          />
          <AboutImageRight
            src={aboutContents[1].image.src}
            alt={aboutContents[1].image.alt}
          />
          <AboutImage
            src={aboutContents[2].image.src}
            alt={aboutContents[2].image.alt}
          />
        </ImagesContainer>
        <TextContainer ref={textContainerRef}>
          <AboutTitle title="About Me" subtitle="Jonathan Spircoff" />
          {aboutContents.map(({ text }, index) => (
            <AboutText key={index}>{text}</AboutText>
          ))}
        </TextContainer>
      </AboutContent>
    </AboutPage>
  );

};

export default About;
