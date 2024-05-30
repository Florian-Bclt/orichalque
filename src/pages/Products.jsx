import React from 'react';
import './Products.css';
import Caroussel from '../components/Caroussel/Caroussel';


const ProductsCarousel = () => {

  return (
    <div className='container font__base'>
      <div className="products">
        <Caroussel />
      </div>
    </div>
  );
};

export default ProductsCarousel;
