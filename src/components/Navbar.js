// styles
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button onClick={logout} className="btn">
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Navbar
