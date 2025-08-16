import { photos } from './data'

const Albums = () => {
  const categories = [...new Set(photos.map(p => p.category))]
  return (
    <div>
      <h2>Álbumes</h2>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="grid">
            {photos
              .filter(p => p.category === cat)
              .map(photo => (
                <div key={photo.id} className="card">
                  <img src={photo.url} alt={photo.title} />
                  <h4>{photo.title}</h4>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Albums
