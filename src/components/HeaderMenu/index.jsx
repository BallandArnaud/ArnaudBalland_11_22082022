import { NavLink } from 'react-router-dom'
import './index.css'

function HeaderMenu() {
  let activeStyle = {
    textDecoration: 'underline',
  }
  return (
    <nav className="header-nav">
      <ul>
        <li className="header-link">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
