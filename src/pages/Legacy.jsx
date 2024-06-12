import React from 'react'
import GlobalNavbar from '../components/Navbar/GlobalNavbar'
import './Legacy.css'
import Footer from '../components/Footer/Footer'

const Legacy = () => {
  return (
    <div className='container font__base'>
      <GlobalNavbar />
      <div className="legacy__container">
        <h1>Mentions légales</h1>
        <div className="legacy__container-subtitle">
          <h3>Editeur</h3>
          <p>Le site est édité par L'Orichalque, société au capitale sociale de 1000€,<br/>
              dont le siège social est situé au 284 Grande Rue, 27310 Bourg-Achard</p>
          <p>N° SIRET : 987 777 232 000 16</p>
          <p>Téléphone : 02 32 41 40 83</p>

          <h3>Conception / Réalisation / Hébergement</h3>
           <p>Réalisé par <a href='https://boucletflorian.com/'>Bouclet Florian</a>,
            <br />hébergé par Netlify Inc,
            <br />Siège social: 2325 3rd Street, Suite 296, San Francisco, California 94107
          </p>
          <h3>Propriété intellectuelle</h3>
          <p>La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de Bouclet Florian. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de Bouclet Florian est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Legacy