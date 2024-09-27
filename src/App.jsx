import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Legacy from "./pages/Legacy"
import ProductsCarousel from "./pages/Products"
import Services from "./pages/Services"
import FindUs from "./components/FindUs/FindUs"
import Event from "./pages/Event"
import Yugioh from './pages/events/Yugioh'
import Magic from './pages/events/Magic'
import Quizz from './pages/events/Quizz'
import DnD from './pages/events/DnD'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<ProductsCarousel />} />
        <Route path='/services' element={<Services />} />
        <Route path='/find-us' element={<FindUs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events/yugioh" element={<Yugioh />} />
        <Route path="/events/magic" element={<Magic />} />
        <Route path="/events/quizz" element={<Quizz />} />
        <Route path='/events/donjonsndragons' element={<DnD />} />
        <Route path='/legacy' element={<Legacy />} />
      </Routes>
    </>
  )
}

export default App
