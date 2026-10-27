'use client'
import { useRouter } from 'next/navigation'

const ButtonLogout = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('favorites')
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={handleLogout}>
      Logout
    </button>
  )
}

export default ButtonLogout