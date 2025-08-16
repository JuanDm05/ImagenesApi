import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Inicio from './Inicio'
import Acerca from './Acerca'
import Proyecto from './Proyecto'
import Favorites from './Favorites'
import Albums from './Albums'
import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </>
  )
}

export default App
