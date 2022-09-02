import { useState } from 'react'
import './index.css'

function Accordion(props) {
  const { title, children } = props

  const [isOpen, setIsOpen] = useState(false)

  function handleAccordion(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <button
        className="accordion-btn"
        data-opened={isOpen}
        onClick={(e) => handleAccordion(e)}
      >
        <span className="accordion-title">{title}</span>
      </button>

      {isOpen && <div className="accordion-panel">{children}</div>}
    </div>
  )
}

export default Accordion
