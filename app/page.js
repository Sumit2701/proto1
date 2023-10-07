import Image from 'next/image'
import HomePage from './Components/HomePage'
import { getServerSession } from 'next-auth/next';

export default function Home() {
  return (
 <div>

  <HomePage/>
 </div>
  )
}
