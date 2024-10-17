import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaYoutube, FaExternalLinkAlt, FaTwitch } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const DnD = () => {
  const dates = [
    { date: 'En boutique : le mercredi 14:00 - 15:00 ou 16:00 - 17:00', status: ''},
    { date: 'En live : un vendredi soir sur deux - ', status: "En Octobre nouvelle campagne : L'Obélisque Brisé"},
  ]
  
  return (
    <>
      <Navbar />
      <section className="eventContainer font__base">
        <h2>Donjons & Dragons</h2>
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

          <p><b>Donjons & Dragons (D&D)</b> est un jeu de rôle (RPG) où les joueurs créent des personnages imaginaires et partent à l'aventure dans un monde fantastique sous la direction d'un Maître du Jeu (MJ)</p>
          <p>Chaque joueur choisit une classe (guerrier, magicien, voleur, barbare, etc.) et utilise des dés, en particulier le dé à 20 faces, pour déterminer le succès de ses actions.</p>
          <p>Les joueurs résolvent des énigmes, combattent des créatures, et explorent des donjons, tout en vivant des histoires épiques.</p>
          <p>Le MJ guide l'histoire, créant des scénarios et incarnant les personnages non-joueurs.</p>
          <p>D&D est un jeu collaboratif où l'imaginaire et la narraiton sont au coeur de l'expérience.</p><br />

          <p><b>Tout le matériel <i>(set de dés, fiches de personnages, etc..)</i> vous serons fournis pour pouvoir jouer à la boutique.</b></p>
        </div>

        <div className="links">
          <a href="https://www.twitch.tv/omeetex/videos" className="twitch">Découvre nos lives réguliers <FaTwitch /></a>
          <a href="https://www.youtube.com/watch?v=0WH1SiTu8Ps" className="youtube">Regarde nos dernières aventures ! <FaYoutube /></a>
          <a href="https://dnd.wizards.com/fr">En savoir plus sur les règles <FaExternalLinkAlt /></a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DnD