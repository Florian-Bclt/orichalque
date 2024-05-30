// LandingPage.jsx
import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import Promobar from '../components/promobar/Promobar';
import HeroSection from '../components/HeroSection/HeroSection';

const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Promobar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
