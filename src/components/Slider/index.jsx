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
      <button className="slider-prev" onClick={() => prevSlide()}>
        &#10094;
      </button>
      <button className="slider-next" onClick={() => nextSlide()}>
        &#10095;
      </button>
    </div>
  )
}

export default Slider
