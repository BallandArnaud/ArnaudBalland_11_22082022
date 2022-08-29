import './index.css'

function Banner(props) {
  const { img, name, bannerTitle } = props

  return (
    <div className="banner">
      <img className="banner-image" src={img} alt={name} />
      <div className="banner-overlay"></div>
      {bannerTitle ? <h1 className="banner-title">{bannerTitle}</h1> : null}
    </div>
  )
}

export default Banner
