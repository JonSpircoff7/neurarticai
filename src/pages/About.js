import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import profilePic from "../assets/images/JonathanSpircoff.jpg";
import gsap from "gsap";

const AboutPage = styled.main`
  height: 100vh;
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
  width: 50%;
`;

const ImagesContainer = styled.div`
width: 800px;
max-width: 500px;
`;
const AboutImage = styled.img`
width: 100%;
height: 800px;
max-height: 80vh;
object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
  max-width: 500px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
  color: #2c3e50;
`;


const About = () => {
  const aboutContents = [    {      text:        "Jonathan Spircoff is an artist and designer based in New York City. With a passion for creating visually striking images, Jonathan has developed a unique style that combines traditional art techniques with digital tools.",      image: { src: profilePic, alt: "Sketchbook" },    },    {      text:        "Jonathan's work is inspired by nature, music, and the beauty of the world around us. He draws on a wide range of influences, from classic painters to modern design trends, to create art that is both timeless and contemporary.",      image: { src: profilePic, alt: "Paintbrush" },    },    {      text:        "In addition to creating art, Jonathan is also passionate about sharing his knowledge and helping others develop their own creative skills. He has taught art classes at the college level and works with local schools and community groups to promote arts education.",      image: { src: profilePic, alt: "Easel" },    },  ];
  const textContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    gsap.from(imagesContainerRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <AboutPage>
      <AboutContent>
        <ImagesContainer ref={imagesContainerRef}>
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

