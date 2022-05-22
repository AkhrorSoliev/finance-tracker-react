// syles
import styles from './Signup.module.css'

function Signup() {
  return (
    <form className={styles['signup-form']}>
      <h2>Sing up</h2>
      <label>
        <span>email:</span>
        <input type="text" />
      </label>
      <label>
        <span>password:</span>
        <input type="password" />
      </label>
      <button className="btn">Sign up</button>
    </form>
  )
}

export default Signup
