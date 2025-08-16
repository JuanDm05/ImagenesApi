import { photos } from './data'

const Favorites = () => {
  const favs = photos.filter(p => p.isFavorite)
  return (
    <div>
      <h2>Favoritas</h2>
      <div className="grid">
        {favs.length === 0 ? (
          <p>No tienes fotos favoritas.</p>
        ) : (
          favs.map(photo => (
            <div key={photo.id} className="card">
              <img src={photo.url} alt={photo.title} />
              <h4>{photo.title}</h4>
              <p>{photo.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Favorites
