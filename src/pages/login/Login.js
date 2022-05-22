// styles
import styles from './Login.module.css'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      email,
      password,
      displayName,
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
          required
        />
      </label>
      <label>
        <span>displayName:</span>
        <input
          type="text"
          onChange={(e) => {
            setDisplayName(e.target.value)
          }}
          value={displayName}
          required
        />
      </label>
      <button className="btn">Log in</button>
    </form>
  )
}

export default Login
