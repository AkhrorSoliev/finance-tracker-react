// styles
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <button className="btn">Log out</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
