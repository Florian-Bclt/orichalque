import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Event.css'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <>
      <Navbar />
      <section className="eventContainer font__base">
        <h2>Les évènements</h2>
        <div className="eventList">
          <Link to='/events/yugioh' className="eventCardWrapper">
            <div className="eventCard">
              <h2>Tournois de Yu-Gi-Oh!</h2>
            </div>
          </Link>
          <Link to='/events/magic' className="eventCardWrapper">
            <div className="eventCard">
              <h2>Tournois de Magic!</h2>
            </div>
          </Link>
          <Link to='/events/quizz' className="eventCardWrapper">
            <div className="eventCard">
              <h2>Soirée Quizz</h2>
            </div>
          </Link>
          <Link to='/events/donjonsndragons' className="eventCardWrapper">
            <div className="eventCard">
              <h2>Donjons & Dragons</h2>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Event