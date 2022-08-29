import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

import BannerImage from '../../assets/home-banner.jpg'
import './index.css'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/logements.json')
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch((err) => console.log('Erreur : ', err))
  }, [])

  console.log('Logements', logements)

  const bannerTitle = 'Chez vous, partout et ailleurs'
  return (
    <main className="home">
      <Banner img={BannerImage} name="Home banner" bannerTitle={bannerTitle} />
      <Gallery logements={logements} />
    </main>
  )
}

export default Home
