import './index.css'

function Rating(props) {
  const rating = Number(props.rating)
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div>
      {stars.map((s) =>
        s > rating ? (
          <span key={s} className="fa fa-star logement-rating"></span>
        ) : (
          <span
            key={s}
            className="fa fa-star logement-rating rating-checked"
          ></span>
        )
      )}
    </div>
  )
}

export default Rating
