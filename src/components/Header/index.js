import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="header-cart">
    <li>
      <Link to="/" className="item">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="item">
        About
      </Link>
    </li>
  </ul>
)

export default Header
