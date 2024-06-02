import React, { useState, useRef } from 'react';
import './HeroSection.css';
import video from '../../constants/video';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className='app__hero-section font__base' id='hero-section'>
      <div className="app__video">
        <video
          src={video.herovideo}
          ref={videoRef}
          type='video/mp4'
          loop
          muted
          autoPlay
        />
        <div className="app__video-overlay font__base">
          <div className="CTA">
            <h2>Boutique de jeux</h2>
            <h1>L'Orichalque Mangas</h1>
            <h3>La passion du jeu</h3>
            <button><a href="#services">Découvrir</a></button>
          </div>
          <div className="app__video-overlay_circle" onClick={handleVideo}>
            {playVideo 
              ? <BsPauseFill color='#fff' fontSize={30} />
              : <BsFillPlayFill color='#fff' fontSize={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
