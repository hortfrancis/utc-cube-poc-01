import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AugmentedReality from './pages/AugmentedReality'
import SmartCities from './pages/SmartCities'
import Construction from './pages/Construction'
import PopUp from './pages/PopUp'
import Heritage from './pages/Heritage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/augmented-reality" element={<AugmentedReality />} />
        <Route path="/smart-cities" element={<SmartCities />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/pop-up" element={<PopUp />} />
        <Route path="/heritage" element={<Heritage />} />
      </Routes>
    </Router>
  )
}

export default App
