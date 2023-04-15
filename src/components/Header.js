import React from 'react';
import "../styles/components/Header.scss"

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <h2 className="header-subtitle">{subtitle}</h2>
    </header>
  );
};

export default Header;
