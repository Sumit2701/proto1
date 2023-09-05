import React from 'react'
import hero from '../../Assets/hero.png'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='flex md:flex-row flex-col'>
        <div className='ss:leading-[100.8px] leading-[75px] sm:text-[68px] text-[52px] sm:px-16 px-6 font-bold  sm:my-10 my-2 items-center'>
        Simplify  <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-600">
        Photo 
</span> <br/> Selection: Share Albums with client
        </div>
        <div>
            <Image src={hero } className=' w-2/3 sm:my-10 my-2 mx-auto'/>
        </div>
    </div>
  )
}
