import Thumb from '../Thumb'
import './index.css'

function Gallery(props) {
  const { logements } = props
  if (!logements) {
    return null
  }
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Thumb
          key={logement.id}
          id={logement.id}
          title={logement.title}
          image={logement.cover}
        />
      ))}
    </div>
  )
}

export default Gallery
