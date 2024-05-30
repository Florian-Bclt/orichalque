import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// Import Swiper styles
import './Caroussel.css';

// Import images
import images from '../../constants/images';

const Caroussel = () => {
  return (
      <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
          
          >
          <SwiperSlide>
            <div className="container__card">
              <div className="content">
                <img src={images.golden} alt="Golden Egg" />
                <h3>Figurines</h3>
                <h5>De nombreux produits dérivés</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="container__card">
              <div className="content">
                <img src={images.DG} alt="D&G" />
                <h3>Extensions de jeux</h3>
                <h5>Vivez les plus grandes aventures</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container__card">
              <div className="content">
                <img src={images.jeux} alt="Jeux" />
                <h3>Jeux de société</h3>
                <h5>Amusez vous avec vos proches</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="container__card">
                <div className="content">
                  <img src={images.mangas} alt="Mangas" />  
                  <h3>Mangas</h3>
                  <h5>Une large séléction rien que pour vous</h5>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container__card">
              <div className="content">
                <img src={images.yugi} alt="Yugi" />
                <h3>Cartes à jouer</h3>
                <h5>Retrouvez tous les accessoires nécessaires</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
  );
};

export default Caroussel;
