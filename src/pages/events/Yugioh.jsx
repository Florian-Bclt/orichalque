import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const Yugioh = () => {
  const dates = [
    { date: '2024-10-26T14:30', description :'1 playmat à gagner pour le 1er -', status: '10 places disponibles (PAF 5€)'},
    { date: '2024-10-05T14:30', description :'Avant première "Rage of The Abysse" -', status: '10 places disponibles PAF 25€'},
    { date: '2024-08-24T14:30', description : '', status: 'Terminé'},
  ]

  const isEventPassed = (eventDate) => {
    const currentDate = new Date();
    const eventDateObject = new Date(eventDate);
    return eventDateObject < currentDate;
  }

  return (
    <>
      <Navbar />
      <section className="eventContainer font__base">
        <h2>Tournois de Yu-Gi-Oh!</h2>
        <div className="dates">
          <h3>Dates :</h3>
          <ul>
            {dates.map((item, index) => {
              const eventPassed = isEventPassed(item.date)
                return(
                  <li
                    key={index}
                    className={`li ${eventPassed ? 'full' : 'available'}`}
                  >
                    {new Date(item.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })} - {item.description} {eventPassed ? 'Terminé' : item.status}
                  </li>
                )
            })}
          </ul>
          <div className='subscribe'>
            <button className='subscribe'>
              <a href="https://www.facebook.com/profile.php?id=61557845821442">S'inscire du la page Facebook</a>
            </button>
          </div>
        </div>

        <div className="about">
          <h3>Comment ça se passe ?</h3>

          <p><b>Yu-Gi-Oh!</b> est un jeu de cartes à collectionner où deux joueurs s'affrontent en utilisant des decks composés de monstres, de sorts, et de pièges.</p>
          <p>L'objectif est de réduire les points de vie de l'adversaire de 8000 à 0.</p>
          <p>Chaque joueur invoque des monsters pour attaquer, défendre ou activer des effets spéciaux, tout en utilisant des cartes de sort et de piège pour prendre l'avantage.</p>
          <p>Le jeu repose sur des mécanismes comme les invocaitons normales, spéciales, ou de fusion, ainsi que des stratégies complexes basées sur les types de monstres et les combinaisons de cartes.</p>
          <p>Pour jouer il te faut un deck composé de 40 à 60 cartes autorisées et +/- un extra deck.</p>
          <p>Un duel dure 45 minutes maximum et se déroule en 2 manches gagnantes.</p>
          <p>Il y a 4 rondes dans le tournoi et des lots supplémentaires pour le vainqueur.</p>
        </div>

        <div className="links">
          <a href="https://www.youtube.com/@LOrichalqueMangasJeux-ke3nq" className="youtube">En savoir plus sur les règles <FaYoutube /></a>
          <a href="https://www.yugioh-card.com/eu/fr/play/forbidden-and-limited-list/">Liste des cartes bannies & limitées <FaExternalLinkAlt /></a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Yugioh