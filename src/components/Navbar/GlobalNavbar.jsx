import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import images from '../../constants/images'
import { Link } from 'react-router-dom';

const GlobalNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar font__base' id='#navbar'>
        <div className="app__navbar-logo">
            <Link to='/'><img src={images.logo} alt="Logo L'Orichalque Mangas" /></Link>
            L'Orichalque Mangas
        </div>
        <ul className="app__navbar-links">
            <li className="font__base"><Link to='/'>Accueil</Link></li>
        </ul>


        {/* menu pour ecran mobile */}

        <div className="app__navbar-smallscreen">
            <RxHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay'>
                    <RxCross2 fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                    <ul className='app__navbar-smallscreen_links'>
                      <li className="font__base"><Link to='/' onClick={() => setToggleMenu(false)}>Accueil</Link></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default GlobalNavbar