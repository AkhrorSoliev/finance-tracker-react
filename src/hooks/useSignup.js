import { useState } from 'react'
import { projectAuth } from '../firebase/config'

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const singup = async (email, password, displayName) => {
    console.log(email, password, displayName)
    setIsPending(true)
    setError(null)
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      )
      console.log(res.user)

      if (!res.user) {
        throw new Error('Could not complate signup')
      }

      await res.user.updateProfile({ displayName })

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
