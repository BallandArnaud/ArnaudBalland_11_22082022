import { useState } from 'react'
import './index.css'

function Slider(props) {
  const { images } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slider">
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={'Slider image ' + currentIndex}
      />
      {images.length > 1 ? (
        <>
          <button className="slider-prev" onClick={() => prevSlide()}>
            <svg
              className="slider-arrow-left"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="slider-next" onClick={() => nextSlide()}>
            <svg
              className="slider-arrow-right"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </button>
        </>
      ) : null}
    </div>
  )
}

export default Slider
