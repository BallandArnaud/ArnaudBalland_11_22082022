import './index.css'

function Rating(props) {
  const rating = Number(props.rating)
  const stars = Array.from({ length: 5 }, (_, i) => i + 1) //Pour générer une séquence de nombres

  return (
    <>
      {stars.map((s) =>
        s > rating ? (
          <span key={s} className="fa fa-star rating"></span>
        ) : (
          <span key={s} className="fa fa-star rating rating-checked"></span>
        )
      )}
    </>
  )
}

export default Rating
