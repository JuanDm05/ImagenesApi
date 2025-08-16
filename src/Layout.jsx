import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Breadcrumbs from './Breadcrumbs'

const Layout = () => {
  return (
    <>
      <header className="header">
        <h1>Mi Blog</h1>
      </header>

      <Navbar />
      <Breadcrumbs />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2025 Mi Blog - Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default Layout
