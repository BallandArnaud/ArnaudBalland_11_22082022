import { Link } from 'react-router-dom'
import './index.css'

function Thumb(props) {
  const { id, image, title } = props
  return (
    <Link className="thumb" to={'/logement/' + id}>
      <div className="thumb-container">
        <img className="thumb-image" src={image} alt={title} />
        <div className="thumb-overlay"></div>
        <h3 className="thumb-title">{title}</h3>
      </div>
    </Link>
  )
}

export default Thumb
