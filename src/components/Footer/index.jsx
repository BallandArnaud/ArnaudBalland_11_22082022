import logo from '../../assets/logo.svg'
import './index.css'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="logo footer" />
      <p className="footer-credit">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
