import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Inicio
      </NavLink>
      <NavLink to="/acerca" className={({ isActive }) => (isActive ? 'active' : '')}>
        Acerca
      </NavLink>
      <NavLink to="/proyecto" className={({ isActive }) => (isActive ? 'active' : '')}>
        Proyecto
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
        Favoritas
      </NavLink>
      <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active' : '')}>
        Álbumes
      </NavLink>
    </nav>
  )
}

export default Navbar
