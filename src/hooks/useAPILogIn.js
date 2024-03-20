// useAPILogIn.js
import { useState } from 'react'

export default function useAPILogIn() {
  const [status, setStatus] = useState(null)

  const logIn = async (email, password) => {
    try {
      const apiUrl = 'https://api.banque.xiaosong.fr'

      const response = await fetch(`${apiUrl}/api/v1/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const data = await response.json()

      setStatus(response.status)

      return data
    } catch (error) {
      console.error('Error:', error)
      return { success: false, error: error.message }
    }
  }

  return { logIn, status }
}
