import React from 'react';
import './App.scss';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import AdditionalPage from './pages/AdditionalPage';
import './styles/components/PageWrapper.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content" style={{ minHeight: 'calc(100vh - 136px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additional" element={<AdditionalPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
