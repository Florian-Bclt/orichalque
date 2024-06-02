import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Legacy from "./pages/Legacy"
import ProductsCarousel from "./pages/Products"
import Services from "./pages/Services"
import FindUs from "./components/FindUs/FindUs"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<ProductsCarousel />} />
        <Route path='/services' element={<Services />} />
        <Route path='/find-us' element={<FindUs />} />
        <Route path='/legacy' element={<Legacy />} />
      </Routes>
    </>
  )
}

export default App
