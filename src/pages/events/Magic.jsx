import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const Magic = () => {
  const dates = [
    { date: 'Vendredi 4 octobre : 18h00 -', status: '10 places disponibles'},
  ]
  
  return (
    <>
      <Navbar />
      <section className="eventContainer font__base">
        <h2>Tournois de Magic!</h2>
        <div className="dates">
          <h3>Dates :</h3>
          <ul>
            {dates.map((item, index) => (
              <li
                key={index}
                className={`li ${item.status === 'Complet' ? 'full' : 'available'}`}
              >
                {item.date} {item.status}
              </li>
            ))}
          </ul>
          <div className='subscribe'>
            <button className='subscribe'>
              <a href="https://www.facebook.com/profile.php?id=61557845821442">S'inscire du la page Facebook</a>
            </button>
          </div>
        </div>

        <div className="about">
          <h3>Comment ça se passe ?</h3>

          <p><b>Magic: The Gathering</b> est un jeu de cartes à collectionner où deux joueurs s'affrontent en tant que puissants sorciers, appelés "planeswalkers". <br/>
            Chaque joueur utilise un deck de cartes représentant des sorts, des créatures, et des artefacts pour réduire les points de vie de son adversaire de 20 à 0. <br/>
            Les cartes ont 5 couleurs de mana <i>(blanc, bleu, noir, rouge et vert)</i>, chacune ayant des styles de jeu et des stratégies uniques. <br />
            Les joueurs doivent gérer leurs ressources (le mana) pour invoquer des créatures, lancer des sorts, et tenter de prendre l'avantage sur l'autre.
          </p>  
          <p>Le jeu combine stratégie, chance et collection de cartes, offrant des possibilités infinies de personnalisation de decks.</p>
        </div>

        <div className="links">
          <a href="https://www.youtube.com/watch?v=0WH1SiTu8Ps" className="youtube">En savoir plus sur les règles <FaYoutube /></a>
          <a href="https://magic.wizards.com/fr/banned-restricted-list">Liste des cartes bannies & limitées <FaExternalLinkAlt /></a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Magic