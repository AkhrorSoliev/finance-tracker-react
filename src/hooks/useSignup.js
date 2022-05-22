import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const singup = async (email, password, displayName) => {
    console.log(email, password, displayName)
    setIsPending(true)
    setError(null)
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      )

      if (!res.user) {
        throw new Error('Could not complate signup')
      }

      await res.user.updateProfile({ displayName })

      // dispatch login aciton
      dispatch({ type: 'LOGIN', payload: res.user })
      setIsPending(false)
      setError(null)
    } catch (err) {
      console.log(err.message)
      setIsPending(false)
      setError(err.message)
    }
  }

  return { singup, isPending, error }
}
