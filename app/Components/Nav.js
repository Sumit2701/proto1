'use client'
import Navbar from './Navabar';
import { getServerSession } from 'next-auth/next';

export default  function Nav() {
  const session =  getServerSession();
  return <Navbar user={session?.user} />;
}