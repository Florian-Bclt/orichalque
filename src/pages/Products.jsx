import React from 'react';
import './Products.css';
import Caroussel from '../components/Caroussel/Caroussel';
import { LuExternalLink } from "react-icons/lu";


const ProductsCarousel = () => {

  return (
    <div className='container font__base' id='products'>
      <div className="products">
        <Caroussel />
          <a id='products-link' href="https://www.facebook.com/profile.php?id=61560521378808">
          En savoir plus
          <LuExternalLink />
          </a>
      </div>
    </div>
  );
};

export default ProductsCarousel;
