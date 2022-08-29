import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

function Logement() {
  const [logements, setLogements] = useState([])
  const { logementId } = useParams()

  useEffect(() => {
    fetch('http://localhost:3000/logements.json')
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch((err) => console.log('Erreur : ', err))
  }, [])

  console.log('logementId', logementId)
  console.log('logements', logements)

  const currentLogement = logements.find((data) => data.id === logementId)
  console.log(currentLogement)

  return (
    <div className="logement">
      <h1>Page logement</h1>
      {/* <p>{currentLogement.title}</p>
      <img src={currentLogement.cover} alt={currentLogement.title} /> */}
    </div>
  )
}

export default Logement
