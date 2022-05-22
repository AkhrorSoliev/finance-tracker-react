// syles
import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { singup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    singup(email, password, displayName)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sing up</h2>
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
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {!isPending && <button className="btn">Sign up</button>}
      {error && <div>{error}</div>}
    </form>
  )
}

export default Signup
