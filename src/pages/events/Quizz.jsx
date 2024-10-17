import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const Quizz = () => {
  const dates = [
    { date: '2024-10-18T20:00:00', description: '(En duo) Thème : Disney / Pixar -', status: '10 places disponibles'},
    { date: '2024-08-17T20:00:00', description: '(En duo) Thème : Les mangas -', status: 'Terminé'},
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
        <h2>Soirée Quizz</h2>
        <div className="dates">
          <h3>Dates :</h3>
          <ul>
            {dates.map((item, index) => {
              const eventPassed = isEventPassed(item.date)
              return (
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

          <p>Pour jouer il suffit simplement de t'inscrire en duo. Le Duo vainqueur repartira avec un lot de cadeaux offert par la boutique.</p>
        </div>

        {/* <div className="links">
          <a href="https://www.youtube.com/@LOrichalqueMangasJeux-ke3nq" className="youtube">En savoir plus sur les règles <FaYoutube /></a>
          <a href="https://www.yugioh-card.com/eu/fr/play/forbidden-and-limited-list/">Liste des cartes bannies & limitées <FaExternalLinkAlt /></a>
        </div> */}
      </section>
      <Footer />
    </>
  )
}

export default Quizz