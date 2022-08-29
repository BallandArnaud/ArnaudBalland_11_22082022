import logo from '../../assets/logo.svg'
import HeaderMenu from '../HeaderMenu'
import './index.css'

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo Kasa" />
      <HeaderMenu />
    </header>
  )
}

export default Header
