import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Legacy from "./pages/Legacy"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/legacy' element={<Legacy />} />
      </Routes>
    </>
  )
}

export default App
