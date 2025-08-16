import { photos } from '../data'

const Home = () => {
  return (
    <div>
      <h2>Galería de Fotos</h2>
      <div className="grid">
        {photos.map(photo => (
          <div key={photo.id} className="card">
            <img src={photo.url} alt={photo.title} />
            <h4>{photo.title}</h4>
            <p>{photo.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
