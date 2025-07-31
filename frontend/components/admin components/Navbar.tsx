import { assets } from '@/public/assests/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-1 px-12 py-4 max-h-[80px] border-b-2 border-black'>
        <h1 className='text-xl font-semibold'>Admin Panel</h1>
        <Image src={assets.profile_icon} alt='' width={44} />
    </div>
  )
}

export default Navbar