'use client';
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { PublicService , dto_Login} from '@/services/generated/requests'
 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
    const response = await PublicService.postApiV1PublicsUserLogin(
        {username:username, password:password} as dto_Login)
    console.log(response)
    // const response = await fetch('/api//auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password }),
    // })
 
    if (response.message === 'ok') {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}