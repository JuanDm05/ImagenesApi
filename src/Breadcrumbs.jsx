import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)

  return (
    <div className="breadcrumbs">
      <Link to="/">Inicio</Link>
      {pathnames.map((name, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`
        return (
          <span key={index}> &gt; <Link to={path}>{name}</Link></span>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
