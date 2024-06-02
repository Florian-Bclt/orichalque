import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import images from '../../constants/images'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar font__base' id='#navbar'>
        <div className="app__navbar-logo">
            <Link to='/'><img src={images.logo} alt="Logo L'Orichalque Mangas" /></Link>
            L'Orichalque Mangas
        </div>
        <ul className="app__navbar-links">
            <li className="font__base"><a href='#promobar'>Accueil</a></li>
            <li className="font__base"><a href='#products'>Produits</a></li>
            <li className="font__base"><a href='#services'>Services</a></li>
            <li className="font__base"><a href='#find-us'>Nous trouver</a></li>
        </ul>


        {/* menu pour ecran mobile */}

        <div className="app__navbar-smallscreen">
            <RxHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay'>
                    <RxCross2 fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                    <ul className='app__navbar-smallscreen_links'>
                      <li className="font__base"><a href='#promobar' onClick={() => setToggleMenu(false)}>Accueil</a></li>
                      <li className="font__base"><a href='#products' onClick={() => setToggleMenu(false)}>Produits</a></li>
                      <li className="font__base"><a href='#services' onClick={() => setToggleMenu(false)}>Services</a></li>
                      <li className="font__base"><a href='#find-us' onClick={() => setToggleMenu(false)}>Nous trouver</a></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar