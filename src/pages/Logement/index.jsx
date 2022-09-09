import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import './index.css'
import Accordion from '../../components/Accordion'
import Rating from '../../components/Rating'
import Slider from '../../components/Slider'
import Tag from '../../components/Tag'

function Logement() {
  const [logement, setLogement] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const { logementId } = useParams()

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((res) => {
        setLogement(res.find((data) => data.id === logementId))
        setLoading(false)
      })
      .catch((err) => console.log('Erreur : ', err))
  }, [logementId])

  if (isLoading) {
    return null
  }

  if (!logement) {
    return <Navigate to="/error" />
  }

  const hostName = logement.host.name.split(' ')
  const firstname = hostName[0]
  const lastName = hostName[1]

  return (
    <main className="logement">
      <Slider images={logement.pictures} />
      <div className="logement-header">
        <div className="logement-information-1">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((logement) => (
              <Tag key={logement} tagName={logement} />
            ))}
          </div>
        </div>

        <div className="logement-information-2">
          <div className="logement-ratings">
            <Rating rating={logement.rating} />
          </div>
          <div className="logement-host">
            <p className="logement-host-name">
              <span className="logement-host-firstname">{firstname}</span>
              <br />
              <span className="logement-host-lastname">{lastName}</span>
            </p>
            <img
              className="logement-host-picture"
              src={logement.host.picture}
              alt={'Photo de profil de ' + logement.host.name}
            />
          </div>
        </div>
      </div>

      <div className="logement-description">
        <div className="accordions">
          <Accordion title="Description">
            <p>{logement.description}</p>
          </Accordion>

          <Accordion title="listes">
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment} className="accordion-item">
                  {equipment}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>
      </div>
    </main>
  )
}

export default Logement
