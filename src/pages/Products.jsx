import React from 'react';
import './Products.css';
import Caroussel from '../components/Caroussel/Caroussel';


const ProductsCarousel = () => {

  return (
    <div className='container font__base' id='products'>
      <div className="products">
        <Caroussel />
      </div>
    </div>
  );
};

export default ProductsCarousel;
