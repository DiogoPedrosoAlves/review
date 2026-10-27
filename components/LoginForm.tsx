 'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const request = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    const data = await request.json()

    if (!data.token) {
      alert(data.message)
      return
    }

    localStorage.setItem('token', data.token)

    router.push('/products')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        className='bg-gray-200'
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        className='bg-gray-200'
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button className='bg-blue-500 text-white px-4 py-2 rounded' type="submit">Login</button>
    </form>
  )
}