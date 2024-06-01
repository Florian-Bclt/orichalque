import React from 'react'
import './FindUs.css'
import images from '../../constants/images'
import { IoIosInformationCircleOutline } from "react-icons/io";

const FindUs = () => {
  return (
    <div className='container font__base' id='find-us'>
      <div className="findUs__container">
        <img src={images.devanture} alt="Devanture de la boutique" />
        <div className="hours">
          <h2>Horaires</h2>
          <p><span>Mardi au Samedi :</span> 9:30 - 13:00 / 14:30 - 19:30</p>
          <p className='event'><IoIosInformationCircleOutline />Horaires variables selon évènement</p>
        </div>
        <div className="adress">
          <h2>Nous trouver</h2>
          <a href='https://www.google.fr/maps/place/284+Grande+Rue,+27310+Bourg-Achard/@49.3547132,0.8124063,17z/data=!3m1!4b1!4m6!3m5!1s0x47e102724b6fc219:0x7fd828ee201cab21!8m2!3d49.3547097!4d0.8149812!16s%2Fg%2F11cs9756t5?entry=ttu'>
            284 Grande Rue, 27310 Bourg-Achard
          </a>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5197.728996460412!2d0.8124062767786342!3d49.35471316565048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e102724b6fc219%3A0x7fd828ee201cab21!2s284%20Grande%20Rue%2C%2027310%20Bourg-Achard!5e0!3m2!1sfr!2sfr!4v1717226444436!5m2!1sfr!2sfr"
            styles="border:none;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default FindUs