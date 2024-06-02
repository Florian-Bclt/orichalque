import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import Promobar from '../components/promobar/Promobar';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductsCarousel from './Products';
import Services from './Services'
import FindUs from '../components/FindUs/FindUs';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="container">
        <Navbar />
        <Promobar />
        <HeroSection />
        <ProductsCarousel />
        <Services />
        <FindUs />
        <Footer />
    </div>
  );
};

export default LandingPage;
