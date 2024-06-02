import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, EffectCreative, EffectFade, EffectFlip, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Caroussel.css';
import images from '../../constants/images';
import { effectTarget, effectVirtualTransitionEnd } from 'swiper/effect-utils';

const Caroussel = () => {
  return (
      <Swiper
          modules={[Pagination, EffectCoverflow]}
          effect='coverflow'
          spaceBetween={10}
          coverflowEffect={{
            rotate: -10,
            stretch: 0,
            depth: 0,
            modifier: 2,
            slideShadows: false
          }}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1064: { slidesPerView: 3 }
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
                <img src={images.pop} alt="pop" />
                <h3>Figurines Pop!</h3>
                <h5>Tous les univers disponibles !</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="container__card">
                <div className="content">
                  <img src={images.manga} alt="Mangas" />  
                  <h3>Mangas</h3>
                  <h5>Une large collection rien que pour vous</h5>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container__card">
              <div className="content">
                <img src={images.yugi} alt="Yugi" />
                <h3>Cartes à jouer</h3>
                <h5>Retrouvez tous les accessoires et boosters</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container__card">
              <div className="content">
                <img src={images.affiche} alt="affiche" />
                <h3>Affiches cultes</h3>
                <h5>Les affiches de vos héros favoris</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
  );
};

export default Caroussel;
