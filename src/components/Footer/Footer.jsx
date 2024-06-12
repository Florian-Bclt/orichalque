import React from 'react'
import './Footer.css'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { FaTwitch, FaFacebook,FaYoutube, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container font__base'>
      <div className="footer__container">
        <div className="footer__title">
          <img src={images.logo} alt="Logo d'Orichalque Mangas" />
          <h3>L'Orichalque Mangas</h3>
        </div>
        <div className="informations">
          <div className="social__medias">
            <a href="https://www.twitch.tv/omeetex"><FaTwitch /></a>
            <a href="https://www.facebook.com/profile.php?id=61557845821442"><FaFacebook /></a>
            <a href="https://www.youtube.com/@omeetex8608"><FaYoutube /></a>
          </div>
          <div className='legacy'>
            <Link to="/legacy">Mentions Légales</Link>
          </div>
        </div>
        <h5>Tous droits réservés <FaRegCopyright /> 2024 - L'Orichalque Mangas</h5>
        <a href="https://boucletflorian.com"><img src={images.logoFlo}  alt="Logo entreprise Bouclet Florian" />Créé par Bouclet Florian</a>
      </div>
    </div>
  )
}

export default Footer