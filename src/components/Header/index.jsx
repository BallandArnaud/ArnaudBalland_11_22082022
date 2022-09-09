import { Link } from 'react-router-dom'
import HeaderMenu from '../HeaderMenu'
import logo from '../../assets/logo.svg'
import './index.css'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo Kasa" />
      </Link>
      <HeaderMenu />
    </header>
  )
}

export default Header
