// styles
import styles from './Login.module.css'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
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

      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {!isPending && <button className="btn">Login</button>}
    </form>
  )
}

export default Login
