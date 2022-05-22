import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // dispatch logout action
      dispatch({ type: 'LOGIN', payload: res.user })

      setError(null)
      setIsPending(false)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { login, error, isPending }
}
