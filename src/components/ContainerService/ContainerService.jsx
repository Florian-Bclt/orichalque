import React from 'react'
import './ContainerService.css'
import { TfiPackage } from "react-icons/tfi";
import { GoPackageDependencies } from "react-icons/go";
import { BsShop } from "react-icons/bs";

const ContainerService = () => {
  return (
    <div className='container font__base'>
      <div className="service__title">
        <h1>Expérience d'achat optimale avec l'Orichalque Mangas</h1>
      </div>
      <div className="container__service">
        <div className="service__list">
          <TfiPackage />
          <h2>Réception Rapide</h2>
          <p>Commandez vos articles en boutique et bénéficiez d'une réception rapide même en cas de rupture de stock !</p>
        </div>
        <div className="service__list">
          <BsShop />
          <h2>Retrait en magasin</h2>
          <p>Profitez de nos produits directement en boutique et venez boire un café !</p>
        </div>
        <div className="service__list">
          <GoPackageDependencies />
          <h2>Retours faciles</h2>
          <p>Retournez les articles éligibles à notre boutique dans les 14 jours suivant la réception.</p>
        </div>
      </div>
    </div>
  )
}

export default ContainerService