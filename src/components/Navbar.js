import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ isSticky }) => (isSticky ? '#fff' : 'transparent')};
  box-shadow: ${({ isSticky }) => (isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15vw;
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15vw;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-left: 40px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #222;
  }

  &.active {
    color: #ffefd3;
    background-color: #474f63;
    border-radius: 30px;
    padding: 10px 20px;
  }
`;


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 2,
      y: 20,
      opacity: 0,
      ease: 'power3.inOut',
    });

    gsap.from(navLinksRef.current.children, {
      duration: 2,
      y: 20,
      opacity: 0,
      ease: 'power3.inOut',
      stagger: 0.1,
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > window.innerHeight * 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isSticky={isSticky}>
      <LogoContainer>
        <Logo ref={logoRef}>neurarticai</Logo>
      </LogoContainer>
      <NavLinksContainer ref={navLinksRef}>
        <NavLinkStyled exact to="/">
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/gallery">Gallery</NavLinkStyled>
        <NavLinkStyled to="/about">About</NavLinkStyled>
        <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        <NavLinkStyled to="/additional">Additional Page</NavLinkStyled>
      </NavLinksContainer>
    </NavbarContainer>
  );
}

export default Navbar;